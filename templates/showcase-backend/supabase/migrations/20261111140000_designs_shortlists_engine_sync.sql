-- Lovable Cloud is the single source of truth for design data, shortlists, sites and memory.
-- The engine (Claude's scripts) writes through engine_sync() and reads through engine_export(), both gated by
-- an engine token sent as header x-engine-token. Idempotent.

create table if not exists public.designs (
  id text primary key,
  name text not null,
  status text not null default 'ok',
  issues jsonb not null default '[]'::jsonb,
  source jsonb not null default '{}'::jsonb,
  entry text,
  files jsonb not null default '[]'::jsonb,
  deps jsonb not null default '[]'::jsonb,
  summary jsonb not null default '{}'::jsonb,
  guess jsonb not null default '{}'::jsonb,
  claude_tags jsonb,
  rendered jsonb,
  added_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  removed boolean not null default false
);

create table if not exists public.shortlists (
  slug text primary key,
  company text,
  brief jsonb not null default '{}'::jsonb,
  items jsonb not null default '[]'::jsonb,
  picks int not null default 3,
  picked jsonb not null default '[]'::jsonb,
  picked_by uuid references auth.users (id) on delete set null,
  picked_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.sites (
  slug text primary key,
  company text,
  picks jsonb not null default '[]'::jsonb,
  sections jsonb not null default '[]'::jsonb,
  theme jsonb not null default '{}'::jsonb,
  lovable_repo text,
  last_push timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Memory: engine events (shown/pick/used) live here too; ext_id makes engine syncs idempotent.
alter table public.memory_events drop constraint if exists memory_events_type_check;
alter table public.memory_events add constraint memory_events_type_check check (type in ('note', 'pref', 'shown', 'pick', 'used'));
alter table public.memory_events add column if not exists ext_id text;
create unique index if not exists memory_events_ext_id_key on public.memory_events (ext_id) where ext_id is not null;

-- Engine tokens: owner tokens (from the dashboard) never expire; session tokens expire.
alter table public.engine_tokens add column if not exists kind text not null default 'owner';
alter table public.engine_tokens add column if not exists expires_at timestamptz;

create or replace function public.engine_token_ok() returns boolean
language plpgsql stable security definer set search_path = public, extensions as $$
declare hdr json; tok text;
begin
  hdr := nullif(current_setting('request.headers', true), '')::json;
  tok := hdr ->> 'x-engine-token';
  return tok is not null and exists (
    select 1 from public.engine_tokens
    where token_hash = encode(extensions.digest(tok, 'sha256'), 'hex') and (expires_at is null or expires_at > now()));
end $$;

create or replace function public.rotate_engine_token() returns text
language plpgsql volatile security definer set search_path = public, extensions as $$
declare tok text;
begin
  if not public.has_min_role(auth.uid(), 'owner') then raise exception 'Only the owner can create the engine token'; end if;
  tok := 'eng_' || encode(extensions.gen_random_bytes(24), 'hex');
  delete from public.engine_tokens where kind = 'owner' or (expires_at is not null and expires_at < now());
  insert into public.engine_tokens (token_hash, created_by, kind) values (encode(extensions.digest(tok, 'sha256'), 'hex'), auth.uid(), 'owner');
  insert into public.activity_log (actor, action, entity) values (auth.uid(), 'rotate', 'engine_token');
  return tok;
end $$;

-- Read everything the engine needs (team edits, memory, picks).
create or replace function public.engine_export() returns json
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.engine_token_ok() then raise exception 'invalid engine token' using errcode = '28000'; end if;
  return json_build_object(
    'generated_at', now(),
    'overrides', coalesce((select json_agg(o order by o.design_id) from (select design_id, name, tags, hidden, pinned, updated_at from public.design_overrides) o), '[]'::json),
    'memory', coalesce((select json_agg(m order by m.created_at) from (select id, ext_id, type, design_id, payload, created_at from public.memory_events) m), '[]'::json),
    'shortlists', coalesce((select json_agg(s order by s.slug) from (select slug, picks, picked, picked_at from public.shortlists) s), '[]'::json),
    'designs', coalesce((select json_agg(d.id order by d.id) from public.designs d where not d.removed), '[]'::json));
end $$;

-- Write engine data: designs, shortlists, sites, memory events. Returns counts.
create or replace function public.engine_sync(payload json) returns json
language plpgsql volatile security definer set search_path = public as $$
declare d json; n_designs int := 0; n_short int := 0; n_sites int := 0; n_events int := 0;
begin
  if not public.engine_token_ok() then raise exception 'invalid engine token' using errcode = '28000'; end if;

  for d in select * from json_array_elements(coalesce(payload -> 'designs', '[]'::json)) loop
    insert into public.designs (id, name, status, issues, source, entry, files, deps, summary, guess, claude_tags, rendered, added_at, updated_at, removed)
    values (d ->> 'id', coalesce(d ->> 'name', d ->> 'id'), coalesce(d ->> 'status', 'ok'), coalesce((d -> 'issues')::jsonb, '[]'), coalesce((d -> 'source')::jsonb, '{}'),
            d ->> 'entry', coalesce((d -> 'files')::jsonb, '[]'), coalesce((d -> 'deps')::jsonb, '[]'), coalesce((d -> 'summary')::jsonb, '{}'),
            coalesce((d -> 'guess')::jsonb, '{}'), (d -> 'claude_tags')::jsonb, (d -> 'rendered')::jsonb,
            coalesce((d ->> 'added_at')::timestamptz, now()), now(), false)
    on conflict (id) do update set name = excluded.name, status = excluded.status, issues = excluded.issues, source = excluded.source,
      entry = excluded.entry, files = excluded.files, deps = excluded.deps, summary = excluded.summary, guess = excluded.guess,
      claude_tags = excluded.claude_tags, rendered = excluded.rendered, updated_at = now(), removed = false;
    n_designs := n_designs + 1;
  end loop;

  for d in select * from json_array_elements(coalesce(payload -> 'shortlists', '[]'::json)) loop
    insert into public.shortlists (slug, company, brief, items, picks, created_at, updated_at)
    values (d ->> 'slug', d ->> 'company', coalesce((d -> 'brief')::jsonb, '{}'), coalesce((d -> 'items')::jsonb, '[]'),
            coalesce((d ->> 'picks')::int, 3), coalesce((d ->> 'created_at')::timestamptz, now()), now())
    on conflict (slug) do update set company = excluded.company, brief = excluded.brief, items = excluded.items, picks = excluded.picks, updated_at = now(),
      -- a re-ranked list keeps only picks that are still in it
      picked = (select coalesce(jsonb_agg(p), '[]'::jsonb) from jsonb_array_elements_text(public.shortlists.picked) p
                where p in (select i ->> 'id' from jsonb_array_elements(excluded.items) i));
    n_short := n_short + 1;
  end loop;

  for d in select * from json_array_elements(coalesce(payload -> 'sites', '[]'::json)) loop
    insert into public.sites (slug, company, picks, sections, theme, lovable_repo, last_push, created_at, updated_at)
    values (d ->> 'slug', d ->> 'company', coalesce((d -> 'picks')::jsonb, '[]'), coalesce((d -> 'sections')::jsonb, '[]'), coalesce((d -> 'theme')::jsonb, '{}'),
            d ->> 'lovable_repo', (d ->> 'last_push')::timestamptz, coalesce((d ->> 'created_at')::timestamptz, now()), now())
    on conflict (slug) do update set company = excluded.company, picks = excluded.picks, sections = excluded.sections, theme = excluded.theme,
      lovable_repo = coalesce(excluded.lovable_repo, public.sites.lovable_repo), last_push = coalesce(excluded.last_push, public.sites.last_push), updated_at = now();
    n_sites := n_sites + 1;
  end loop;

  for d in select * from json_array_elements(coalesce(payload -> 'events', '[]'::json)) loop
    insert into public.memory_events (ext_id, type, design_id, payload, created_at)
    values (d ->> 'ext_id', d ->> 'type', d ->> 'design_id', coalesce((d -> 'payload')::jsonb, '{}'), coalesce((d ->> 'created_at')::timestamptz, now()))
    on conflict (ext_id) where ext_id is not null do nothing;
    if found then n_events := n_events + 1; end if;
  end loop;

  return json_build_object('designs', n_designs, 'shortlists', n_short, 'sites', n_sites, 'events', n_events);
end $$;

revoke all on function public.engine_sync(json) from public;
grant execute on function public.engine_sync(json) to anon, authenticated;
revoke all on function public.engine_token_ok() from public;
grant execute on function public.engine_token_ok() to anon, authenticated;

-- RLS
alter table public.designs enable row level security;
alter table public.shortlists enable row level security;
alter table public.sites enable row level security;
drop policy if exists "designs read" on public.designs;
drop policy if exists "shortlists read" on public.shortlists;
drop policy if exists "shortlists pick" on public.shortlists;
drop policy if exists "sites read" on public.sites;
create policy "designs read" on public.designs for select to authenticated using (public.has_min_role(auth.uid(), 'viewer'));
create policy "shortlists read" on public.shortlists for select to authenticated using (public.has_min_role(auth.uid(), 'viewer'));
create policy "shortlists pick" on public.shortlists for update to authenticated
  using (public.has_min_role(auth.uid(), 'editor')) with check (public.has_min_role(auth.uid(), 'editor'));
create policy "sites read" on public.sites for select to authenticated using (public.has_min_role(auth.uid(), 'viewer'));

-- Editors may only change the picks on a shortlist (Claude owns the ranking).
create or replace function public.guard_shortlist_update() returns trigger
language plpgsql as $$
begin
  if auth.uid() is not null then
    new.slug := old.slug; new.company := old.company; new.brief := old.brief; new.items := old.items; new.picks := old.picks;
    new.created_at := old.created_at;
    if jsonb_array_length(new.picked) > old.picks then raise exception 'Pick at most % designs', old.picks; end if;
    new.picked_by := auth.uid(); new.picked_at := now();
  end if;
  new.updated_at := now();
  return new;
end $$;
drop trigger if exists shortlists_guard on public.shortlists;
create trigger shortlists_guard before update on public.shortlists for each row execute function public.guard_shortlist_update();

do $$ declare t text; begin
  foreach t in array array['shortlists', 'sites', 'designs'] loop
    execute format('drop trigger if exists %I_activity on public.%I', t, t);
  end loop;
  execute 'create trigger shortlists_activity after update of picked on public.shortlists for each row execute function public.log_activity()';
  foreach t in array array['designs', 'shortlists', 'sites'] loop
    if not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = t) then
      execute format('alter publication supabase_realtime add table public.%I', t);
    end if;
  end loop;
end $$;

-- Activity entries also name shortlists/sites by slug.
create or replace function public.log_activity() returns trigger
language plpgsql security definer set search_path = public as $$
declare rec jsonb; eid text;
begin
  rec := to_jsonb(coalesce(new, old));
  eid := coalesce(rec ->> 'design_id', rec ->> 'slug', rec ->> 'user_id', rec ->> 'email', rec ->> 'id');
  insert into public.activity_log (actor, action, entity, entity_id, details)
  values (auth.uid(), lower(tg_op), tg_table_name, eid,
          jsonb_strip_nulls(jsonb_build_object('role', rec ->> 'role', 'type', rec ->> 'type', 'hidden', rec -> 'hidden', 'pinned', rec -> 'pinned', 'picked', rec -> 'picked')));
  return coalesce(new, old);
end $$;

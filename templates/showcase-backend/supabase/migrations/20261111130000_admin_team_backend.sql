-- Admin dashboard backend: team auth & roles, design overrides, memory, comments, activity, engine export.
-- Idempotent: safe to run more than once. Applied to the showcase's Lovable Cloud project.

-- ---------- roles ----------
do $$ begin
  create type public.app_role as enum ('owner', 'admin', 'editor', 'viewer');
exception when duplicate_object then null; end $$;

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text,
  full_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  last_seen_at timestamptz
);

create table if not exists public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users (id) on delete cascade,
  role public.app_role not null,
  created_at timestamptz not null default now()
);

create table if not exists public.invitations (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  role public.app_role not null default 'editor',
  invited_by uuid references auth.users (id) on delete set null default auth.uid(),
  created_at timestamptz not null default now(),
  accepted_at timestamptz,
  accepted_by uuid references auth.users (id) on delete set null
);
create unique index if not exists invitations_email_key on public.invitations (lower(email));

create or replace function public.role_rank(r public.app_role) returns int
language sql immutable as $$
  select case r when 'owner' then 4 when 'admin' then 3 when 'editor' then 2 when 'viewer' then 1 else 0 end
$$;

create or replace function public.has_min_role(_uid uuid, _min public.app_role) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.user_roles where user_id = _uid and public.role_rank(role) >= public.role_rank(_min))
$$;

create or replace function public.my_role() returns public.app_role
language sql stable security definer set search_path = public as $$
  select role from public.user_roles where user_id = auth.uid()
$$;

-- ---------- library data ----------
create table if not exists public.design_overrides (
  design_id text primary key,
  name text,
  tags jsonb not null default '{}'::jsonb,
  hidden boolean not null default false,
  pinned boolean not null default false,
  updated_by uuid references auth.users (id) on delete set null default auth.uid(),
  updated_at timestamptz not null default now()
);

create table if not exists public.memory_events (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('note', 'pref')),
  design_id text,
  payload jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users (id) on delete set null default auth.uid(),
  created_at timestamptz not null default now()
);
create index if not exists memory_events_design_idx on public.memory_events (design_id);

create table if not exists public.design_comments (
  id uuid primary key default gen_random_uuid(),
  design_id text not null,
  body text not null check (char_length(body) between 1 and 2000),
  author uuid references auth.users (id) on delete set null default auth.uid(),
  resolved boolean not null default false,
  created_at timestamptz not null default now()
);
create index if not exists design_comments_design_idx on public.design_comments (design_id);

create table if not exists public.activity_log (
  id bigint generated always as identity primary key,
  actor uuid,
  action text not null,
  entity text not null,
  entity_id text,
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create index if not exists activity_log_created_idx on public.activity_log (created_at desc);

-- Engine access token (only its hash is stored; nobody can read this table).
create table if not exists public.engine_tokens (
  id uuid primary key default gen_random_uuid(),
  token_hash text not null,
  created_by uuid,
  created_at timestamptz not null default now()
);

-- ---------- triggers ----------
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
declare inv record;
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (new.id, new.email,
          coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name'),
          new.raw_user_meta_data ->> 'avatar_url')
  on conflict (id) do nothing;
  if not exists (select 1 from public.user_roles where role = 'owner') then
    insert into public.user_roles (user_id, role) values (new.id, 'owner') on conflict (user_id) do nothing;
  else
    select * into inv from public.invitations where lower(email) = lower(new.email) and accepted_at is null limit 1;
    if found then
      insert into public.user_roles (user_id, role) values (new.id, inv.role) on conflict (user_id) do nothing;
      update public.invitations set accepted_at = now(), accepted_by = new.id where id = inv.id;
    end if;
  end if;
  return new;
end $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();

-- Inviting someone who already signed up (waiting for access) grants the role straight away.
create or replace function public.apply_invitation() returns trigger
language plpgsql security definer set search_path = public as $$
declare uid uuid;
begin
  select id into uid from public.profiles where lower(email) = lower(new.email)
    and not exists (select 1 from public.user_roles r where r.user_id = profiles.id) limit 1;
  if uid is not null then
    insert into public.user_roles (user_id, role) values (uid, new.role) on conflict (user_id) do nothing;
    new.accepted_at := now(); new.accepted_by := uid;
  end if;
  return new;
end $$;
drop trigger if exists invitations_apply on public.invitations;
create trigger invitations_apply before insert on public.invitations for each row execute function public.apply_invitation();

-- Never leave the workspace without an owner.
create or replace function public.protect_last_owner() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if old.role = 'owner' and (tg_op = 'DELETE' or new.role <> 'owner')
     and (select count(*) from public.user_roles where role = 'owner') <= 1 then
    raise exception 'The workspace needs at least one owner';
  end if;
  return coalesce(new, old);
end $$;
drop trigger if exists user_roles_last_owner on public.user_roles;
create trigger user_roles_last_owner before update or delete on public.user_roles for each row execute function public.protect_last_owner();

create or replace function public.touch_override() returns trigger
language plpgsql as $$
begin new.updated_at := now(); new.updated_by := coalesce(auth.uid(), new.updated_by); return new; end $$;
drop trigger if exists design_overrides_touch on public.design_overrides;
create trigger design_overrides_touch before insert or update on public.design_overrides for each row execute function public.touch_override();

-- Activity log for everything the team changes.
create or replace function public.log_activity() returns trigger
language plpgsql security definer set search_path = public as $$
declare rec jsonb; eid text;
begin
  rec := to_jsonb(coalesce(new, old));
  eid := coalesce(rec ->> 'design_id', rec ->> 'user_id', rec ->> 'email', rec ->> 'id');
  insert into public.activity_log (actor, action, entity, entity_id, details)
  values (auth.uid(), lower(tg_op), tg_table_name, eid,
          jsonb_strip_nulls(jsonb_build_object('role', rec ->> 'role', 'type', rec ->> 'type', 'hidden', rec -> 'hidden', 'pinned', rec -> 'pinned')));
  return coalesce(new, old);
end $$;
do $$ declare t text; begin
  foreach t in array array['design_overrides', 'memory_events', 'design_comments', 'user_roles', 'invitations'] loop
    execute format('drop trigger if exists %I_activity on public.%I', t, t);
    execute format('create trigger %I_activity after insert or update or delete on public.%I for each row execute function public.log_activity()', t, t);
  end loop;
end $$;

-- ---------- row level security ----------
alter table public.profiles enable row level security;
alter table public.user_roles enable row level security;
alter table public.invitations enable row level security;
alter table public.design_overrides enable row level security;
alter table public.memory_events enable row level security;
alter table public.design_comments enable row level security;
alter table public.activity_log enable row level security;
alter table public.engine_tokens enable row level security;

do $$ declare r record; begin
  for r in select policyname, tablename from pg_policies where schemaname = 'public'
    and tablename in ('profiles','user_roles','invitations','design_overrides','memory_events','design_comments','activity_log','engine_tokens') loop
    execute format('drop policy %I on public.%I', r.policyname, r.tablename);
  end loop;
end $$;

create policy "profiles read" on public.profiles for select to authenticated
  using (id = auth.uid() or public.has_min_role(auth.uid(), 'viewer'));
create policy "profiles update own" on public.profiles for update to authenticated
  using (id = auth.uid()) with check (id = auth.uid());

create policy "roles read" on public.user_roles for select to authenticated
  using (user_id = auth.uid() or public.has_min_role(auth.uid(), 'viewer'));
create policy "roles insert" on public.user_roles for insert to authenticated
  with check (public.has_min_role(auth.uid(), 'admin') and (role <> 'owner' or public.has_min_role(auth.uid(), 'owner')));
create policy "roles update" on public.user_roles for update to authenticated
  using (public.has_min_role(auth.uid(), 'admin') and (role <> 'owner' or public.has_min_role(auth.uid(), 'owner')))
  with check (public.has_min_role(auth.uid(), 'admin') and (role <> 'owner' or public.has_min_role(auth.uid(), 'owner')));
create policy "roles delete" on public.user_roles for delete to authenticated
  using (public.has_min_role(auth.uid(), 'admin') and (role <> 'owner' or public.has_min_role(auth.uid(), 'owner')));

create policy "invitations admin" on public.invitations for all to authenticated
  using (public.has_min_role(auth.uid(), 'admin'))
  with check (public.has_min_role(auth.uid(), 'admin') and (role <> 'owner' or public.has_min_role(auth.uid(), 'owner')));

create policy "overrides read" on public.design_overrides for select to authenticated using (public.has_min_role(auth.uid(), 'viewer'));
create policy "overrides write" on public.design_overrides for all to authenticated
  using (public.has_min_role(auth.uid(), 'editor')) with check (public.has_min_role(auth.uid(), 'editor'));

create policy "memory read" on public.memory_events for select to authenticated using (public.has_min_role(auth.uid(), 'viewer'));
create policy "memory insert" on public.memory_events for insert to authenticated
  with check (public.has_min_role(auth.uid(), 'editor') and created_by = auth.uid());
create policy "memory delete" on public.memory_events for delete to authenticated using (public.has_min_role(auth.uid(), 'editor'));

create policy "comments read" on public.design_comments for select to authenticated using (public.has_min_role(auth.uid(), 'viewer'));
create policy "comments insert" on public.design_comments for insert to authenticated
  with check (public.has_min_role(auth.uid(), 'editor') and author = auth.uid());
create policy "comments update" on public.design_comments for update to authenticated
  using (author = auth.uid() or public.has_min_role(auth.uid(), 'admin'))
  with check (author = auth.uid() or public.has_min_role(auth.uid(), 'admin'));
create policy "comments delete" on public.design_comments for delete to authenticated
  using (author = auth.uid() or public.has_min_role(auth.uid(), 'admin'));

create policy "activity read" on public.activity_log for select to authenticated using (public.has_min_role(auth.uid(), 'viewer'));
-- engine_tokens: no policies on purpose (only security-definer functions touch it).

-- ---------- engine access ----------
create or replace function public.rotate_engine_token() returns text
language plpgsql volatile security definer set search_path = public, extensions as $$
declare tok text;
begin
  if not public.has_min_role(auth.uid(), 'owner') then raise exception 'Only the owner can create the engine token'; end if;
  tok := 'eng_' || encode(extensions.gen_random_bytes(24), 'hex');
  delete from public.engine_tokens where true;
  insert into public.engine_tokens (token_hash, created_by) values (encode(extensions.digest(tok, 'sha256'), 'hex'), auth.uid());
  insert into public.activity_log (actor, action, entity) values (auth.uid(), 'rotate', 'engine_token');
  return tok;
end $$;

create or replace function public.engine_token_info() returns table (created_at timestamptz, created_by uuid)
language sql stable security definer set search_path = public as $$
  select t.created_at, t.created_by from public.engine_tokens t where public.has_min_role(auth.uid(), 'admin')
$$;

-- Read-only export for the website engine (Claude). Requires header x-engine-token.
create or replace function public.engine_export() returns json
language plpgsql stable security definer set search_path = public, extensions as $$
declare hdr json; tok text;
begin
  hdr := nullif(current_setting('request.headers', true), '')::json;
  tok := hdr ->> 'x-engine-token';
  if tok is null or not exists (select 1 from public.engine_tokens where token_hash = encode(extensions.digest(tok, 'sha256'), 'hex')) then
    raise exception 'invalid engine token' using errcode = '28000';
  end if;
  return json_build_object(
    'generated_at', now(),
    'overrides', coalesce((select json_agg(o order by o.design_id) from (select design_id, name, tags, hidden, pinned, updated_at from public.design_overrides) o), '[]'::json),
    'memory', coalesce((select json_agg(m order by m.created_at) from (select id, type, design_id, payload, created_at from public.memory_events) m), '[]'::json));
end $$;

revoke all on function public.engine_export() from public;
grant execute on function public.engine_export() to anon, authenticated;
revoke all on function public.rotate_engine_token() from public, anon;
grant execute on function public.rotate_engine_token() to authenticated;
grant execute on function public.my_role() to authenticated;
grant execute on function public.engine_token_info() to authenticated;

-- ---------- realtime ----------
do $$ declare t text; begin
  foreach t in array array['design_overrides', 'design_comments', 'activity_log', 'memory_events'] loop
    if not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = t) then
      execute format('alter publication supabase_realtime add table public.%I', t);
    end if;
  end loop;
end $$;

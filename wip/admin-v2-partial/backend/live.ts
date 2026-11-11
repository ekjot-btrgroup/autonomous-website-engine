// Live data from Lovable Cloud: design overrides, memory events, comments, activity, profiles, team.
// Small module-level stores + useSyncExternalStore, with realtime channels so teammates' edits appear live.
import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { allDesigns, applyOverride, type DesignMeta, type DesignOverride, type DesignTags } from "@/showcase/data";
import { db, type ActivityRow, type AppRole, type CommentRow, type InvitationRow, type MemoryEventRow, type OverrideRow, type ProfileRow, type UserRoleRow } from "./types";

// ---------- tiny store ----------
function createStore<T>(initial: T) {
  let state = initial;
  const subs = new Set<() => void>();
  return {
    get: () => state,
    set(next: T | ((s: T) => T)) {
      state = typeof next === "function" ? (next as (s: T) => T)(state) : next;
      subs.forEach((f) => f());
    },
    subscribe(f: () => void) {
      subs.add(f);
      return () => subs.delete(f);
    },
  };
}
const useStore = <T,>(s: ReturnType<typeof createStore<T>>) => useSyncExternalStore(s.subscribe, s.get, s.get);

// ---------- profiles (names for activity, comments, toasts) ----------
const profiles = createStore<Map<string, ProfileRow>>(new Map());
let profilesLoaded = false;
export async function loadProfiles(force = false) {
  if (profilesLoaded && !force) return;
  profilesLoaded = true;
  const { data } = await db.from("profiles").select("*").order("created_at", { ascending: true });
  profiles.set(new Map((data ?? []).map((p) => [p.id, p as ProfileRow])));
}
export function useProfiles(): Map<string, ProfileRow> {
  useEffect(() => void loadProfiles(), []);
  return useStore(profiles);
}
export const profileOf = (id?: string | null) => (id ? profiles.get().get(id) : undefined);

// ---------- design overrides ----------
type OvState = { loaded: boolean; rows: Map<string, OverrideRow>; error?: string };
const overrides = createStore<OvState>({ loaded: false, rows: new Map() });
let ovStarted = false;
type RemoteListener = (row: OverrideRow | null, id: string, by: string | null) => void;
const remoteListeners = new Set<RemoteListener>();
export const onRemoteOverride = (f: RemoteListener) => {
  remoteListeners.add(f);
  return () => remoteListeners.delete(f);
};
let myId: string | null = null;
export const setCurrentUser = (id: string | null) => (myId = id);

export function startOverrides() {
  if (ovStarted) return;
  ovStarted = true;
  db.from("design_overrides")
    .select("*")
    .then(({ data, error }) => {
      overrides.set({ loaded: true, rows: new Map((data ?? []).map((r) => [r.design_id, r as OverrideRow])), error: error?.message });
    });
  db.channel("admin-design-overrides")
    .on("postgres_changes", { event: "*", schema: "public", table: "design_overrides" }, (p) => {
      const row = (p.new && Object.keys(p.new).length ? p.new : null) as OverrideRow | null;
      const id = (row?.design_id ?? (p.old as Partial<OverrideRow>)?.design_id) as string;
      if (!id) return;
      overrides.set((s) => {
        const rows = new Map(s.rows);
        if (row) rows.set(id, row);
        else rows.delete(id);
        return { ...s, rows };
      });
      const by = row?.updated_by ?? null;
      if (by !== myId) remoteListeners.forEach((f) => f(row, id, by));
    })
    .subscribe();
}

export function rowToOverride(r: OverrideRow): DesignOverride {
  return { id: r.design_id, name: r.name ?? undefined, tags: r.tags ?? undefined, hidden: r.hidden, pinned: r.pinned, updated_at: r.updated_at, updated_by: r.updated_by ?? undefined };
}

function merge(d: DesignMeta, st: OvState): DesignMeta {
  // Until the backend answers, fall back to the bundled override files; afterwards the database is the truth.
  if (!st.loaded) return d;
  const base: DesignMeta = { ...d, tags: d.originalTags ?? null, hidden: false, pinned: false, edited: false, updated_at: undefined };
  const row = st.rows.get(d.id);
  return row ? { ...applyOverride(base, rowToOverride(row)), updatedBy: row.updated_by ?? undefined } : base;
}

export type AdminDesign = DesignMeta & { updatedBy?: string };
export function useDesigns(): AdminDesign[] {
  useEffect(startOverrides, []);
  const st = useStore(overrides);
  return useMemo(() => allDesigns.map((d) => merge(d, st)), [st]);
}
export function useDesign(id: string | undefined): AdminDesign | undefined {
  const list = useDesigns();
  return list.find((d) => d.id === id);
}
export const useOverridesState = () => useStore(overrides);

const TAG_KEYS: (keyof DesignTags)[] = [
  "category", "also", "layout", "style", "tone", "energy", "luxury", "density", "warmth", "modernity",
  "media", "image_need", "typography", "motion", "goals", "scheme", "quality", "note", "origin",
];
export function cleanTags(t: Partial<DesignTags> | null | undefined): Partial<DesignTags> {
  const out: Record<string, unknown> = {};
  for (const k of TAG_KEYS) {
    const v = t?.[k];
    if (v === undefined || v === null || v === "") continue;
    if (Array.isArray(v) && !v.length) continue;
    out[k] = v;
  }
  return out as Partial<DesignTags>;
}

/** Upsert an override row (admin values win over Claude's tags). */
export async function saveOverride(design: AdminDesign, patch: { name?: string; tags?: Partial<DesignTags>; hidden?: boolean; pinned?: boolean }) {
  const prev = overrides.get().rows.get(design.id);
  const tags = patch.tags ? cleanTags(patch.tags) : prev?.tags ?? (design.edited ? cleanTags(design.tags) : null);
  const row: OverrideRow = {
    design_id: design.id,
    name: (patch.name !== undefined ? patch.name : prev?.name)?.trim() || null,
    tags: tags && Object.keys(tags).length ? tags : null,
    hidden: patch.hidden ?? prev?.hidden ?? !!design.hidden,
    pinned: patch.pinned ?? prev?.pinned ?? !!design.pinned,
    updated_by: myId,
    updated_at: new Date().toISOString(),
  };
  const { error } = await db.from("design_overrides").upsert(row, { onConflict: "design_id" });
  if (error) throw error;
  overrides.set((s) => ({ ...s, rows: new Map(s.rows).set(design.id, row) }));
  return row;
}

/** Delete the override row: the design goes back to Claude's tags, visible and unpinned. */
export async function resetOverride(id: string) {
  const { error } = await db.from("design_overrides").delete().eq("design_id", id);
  if (error) throw error;
  overrides.set((s) => {
    const rows = new Map(s.rows);
    rows.delete(id);
    return { ...s, rows };
  });
}

// ---------- memory events (notes & preferences) ----------
type MemState = { loaded: boolean; rows: MemoryEventRow[] };
const memory = createStore<MemState>({ loaded: false, rows: [] });
let memStarted = false;
function startMemory() {
  if (memStarted) return;
  memStarted = true;
  db.from("memory_events")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1000)
    .then(({ data }) => memory.set({ loaded: true, rows: (data ?? []) as MemoryEventRow[] }));
  db.channel("admin-memory-events")
    .on("postgres_changes", { event: "*", schema: "public", table: "memory_events" }, (p) => {
      memory.set((s) => {
        if (p.eventType === "DELETE") return { ...s, rows: s.rows.filter((r) => r.id !== (p.old as MemoryEventRow).id) };
        const row = p.new as MemoryEventRow;
        return { ...s, rows: [row, ...s.rows.filter((r) => r.id !== row.id)] };
      });
    })
    .subscribe();
}
export function useMemoryEvents() {
  useEffect(startMemory, []);
  return useStore(memory);
}
/** "spas, boutique hotels" -> ["spas", "boutique hotels"] (the engine normalises words). */
export const phrases = (s: string) => s.split(/[,;\n]+/).map((x) => x.trim().toLowerCase()).filter(Boolean);

async function insertEvent(ev: Pick<MemoryEventRow, "type" | "design_id" | "payload">) {
  const { data, error } = await db.from("memory_events").insert({ ...ev, created_by: myId }).select("*").single();
  if (error) throw error;
  const row = data as MemoryEventRow;
  memory.set((s) => ({ ...s, rows: [row, ...s.rows.filter((r) => r.id !== row.id)] }));
  return row;
}
export const addNote = (design: string, good: string[], bad: string[], rating: number | undefined, text: string) =>
  insertEvent({ type: "note", design_id: design, payload: { good, bad, ...(rating ? { rating } : {}), text } });
export const addPref = (context: string[], prefer: string[], avoid: string[], text: string) =>
  insertEvent({ type: "pref", design_id: null, payload: { context, prefer, avoid, text } });
export async function forgetEvent(id: string) {
  const { error } = await db.from("memory_events").delete().eq("id", id);
  if (error) throw error;
  memory.set((s) => ({ ...s, rows: s.rows.filter((r) => r.id !== id) }));
}

// ---------- comments (per design) ----------
export function useComments(designId: string | undefined) {
  const [rows, setRows] = useState<CommentRow[]>([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!designId) return;
    let alive = true;
    setLoaded(false);
    db.from("design_comments")
      .select("*")
      .eq("design_id", designId)
      .order("created_at", { ascending: true })
      .then(({ data }) => {
        if (!alive) return;
        setRows((data ?? []) as CommentRow[]);
        setLoaded(true);
      });
    const ch = db
      .channel(`admin-comments-${designId}`)
      .on("postgres_changes", { event: "*", schema: "public", table: "design_comments", filter: `design_id=eq.${designId}` }, (p) => {
        setRows((list) => {
          if (p.eventType === "DELETE") return list.filter((c) => c.id !== (p.old as CommentRow).id);
          const row = p.new as CommentRow;
          return list.some((c) => c.id === row.id) ? list.map((c) => (c.id === row.id ? row : c)) : [...list, row];
        });
      })
      .subscribe();
    return () => {
      alive = false;
      void db.removeChannel(ch);
    };
  }, [designId]);
  return {
    rows,
    loaded,
    async add(body: string) {
      const { data, error } = await db.from("design_comments").insert({ design_id: designId!, body, author: myId }).select("*").single();
      if (error) throw error;
      setRows((l) => (l.some((c) => c.id === (data as CommentRow).id) ? l : [...l, data as CommentRow]));
    },
    async resolve(id: string, resolved: boolean) {
      const { error } = await db.from("design_comments").update({ resolved }).eq("id", id);
      if (error) throw error;
      setRows((l) => l.map((c) => (c.id === id ? { ...c, resolved } : c)));
    },
    async remove(id: string) {
      const { error } = await db.from("design_comments").delete().eq("id", id);
      if (error) throw error;
      setRows((l) => l.filter((c) => c.id !== id));
    },
  };
}

/** Open comment counts per design (for library badges). */
export function useOpenCommentCounts(): Map<string, number> {
  const [map, setMap] = useState<Map<string, number>>(new Map());
  useEffect(() => {
    db.from("design_comments")
      .select("design_id, resolved")
      .eq("resolved", false)
      .then(({ data }) => {
        const m = new Map<string, number>();
        for (const r of (data ?? []) as Pick<CommentRow, "design_id">[]) m.set(r.design_id, (m.get(r.design_id) ?? 0) + 1);
        setMap(m);
      });
  }, []);
  return map;
}

// ---------- activity log ----------
type ActState = { loaded: boolean; rows: ActivityRow[] };
const activity = createStore<ActState>({ loaded: false, rows: [] });
let actStarted = false;
function startActivity() {
  if (actStarted) return;
  actStarted = true;
  db.from("activity_log")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(60)
    .then(({ data }) => activity.set({ loaded: true, rows: (data ?? []) as ActivityRow[] }));
  db.channel("admin-activity")
    .on("postgres_changes", { event: "INSERT", schema: "public", table: "activity_log" }, (p) => {
      activity.set((s) => ({ ...s, rows: [p.new as ActivityRow, ...s.rows].slice(0, 100) }));
    })
    .subscribe();
}
export function useActivity() {
  useEffect(startActivity, []);
  return useStore(activity);
}

// ---------- team ----------
export type Member = { profile: ProfileRow; role: AppRole | null; roleRow?: UserRoleRow };
export function useTeam() {
  const [state, setState] = useState<{ loaded: boolean; members: Member[]; invitations: InvitationRow[] }>({ loaded: false, members: [], invitations: [] });
  const reload = useMemo(
    () => async () => {
      const [p, r, i] = await Promise.all([
        db.from("profiles").select("*").order("created_at", { ascending: true }),
        db.from("user_roles").select("*"),
        db.from("invitations").select("*").order("created_at", { ascending: false }),
      ]);
      const roles = new Map(((r.data ?? []) as UserRoleRow[]).map((x) => [x.user_id, x]));
      const members = ((p.data ?? []) as ProfileRow[]).map((profile) => ({ profile, role: roles.get(profile.id)?.role ?? null, roleRow: roles.get(profile.id) }));
      profiles.set(new Map(members.map((m) => [m.profile.id, m.profile])));
      setState({ loaded: true, members, invitations: (i.data ?? []) as InvitationRow[] });
    },
    [],
  );
  useEffect(() => void reload(), [reload]);
  const run = async (q: PromiseLike<{ error: { message: string } | null }>) => {
    const { error } = await q;
    if (error) throw error;
    await reload();
  };
  return {
    ...state,
    reload,
    invite: (email: string, role: AppRole) => run(db.from("invitations").insert({ email: email.trim().toLowerCase(), role, invited_by: myId })),
    revoke: (id: string) => run(db.from("invitations").delete().eq("id", id)),
    setRole: (userId: string, role: AppRole) => run(db.from("user_roles").update({ role }).eq("user_id", userId)),
    approve: (userId: string, role: AppRole) => run(db.from("user_roles").insert({ user_id: userId, role })),
    remove: (userId: string) => run(db.from("user_roles").delete().eq("user_id", userId)),
  };
}

// ---------- engine access (owner) ----------
export async function rotateEngineToken(): Promise<string> {
  const { data, error } = await db.rpc("rotate_engine_token");
  if (error) throw error;
  return data as string;
}
export async function engineTokenInfo(): Promise<{ created_at: string; created_by: string | null } | null> {
  const { data } = await db.rpc("engine_token_info");
  const list = (data ?? []) as { created_at: string; created_by: string | null }[];
  return list[0] ?? null;
}

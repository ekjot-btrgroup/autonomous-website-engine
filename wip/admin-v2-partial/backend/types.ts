// Typed view of the admin tables in Lovable Cloud (Supabase). The client itself is Lovable's
// (src/integrations/supabase/client.ts); we only cast it to this schema.
import type { SupabaseClient } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import type { DesignTags } from "@/showcase/data";

export type AppRole = "owner" | "admin" | "editor" | "viewer";

type Table<Row, Insert = Partial<Row>, Update = Partial<Row>> = { Row: Row; Insert: Insert; Update: Update; Relationships: [] };

export type ProfileRow = { id: string; email: string | null; full_name: string | null; avatar_url: string | null; created_at: string; last_seen_at: string | null };
export type UserRoleRow = { id: string; user_id: string; role: AppRole; created_at: string };
export type InvitationRow = { id: string; email: string; role: AppRole; invited_by: string | null; created_at: string; accepted_at: string | null; accepted_by: string | null };
export type OverrideRow = {
  design_id: string;
  name: string | null;
  tags: Partial<DesignTags> | null;
  hidden: boolean;
  pinned: boolean;
  updated_by: string | null;
  updated_at: string;
};
export type NotePayload = { good?: string[]; bad?: string[]; rating?: number; text?: string };
export type PrefPayload = { context?: string[]; prefer?: string[]; avoid?: string[]; text?: string };
export type EngineEventPayload = { slug?: string; ids?: string[]; picked?: string[]; shown?: string[]; context?: string[] };
export type MemoryEventRow = {
  id: string;
  type: "note" | "pref" | "shown" | "pick" | "used";
  design_id: string | null;
  payload: NotePayload & PrefPayload & EngineEventPayload;
  created_by: string | null;
  created_at: string;
};
export type CommentRow = { id: string; design_id: string; body: string; author: string | null; resolved: boolean; created_at: string };
export type DesignRow = {
  id: string;
  name: string;
  status: "ok" | "needs_conversion" | "needs_attention" | "build_failed";
  issues: string[] | null;
  source: { folder?: string; format?: string; hash?: string; original?: string } | null;
  entry: string | null;
  files: string[] | null;
  deps: string[] | null;
  summary: { headings?: string[]; ctas?: string[]; texts?: string[]; colors?: string[]; dark?: boolean | null; images?: number; motion?: boolean; lines?: number } | null;
  guess: { category: string; confidence: number } | null;
  claude_tags: DesignTags | null;
  rendered: { ok?: boolean; height?: number; at?: string } | null;
  added_at: string;
  updated_at: string | null;
  removed: boolean;
};
export type ShortlistItemRow = { id: string; rank: number; score: number; category: string; reasons?: string[]; why?: string; parts?: Record<string, number> };
export type ShortlistRow = {
  slug: string;
  company: string | null;
  brief: Record<string, unknown> | null;
  items: ShortlistItemRow[];
  picks: number;
  picked: string[];
  picked_by: string | null;
  picked_at: string | null;
  created_at: string;
};
export type SiteRow = {
  slug: string;
  company: string | null;
  picks: string[] | null;
  sections: { folder?: string; id: string; slot: string; picked?: boolean; reason?: string }[] | null;
  theme: { primary?: string; accent?: string; heading?: string; body?: string; motion?: string } | null;
  lovable_repo: string | null;
  last_push: string | null;
  created_at: string;
};
export type ActivityRow = { id: number; actor: string | null; action: string; entity: string; entity_id: string | null; details: Record<string, unknown> | null; created_at: string };

export type AdminDb = {
  public: {
    Tables: {
      profiles: Table<ProfileRow, Partial<ProfileRow> & { id: string }>;
      user_roles: Table<UserRoleRow, { user_id: string; role: AppRole; id?: string }>;
      invitations: Table<InvitationRow, { email: string; role: AppRole; invited_by?: string | null }>;
      design_overrides: Table<OverrideRow, Partial<OverrideRow> & { design_id: string }>;
      designs: Table<DesignRow>;
      shortlists: Table<ShortlistRow, Partial<ShortlistRow> & { slug: string }>;
      sites: Table<SiteRow>;
      memory_events: Table<MemoryEventRow, { type: MemoryEventRow["type"]; design_id?: string | null; payload: MemoryEventRow["payload"]; created_by?: string | null }>;
      design_comments: Table<CommentRow, { design_id: string; body: string; author?: string | null; resolved?: boolean }>;
      activity_log: Table<ActivityRow, never, never>;
    };
    Views: Record<never, never>;
    Functions: {
      my_role: { Args: Record<string, never>; Returns: AppRole | null };
      rotate_engine_token: { Args: Record<string, never>; Returns: string };
      engine_token_info: { Args: Record<string, never>; Returns: { created_at: string; created_by: string | null }[] };
    };
    Enums: { app_role: AppRole };
    CompositeTypes: Record<never, never>;
  };
};

export const db = supabase as unknown as SupabaseClient<AdminDb>;

export const ROLE_RANK: Record<AppRole, number> = { viewer: 1, editor: 2, admin: 3, owner: 4 };
export const atLeast = (role: AppRole | null | undefined, min: AppRole) => !!role && ROLE_RANK[role] >= ROLE_RANK[min];
export const ROLE_LABEL: Record<AppRole, string> = { owner: "Owner", admin: "Admin", editor: "Editor", viewer: "Viewer" };
export const ROLE_HELP: Record<AppRole, string> = {
  owner: "Everything, including engine access and ownership",
  admin: "Edit designs and manage the team",
  editor: "Edit designs, notes, preferences and comments",
  viewer: "Read-only access to everything",
};

/** Turn Supabase errors into short, human messages. */
export function humanError(e: unknown): string {
  const msg = (e as { message?: string })?.message ?? String(e);
  if (/row-level security|permission denied|42501/i.test(msg)) return "You don't have permission to do that.";
  if (/Invalid login credentials/i.test(msg)) return "Wrong email or password.";
  if (/Email not confirmed/i.test(msg)) return "Confirm your email first (check your inbox).";
  if (/User already registered/i.test(msg)) return "That email already has an account. Sign in instead.";
  if (/Failed to fetch|NetworkError/i.test(msg)) return "Can't reach the backend. Check your connection.";
  return msg.slice(0, 200);
}

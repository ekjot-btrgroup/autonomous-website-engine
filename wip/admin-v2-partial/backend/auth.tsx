// Auth for the admin: Lovable Cloud (Supabase) sessions + app roles (owner/admin/editor/viewer).
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { atLeast, db, type AppRole, type ProfileRow } from "./types";

export type AuthStatus = "loading" | "signed_out" | "ready";
type Ctx = {
  status: AuthStatus;
  session: Session | null;
  user: User | null;
  role: AppRole | null;
  profile: ProfileRow | null;
  can: { edit: boolean; manage: boolean; owner: boolean };
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string) => Promise<{ needsConfirm: boolean }>;
  magicLink: (email: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updatePassword: (password: string) => Promise<void>;
  updateProfile: (p: { full_name?: string; avatar_url?: string }) => Promise<void>;
  refresh: () => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthCtx = createContext<Ctx | null>(null);
const redirect = (path: string) => `${window.location.origin}${path}`;

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [status, setStatus] = useState<AuthStatus>("loading");
  const [role, setRole] = useState<AppRole | null>(null);
  const [profile, setProfile] = useState<ProfileRow | null>(null);
  const loadedFor = useRef<string | null>(null);

  const loadAccount = useCallback(async (user: User | null) => {
    if (!user) {
      loadedFor.current = null;
      setRole(null);
      setProfile(null);
      setStatus("signed_out");
      return;
    }
    const [r, p] = await Promise.all([db.rpc("my_role"), db.from("profiles").select("*").eq("id", user.id).maybeSingle()]);
    setRole((r.data as AppRole | null) ?? null);
    setProfile((p.data as ProfileRow | null) ?? null);
    loadedFor.current = user.id;
    setStatus("ready");
    void db.from("profiles").update({ last_seen_at: new Date().toISOString() }).eq("id", user.id);
  }, []);

  useEffect(() => {
    let alive = true;
    db.auth.getSession().then(({ data }) => {
      if (!alive) return;
      setSession(data.session);
      void loadAccount(data.session?.user ?? null);
    });
    const { data: sub } = db.auth.onAuthStateChange((_event, next) => {
      setSession(next);
      if ((next?.user?.id ?? null) !== loadedFor.current) {
        setStatus(next ? "loading" : "signed_out");
        void loadAccount(next?.user ?? null);
      }
    });
    return () => {
      alive = false;
      sub.subscription.unsubscribe();
    };
  }, [loadAccount]);

  const value = useMemo<Ctx>(
    () => ({
      status,
      session,
      user: session?.user ?? null,
      role,
      profile,
      can: { edit: atLeast(role, "editor"), manage: atLeast(role, "admin"), owner: role === "owner" },
      async signIn(email, password) {
        const { error } = await db.auth.signInWithPassword({ email, password });
        if (error) throw error;
      },
      async signUp(email, password, fullName) {
        const { data, error } = await db.auth.signUp({ email, password, options: { data: { full_name: fullName }, emailRedirectTo: redirect("/admin") } });
        if (error) throw error;
        return { needsConfirm: !data.session };
      },
      async magicLink(email) {
        const { error } = await db.auth.signInWithOtp({ email, options: { emailRedirectTo: redirect("/admin") } });
        if (error) throw error;
      },
      async resetPassword(email) {
        const { error } = await db.auth.resetPasswordForEmail(email, { redirectTo: redirect("/admin/reset") });
        if (error) throw error;
      },
      async updatePassword(password) {
        const { error } = await db.auth.updateUser({ password });
        if (error) throw error;
      },
      async updateProfile(p) {
        if (!session?.user) return;
        const { error } = await db.from("profiles").update(p).eq("id", session.user.id);
        if (error) throw error;
        setProfile((prev) => (prev ? { ...prev, ...p } : prev));
      },
      async refresh() {
        await loadAccount(session?.user ?? null);
      },
      async signOut() {
        await db.auth.signOut();
      },
    }),
    [status, session, role, profile, loadAccount],
  );
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

export function useAuth(): Ctx {
  const c = useContext(AuthCtx);
  if (!c) throw new Error("useAuth outside AuthProvider");
  return c;
}

export function initials(name?: string | null, email?: string | null): string {
  const src = (name || email || "?").trim();
  const parts = src.split(/[\s@._-]+/).filter(Boolean);
  return ((parts[0]?.[0] ?? "?") + (parts[1]?.[0] ?? "")).toUpperCase();
}
export const displayName = (p?: { full_name?: string | null; email?: string | null } | null) => p?.full_name || p?.email?.split("@")[0] || "Someone";

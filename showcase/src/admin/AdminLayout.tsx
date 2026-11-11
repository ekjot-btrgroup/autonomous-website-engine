import { useEffect, useState, type ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { canWrite, getSettings, testConnection } from "./github";
import { ToastProvider } from "./toast";

type Conn = "none" | "checking" | "ok" | "error";

export function useConnection(): { state: Conn; message: string } {
  const [state, setState] = useState<{ state: Conn; message: string }>({ state: "none", message: "Read-only: no token" });
  useEffect(() => {
    let alive = true;
    const run = async () => {
      if (!canWrite()) return alive && setState({ state: "none", message: "Read-only: no token" });
      const key = `admin:conn:${getSettings().repo}:${getSettings().branch}`;
      const cached = sessionStorage.getItem(key);
      if (cached) return alive && setState(JSON.parse(cached));
      setState({ state: "checking", message: "Checking GitHub..." });
      const r = await testConnection();
      const s = { state: (r.ok ? "ok" : "error") as Conn, message: r.message };
      if (r.ok) sessionStorage.setItem(key, JSON.stringify(s));
      if (alive) setState(s);
    };
    run();
    const on = () => {
      Object.keys(sessionStorage).filter((k) => k.startsWith("admin:conn:")).forEach((k) => sessionStorage.removeItem(k));
      run();
    };
    window.addEventListener("admin:settings", on);
    return () => {
      alive = false;
      window.removeEventListener("admin:settings", on);
    };
  }, []);
  return state;
}

const DOT: Record<Conn, string> = { none: "bg-zinc-300", checking: "bg-amber-400 animate-pulse", ok: "bg-emerald-500", error: "bg-red-500" };

export function SetupCard() {
  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
      <p className="font-medium">Connect GitHub to save changes (free, no Lovable credits).</p>
      <p className="mt-1 text-amber-800">You can browse now. To edit tags and memory, create a token once:</p>
      <ol className="mt-3 list-decimal space-y-1 pl-5 text-amber-900">
        <li>GitHub, your picture (top right), <b>Settings</b>.</li>
        <li><b>Developer settings</b>, then <b>Personal access tokens</b>, then <b>Fine-grained tokens</b>, then <b>Generate new token</b>.</li>
        <li>Repository access: <b>Only select repositories</b>, choose the engine repo.</li>
        <li>Permissions: <b>Contents: Read and write</b>. Generate and copy the token.</li>
        <li>Paste it in <Link to="/admin/settings" className="underline">Settings</Link> with the repo name and press Test.</li>
      </ol>
    </div>
  );
}

export function AdminLayout({ children, wide = false }: { children: ReactNode; wide?: boolean }) {
  const conn = useConnection();
  const nav = ({ isActive }: { isActive: boolean }) =>
    `rounded-md px-3 py-1.5 text-sm ${isActive ? "bg-zinc-900 text-white" : "text-zinc-600 hover:bg-zinc-100"}`;
  return (
    <ToastProvider>
      <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
        <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white/95 backdrop-blur">
          <div className={`mx-auto flex ${wide ? "max-w-[1600px]" : "max-w-7xl"} flex-wrap items-center gap-4 px-6 py-3`}>
            <Link to="/admin" className="text-base font-semibold">Admin</Link>
            <nav className="flex gap-1">
              <NavLink to="/admin" end className={nav}>Library</NavLink>
              <NavLink to="/admin/memory" className={nav}>Memory</NavLink>
              <NavLink to="/admin/settings" className={nav}>Settings</NavLink>
            </nav>
            <div className="ml-auto flex items-center gap-4 text-xs text-zinc-500">
              <Link to="/admin/settings" className="flex items-center gap-1.5" title={conn.message}>
                <span className={`h-2 w-2 rounded-full ${DOT[conn.state]}`} />
                <span className="hidden sm:inline">{conn.state === "ok" ? "GitHub connected" : conn.state === "none" ? "Read-only" : conn.state === "checking" ? "Checking" : "Connection problem"}</span>
              </Link>
              <Link to="/" className="hover:underline">Public showcase ↗</Link>
            </div>
          </div>
        </header>
        <main className={`mx-auto ${wide ? "max-w-[1600px]" : "max-w-7xl"} px-6 py-6`}>{children}</main>
      </div>
    </ToastProvider>
  );
}

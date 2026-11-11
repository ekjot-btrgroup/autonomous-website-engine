// App shell: collapsible sidebar (drawer on mobile), top bar with breadcrumbs + search, command palette.
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowUpRight, ChevronRight, CornerDownLeft, LogOut, Menu, Moon, PanelLeftClose, PanelLeftOpen, Search, Sun, UserRound, Copy, Library as LibraryIcon,
} from "lucide-react";
import { shortlists } from "@/showcase/data";
import { categoryOf } from "@/showcase/data";
import { Badge, cn, IconButton, Kbd, muted, StatusDot, subtle } from "../ui";
import { copyText, Popover, Sheet, useToast, MenuItem } from "../ui";
import { useAuth, initials, displayName } from "../backend/auth";
import { ROLE_LABEL, atLeast } from "../backend/types";
import { useDesigns } from "../backend/live";
import { attentionOf, engine, showcaseLink } from "../engine";
import { NAV, TITLES } from "./nav";
import { useTheme } from "./theme";

const COLLAPSE_KEY = "admin:sidebar";

function BrandMark({ className }: { className?: string }) {
  return (
    <span className={cn("relative flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-sm shadow-indigo-500/30", className)}>
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="7" height="7" rx="1.6" />
        <rect x="13" y="4" width="7" height="7" rx="1.6" opacity=".7" />
        <rect x="4" y="13" width="7" height="7" rx="1.6" opacity=".7" />
        <rect x="13" y="13" width="7" height="7" rx="3.5" />
      </svg>
    </span>
  );
}

function useCounts() {
  const designs = useDesigns();
  return {
    designs: designs.length,
    briefs: new Set([...shortlists.map((s) => s.slug), ...engine.briefs.map((b) => b.slug)]).size,
    sites: engine.sites.length,
    attention: designs.filter((d) => attentionOf(d)).length,
  };
}

function SidebarContent({ collapsed, onNavigate, onToggleCollapse, onOpenPalette }: { collapsed: boolean; onNavigate?: () => void; onToggleCollapse?: () => void; onOpenPalette: () => void }) {
  const counts = useCounts();
  const { theme, toggle } = useTheme();
  const { role } = useAuth();
  const repo = engine.engine_repo || "Design library";
  return (
    <div className="flex h-full flex-col">
      <div className={cn("flex h-14 items-center gap-2.5 px-4", collapsed && "justify-center px-0")}>
        <BrandMark />
        {!collapsed && (
          <div className="min-w-0">
            <div className="text-[13px] font-semibold tracking-[-0.01em] text-zinc-900 dark:text-white">Design Engine</div>
            <div className={cn("truncate text-[11px]", subtle)}>Admin</div>
          </div>
        )}
      </div>

      {!collapsed && (
        <div className="mx-3 mb-2 flex items-center gap-2.5 rounded-lg border border-zinc-200/80 bg-white px-2.5 py-2 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-zinc-900 text-[10px] font-semibold text-white dark:bg-white dark:text-zinc-900">{repo.split("/").pop()?.[0]?.toUpperCase() ?? "D"}</span>
          <div className="min-w-0 flex-1">
            <div className="truncate text-xs font-medium text-zinc-800 dark:text-zinc-200" title={repo}>{repo.split("/").pop()}</div>
            <div className={cn("flex items-center gap-1.5 text-[11px]", muted)}>
              <StatusDot tone="ok" pulse /> Lovable Cloud · live
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={onOpenPalette}
        className={cn(
          "mx-3 mb-3 flex h-8 items-center gap-2 rounded-lg border border-zinc-200/80 bg-white px-2.5 text-[13px] text-zinc-400 shadow-sm transition-colors hover:border-zinc-300 hover:text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:border-zinc-700 dark:hover:text-zinc-300",
          collapsed && "mx-auto w-8 justify-center px-0",
        )}
        aria-label="Search"
      >
        <Search className="h-3.5 w-3.5" />
        {!collapsed && (
          <>
            <span className="flex-1 text-left">Search…</span>
            <Kbd>⌘K</Kbd>
          </>
        )}
      </button>

      <nav className="flex-1 space-y-5 overflow-y-auto px-3 pb-4">
        {NAV.map((g) => (
          <div key={g.group}>
            {!collapsed && <div className={cn("mb-1 px-2 text-[11px] font-medium", subtle)}>{g.group}</div>}
            <ul className="space-y-0.5">
              {g.items.map((it) => {
                const count = it.countKey ? counts[it.countKey] : undefined;
                const Icon = it.icon;
                return (
                  <li key={it.to}>
                    <NavLink
                      to={it.to}
                      end={it.to === "/admin"}
                      onClick={onNavigate}
                      title={collapsed ? it.label : undefined}
                      className={({ isActive }) =>
                        cn(
                          "group relative flex h-8 items-center gap-2.5 rounded-lg px-2 text-[13px] font-medium transition-colors duration-150",
                          collapsed && "justify-center px-0",
                          isActive
                            ? "bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-900/[0.06] dark:bg-zinc-800/80 dark:text-white dark:ring-white/[0.06]"
                            : "text-zinc-600 hover:bg-zinc-200/50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-100",
                        )
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <Icon className={cn("h-4 w-4 shrink-0", isActive ? "text-indigo-600 dark:text-indigo-400" : "text-zinc-400 group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300")} />
                          {!collapsed && <span className="flex-1 truncate">{it.label}</span>}
                          {!collapsed && typeof count === "number" && count > 0 && <span className={cn("text-[11px] tabular-nums", subtle)}>{count}</span>}
                          {!collapsed && it.to === "/admin/team" && atLeast(role, "admin") && null}
                        </>
                      )}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
        {!collapsed && counts.attention > 0 && (
          <Link to="/admin/library?q=attention" onClick={onNavigate} className="block rounded-lg border border-amber-200/80 bg-amber-50/80 px-3 py-2.5 text-xs text-amber-900 transition-colors hover:bg-amber-50 dark:border-amber-500/20 dark:bg-amber-500/[0.07] dark:text-amber-200">
            <div className="font-medium">{counts.attention} design{counts.attention > 1 ? "s" : ""} need attention</div>
            <div className="mt-0.5 text-amber-800/70 dark:text-amber-200/60">Untagged, flagged or not converted</div>
          </Link>
        )}
      </nav>

      <div className="space-y-1 border-t border-zinc-200/80 p-3 dark:border-zinc-800">
        <div className={cn("flex items-center gap-1", collapsed && "flex-col")}>
          <IconButton label={theme === "dark" ? "Light mode" : "Dark mode"} onClick={toggle}>
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </IconButton>
          <a href={showcaseLink("/")} target="_blank" rel="noreferrer" title="View public showcase" className={cn("inline-flex h-8 items-center gap-1.5 rounded-lg px-2 text-xs font-medium text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100", collapsed ? "w-8 justify-center px-0" : "flex-1")}>
            <ArrowUpRight className="h-4 w-4" />
            {!collapsed && "Public showcase"}
          </a>
          {onToggleCollapse && (
            <IconButton label={collapsed ? "Expand sidebar" : "Collapse sidebar"} onClick={onToggleCollapse}>
              {collapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
            </IconButton>
          )}
        </div>
        <UserMenu collapsed={collapsed} />
      </div>
    </div>
  );
}

export function Avatar({ name, email, url, size = 28 }: { name?: string | null; email?: string | null; url?: string | null; size?: number }) {
  const ini = initials(name, email);
  const hue = [...(email || name || "?")].reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
  return url ? (
    <img src={url} alt="" className="shrink-0 rounded-full object-cover ring-1 ring-black/5" style={{ width: size, height: size }} />
  ) : (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-full font-semibold text-white ring-1 ring-black/5"
      style={{ width: size, height: size, fontSize: Math.round(size * 0.38), background: `linear-gradient(135deg, hsl(${hue} 65% 52%), hsl(${(hue + 40) % 360} 70% 45%))` }}
    >
      {ini}
    </span>
  );
}

function UserMenu({ collapsed }: { collapsed: boolean }) {
  const { user, profile, role, signOut } = useAuth();
  const navigate = useNavigate();
  const name = displayName(profile ?? { email: user?.email });
  return (
    <Popover
      align="start"
      width={248}
      className="bottom-full top-auto mb-1.5 mt-0"
      trigger={({ toggle }) => (
        <button type="button" onClick={toggle} className={cn("flex w-full items-center gap-2.5 rounded-lg p-1.5 text-left transition-colors hover:bg-zinc-200/50 dark:hover:bg-zinc-800/60", collapsed && "justify-center")}>
          <Avatar name={profile?.full_name} email={user?.email} url={profile?.avatar_url} />
          {!collapsed && (
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[13px] font-medium text-zinc-900 dark:text-zinc-100">{name}</span>
              <span className={cn("block truncate text-[11px]", muted)}>{role ? ROLE_LABEL[role] : "No access yet"}</span>
            </span>
          )}
        </button>
      )}
    >
      {(close) => (
        <div>
          <div className="flex items-center gap-2.5 px-2.5 py-2">
            <Avatar name={profile?.full_name} email={user?.email} url={profile?.avatar_url} size={32} />
            <div className="min-w-0">
              <div className="truncate text-[13px] font-medium text-zinc-900 dark:text-white">{name}</div>
              <div className={cn("truncate text-[11px]", muted)}>{user?.email}</div>
            </div>
          </div>
          {role && (
            <div className="px-2.5 pb-2">
              <Badge tone={role === "owner" ? "accent" : role === "viewer" ? "neutral" : "info"}>{ROLE_LABEL[role]}</Badge>
            </div>
          )}
          <div className="my-1 h-px bg-zinc-100 dark:bg-zinc-800" />
          <MenuItem icon={<UserRound className="h-4 w-4" />} onClick={() => { close(); navigate("/admin/profile"); }}>Profile</MenuItem>
          <MenuItem icon={<LogOut className="h-4 w-4" />} onClick={() => { close(); void signOut(); }}>Sign out</MenuItem>
        </div>
      )}
    </Popover>
  );
}

function Breadcrumbs() {
  const { pathname } = useLocation();
  const designs = useDesigns();
  const parts = pathname.replace(/^\/admin\/?/, "").split("/").filter(Boolean);
  const first = parts[0] ?? "";
  const crumbs: { label: string; to?: string }[] = [{ label: TITLES[first] ?? "Admin", to: first === "d" ? "/admin/library" : `/admin${first ? `/${first}` : ""}` }];
  if (parts[1]) {
    const label = first === "d" ? designs.find((d) => d.id === parts[1])?.name ?? parts[1] : first === "briefs" ? shortlists.find((s) => s.slug === parts[1])?.company ?? parts[1] : first === "sites" ? engine.sites.find((s) => s.slug === parts[1])?.company ?? parts[1] : parts[1];
    crumbs.push({ label });
  }
  return (
    <nav aria-label="Breadcrumb" className="flex min-w-0 items-center gap-1.5 text-[13px]">
      {crumbs.map((c, i) => (
        <span key={i} className="flex min-w-0 items-center gap-1.5">
          {i > 0 && <ChevronRight className="h-3.5 w-3.5 shrink-0 text-zinc-300 dark:text-zinc-600" />}
          {c.to && i < crumbs.length - 1 ? (
            <Link to={c.to} className="truncate text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">{c.label}</Link>
          ) : (
            <span className="truncate font-medium text-zinc-900 dark:text-zinc-100">{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

// ---------------- command palette ----------------
type Cmd = { id: string; group: string; label: string; hint?: string; icon?: ReactNode; run: () => void };

function fuzzy(q: string, text: string): number {
  if (!q) return 1;
  const t = text.toLowerCase();
  const s = q.toLowerCase().trim();
  if (t.includes(s)) return 3 - t.indexOf(s) / 1000;
  let i = 0;
  for (const ch of t) if (ch === s[i]) i++;
  return i === s.length ? 1 : 0;
}

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const navigate = useNavigate();
  const designs = useDesigns();
  const { toggle, theme } = useTheme();
  const { signOut } = useAuth();
  const toast = useToast();
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (open) {
      setQ("");
      setSel(0);
      window.setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  const go = (to: string) => () => {
    navigate(to);
    onClose();
  };
  const all: Cmd[] = useMemo(() => {
    const pages: Cmd[] = NAV.flatMap((g) => g.items.map((it) => ({ id: `p:${it.to}`, group: "Pages", label: it.label, icon: <it.icon className="h-4 w-4" />, run: go(it.to) })));
    const acts: Cmd[] = [
      { id: "a:theme", group: "Actions", label: `Switch to ${theme === "dark" ? "light" : "dark"} mode`, icon: theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />, run: () => { toggle(); onClose(); } },
      { id: "a:public", group: "Actions", label: "Open public showcase", icon: <ArrowUpRight className="h-4 w-4" />, run: () => { window.open(showcaseLink("/"), "_blank"); onClose(); } },
      { id: "a:profile", group: "Actions", label: "Your profile", icon: <UserRound className="h-4 w-4" />, run: go("/admin/profile") },
      { id: "a:signout", group: "Actions", label: "Sign out", icon: <LogOut className="h-4 w-4" />, run: () => { onClose(); void signOut(); } },
      ...shortlists.map((s) => ({
        id: `c:${s.slug}`,
        group: "Actions",
        label: `Copy pick command · ${s.company || s.slug}`,
        icon: <Copy className="h-4 w-4" />,
        run: async () => {
          const top = s.items.slice(0, s.picks || 3).map((i) => i.id);
          await copyText(`Build site ${s.slug} with designs: ${top.join(", ")}`);
          toast("Pick command copied (top picks). Edit the ids before pasting if you chose others.", "info");
          onClose();
        },
      })),
    ];
    const ds: Cmd[] = designs.map((d) => ({
      id: `d:${d.id}`,
      group: "Designs",
      label: d.name,
      hint: `${categoryOf(d)} · ${d.id}${d.tags?.style?.length ? ` · ${d.tags.style.join(", ")}` : ""}`,
      icon: <LibraryIcon className="h-4 w-4" />,
      run: go(`/admin/d/${d.id}`),
    }));
    return [...pages, ...acts, ...ds];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [designs, theme]);

  const results = useMemo(() => {
    const scored = all.map((c) => ({ c, s: Math.max(fuzzy(q, c.label), fuzzy(q, c.hint ?? "") * 0.8) })).filter((x) => x.s > 0);
    if (q) scored.sort((a, b) => b.s - a.s);
    const out = scored.map((x) => x.c);
    return q ? out.slice(0, 40) : out.filter((c) => c.group !== "Designs").concat(out.filter((c) => c.group === "Designs").slice(0, 6));
  }, [all, q]);
  useEffect(() => setSel(0), [q]);

  if (!open) return null;
  const groups = [...new Set(results.map((r) => r.group))];
  let idx = -1;
  return (
    <div className="fixed inset-0 z-[65] flex items-start justify-center p-4 pt-[14vh]" onKeyDown={(e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(results.length - 1, s + 1)); }
      if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => Math.max(0, s - 1)); }
      if (e.key === "Enter") { e.preventDefault(); results[sel]?.run(); }
    }}>
      <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-[2px] animate-in fade-in-0" onClick={onClose} />
      <div role="dialog" aria-label="Command palette" className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-2xl shadow-zinc-950/25 animate-in fade-in-0 zoom-in-95 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex items-center gap-3 border-b border-zinc-100 px-4 dark:border-zinc-800">
          <Search className="h-4 w-4 text-zinc-400" />
          <input ref={inputRef} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search designs, pages and actions…" className="h-12 flex-1 bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400 dark:text-zinc-100" />
          <Kbd>Esc</Kbd>
        </div>
        <div className="max-h-[52vh] overflow-y-auto p-2">
          {!results.length && <p className={cn("px-3 py-8 text-center text-[13px]", muted)}>No results for “{q}”</p>}
          {groups.map((g) => (
            <div key={g} className="mb-1">
              <div className={cn("px-2.5 pb-1 pt-2 text-[11px] font-medium", subtle)}>{g}</div>
              {results.filter((r) => r.group === g).map((r) => {
                idx++;
                const i = idx;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onMouseEnter={() => setSel(i)}
                    onClick={r.run}
                    className={cn("flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left", sel === i ? "bg-zinc-100 dark:bg-zinc-800" : "")}
                  >
                    <span className="text-zinc-400 dark:text-zinc-500">{r.icon}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[13px] text-zinc-900 dark:text-zinc-100">{r.label}</span>
                      {r.hint && <span className={cn("block truncate text-[11px]", muted)}>{r.hint}</span>}
                    </span>
                    {sel === i && <CornerDownLeft className="h-3.5 w-3.5 text-zinc-400" />}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
        <div className={cn("flex items-center gap-4 border-t border-zinc-100 px-4 py-2 text-[11px] dark:border-zinc-800", muted)}>
          <span className="flex items-center gap-1"><Kbd>↑</Kbd><Kbd>↓</Kbd> navigate</span>
          <span className="flex items-center gap-1"><Kbd>↵</Kbd> open</span>
          <span className="ml-auto flex items-center gap-1"><Kbd>/</Kbd> or <Kbd>⌘K</Kbd> anywhere</span>
        </div>
      </div>
    </div>
  );
}

export function Shell() {
  const [collapsed, setCollapsed] = useState(() => localStorage.getItem(COLLAPSE_KEY) === "1");
  const [drawer, setDrawer] = useState(false);
  const [palette, setPalette] = useState(false);
  const { role } = useAuth();
  const { pathname } = useLocation();
  useEffect(() => localStorage.setItem(COLLAPSE_KEY, collapsed ? "1" : "0"), [collapsed]);
  useEffect(() => setDrawer(false), [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = /^(input|textarea|select)$/i.test((e.target as HTMLElement)?.tagName ?? "") || (e.target as HTMLElement)?.isContentEditable;
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPalette((p) => !p);
      } else if (e.key === "/" && !typing) {
        e.preventDefault();
        setPalette(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="flex min-h-screen">
      <aside className={cn("sticky top-0 hidden h-screen shrink-0 border-r border-zinc-200/80 bg-zinc-100/40 transition-[width] duration-200 lg:block dark:border-zinc-800/80 dark:bg-zinc-950", collapsed ? "w-[60px]" : "w-[248px]")}>
        <SidebarContent collapsed={collapsed} onToggleCollapse={() => setCollapsed((c) => !c)} onOpenPalette={() => setPalette(true)} />
      </aside>
      <Sheet open={drawer} onClose={() => setDrawer(false)}>
        <SidebarContent collapsed={false} onNavigate={() => setDrawer(false)} onOpenPalette={() => { setDrawer(false); setPalette(true); }} />
      </Sheet>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-zinc-200/80 bg-white/80 px-4 backdrop-blur-xl sm:px-6 dark:border-zinc-800/80 dark:bg-zinc-950/80">
          <IconButton label="Open menu" className="lg:hidden" onClick={() => setDrawer(true)}>
            <Menu className="h-4 w-4" />
          </IconButton>
          <Breadcrumbs />
          <div className="ml-auto flex items-center gap-2">
            {role === "viewer" && <Badge tone="neutral">Read-only</Badge>}
            <button type="button" onClick={() => setPalette(true)} className="hidden h-8 w-64 items-center gap-2 rounded-lg border border-zinc-200/80 bg-zinc-50 px-2.5 text-[13px] text-zinc-400 transition-colors hover:border-zinc-300 md:flex dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
              <Search className="h-3.5 w-3.5" />
              <span className="flex-1 text-left">Search designs, pages…</span>
              <Kbd>⌘K</Kbd>
            </button>
            <IconButton label="Search" className="md:hidden" onClick={() => setPalette(true)}>
              <Search className="h-4 w-4" />
            </IconButton>
          </div>
        </header>
        <main className="mx-auto w-full max-w-[1400px] flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <Outlet />
        </main>
      </div>
      <CommandPalette open={palette} onClose={() => setPalette(false)} />
    </div>
  );
}

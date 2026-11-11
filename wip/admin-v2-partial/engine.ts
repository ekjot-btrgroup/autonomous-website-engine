// Engine snapshot (src/showcase/engine-data.json), written by the engine on every showcase init/push:
// sites, briefs, memory summary, releases, scoring weights, niche presets. Every field is optional here.
import { shortlists, type DesignMeta } from "@/showcase/data";

export type SiteSnap = {
  slug: string;
  company?: string;
  created_at?: string;
  picks?: string[];
  sections?: { folder?: string; id: string; slot: string; picked?: boolean; reason?: string }[];
  missing?: string[];
  filled?: boolean;
  theme?: { primary?: string; accent?: string; heading?: string; body?: string; motion?: string };
  lovable_repo?: string | null;
  last_push?: string | null;
};
export type BriefSnap = {
  slug: string;
  company?: string;
  niche?: string;
  style?: string;
  tone?: string;
  goals?: string[];
  sections?: string[];
  animations?: string;
  scheme?: string;
  colors?: Record<string, string>;
  profile?: Partial<Record<string, number>>;
  picks?: number;
};
export type NoteSnap = { file?: string; at: string; design: string; good?: string[]; bad?: string[]; rating?: number; text?: string; source?: string };
export type PrefSnap = { file?: string; at: string; context?: string[]; prefer?: string[]; avoid?: string[]; text?: string; source?: string };
export type ReleaseSnap = { file?: string; title: string; at?: string; merge?: string; branch?: string; changed?: string; commits?: { sha: string; subject: string }[] };
export type Weights = Record<
  "section" | "sectionAlso" | "feel" | "style" | "styleWord" | "styleHint" | "layout" | "goals" | "origin" | "originFamily" | "media" | "scheme" | "motion" | "quality" | "avoid" | "pinned",
  number
>;
export type Preset = { tone?: number; energy?: number; luxury?: number; density?: number; warmth?: number; modernity?: number; style?: string[]; goals?: string[]; media?: string[] };

export type EngineData = {
  generated_at?: string;
  engine_repo?: string;
  showcase_url?: string;
  sites: SiteSnap[];
  briefs: BriefSnap[];
  memory: {
    counts: Partial<Record<"note" | "pref" | "shown" | "pick" | "used", number>>;
    picks: { slug: string; at?: string; picked?: string[]; shown?: string[] }[];
    usage: Record<string, number>;
    shown_ids: string[];
    notes: NoteSnap[];
    prefs: PrefSnap[];
  };
  releases: ReleaseSnap[];
  scoring: { weights: Weights; limits: { memory?: [number, number]; prefs?: [number, number]; usagePerSite: number; usageMax: number; recentSites?: number; learnedMaxWeight?: number }; default_sections: string[] };
  presets: Record<string, Preset>;
  niche_families: Record<string, string[]>;
};

export const DEFAULT_WEIGHTS: Weights = {
  section: 30, sectionAlso: 15, feel: 30, style: 24, styleWord: 12, styleHint: 6, layout: 10, goals: 12,
  origin: 8, originFamily: 4, media: -10, scheme: 8, motion: 8, quality: 4, avoid: -20, pinned: 10,
};
const DEFAULT_SECTIONS = ["navbar", "hero", "features", "about", "testimonials", "cta", "footer"];

const mods = import.meta.glob("../showcase/engine-data.json", { eager: true, import: "default" }) as Record<string, Partial<EngineData>>;
const raw: Partial<EngineData> = Object.values(mods)[0] ?? {};
const arr = <T,>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);

export const engine: EngineData = {
  generated_at: raw.generated_at,
  engine_repo: raw.engine_repo,
  showcase_url: (raw.showcase_url || "").replace(/\/+$/, ""),
  sites: arr<SiteSnap>(raw.sites).filter((s) => s?.slug),
  briefs: arr<BriefSnap>(raw.briefs).filter((b) => b?.slug),
  memory: {
    counts: raw.memory?.counts ?? {},
    picks: arr(raw.memory?.picks),
    usage: raw.memory?.usage ?? {},
    shown_ids: arr<string>(raw.memory?.shown_ids),
    notes: arr<NoteSnap>(raw.memory?.notes),
    prefs: arr<PrefSnap>(raw.memory?.prefs),
  },
  releases: arr<ReleaseSnap>(raw.releases),
  scoring: {
    weights: { ...DEFAULT_WEIGHTS, ...(raw.scoring?.weights ?? {}) },
    limits: { usagePerSite: 5, usageMax: 15, ...(raw.scoring?.limits ?? {}) },
    default_sections: arr<string>(raw.scoring?.default_sections).length ? arr<string>(raw.scoring?.default_sections) : DEFAULT_SECTIONS,
  },
  presets: raw.presets ?? {},
  niche_families: raw.niche_families ?? {},
};

export const shownSet = new Set(engine.memory.shown_ids);
export const usageOf = (id: string) => engine.memory.usage[id] ?? 0;
export const pickedCount = (id: string) => engine.memory.picks.filter((p) => p.picked?.includes(id)).length;
export const shownCount = (id: string) =>
  shortlists.filter((s) => s.items.some((i) => i.id === id)).length || engine.memory.picks.filter((p) => p.shown?.includes(id)).length;

/** Shortlists that included a design, with its rank. */
export function shortlistsFor(id: string) {
  return shortlists.flatMap((s) => {
    const it = s.items.find((i) => i.id === id);
    return it ? [{ slug: s.slug, company: s.company, rank: it.rank, score: it.score, created_at: s.created_at }] : [];
  });
}
export const sitesFor = (id: string) => engine.sites.filter((s) => s.sections?.some((x) => x.id === id) || s.picks?.includes(id));
export const pickFor = (slug: string) => engine.memory.picks.filter((p) => p.slug === slug).pop();
export const briefFor = (slug: string) => engine.briefs.find((b) => b.slug === slug);

export const showcaseLink = (route: string) => (engine.showcase_url ? `${engine.showcase_url}${route}` : route);
export const repoUrl = (repo?: string | null, path = "") => (repo ? `https://github.com/${repo}${path}` : "");

export function attentionOf(d: DesignMeta): { tone: "danger" | "warn" | "info"; label: string; detail: string } | null {
  if (d.status === "build_failed") return { tone: "danger", label: "Build failed", detail: d.issues?.[0] ?? "Breaks the showcase build" };
  if (d.status === "needs_conversion") return { tone: "info", label: "Needs conversion", detail: `${d.source?.format ?? "Non-React"} source; Claude converts it once` };
  if (d.status === "needs_attention") return { tone: "warn", label: "Needs attention", detail: d.issues?.[0] ?? "Has an open issue" };
  if (!d.tags) return { tone: "info", label: "Untagged", detail: "Not tagged yet; ranks on a guessed category" };
  return null;
}

export function timeAgo(iso?: string | null): string {
  if (!iso) return "";
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return "";
  const s = Math.round((Date.now() - t) / 1000);
  if (s < 60) return "just now";
  const m = Math.round(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.round(h / 24);
  if (d < 30) return `${d}d ago`;
  return new Date(t).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
}
export const fmtDate = (iso?: string | null) => (iso && !Number.isNaN(Date.parse(iso)) ? new Date(iso).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" }) : "–");
export const compact = (n: number) => (n >= 1e6 ? `${(n / 1e6).toFixed(1).replace(/\.0$/, "")}M` : n >= 1e4 ? `${(n / 1e3).toFixed(1).replace(/\.0$/, "")}K` : n.toLocaleString());

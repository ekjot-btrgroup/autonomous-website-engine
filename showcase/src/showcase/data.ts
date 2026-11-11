import { lazy, type ComponentType, type LazyExoticComponent } from "react";

export type DesignStatus = "ok" | "needs_conversion" | "needs_attention" | "build_failed";

export type DesignTags = {
  category: string;
  also?: string[];
  layout?: string[];
  style?: string[];
  /** Feel axes 1-5: tone (playful..formal), energy, luxury, density, warmth, modernity. */
  tone?: number;
  energy?: number;
  luxury?: number;
  density?: number;
  warmth?: number;
  modernity?: number;
  media?: string[];
  image_need?: number;
  typography?: string;
  motion?: string;
  goals?: string[];
  scheme?: string;
  quality?: number;
  note?: string;
};

export const AXES: { key: "tone" | "energy" | "luxury" | "density" | "warmth" | "modernity"; low: string; high: string }[] = [
  { key: "tone", low: "playful", high: "formal" },
  { key: "energy", low: "calm", high: "energetic" },
  { key: "luxury", low: "everyday", high: "premium" },
  { key: "density", low: "airy", high: "dense" },
  { key: "warmth", low: "cool", high: "warm" },
  { key: "modernity", low: "classic", high: "cutting-edge" },
];

export type DesignMeta = {
  id: string;
  name: string;
  status: DesignStatus;
  issues?: string[];
  source: { folder: string; format: string; hash: string };
  deps?: string[];
  summary?: { headings?: string[]; ctas?: string[]; dark?: boolean | null; lines?: number };
  guess?: { category: string; confidence: number };
  tags?: DesignTags | null;
  added_at: string;
};

export type ShortlistItem = {
  id: string;
  rank: number;
  score: number;
  category: string;
  reasons: string[];
};

export type Shortlist = {
  slug: string;
  company: string;
  created_at: string;
  picks: number;
  brief?: Record<string, unknown>;
  items: ShortlistItem[];
};

const metaModules = import.meta.glob("../designs/*/meta.json", {
  eager: true,
  import: "default",
}) as Record<string, DesignMeta>;

const loaders = import.meta.glob("../designs/*/index.tsx") as Record<
  string,
  () => Promise<{ default: ComponentType }>
>;

const shortlistModules = import.meta.glob("../shortlists/*.json", {
  eager: true,
  import: "default",
}) as Record<string, Shortlist>;

function folderOf(path: string): string {
  const parts = path.split("/");
  return parts[parts.length - 2] ?? "";
}

const loaderByFolder = new Map<string, () => Promise<{ default: ComponentType }>>();
for (const [path, loader] of Object.entries(loaders)) loaderByFolder.set(folderOf(path), loader);

const metaById = new Map<string, DesignMeta>();
const folderById = new Map<string, string>();
for (const [path, meta] of Object.entries(metaModules)) {
  if (!meta || typeof meta !== "object" || !meta.id) continue;
  metaById.set(meta.id, meta);
  folderById.set(meta.id, folderOf(path));
}

export const designs: DesignMeta[] = [...metaById.values()].sort((a, b) =>
  (b.added_at ?? "").localeCompare(a.added_at ?? "") || a.id.localeCompare(b.id),
);

export function getDesign(id: string | undefined): DesignMeta | undefined {
  return id ? metaById.get(id) : undefined;
}

export function categoryOf(meta: DesignMeta | undefined): string {
  return meta?.tags?.category ?? meta?.guess?.category ?? "unknown";
}

export function tagsOf(meta: DesignMeta): string[] {
  const t = meta.tags;
  if (!t) return [];
  return [...(t.style ?? []), ...(t.layout ?? [])];
}

const lazyCache = new Map<string, LazyExoticComponent<ComponentType>>();

export function loadDesign(id: string): LazyExoticComponent<ComponentType> | null {
  const cached = lazyCache.get(id);
  if (cached) return cached;
  const folder = folderById.get(id) ?? id;
  const loader = loaderByFolder.get(folder);
  if (!loader) return null;
  const comp = lazy(loader);
  lazyCache.set(id, comp);
  return comp;
}

export const shortlists: Shortlist[] = Object.values(shortlistModules)
  .filter((s) => s && typeof s === "object" && s.slug)
  .sort((a, b) => (b.created_at ?? "").localeCompare(a.created_at ?? ""));

export function getShortlist(slug: string | undefined): Shortlist | undefined {
  return slug ? shortlists.find((s) => s.slug === slug) : undefined;
}

export const categories: string[] = [...new Set(designs.map(categoryOf))].sort();

export const statusLabel: Record<DesignStatus, string> = {
  ok: "ok",
  needs_conversion: "needs conversion",
  needs_attention: "needs attention",
  build_failed: "build failed",
};

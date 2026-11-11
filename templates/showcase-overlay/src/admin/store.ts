// Merged view of designs for the admin: bundled metas (+ bundled overrides) + overrides saved from this browser.
import { useEffect, useState } from "react";
import { allDesigns, applyOverride, type DesignMeta, type DesignOverride, type DesignTags } from "@/showcase/data";
import { deleteFile, getFile, putFile } from "./github";

const LOCAL = "admin:overrides";
// id -> override, or null = "reset to Claude's tags" (overrides a bundled override until the next publish)
type LocalMap = Record<string, DesignOverride | null>;

function readLocal(): LocalMap {
  try {
    return JSON.parse(localStorage.getItem(LOCAL) || "{}");
  } catch {
    return {};
  }
}
function writeLocal(m: LocalMap) {
  localStorage.setItem(LOCAL, JSON.stringify(m));
  window.dispatchEvent(new Event("admin:overrides"));
}
export function clearLocalCache() {
  localStorage.removeItem(LOCAL);
  window.dispatchEvent(new Event("admin:overrides"));
}

export const overridePath = (id: string) => `showcase/src/overrides/${id}.json`;

function merge(d: DesignMeta, local: LocalMap): DesignMeta {
  if (!(d.id in local)) return d;
  const o = local[d.id];
  const base: DesignMeta = { ...d, tags: d.originalTags ?? null, hidden: false, pinned: false, edited: false, updated_at: undefined };
  return o ? applyOverride(base, o) : base;
}

export function useDesigns(): DesignMeta[] {
  const [local, setLocal] = useState<LocalMap>(readLocal);
  useEffect(() => {
    const on = () => setLocal(readLocal());
    window.addEventListener("admin:overrides", on);
    window.addEventListener("storage", on);
    return () => {
      window.removeEventListener("admin:overrides", on);
      window.removeEventListener("storage", on);
    };
  }, []);
  return allDesigns.map((d) => merge(d, local));
}

export function useDesign(id: string | undefined): DesignMeta | undefined {
  const list = useDesigns();
  return list.find((d) => d.id === id);
}

const TAG_KEYS: (keyof DesignTags)[] = [
  "category", "also", "layout", "style", "tone", "energy", "luxury", "density", "warmth", "modernity",
  "media", "image_need", "typography", "motion", "goals", "scheme", "quality", "note", "origin",
];

/** Keep only known tag fields, drop empty values. */
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

/** Fetch the latest override from GitHub into the local cache (other browsers may have edited). */
export async function refreshOverride(id: string): Promise<void> {
  const remote = await getFile<DesignOverride>(overridePath(id));
  const local = readLocal();
  if (remote) local[id] = remote.json;
  else if (id in local) local[id] = null;
  else return;
  writeLocal(local);
}

/**
 * Save an admin override. `patch` is merged over the design's current override state
 * (name/tags/hidden/pinned); tags are written as the full edited object.
 */
export async function saveOverride(
  design: DesignMeta,
  patch: { name?: string; tags?: Partial<DesignTags>; hidden?: boolean; pinned?: boolean },
): Promise<DesignOverride> {
  const path = overridePath(design.id);
  const existing = await getFile<DesignOverride>(path);
  const prev = existing?.json;
  const tags = patch.tags ? cleanTags(patch.tags) : prev?.tags ?? (design.edited ? cleanTags(design.tags) : undefined);
  const name = patch.name !== undefined ? patch.name : prev?.name;
  const override: DesignOverride = {
    id: design.id,
    ...(name && name.trim() ? { name: name.trim() } : {}),
    ...(tags && Object.keys(tags).length ? { tags } : {}),
    hidden: patch.hidden ?? prev?.hidden ?? !!design.hidden,
    pinned: patch.pinned ?? prev?.pinned ?? !!design.pinned,
    updated_at: new Date().toISOString(),
    updated_by: "admin",
  };
  await putFile(path, override, `admin: edit ${design.id}`, existing?.sha);
  const local = readLocal();
  local[design.id] = override;
  writeLocal(local);
  return override;
}

/** Delete the override file: the design goes back to Claude's tags, visible and unpinned. */
export async function resetOverride(id: string): Promise<void> {
  const existing = await getFile<DesignOverride>(overridePath(id));
  if (existing) await deleteFile(overridePath(id), existing.sha, `admin: reset ${id} to Claude's tags`);
  const local = readLocal();
  local[id] = null;
  writeLocal(local);
}

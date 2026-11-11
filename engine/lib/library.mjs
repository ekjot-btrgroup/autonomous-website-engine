// The library as the ranking sees it: each design's meta.json with admin-dashboard overrides applied on top.
// Overrides live in showcase/src/overrides/<id>.json (written by the admin dashboard via GitHub). Admin values win.
import fs from 'node:fs';
import path from 'node:path';
import { P, readJson, loadMetas } from './util.mjs';
import { normalizeTags } from './tags.mjs';

export function loadOverrides() {
  if (!fs.existsSync(P.overrides)) return new Map();
  return new Map(fs.readdirSync(P.overrides).filter((f) => f.endsWith('.json'))
    .map((f) => readJson(path.join(P.overrides, f), null)).filter((o) => o?.id).map((o) => [o.id, o]));
}

export function applyOverride(m, o) {
  if (!o) return m;
  const out = { ...m, hidden: !!o.hidden, pinned: !!o.pinned, admin: { updated_at: o.updated_at || null } };
  if (o.name) out.name = String(o.name).slice(0, 80);
  if (o.tags && Object.keys(o.tags).length) {
    const merged = { ...(m.tags || {}), ...o.tags };
    if (!merged.category) merged.category = m.guess?.category;
    const { tags } = normalizeTags(merged, m);
    if (tags) out.tags = { ...tags, by: 'admin', at: (o.updated_at || '').slice(0, 10) };
  }
  return out;
}

export function loadLibrary() {
  const ov = loadOverrides();
  return loadMetas().map((m) => applyOverride(m, ov.get(m.id)));
}

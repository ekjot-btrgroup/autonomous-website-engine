// One validator for design tags, used by Claude's tagging (tag.mjs) and by admin dashboard overrides.
// Main traits describe the SECTION. `origin` (<=2 niches) records who its demo content is written for: a minor signal.
import { clean, clampAxis, AXES } from './vocab.mjs';

// Values the script can read from code; used when a field is left out.
export function derived(m) {
  const s = m.summary || {};
  return {
    scheme: s.dark === true ? 'dark' : s.dark === false ? 'light' : 'mixed',
    typography: s.fonts?.includes('serif') ? 'serif' : s.fonts?.includes('mono') ? 'mono' : 'sans',
    motion: s.motion ? 'subtle' : 'none',
    image_need: !s.images ? 0 : s.images > 2 ? 2 : 1,
  };
}

export function normalizeTags(t = {}, m = {}) {
  const d = derived(m);
  const warn = [];
  const pick = (field, val, max) => { const r = clean(field, val ?? []); warn.push(...r.dropped); return r.values.slice(0, max); };
  const category = pick('category', t.category, 1)[0];
  if (!category) return { tags: null, warn: [`invalid category "${t.category}"`] };
  const tags = {
    category,
    also: pick('category', t.also, 3).filter((c) => c !== category),
    layout: pick('layout', t.layout, 2),
    style: pick('style', t.style, 3),
    ...Object.fromEntries(AXES.map((x) => [x, clampAxis(t[x])])),
    media: pick('media', t.media, 3),
    image_need: [0, 1, 2].includes(Number(t.image_need)) && t.image_need !== '' && t.image_need !== null ? Number(t.image_need) : d.image_need,
    typography: pick('typography', t.typography, 1)[0] || d.typography,
    motion: pick('motion', t.motion, 1)[0] || d.motion,
    goals: pick('goals', t.goals, 3),
    origin: pick('niches', t.origin ?? t.industries ?? t.niches, 2),
    scheme: pick('scheme', t.scheme, 1)[0] || d.scheme,
    quality: Math.max(1, Math.min(5, Math.round(Number(t.quality) || 3))),
    note: String(t.note || '').slice(0, 100),
  };
  for (const x of AXES) if (tags[x] === null) delete tags[x];
  return { tags, warn };
}

import path from 'node:path';
import { P, readJson } from './util.mjs';

export const AXES = ['tone', 'energy', 'luxury', 'density', 'warmth', 'modernity'];
const FIELDS = ['category', 'style', 'niches', 'scheme', 'layout', 'media', 'typography', 'motion', 'goals'];

let cache;
export function vocab() {
  if (!cache) {
    const v = readJson(P.vocab);
    cache = { ...v, sets: Object.fromEntries(FIELDS.map((k) => [k, new Set(v[k] || [])])) };
  }
  return cache;
}

let presetCache;
export function presets() {
  if (!presetCache) presetCache = readJson(path.join(path.dirname(P.vocab), 'niche-presets.json'), { default: {} });
  return presetCache;
}

// Map one word/phrase to a vocabulary term (or null).
export function norm(word) {
  const v = vocab();
  const w = String(word || '').toLowerCase().trim().replace(/[\s_]+/g, '-');
  if (!w) return null;
  for (const set of Object.values(v.sets)) if (set.has(w)) return w;
  const s = v.synonyms[w] || w;
  for (const set of Object.values(v.sets)) if (set.has(s)) return s;
  const sing = s.replace(/s$/, '');
  for (const set of Object.values(v.sets)) if (set.has(sing)) return sing;
  return null;
}

const words = (text) => String(Array.isArray(text) ? text.join(' ') : text || '').toLowerCase().split(/[^a-z0-9&-]+/).filter(Boolean);

// Free text -> set of vocabulary terms (also tries 2-word phrases like "real estate").
export function terms(text) {
  const w = words(text);
  const out = new Set();
  for (let i = 0; i < w.length; i++) {
    const two = i + 1 < w.length ? norm(`${w[i]}-${w[i + 1]}`) : null;
    if (two) { out.add(two); i++; continue; }
    const one = norm(w[i]);
    if (one) out.add(one);
    const syn = vocab().synonyms[w[i]]; // e.g. "premium" is a mood word AND a synonym of luxury
    if (syn && syn !== one && norm(syn)) out.add(norm(syn));
  }
  return out;
}

// Free text -> goal terms ("qualified enquiries" -> leads).
export function goalsOf(text) {
  const v = vocab();
  const out = new Set();
  for (const w of words(text)) {
    const g = v.sets.goals.has(w) ? w : v.goal_synonyms?.[w] || (v.sets.goals.has(w.replace(/s$/, '')) ? w.replace(/s$/, '') : null);
    if (g) out.add(g);
  }
  return out;
}

const STOP = new Set('the and for with from that this their them they our your you are was were will have has into about very more most also just only some such than then there these those what when where which while who whom why how can could would should a an of to in on at by is it be as or not no but its'.split(' '));
// Context of a brief or a note: vocabulary terms + raw meaningful words (singular), for memory matching.
export function contextOf(text) {
  const out = new Set(terms(text));
  for (const w of words(text)) if (w.length > 3 && !STOP.has(w) && !/^\d/.test(w)) out.add(w.replace(/(ies)$/, 'y').replace(/(?<!s)s$/, ''));
  return out;
}

// Keep only allowed values for a tag field (synonyms mapped).
export function clean(field, values) {
  const v = vocab();
  const set = v.sets[field];
  const list = (Array.isArray(values) ? values : [values]).filter((x) => x !== undefined && x !== null && x !== '');
  const mapped = list.map((x) => {
    const w = String(x).toLowerCase().trim().replace(/\s+/g, '-');
    if (set.has(w)) return w;
    const s = (field === 'goals' ? v.goal_synonyms?.[w] : null) || v.synonyms[w] || w;
    return set.has(s) ? s : set.has(s.replace(/s$/, '')) ? s.replace(/s$/, '') : null;
  });
  return { values: [...new Set(mapped.filter(Boolean))], dropped: list.filter((x, i) => !mapped[i]) };
}

export const clampAxis = (n) => (Number.isFinite(Number(n)) && Number(n) > 0 ? Math.max(1, Math.min(5, Math.round(Number(n)))) : null);

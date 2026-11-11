import { P, readJson } from './util.mjs';

let cache;
export function vocab() {
  if (!cache) {
    const v = readJson(P.vocab);
    cache = { ...v, sets: Object.fromEntries(['category', 'style', 'mood', 'industries', 'scheme', 'layout'].map((k) => [k, new Set(v[k])])) };
  }
  return cache;
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

// Free text -> set of vocabulary terms (also tries 2-word phrases like "real estate").
export function terms(text) {
  const words = String(Array.isArray(text) ? text.join(' ') : text || '').toLowerCase().split(/[^a-z0-9&-]+/).filter(Boolean);
  const out = new Set();
  for (let i = 0; i < words.length; i++) {
    const two = i + 1 < words.length ? norm(`${words[i]}-${words[i + 1]}`) : null;
    if (two) { out.add(two); i++; continue; }
    const one = norm(words[i]);
    if (one) out.add(one);
    const syn = vocab().synonyms[words[i]]; // e.g. "premium" is a mood AND a synonym of luxury
    if (syn && syn !== one && norm(syn)) out.add(norm(syn));
  }
  return out;
}

// Keep only allowed values for a tag field (synonyms mapped).
export function clean(field, values) {
  const set = vocab().sets[field];
  const list = (Array.isArray(values) ? values : [values]).filter(Boolean).map((x) => {
    const w = String(x).toLowerCase().trim().replace(/\s+/g, '-');
    if (set.has(w)) return w;
    const s = vocab().synonyms[w] || w;
    return set.has(s) ? s : set.has(s.replace(/s$/, '')) ? s.replace(/s$/, '') : null;
  });
  const dropped = (Array.isArray(values) ? values : [values]).filter((x, i) => x && !list[i]);
  return { values: [...new Set(list.filter(Boolean))], dropped };
}

// Learning memory: append-only event files in memory/events/ (one file per event, so parallel chats never conflict).
// Event types:
//   note  {design, good:[ctx], bad:[ctx], rating?, text}   user said a design suits / does not suit a use case
//   pref  {context:[ctx], prefer:[terms], avoid:[terms], text}   user preference for a kind of brief (or global)
//   shown {slug, context, ids}                              a shortlist was presented
//   pick  {slug, context, shown, picked, picked_traits}     user picked designs for a brief
//   used  {slug, ids}                                       designs that went into a built site
// Every learned effect is capped and fades with age (half-life 180 days) so nothing dominates forever.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { P, readJson, writeJson } from './util.mjs';
import { vocab, AXES } from './vocab.mjs';

const HALF_LIFE_DAYS = 180;
export const LIMITS = { memory: [-20, 15], prefs: [-15, 10], usagePerSite: 5, usageMax: 15, recentSites: 10, learnedMaxWeight: 0.3 };

export function record(type, data) {
  const at = new Date().toISOString();
  const file = path.join(P.memory, `${at.replace(/[:.]/g, '-')}-${type}-${crypto.randomBytes(2).toString('hex')}.json`);
  writeJson(file, { type, at, ...data });
  return file;
}

export function loadEvents() {
  if (!fs.existsSync(P.memory)) return [];
  return fs.readdirSync(P.memory).filter((f) => f.endsWith('.json'))
    .map((f) => ({ ...readJson(path.join(P.memory, f), {}), _file: f }))
    .filter((e) => e.type)
    .sort((a, b) => String(a.at).localeCompare(String(b.at)));
}

const decay = (at, now = Date.now()) => 0.5 ** (Math.max(0, now - Date.parse(at)) / 864e5 / HALF_LIFE_DAYS);
const clamp = (x, [lo, hi]) => Math.max(lo, Math.min(hi, x));

// Similarity of two contexts. Niche/use-case words count fully; generic style/layout words count half,
// so a note like "good for bakeries" does not fire on every brief that merely says "modern".
export function overlap(a, b) {
  const A = new Set(a || []), B = new Set(b || []);
  if (!A.size || !B.size) return 0;
  const v = vocab();
  const weak = (t) => v.sets.style.has(t) || v.sets.layout.has(t) || v.sets.scheme.has(t) || v.sets.typography.has(t);
  let hit = 0, strong = 0;
  for (const t of A) if (B.has(t)) { const w = weak(t) ? 0.5 : 1; hit += w; if (w === 1) strong++; }
  if (!strong) hit *= 0.5;
  return Math.min(1, hit / Math.min(A.size, B.size));
}

export function buildMemory(events = loadEvents()) {
  const latest = (type) => { const m = new Map(); for (const e of events.filter((x) => x.type === type)) m.set(e.slug, e); return [...m.values()]; };
  const notes = new Map();
  for (const e of events.filter((x) => x.type === 'note')) notes.set(e.design, [...(notes.get(e.design) || []), e]);
  const shown = new Set(events.filter((e) => e.type === 'shown').flatMap((e) => e.ids || []));
  return { notes, prefs: events.filter((e) => e.type === 'pref'), picks: latest('pick'), used: latest('used'), shown, count: events.length };
}

// Learned boost/penalty for one design in one brief context.
export function designMemory(mem, id, ctx) {
  let s = 0;
  const reasons = [];
  for (const n of mem.notes.get(id) || []) {
    const d = decay(n.at);
    const g = overlap(n.good, ctx), b = overlap(n.bad, ctx);
    if (g > 0) { s += 10 * g * d; reasons.push(`you noted: good for ${n.good.slice(0, 3).join(', ')}`); }
    if (b > 0) { s -= 15 * b * d; reasons.push(`you noted: not for ${n.bad.slice(0, 3).join(', ')}`); }
    if (n.rating && !n.good?.length && !n.bad?.length) s += (n.rating - 3) * 2 * d;
  }
  let picked = 0, skipped = 0;
  for (const p of mem.picks) {
    const sim = overlap(p.context, ctx);
    if (sim < 0.34) continue;
    const d = decay(p.at);
    if (p.picked?.includes(id)) { s += 6 * sim * d; picked++; }
    else if (p.shown?.includes(id)) { s -= 1.5 * sim * d; skipped++; }
  }
  if (picked) reasons.push(`you picked it for ${picked} similar brief${picked > 1 ? 's' : ''}`);
  if (skipped > 1) reasons.push(`skipped in ${skipped} similar briefs`);
  return { score: clamp(s, LIMITS.memory), reasons };
}

// User preferences (pref events) whose context matches this brief; global prefs (no context) always apply.
export function prefScore(mem, designTerms, ctx) {
  let s = 0;
  const reasons = [];
  for (const p of mem.prefs) {
    const applies = !p.context?.length || overlap(p.context, ctx) >= 0.34;
    if (!applies) continue;
    const d = decay(p.at);
    const yes = (p.prefer || []).filter((t) => designTerms.has(t));
    const no = (p.avoid || []).filter((t) => designTerms.has(t));
    if (yes.length) { s += 4 * yes.length * d; reasons.push(`matches your preference: ${yes.join(', ')}`); }
    if (no.length) { s -= 8 * no.length * d; reasons.push(`you prefer to avoid: ${no.join(', ')}`); }
  }
  return { score: clamp(s, LIMITS.prefs), reasons };
}

// Anti-repetition: designs used in recently built sites lose points.
export function usagePenalty(mem, id) {
  const recent = mem.used.slice(-LIMITS.recentSites);
  const n = recent.filter((u) => u.ids?.includes(id)).length;
  return n ? { score: -Math.min(LIMITS.usageMax, LIMITS.usagePerSite * n), reason: `used in ${n} of the last ${recent.length} sites` } : { score: 0, reason: null };
}

// Average traits of designs the user picked for similar briefs (to nudge the brief's target profile).
export function learnedProfile(mem, ctx) {
  const rows = [];
  const slugs = new Set();
  for (const p of mem.picks) {
    if (overlap(p.context, ctx) < 0.34) continue;
    for (const t of p.picked_traits || []) if (AXES.some((a) => t[a])) { rows.push(t); slugs.add(p.slug); }
  }
  if (!rows.length) return { n: 0 };
  const axes = Object.fromEntries(AXES.map((a) => { const v = rows.map((r) => r[a]).filter(Boolean); return [a, v.length ? v.reduce((x, y) => x + y, 0) / v.length : null]; }));
  return { n: rows.length, briefs: [...slugs], axes };
}

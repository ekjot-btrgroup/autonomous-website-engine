// Compact, read-only snapshot of engine state for the admin dashboard (showcase/src/showcase/engine-data.json).
// Written on every showcase init/push. Zero tokens. Never contains secrets.
import fs from 'node:fs';
import path from 'node:path';
import { P, ROOT, readJson, writeJson, config } from './util.mjs';
import { presets, vocab } from './vocab.mjs';
import { WEIGHTS, DEFAULT_SECTIONS } from './score.mjs';
import { loadEvents, buildMemory, LIMITS } from './memory.mjs';

const dirs = (d) => (fs.existsSync(d) ? fs.readdirSync(d, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name) : []);
const safeRepo = (r) => (r ? String(r).replace(/\/\/[^@/]*@/, '//') .replace(/^https?:\/\/github\.com\//, '').replace(/\.git$/, '') : null);

function sites() {
  return dirs(P.sites).map((slug) => {
    const plan = readJson(path.join(P.sites, slug, '.engine', 'site.json'), null);
    if (!plan) return null;
    const sync = readJson(path.join(P.sites, slug, '.engine', 'sync.json'), null);
    return {
      slug, company: plan.company || slug, created_at: plan.created_at || null, picks: plan.picks || [],
      sections: (plan.sections || []).map(({ folder, id, slot, picked, reason }) => ({ folder, id, slot, picked: !!picked, reason: reason || '' })),
      missing: plan.missing || [], filled: !!plan.filled, theme: plan.theme || {},
      lovable_repo: safeRepo(sync?.repo), last_push: sync?.synced_at || null,
    };
  }).filter(Boolean);
}

function briefs() {
  if (!fs.existsSync(P.briefs)) return [];
  return fs.readdirSync(P.briefs).filter((f) => f.endsWith('.json') && !f.startsWith('_')).map((f) => {
    const b = readJson(path.join(P.briefs, f), null);
    if (!b) return null;
    const pick = (k) => b[k] ?? null;
    return {
      slug: b.slug || f.replace(/\.json$/, ''), company: b.company || null, niche: pick('niche') || pick('industry'), style: pick('style'), tone: pick('tone'),
      goals: [b.goals].flat().filter(Boolean), sections: b.sections || b.required_sections || [], animations: pick('animations'), scheme: pick('scheme'),
      colors: b.colors || {}, profile: b.profile || {}, picks: Number(b.picks || 3),
    };
  }).filter(Boolean);
}

function memory() {
  const ev = loadEvents();
  const mem = buildMemory(ev);
  const counts = { note: 0, pref: 0, shown: 0, pick: 0, used: 0 };
  for (const e of ev) if (e.type in counts) counts[e.type]++;
  const usage = {};
  for (const u of mem.used) for (const id of u.ids || []) usage[id] = (usage[id] || 0) + 1;
  return {
    counts,
    picks: mem.picks.map((p) => ({ slug: p.slug, at: p.at, picked: p.picked || [], shown: p.shown || [] })),
    usage, shown_ids: [...mem.shown],
    notes: ev.filter((e) => e.type === 'note').map((e) => ({ file: e._file, at: e.at, design: e.design, good: e.good || [], bad: e.bad || [], rating: e.rating, text: e.text || '', source: e.source || 'claude' })),
    prefs: ev.filter((e) => e.type === 'pref').map((e) => ({ file: e._file, at: e.at, context: e.context || [], prefer: e.prefer || [], avoid: e.avoid || [], text: e.text || '', source: e.source || 'claude' })),
  };
}

function releases() {
  const dir = path.join(ROOT, 'docs', 'releases');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md') && f !== 'README.md').sort().reverse().map((f) => {
    const t = fs.readFileSync(path.join(dir, f), 'utf8');
    const get = (re) => (t.match(re) || [])[1] || null;
    return {
      file: f, title: (t.split('\n')[0] || '').replace(/^# /, ''),
      at: get(/Released: ([^\n]+)/), merge: get(/Merge commit on main: `([0-9a-f]+)`/) || get(/Tag: `([^`]+)`/),
      branch: get(/From branch: `([^`]+)`/), changed: get(/Changed: ([^\n]+)/),
      commits: [...t.matchAll(/^\| `([0-9a-f]+)` \| (.*) \|$/gm)].map((m) => ({ sha: m[1], subject: m[2] })),
    };
  });
}

export function buildSnapshot(engineRepo = '') {
  const p = { ...presets() };
  delete p._note;
  return {
    engine_repo: engineRepo, showcase_url: config().showcase_url || '',
    sites: sites(), briefs: briefs(), memory: memory(), releases: releases(),
    scoring: { weights: WEIGHTS, limits: LIMITS, default_sections: DEFAULT_SECTIONS },
    presets: p, niche_families: vocab().niche_families || {},
  };
}

// Writes only when content changed, so generated_at does not create noise commits.
export function writeSnapshot(engineRepo = '') {
  const file = path.join(P.showcase, 'src', 'showcase', 'engine-data.json');
  if (!fs.existsSync(path.dirname(file))) return false;
  const next = buildSnapshot(engineRepo);
  const prev = readJson(file, null);
  if (prev) { const { generated_at, ...rest } = prev; if (JSON.stringify(rest) === JSON.stringify(next)) return false; }
  writeJson(file, { generated_at: new Date().toISOString(), ...next });
  return true;
}

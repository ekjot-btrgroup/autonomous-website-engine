// npm run shortlist -- <slug> [--top 10]
// npm run shortlist -- <slug> --why <file.json>   save Claude's one line per design: {"<id>": "why it suits this client"}
// Reads briefs/<slug>.json, ranks the whole library (docs/ALGORITHM.md), writes showcase/src/shortlists/<slug>.json
// and prints live links. The showcase page /s/<slug> lets the user pick. Zero Claude tokens.
import fs from 'node:fs';
import path from 'node:path';
import { P, args, die, loadMetas, readJson, writeJson, table, rel, config, liveLink } from './lib/util.mjs';
import { loadLibrary } from './lib/library.mjs';
import { rank, isUsable } from './lib/score.mjs';
import { record, loadEvents } from './lib/memory.mjs';
import { AXES } from './lib/vocab.mjs';

const a = args();
const cfg = config();
const slug = (a._[0] || '').replace(/^briefs\//, '').replace(/\.json$/, '') || die('Usage: npm run shortlist -- <brief-slug>   (brief file: briefs/<slug>.json)');
const briefFile = path.join(P.briefs, `${slug}.json`);
if (!fs.existsSync(briefFile)) die(`Missing ${rel(briefFile)}. Create it first (see briefs/_template.json).`);
const brief = readJson(briefFile);
const listFile = path.join(P.shortlists, `${slug}.json`);

// Save the one-line reasons Claude wrote for this client (no re-ranking).
if (a.why) {
  const list = readJson(listFile, null) || die(`Run npm run shortlist -- ${slug} first.`);
  const lines = readJson(a.why);
  const unknown = Object.keys(lines).filter((id) => !list.items.some((i) => i.id === id));
  for (const it of list.items) if (lines[it.id]) it.why = String(lines[it.id]).replace(/\s+/g, ' ').trim().slice(0, 200);
  writeJson(listFile, list);
  const missing = list.items.filter((i) => !i.why).map((i) => i.id);
  console.log(list.items.map((i) => `${String(i.rank).padStart(2)}. ${i.id} (${i.category}): ${i.why || '-- no line yet --'}`).join('\n'));
  if (missing.length) console.log(`Missing a line: ${missing.join(', ')}`);
  if (unknown.length) console.log(`Not in this shortlist (ignored): ${unknown.join(', ')}`);
  console.log(`Next: npm run sheet -- ${slug}`);
  process.exit(0);
}
const metas = loadLibrary();
if (!metas.length) die('The library is empty. Run: npm run add');

const events = loadEvents();
const r = rank(metas, brief, { top: Number(a.top || cfg.shortlist_size), freshSlots: cfg.fresh_slots, maxPerCategory: cfg.max_per_section_type, events });
const q = r.query;
const out = {
  slug, company: brief.company || slug, created_at: new Date().toISOString(), picks: Number(brief.picks || 3),
  brief: { niche: q.niche || brief.industry, style: brief.style, animations: q.animations, scheme: q.scheme, sections: q.sections },
  items: r.items.map(({ id, rank: rk, score, category, reasons, parts }) => ({ id, rank: rk, score, category, reasons, parts })),
};
// Keep earlier one-line reasons for designs that are still in the list.
const prevWhy = Object.fromEntries((readJson(listFile, null)?.items || []).filter((i) => i.why).map((i) => [i.id, i.why]));
for (const it of out.items) if (prevWhy[it.id]) it.why = prevWhy[it.id];
writeJson(listFile, out);

// Remember what was shown (freshness + "shown but skipped" learning). Skip if identical to the last showing.
const last = events.filter((e) => e.type === 'shown' && e.slug === slug).pop();
const ids = out.items.map((i) => i.id);
if (!last || last.ids.join() !== ids.join()) record('shown', { slug, context: [...q.ctx], ids });

const feel = AXES.map((x) => `${x} ${q.profile[x]}${q.source[x] === 'brief' ? '*' : ''}`).join(', ');
console.log(`Brief read as: niche=${q.niche || '-'} | sections=${q.sections.join(',')} | style=${[...q.style].join(',') || '-'} | goals=${[...q.goals].join(',') || '-'} | animations=${q.animations || 'any'} | scheme=${q.scheme || 'any'}`);
console.log(`Target feel (1-5, * = from brief): ${feel}${q.learned.n ? ` | adjusted ${Math.round(q.learned.weight * 100)}% from your picks for: ${q.learned.briefs.join(', ')}` : ''}`);
console.log(table(out.items.map((i) => ({ ...i, why: i.reasons.slice(0, 3).join('; ') })), ['rank', 'id', 'category', 'score', 'why']));
console.log(`\nLive links:\n${out.items.map((i) => `${String(i.rank).padStart(2)}. ${liveLink(`/d/${i.id}`)}`).join('\n')}`);
if (r.missing.length) console.log(`\nLibrary has no usable design for: ${r.missing.join(', ')}`);
if (r.excluded.length) console.log(`Excluded (needs conversion or crashes when rendered): ${r.excluded.map((e) => `${e.id} [${e.status}]`).join(', ')}`);
if (metas.some((m) => isUsable(m) && !m.tags)) console.log('Note: some designs are untagged; run npm run tag -- queue for better ranking.');
console.log(`\nPick page: ${liveLink(`/s/${slug}`)}${cfg.showcase_url ? '' : '  (set showcase_url in engine.config.json for full links)'}`);
console.log(`Next: write one line per design on why it suits ${out.company} -> npm run shortlist -- ${slug} --why <file.json>, then npm run sheet -- ${slug}`);

// Teach the engine. Every entry is one small file in memory/events/ (safe across parallel chats). Zero tokens.
//
// npm run remember -- <design-id> --good "bakeries, cafes" [--bad "law firms"] [--rating 1-5] [--note "text"]
//      a design suits / does not suit certain uses
// npm run remember -- --for "luxury jewellery" --prefer "serif, split, dark" [--avoid "playful, gradient"] [--note "text"]
//      a preference for a kind of brief (omit --for to make it global)
// npm run remember -- --brief <slug> --prefer "..." [--avoid "..."]
//      same, with the context taken from briefs/<slug>.json
// npm run remember -- list          what the engine has learned
// npm run remember -- forget <file> remove one entry (file name from `list`)
import fs from 'node:fs';
import path from 'node:path';
import { P, args, die, readJson, metaPath, table } from './lib/util.mjs';
import { contextOf, clean, terms } from './lib/vocab.mjs';
import { record, loadEvents, buildMemory } from './lib/memory.mjs';

const a = args();
const first = a._[0];
const list = (s) => String(s || '').split(/[,;]+/).map((x) => x.trim()).filter(Boolean);
const ctxList = (s) => [...contextOf(list(s).join(' '))];
// Preference words -> design terms (style, layout, media, typography, motion, scheme, category).
function designWords(s) {
  const out = new Set(), unknown = [];
  for (const w of list(s)) {
    const hits = ['style', 'layout', 'media', 'typography', 'motion', 'scheme', 'category'].flatMap((f) => clean(f, [w]).values);
    const viaTerms = [...terms(w)].filter((t) => !hits.includes(t));
    [...hits, ...viaTerms].forEach((t) => out.add(t));
    if (!hits.length && !viaTerms.length) unknown.push(w);
  }
  return { values: [...out], unknown };
}

if (first === 'list') {
  const ev = loadEvents();
  const mem = buildMemory(ev);
  const rows = ev.filter((e) => ['note', 'pref'].includes(e.type)).map((e) => ({
    file: e._file, type: e.type, at: e.at.slice(0, 10),
    what: e.type === 'note' ? `${e.design}: good ${(e.good || []).join(',') || '-'} | bad ${(e.bad || []).join(',') || '-'}${e.rating ? ` | ${e.rating}/5` : ''}` : `for ${(e.context || []).join(',') || 'all briefs'}: prefer ${(e.prefer || []).join(',') || '-'} | avoid ${(e.avoid || []).join(',') || '-'}`,
  }));
  console.log(`Learned notes and preferences:\n${table(rows, ['type', 'at', 'what', 'file'])}`);
  console.log(`\nPick history: ${mem.picks.length} briefs (${mem.picks.map((p) => `${p.slug}: ${(p.picked || []).join(',')}`).join(' | ') || '-'})`);
  const usage = {};
  for (const u of mem.used) for (const id of u.ids || []) usage[id] = (usage[id] || 0) + 1;
  console.log(`Most used designs: ${Object.entries(usage).sort((x, y) => y[1] - x[1]).slice(0, 8).map(([k, v]) => `${k} x${v}`).join(', ') || '-'}`);
  console.log(`Designs shown so far: ${mem.shown.size}`);
} else if (first === 'forget') {
  const f = path.join(P.memory, path.basename(a._[1] || die('Usage: npm run remember -- forget <file>')));
  if (!fs.existsSync(f)) die(`No such entry ${a._[1]}`);
  fs.rmSync(f);
  console.log(`Forgot ${path.basename(f)}.`);
} else if (first && !first.startsWith('-')) {
  if (!fs.existsSync(metaPath(first))) die(`Unknown design ${first}`);
  if (!a.good && !a.bad && !a.rating) die('Give at least --good, --bad or --rating');
  const rating = a.rating ? Math.max(1, Math.min(5, Math.round(Number(a.rating)))) : undefined;
  const file = record('note', { design: first, good: ctxList(a.good), bad: ctxList(a.bad), rating, text: a.note || [a.good && `good: ${a.good}`, a.bad && `bad: ${a.bad}`].filter(Boolean).join('; ') });
  console.log(`Saved note for ${first} (${path.basename(file)}). It boosts this design for matching briefs (capped, fades over ~6 months).`);
} else if (a.prefer || a.avoid) {
  let context = [];
  if (a.brief) { const b = readJson(path.join(P.briefs, `${a.brief}.json`)); context = [...contextOf([b.niche, b.industry, b.audience, b.style].filter(Boolean).join(' '))]; }
  else if (a.for) context = ctxList(a.for);
  const prefer = designWords(a.prefer), avoid = designWords(a.avoid);
  if (!prefer.values.length && !avoid.values.length) die(`No known design words in "${a.prefer || ''} ${a.avoid || ''}". Use words from knowledge/vocabulary.json (style, layout, media, typography, motion, scheme).`);
  const file = record('pref', { context, prefer: prefer.values, avoid: avoid.values, text: a.note || '' });
  console.log(`Saved preference ${context.length ? `for "${context.join(', ')}"` : '(all briefs)'}: prefer ${prefer.values.join(', ') || '-'}; avoid ${avoid.values.join(', ') || '-'} (${path.basename(file)}).`);
  const unk = [...prefer.unknown, ...avoid.unknown];
  if (unk.length) console.log(`Ignored unknown words: ${unk.join(', ')}`);
} else die('Usage: npm run remember -- <design-id> --good "..." | --for "..." --prefer "..." | list | forget <file>');

// npm run tag -- queue [--limit 40] [--offset 0] [--all]  -> compact summaries of untagged designs (what Claude reads; ~60 tokens each)
// npm run tag -- apply <file.json>           -> validate Claude's tags against knowledge/vocabulary.json and save
// npm run tag -- list                        -> table of every design and its tags
import fs from 'node:fs';
import { args, die, loadMetas, metaPath, readJson, writeJson, table, categoryOf } from './lib/util.mjs';
import { clean, vocab } from './lib/vocab.mjs';

const a = args();
const cmd = a._[0];

if (cmd === 'queue') {
  const metas = loadMetas().filter((m) => (a.all || !m.tags) && m.status !== 'needs_conversion');
  const limit = Number(a.limit || 40);
  const offset = Number(a.offset || 0);
  const batch = metas.slice(offset, offset + limit);
  if (!batch.length) { console.log('Nothing to tag.'); process.exit(0); }
  const v = vocab();
  console.log(`# designs ${offset + 1}-${offset + batch.length} of ${metas.length} to tag. Allowed values:`);
  for (const k of ['category', 'style', 'mood', 'industries', 'scheme', 'layout']) console.log(`# ${k}: ${v[k].join(' ')}`);
  console.log('# Write a JSON array to a file, one object per design:');
  console.log('# {"id","category","also":[],"style":[<=3],"mood":[<=2],"industries":[<=5 best fits],"scheme","layout":[<=2],"quality":1-5,"note":"<=12 words"}');
  console.log('# then: npm run tag -- apply <file>');
  for (const m of batch) {
    const s = m.summary || {};
    const line = { id: m.id, name: m.name, guess: m.guess?.category, h: s.headings, cta: s.ctas, t: s.texts?.slice(0, 4), colors: s.colors, dark: s.dark, fonts: s.fonts?.length ? s.fonts : undefined, img: s.images, motion: s.motion || undefined, lines: s.lines };
    console.log(JSON.stringify(line, (k, val) => (Array.isArray(val) && !val.length ? undefined : val)));
  }
} else if (cmd === 'apply') {
  const file = a._[1] || die('Usage: npm run tag -- apply <file.json>');
  let list = readJson(file);
  if (!Array.isArray(list)) list = [list];
  const rows = [];
  for (const t of list) {
    const f = metaPath(t.id || '');
    if (!t.id || !fs.existsSync(f)) { rows.push({ id: t.id, result: 'unknown id' }); continue; }
    const m = readJson(f);
    const warn = [];
    const pick = (field, val, max) => { const r = clean(field, val); warn.push(...r.dropped); return r.values.slice(0, max); };
    const category = pick('category', t.category, 1)[0];
    if (!category) { rows.push({ id: t.id, result: `invalid category "${t.category}"` }); continue; }
    m.tags = {
      category,
      also: pick('category', t.also || [], 3).filter((c) => c !== category),
      style: pick('style', t.style || [], 3),
      mood: pick('mood', t.mood || [], 2),
      industries: pick('industries', t.industries || [], 5),
      scheme: pick('scheme', t.scheme || [], 1)[0] || (m.summary?.dark === true ? 'dark' : m.summary?.dark === false ? 'light' : 'mixed'),
      layout: pick('layout', t.layout || [], 2),
      quality: Math.max(1, Math.min(5, Math.round(Number(t.quality) || 3))),
      note: String(t.note || '').slice(0, 100),
      by: 'claude', at: new Date().toISOString().slice(0, 10),
    };
    writeJson(f, m);
    rows.push({ id: t.id, result: 'saved', category, dropped: warn.join(' ') });
  }
  console.log(table(rows, ['id', 'result', 'category', 'dropped']));
} else if (cmd === 'list') {
  const rows = loadMetas().map((m) => ({ id: m.id, status: m.status, category: categoryOf(m), tagged: m.tags ? 'yes' : 'no', style: (m.tags?.style || []).join(','), industries: (m.tags?.industries || []).join(','), scheme: m.tags?.scheme || '', q: m.tags?.quality || '' }));
  console.log(table(rows, ['id', 'status', 'category', 'tagged', 'style', 'industries', 'scheme', 'q']));
} else die('Usage: npm run tag -- queue|apply <file>|list');

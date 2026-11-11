// npm run tag -- queue [--limit 40] [--offset 0] [--all]  -> compact summaries of designs to tag (~70 tokens each)
// npm run tag -- apply <file.json>                        -> validate tags against knowledge/vocabulary.json and save
// npm run tag -- list                                     -> table of every design and its traits
//
// Tags describe what a section IS (layout, style, feel, media, motion...). `origin` notes who its demo content is
// written for (<=2 niches); it is a minor ranking signal, so the same layout still serves any niche whose feel fits.
import fs from 'node:fs';
import { args, die, loadMetas, metaPath, readJson, writeJson, table, categoryOf } from './lib/util.mjs';
import { vocab, AXES } from './lib/vocab.mjs';
import { normalizeTags } from './lib/tags.mjs';
import { loadLibrary } from './lib/library.mjs';

const a = args();
const cmd = a._[0];

if (cmd === 'queue') {
  const metas = loadLibrary().filter((m) => (a.all || !m.tags) && m.status !== 'needs_conversion' && !m.hidden);
  const limit = Number(a.limit || 40), offset = Number(a.offset || 0);
  const batch = metas.slice(offset, offset + limit);
  if (!batch.length) { console.log('Nothing to tag.'); process.exit(0); }
  const v = vocab();
  console.log(`# designs ${offset + 1}-${offset + batch.length} of ${metas.length} to tag. Judge style and feel first; origin = niche its demo copy targets (minor).`);
  for (const k of ['category', 'layout', 'style', 'media', 'typography', 'motion', 'goals']) console.log(`# ${k}: ${v[k].join(' ')}`);
  console.log(`# origin (niches): ${v.niches.join(' ')}`);
  console.log(`# axes 1-5: ${AXES.map((x) => `${x} (${v.axes[x]})`).join('; ')}`);
  console.log('# One JSON array to a file, one object per design (omit fields you cannot judge; scheme/typography/motion/image_need default from code):');
  console.log('# {"id","category","also":[],"layout":[<=2],"style":[<=3],"tone":n,"energy":n,"luxury":n,"density":n,"warmth":n,"modernity":n,"media":[],"image_need":0-2,"goals":[<=3],"origin":[<=2],"quality":1-5,"note":"<=12 words"}');
  console.log('# Full pages (kind page): category "page"; judge the whole page; css = radius px, gradients, shadows, keyframes, glass, uppercase counts.');
  console.log('# then: npm run tag -- apply <file>');
  for (const m of batch) {
    const s = m.summary || {};
    const line = m.kind === 'page'
      ? { id: m.id, name: m.name, kind: 'page', sections: m.page_sections, h: s.headings?.slice(0, 3), cta: s.ctas?.slice(0, 3), colors: s.colors?.slice(0, 5), dark: s.dark, fonts: s.fonts, img: s.images, motion: s.motion || undefined, css: s.css }
      : { id: m.id, guess: m.guess?.category, h: s.headings, cta: s.ctas, t: s.texts?.slice(0, 4), colors: s.colors, dark: s.dark, fonts: s.fonts?.length ? s.fonts : undefined, img: s.images, motion: s.motion || undefined, lines: s.lines };
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
    const { tags: norm, warn } = normalizeTags(t, m);
    if (!norm) { rows.push({ id: t.id, result: warn[0] }); continue; }
    const tags = { ...norm, by: 'claude', at: new Date().toISOString().slice(0, 10) };
    const category = tags.category;
    m.tags = tags;
    writeJson(f, m);
    rows.push({ id: t.id, result: 'saved', category, missing_axes: AXES.filter((x) => !tags[x]).join(','), dropped: warn.join(' ') });
  }
  console.log(table(rows, ['id', 'result', 'category', 'missing_axes', 'dropped']));
} else if (cmd === 'list') {
  const rows = loadLibrary().map((m) => {
    const t = m.tags || {};
    return { id: m.id, status: m.hidden ? 'hidden' : m.status, category: categoryOf(m), tagged: m.tags ? (m.admin ? 'admin' : 'yes') : 'no', layout: (t.layout || []).join(','), style: (t.style || []).join(','), feel: AXES.map((x) => t[x] || '-').join(''), motion: t.motion || '', scheme: t.scheme || '', origin: (t.origin || []).join(','), q: t.quality || '' };
  });
  console.log(table(rows, ['id', 'status', 'category', 'tagged', 'layout', 'style', 'feel', 'motion', 'scheme', 'origin', 'q']));
  console.log(`feel = ${AXES.join('/')} (1-5)`);
} else die('Usage: npm run tag -- queue|apply <file>|list');

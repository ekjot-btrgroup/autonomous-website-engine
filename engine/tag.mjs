// npm run tag -- queue [--limit 40] [--offset 0] [--all]  -> compact summaries of designs to tag (~70 tokens each)
// npm run tag -- apply <file.json>                        -> validate tags against knowledge/vocabulary.json and save
// npm run tag -- list                                     -> table of every design and its traits
//
// Tags are niche-NEUTRAL: they describe what a section IS (layout, feel, media, motion...), never which industry
// it is for. The same layout can then serve a spa, a law firm or a SaaS depending on how its feel matches a brief.
import fs from 'node:fs';
import { args, die, loadMetas, metaPath, readJson, writeJson, table, categoryOf } from './lib/util.mjs';
import { clean, vocab, clampAxis, AXES } from './lib/vocab.mjs';

const a = args();
const cmd = a._[0];

// Values the script can read from code; used when the tagger leaves them out.
export function derived(m) {
  const s = m.summary || {};
  return {
    scheme: s.dark === true ? 'dark' : s.dark === false ? 'light' : 'mixed',
    typography: s.fonts?.includes('serif') ? 'serif' : s.fonts?.includes('mono') ? 'mono' : 'sans',
    motion: s.motion ? 'subtle' : 'none',
    image_need: !s.images ? 0 : s.images > 2 ? 2 : 1,
  };
}

if (cmd === 'queue') {
  const metas = loadMetas().filter((m) => (a.all || !m.tags) && m.status !== 'needs_conversion');
  const limit = Number(a.limit || 40), offset = Number(a.offset || 0);
  const batch = metas.slice(offset, offset + limit);
  if (!batch.length) { console.log('Nothing to tag.'); process.exit(0); }
  const v = vocab();
  console.log(`# designs ${offset + 1}-${offset + batch.length} of ${metas.length} to tag. Describe the SECTION, never an industry.`);
  for (const k of ['category', 'layout', 'style', 'media', 'typography', 'motion', 'goals']) console.log(`# ${k}: ${v[k].join(' ')}`);
  console.log(`# axes 1-5: ${AXES.map((x) => `${x} (${v.axes[x]})`).join('; ')}`);
  console.log('# One JSON array to a file, one object per design (omit fields you cannot judge; scheme/typography/motion/image_need default from code):');
  console.log('# {"id","category","also":[],"layout":[<=2],"style":[<=3],"tone":n,"energy":n,"luxury":n,"density":n,"warmth":n,"modernity":n,"media":[],"image_need":0-2,"goals":[<=3],"quality":1-5,"note":"<=12 words"}');
  console.log('# then: npm run tag -- apply <file>');
  for (const m of batch) {
    const s = m.summary || {};
    const line = { id: m.id, guess: m.guess?.category, h: s.headings, cta: s.ctas, t: s.texts?.slice(0, 4), colors: s.colors, dark: s.dark, fonts: s.fonts?.length ? s.fonts : undefined, img: s.images, motion: s.motion || undefined, lines: s.lines };
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
    const d = derived(m);
    const warn = [];
    const pick = (field, val, max) => { const r = clean(field, val ?? []); warn.push(...r.dropped); return r.values.slice(0, max); };
    const category = pick('category', t.category, 1)[0];
    if (!category) { rows.push({ id: t.id, result: `invalid category "${t.category}"` }); continue; }
    if (t.industries || t.niches) warn.push('(industries ignored)');
    const tags = {
      category,
      also: pick('category', t.also, 3).filter((c) => c !== category),
      layout: pick('layout', t.layout, 2),
      style: pick('style', t.style, 3),
      ...Object.fromEntries(AXES.map((x) => [x, clampAxis(t[x])])),
      media: pick('media', t.media, 3),
      image_need: [0, 1, 2].includes(Number(t.image_need)) ? Number(t.image_need) : d.image_need,
      typography: pick('typography', t.typography, 1)[0] || d.typography,
      motion: pick('motion', t.motion, 1)[0] || d.motion,
      goals: pick('goals', t.goals, 3),
      scheme: pick('scheme', t.scheme, 1)[0] || d.scheme,
      quality: Math.max(1, Math.min(5, Math.round(Number(t.quality) || 3))),
      note: String(t.note || '').slice(0, 100),
      by: 'claude', at: new Date().toISOString().slice(0, 10),
    };
    for (const x of AXES) if (tags[x] === null) delete tags[x];
    m.tags = tags;
    writeJson(f, m);
    rows.push({ id: t.id, result: 'saved', category, missing_axes: AXES.filter((x) => !tags[x]).join(','), dropped: warn.join(' ') });
  }
  console.log(table(rows, ['id', 'result', 'category', 'missing_axes', 'dropped']));
} else if (cmd === 'list') {
  const rows = loadMetas().map((m) => {
    const t = m.tags || {};
    return { id: m.id, status: m.status, category: categoryOf(m), tagged: m.tags ? 'yes' : 'no', layout: (t.layout || []).join(','), style: (t.style || []).join(','), feel: AXES.map((x) => t[x] || '-').join(''), motion: t.motion || '', scheme: t.scheme || '', q: t.quality || '' };
  });
  console.log(table(rows, ['id', 'status', 'category', 'tagged', 'layout', 'style', 'feel', 'motion', 'scheme', 'q']));
  console.log(`feel = ${AXES.join('/')} (1-5)`);
} else die('Usage: npm run tag -- queue|apply <file>|list');

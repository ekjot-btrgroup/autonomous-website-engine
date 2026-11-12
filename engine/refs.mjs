// Reference library (Framer templates read through the Framer connector).
//
//   npm run refs -- save <extract.json> --industry <category-sub> [--name <slug>]
//        stores references/<industry>/<slug>/dna.json from the output of engine/framer/extract.js,
//        downloads thumb/phone screenshots and cuts one image per homepage section.
//   npm run refs -- list [--industry <x>]        compact summary of every reference
//   npm run refs -- coverage                     references per industry vs the taxonomy
//   npm run refs -- match <brief-slug> [--n 10]  rank references for a brief, pick a diverse set
//
// Each reference also has meta.json (tags written by Claude after looking at it) and card.md (design notes).
// References teach proportion, rhythm, type, colour and motion. Never copy their text, images or code.
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { ROOT, P, args, die, readJson, writeJson, slugify, rel } from './lib/util.mjs';
import { loadEvents } from './lib/memory.mjs';

export const REFS = path.join(ROOT, 'references');
const TAX = () => readJson(path.join(ROOT, 'knowledge', 'industries', 'taxonomy.json'), {});
const a = args();

export function cleanTitle(t) {
  return String(t || '').replace(/\(copy\)/gi, '').replace(/^#\d+\s*\/\s*/, '').replace(/\s*[/·:|-]\s*.*(template|website).*$/i, '').replace(/\b(framer\s+)?template\b/gi, '').replace(/\(\s*\)/g, '').replace(/\s+/g, ' ').trim();
}
export function unwrap(raw) {
  let j = raw;
  for (let i = 0; i < 4 && j && !j.sections; i++) j = j.output ?? j.result ?? j;
  if (!j?.sections) throw new Error('This file is not an extract.js result (no sections).');
  return j;
}

export function loadRefs() {
  if (!fs.existsSync(REFS)) return [];
  const out = [];
  for (const ind of fs.readdirSync(REFS, { withFileTypes: true }).filter((e) => e.isDirectory())) {
    for (const r of fs.readdirSync(path.join(REFS, ind.name), { withFileTypes: true }).filter((e) => e.isDirectory())) {
      const dir = path.join(REFS, ind.name, r.name);
      const dna = readJson(path.join(dir, 'dna.json'), null); if (!dna) continue;
      out.push({ id: `${ind.name}/${r.name}`, industry: ind.name, dir, dna, meta: readJson(path.join(dir, 'meta.json'), {}), hasCard: fs.existsSync(path.join(dir, 'card.md')) });
    }
  }
  return out.sort((x, y) => x.id.localeCompare(y.id));
}

function save() {
  const f = a._[1] || die('Usage: npm run refs -- save <extract.json> --industry <category-sub>');
  const ind = slugify(a.industry || die('--industry is required (e.g. health-therapy)'));
  const dna = unwrap(readJson(path.resolve(f)));
  const name = slugify(a.name || cleanTitle(dna.title) || path.basename(f, '.json'));
  const dir = path.join(REFS, ind, name);
  fs.mkdirSync(dir, { recursive: true });
  dna.id = `${ind}/${name}`; dna.industry = ind; if (a.framer) dna.framer_id = String(a.framer); dna.source = 'framer'; dna.captured = new Date().toISOString().slice(0, 10);
  dna.rule = 'Reference only: learn proportion, rhythm, type, colour and motion. Never copy its text, images or code.';
  writeJson(path.join(dir, 'dna.json'), dna);
  const r = spawnSync('python3', ['-I', path.join(ROOT, 'engine', 'tools', 'refshots.py'), dir], { encoding: 'utf8' });
  if (r.status !== 0) die(`Screenshots failed for ${dna.id}: ${(r.stderr || r.stdout).trim().split('\n').pop()}`);
  console.log(`${dna.id}: ${dna.sections.length} sections, ${Object.keys(dna.effects || {}).map((k) => `${dna.effects[k]} ${k}`).join(', ') || 'no effects'}; ${r.stdout.trim()}`);
  console.log(`Next: write ${rel(path.join(dir, 'meta.json'))} and ${rel(path.join(dir, 'card.md'))}`);
}

export function summarize(r) {
  const d = r.dna, m = r.meta || {};
  const ts = d.textStyles || [];
  const disp = ts.find((t) => /display|h1|hero/i.test(`${t.name} ${t.tag}`)) || ts[0];
  const body = ts.find((t) => /^body|paragraph/i.test(t.name)) || ts.find((t) => /^p$/.test(t.tag || ''));
  const font = (t) => (t ? `${t.font || '(default)'} ${t.weight || ''} ${t.size || ''}`.trim() : '?');
  const fx = Object.entries(d.effects || {}).map(([k, v]) => `${v} ${k}`).join(', ') || 'static';
  return [
    `${r.id}  ${m.name || d.title}  q${m.quality ?? '?'}  ${m.scheme || ''} ${(m.style || []).join('/')}`,
    `  type: ${font(disp)} / ${font(body)}   colours: ${(d.colors || []).slice(0, 5).map((c) => c.name).join(', ')}`,
    `  sections: ${(m.sections || d.sections.map((s) => slugify(s.name || s.comp || s.type, 20))).join(' > ')}`,
    `  motion: ${fx}${m.signature ? `   signature: ${[].concat(m.signature).slice(0, 2).join('; ')}` : ''}`,
  ].join('\n');
}

function list() {
  const refs = loadRefs().filter((r) => !a.industry || r.industry === slugify(a.industry));
  for (const r of refs) console.log(summarize(r));
  console.log(`\n${refs.length} reference(s).`);
}

function coverage() {
  const refs = loadRefs(); const tax = TAX(); const by = {};
  for (const r of refs) by[r.industry] = (by[r.industry] || 0) + 1;
  for (const [cat, subs] of Object.entries(tax)) {
    if (!Array.isArray(subs)) continue;
    console.log(`${cat.padEnd(12)} ${subs.map((s) => `${s} ${by[`${cat}-${s}`] || 0}`).join('  ')}`);
  }
  const extra = Object.keys(by).filter((k) => !Object.entries(tax).some(([c, s]) => Array.isArray(s) && s.some((x) => `${c}-${x}` === k)));
  if (extra.length) console.log(`other        ${extra.map((k) => `${k} ${by[k]}`).join('  ')}`);
  const missing = refs.filter((r) => !r.meta?.name || !r.hasCard).map((r) => r.id);
  console.log(`\n${refs.length} references in ${Object.keys(by).length} industries.${missing.length ? ` Missing meta/card: ${missing.join(', ')}` : ''}`);
}

// ---------- matching ----------
const FEEL = ['tone', 'energy', 'luxury', 'density', 'warmth', 'modernity'];
const famOf = (f = '') => (/serif|garamond|playfair|fraunces|cormorant|baskerville|didot|bodoni|lora|merriweather|newsreader|instrument serif|dm serif|gloock|canela|editorial/i.test(f) && !/sans/i.test(f) ? 'serif' : /mono|code/i.test(f) ? 'mono' : 'sans');
export function profile(r) {
  const m = r.meta || {}, d = r.dna;
  const disp = (d.textStyles || []).find((t) => /display|h1|hero|heading/i.test(`${t.name} ${t.tag}`));
  return { display: m.fonts?.display || disp?.font || '', family: m.fonts?.class || famOf(m.fonts?.display || disp?.font), scheme: m.scheme || 'light', hue: m.hue || 'neutral', style: (m.style || [])[0] || 'unknown', hero: m.hero || 'unknown' };
}
export function scoreRef(r, brief, mem = {}) {
  const m = r.meta || {}; let s = 0; const why = [];
  const ind = slugify(brief.industry || ''); const rel2 = (TAX().related || {})[ind] || [];
  if (r.industry === ind) { s += 40; why.push('same industry'); }
  else if ((m.also || []).includes(ind)) { s += 28; why.push('suits this industry'); }
  else if (rel2.includes(r.industry)) { s += 18; why.push('related industry'); }
  else if (ind && r.industry.split('-')[0] === ind.split('-')[0]) { s += 10; why.push('same category'); }
  const feel = brief.feel || {};
  const keys = FEEL.filter((k) => feel[k] && m.feel?.[k]);
  if (keys.length) { const d = keys.reduce((x, k) => x + Math.abs(feel[k] - m.feel[k]), 0) / keys.length; s += Math.round(30 - d * 10); if (d <= 1) why.push('matching feel'); }
  const words = String(brief.style_words || brief.tone || '').toLowerCase().split(/[^a-z]+/).filter(Boolean);
  const hit = (m.style || []).filter((w) => words.includes(w)).length; if (hit) { s += hit * 8; why.push('style words'); }
  s += ((m.quality ?? 3) - 3) * 6;
  if (brief.scheme && m.scheme === brief.scheme) s += 4;
  s += mem[r.id] || 0;
  return { s, why };
}
// Greedy diverse pick: best score first, then penalise repeats of display font, scheme+hue, style and hero layout.
export function diversePick(scored, n = 10) {
  const out = []; const seen = { display: {}, look: {}, style: {}, hero: {} };
  const pool = [...scored];
  while (out.length < n && pool.length) {
    let best = null, bv = -Infinity;
    for (const c of pool) {
      const p = profile(c.r);
      const pen = (seen.display[p.display] ? 25 : 0) + (seen.look[`${p.scheme}/${p.hue}`] || 0) * 12 + (seen.style[p.style] || 0) * 10 + (seen.hero[p.hero] || 0) * 8;
      if (c.s - pen > bv) { bv = c.s - pen; best = c; }
    }
    const p = profile(best.r);
    seen.display[p.display] = 1; seen.look[`${p.scheme}/${p.hue}`] = (seen.look[`${p.scheme}/${p.hue}`] || 0) + 1;
    seen.style[p.style] = (seen.style[p.style] || 0) + 1; seen.hero[p.hero] = (seen.hero[p.hero] || 0) + 1;
    out.push(best); pool.splice(pool.indexOf(best), 1);
  }
  return out;
}

// What the user taught: tastes (remember --prefer/--avoid) and past picks (npm run final records them).
export function memoryBonus(refs, brief) {
  const bonus = {}; const ctx = `${brief.industry || ''} ${brief.business || ''} ${brief.style_words || ''}`.toLowerCase();
  const ev = loadEvents();
  for (const e of ev.filter((x) => x.type === 'pref')) {
    const scope = (e.context || []).map(String);
    if (scope.length && !scope.some((w) => ctx.includes(w.toLowerCase()))) continue;
    for (const r of refs) {
      const words = [...(r.meta.style || []), r.meta.hero, r.meta.scheme, r.meta.fonts?.class].filter(Boolean).map((w) => String(w).toLowerCase());
      const hit = (list) => (list || []).filter((w) => words.some((x) => x.includes(String(w).toLowerCase()))).length;
      bonus[r.id] = (bonus[r.id] || 0) + Math.min(12, hit(e.prefer) * 6) - Math.min(20, hit(e.avoid) * 10);
    }
  }
  for (const e of ev.filter((x) => x.type === 'pick' && x.version === 2)) for (const id of e.refs || []) bonus[id] = Math.min(12, (bonus[id] || 0) + 4);
  return bonus;
}

function match() {
  const slug = a._[1] || die('Usage: npm run refs -- match <brief-slug>');
  const brief = readJson(path.join(P.briefs, `${slug}.json`));
  const n = Number(a.n || 10);
  const refs = loadRefs(); const mem = memoryBonus(refs, brief);
  const scored = refs.map((r) => ({ r, ...scoreRef(r, brief, mem) })).sort((x, y) => y.s - x.s);
  if (!scored.length) die('No references yet.');
  const picked = diversePick(scored, n);
  picked.forEach((c, i) => { const p = profile(c.r); console.log(`${String(i + 1).padStart(2)}. ${c.r.id}  score ${c.s}  [${p.scheme}/${p.hue}, ${p.family} ${p.display || '?'}, ${p.style}, hero ${p.hero}]  ${c.why.join(', ')}`); });
  writeJson(path.join(P.briefs, `${slug}.refs.json`), picked.map((c) => ({ id: c.r.id, score: c.s, why: c.why })));
  console.log(`\nSaved ${rel(path.join(P.briefs, `${slug}.refs.json`))}. Read each reference's card.md before writing directions.`);
}

const cmd = a._[0];
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname)) {
  if (cmd === 'save') save();
  else if (cmd === 'list') list();
  else if (cmd === 'coverage') coverage();
  else if (cmd === 'match') match();
  else die('Usage: npm run refs -- save|list|coverage|match');
}

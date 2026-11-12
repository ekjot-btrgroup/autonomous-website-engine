// Anti-slop check for generated designs: generic AI copy, invented claims, default looks.
//
//   npm run slop -- <file|folder> [...] [--json] [--warn-only]
//
// Scans .html .tsx .jsx .ts .css .json .md files (skips node_modules, dist). Prints file:line  level  rule  excerpt.
// Exit code 1 when any error is found (unless --warn-only). Rules live in knowledge/anti-slop.json.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, args, readJson, walk, rel } from './lib/util.mjs';

const EXT = /\.(html?|tsx|jsx|ts|css|json|md)$/i;
export const RULES = () => readJson(path.join(ROOT, 'knowledge', 'anti-slop.json'), { phrases: { error: [], warn: [] }, generic_headings: [], fake_claims: [], default_fonts: [], limits: {} });

const hueOf = (r, g, b) => {
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b); if (mx === mn) return { h: 0, s: 0 };
  const d = mx - mn; let h = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return { h: h * 60, s: d / (1 - Math.abs(mx + mn - 1) || 1) };
};
function colourHues(str) {
  const out = [];
  for (const m of str.matchAll(/#([0-9a-f]{6}|[0-9a-f]{3})\b/gi)) {
    let h = m[1]; if (h.length === 3) h = [...h].map((c) => c + c).join('');
    out.push(hueOf(...[0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255)));
  }
  for (const m of str.matchAll(/rgba?\(\s*(\d+)[ ,]+(\d+)[ ,]+(\d+)/gi)) out.push(hueOf(+m[1] / 255, +m[2] / 255, +m[3] / 255));
  for (const m of str.matchAll(/hsla?\(\s*([\d.]+)(?:deg)?[ ,]+([\d.]+)%/gi)) out.push({ h: +m[1], s: +m[2] / 100 });
  for (const m of str.matchAll(/\b(?:from|via|to)-(purple|violet|indigo|fuchsia|blue|pink)-\d{2,3}\b/g)) out.push({ h: { purple: 270, violet: 260, indigo: 240, fuchsia: 295, blue: 220, pink: 330 }[m[1]], s: 0.8 });
  return out;
}
// The classic "AI gradient": two or more saturated stops between blue and magenta.
export const isAiGradient = (str) => colourHues(str).filter((c) => c.s > 0.35 && c.h >= 215 && c.h <= 320).length >= 2;

const lineOf = (src, idx) => src.slice(0, idx).split('\n').length;
const excerpt = (src, idx, len = 60) => src.slice(Math.max(0, idx - 15), idx + len).replace(/\s+/g, ' ').trim().slice(0, 80);
// Visible text only: drop tags, class lists, imports, URLs and code-ish lines so copy rules do not fire on code.
export function visibleText(src, file) {
  if (/\.css$/i.test(file)) return '';
  let t = src.replace(/<(script|style)[\s\S]*?<\/\1>/gi, (m) => ' '.repeat(m.length));
  t = t.replace(/\b(class|className|href|src|id|key|style|d|viewBox|fill|stroke|rel|type|import|from)\s*=?\s*(["'`])[^"'`]*\2/g, (m) => ' '.repeat(m.length));
  t = t.replace(/^\s*import .*$/gm, (m) => ' '.repeat(m.length)).replace(/https?:\/\/\S+/g, (m) => ' '.repeat(m.length));
  return t;
}

export function checkSource(src, file, rules = RULES()) {
  const out = [];
  const add = (level, rule, idx, note) => out.push({ file, line: idx == null ? 0 : lineOf(src, idx), level, rule, text: note || (idx == null ? '' : excerpt(src, idx)) });
  const text = visibleText(src, file);
  const lim = { exclamations: 2, learn_more_ctas: 1, emoji: 0, backdrop_blur: 3, gradient_text: 1, same_grid: 2, em_dashes: 3, ...rules.limits };

  for (const level of ['error', 'warn']) for (const p of rules.phrases?.[level] || []) {
    for (const m of text.matchAll(new RegExp(`\\b${p}\\b`, 'gi'))) add(level, 'generic copy', m.index);
  }
  for (const p of rules.fake_claims || []) for (const m of text.matchAll(new RegExp(p, 'gi'))) add('error', 'unverified claim (use a fact from the brief or a marked placeholder)', m.index);
  const headRe = /<(h[1-3])\b[^>]*>\s*([^<{]{2,60}?)\s*<\/\1>/gi;
  for (const m of src.matchAll(headRe)) if ((rules.generic_headings || []).includes(m[2].toLowerCase().replace(/[.!:?]$/, '').trim())) add('warn', 'generic heading (say something specific to this brand)', m.index);

  const count = (re) => [...text.matchAll(re)];
  const ex = count(/[A-Za-z]!(?=\s|<|"|$)/g); if (ex.length > lim.exclamations) add('warn', `${ex.length} exclamation marks`, ex[0].index);
  const lm = count(/\b(learn more|read more|click here)\b/gi); if (lm.length > lim.learn_more_ctas) add('warn', `${lm.length} vague CTAs ("learn more" / "click here")`, lm[0].index);
  const em = count(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu); if (em.length > lim.emoji) add('error', `${em.length} emoji used as icons or decoration`, em[0].index);
  const dash = count(/—/g); if (dash.length > lim.em_dashes) add('warn', `${dash.length} em dashes (an AI copy tell)`, dash[0].index);

  // look
  for (const m of src.matchAll(/(linear|radial|conic)-gradient\(([^;"'`]{0,300})\)/gi)) if (isAiGradient(m[2])) add('error', 'blue-to-purple "AI" gradient', m.index);
  for (const m of src.matchAll(/(?:class|className)\s*=\s*\{?\s*["'`]([^"'`]*\bbg-gradient-to-[a-z]+\b[^"'`]*)["'`]/g)) if (isAiGradient(m[1])) add('error', 'blue-to-purple "AI" gradient', m.index);
  const gt = [...src.matchAll(/bg-clip-text|background-clip:\s*text/g)]; if (gt.length > lim.gradient_text) add('warn', `${gt.length} gradient-text headlines`, gt[0].index);
  const bb = [...src.matchAll(/backdrop-blur|backdrop-filter:\s*blur/g)]; if (bb.length > lim.backdrop_blur) add('warn', `${bb.length} frosted-glass surfaces`, bb[0].index);
  const grids = new Map();
  for (const m of src.matchAll(/\b(?:md:|lg:)?grid-cols-(\d)\b|grid-template-columns:\s*repeat\((\d)/g)) { const k = m[1] || m[2]; grids.set(k, [...(grids.get(k) || []), m.index]); }
  for (const [k, idx] of grids) if (+k >= 3 && idx.length > lim.same_grid) add('warn', `${idx.length} identical ${k}-column card grids`, idx[0]);

  const fams = new Set();
  for (const m of src.matchAll(/font-family:\s*([^;}"]+)/gi)) fams.add(m[1].split(',')[0].replace(/["']/g, '').trim());
  for (const m of src.matchAll(/fonts\.googleapis\.com\/css2?\?([^"'\s>]+)/g)) for (const f of m[1].matchAll(/family=([^:&]+)/g)) fams.add(decodeURIComponent(f[1].replace(/\+/g, ' ')));
  const named = [...fams].filter((f) => !/^(var\(|inherit|ui-|-apple|sans-serif|serif|monospace|Georgia$)/i.test(f));
  if (named.length && named.every((f) => (rules.default_fonts || []).some((d) => d.toLowerCase() === f.toLowerCase()))) add('warn', `only default fonts (${named.join(', ')}): the art direction must justify them`, null, named.join(', '));
  return out;
}

export function checkPaths(paths, rules = RULES()) {
  const files = paths.flatMap((p) => (fs.existsSync(p) && fs.statSync(p).isDirectory() ? walk(p) : [p])).filter((f) => EXT.test(f) && !/(node_modules|dist|\.engine|image-credits|package(-lock)?\.json|components\/ui\/)/.test(f));
  return files.flatMap((f) => checkSource(fs.readFileSync(f, 'utf8'), f, rules));
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname)) {
  const a = args();
  if (!a._.length) { console.error('Usage: npm run slop -- <file|folder> [...] [--json] [--warn-only]'); process.exit(1); }
  const found = checkPaths(a._.map((p) => path.resolve(p)));
  if (a.json) console.log(JSON.stringify(found, null, 1));
  else {
    for (const f of found) console.log(`${rel(f.file)}:${f.line}  ${f.level.toUpperCase().padEnd(5)}  ${f.rule}${f.text ? `  | ${f.text}` : ''}`);
    const e = found.filter((f) => f.level === 'error').length;
    console.log(found.length ? `\n${e} error(s), ${found.length - e} warning(s).` : 'Clean: no slop found.');
  }
  if (!a['warn-only'] && found.some((f) => f.level === 'error')) process.exitCode = 1;
}

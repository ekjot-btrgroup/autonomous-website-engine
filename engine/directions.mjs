// The 10 art directions for a brief: shape check + diversity rules (user rule: the 10 must clearly differ).
//
//   npm run directions -- check <slug>     validates briefs/<slug>.directions.json, prints every problem
//   npm run directions -- show <slug>      compact table of the 10
//
// A direction: { n, name, concept, refs[], style, scheme, palette{bg,surface,ink,muted,accent,line},
//   fonts{display, body, class}, hero, sections[], motion (1-5), signature[], imagery, why }
import path from 'node:path';
import { P, args, die, readJson } from './lib/util.mjs';
import { loadRefs } from './refs.mjs';

const REQ = ['name', 'concept', 'refs', 'style', 'scheme', 'palette', 'fonts', 'hero', 'sections', 'motion', 'signature', 'imagery', 'why'];
const hex = (h) => { const m = String(h || '').trim().match(/^#?([0-9a-f]{6}|[0-9a-f]{3})$/i); if (!m) return null; let s = m[1]; if (s.length === 3) s = [...s].map((c) => c + c).join(''); return [0, 2, 4].map((i) => parseInt(s.slice(i, i + 2), 16)); };
const dist = (a, b) => Math.sqrt(a.reduce((s, v, i) => s + (v - b[i]) ** 2, 0));
const lum = ([r, g, b]) => { const f = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
export const contrast = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
export function hueFamily(rgb) {
  const [r, g, b] = rgb.map((v) => v / 255); const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, d = mx - mn;
  if (d < 0.08 || (l > 0.92) || (l < 0.08)) return l < 0.2 ? 'black' : 'neutral';
  let h = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; h = (h * 60 + 360) % 360;
  const s = d / (1 - Math.abs(2 * l - 1));
  if (s < 0.18) return 'neutral';
  if (h < 15 || h >= 345) return 'red'; if (h < 40) return l < 0.45 ? 'brown' : 'orange'; if (h < 65) return 'yellow';
  if (h < 160) return 'green'; if (h < 195) return 'teal'; if (h < 255) return 'blue'; if (h < 290) return 'purple'; return 'pink';
}

export function checkDirections(dirs, brief = {}, refIds = null) {
  const errors = [], warns = [];
  if (!Array.isArray(dirs)) return { errors: ['The file must be a JSON array of directions.'], warns };
  if (dirs.length !== 10) errors.push(`Need exactly 10 directions (found ${dirs.length}).`);
  dirs.forEach((d, i) => {
    const tag = `#${i + 1} ${d?.name || ''}`.trim();
    for (const k of REQ) if (d?.[k] === undefined || d[k] === '' || (Array.isArray(d[k]) && !d[k].length)) errors.push(`${tag}: missing ${k}`);
    for (const k of ['bg', 'ink', 'accent']) if (d?.palette && !hex(d.palette[k])) errors.push(`${tag}: palette.${k} must be a hex colour`);
    if (d?.palette && hex(d.palette.bg) && hex(d.palette.ink) && contrast(hex(d.palette.bg), hex(d.palette.ink)) < 7) errors.push(`${tag}: ink on bg contrast ${contrast(hex(d.palette.bg), hex(d.palette.ink)).toFixed(1)} (need 7+ for body text)`);
    if (d?.palette && hex(d.palette.bg) && hex(d.palette.muted) && contrast(hex(d.palette.bg), hex(d.palette.muted)) < 4.5) errors.push(`${tag}: muted text on bg contrast ${contrast(hex(d.palette.bg), hex(d.palette.muted)).toFixed(1)} (need 4.5+)`);
    if (refIds && Array.isArray(d?.refs)) for (const r of d.refs) if (!refIds.has(r)) warns.push(`${tag}: unknown reference ${r}`);
    if (d?.motion && (d.motion < 1 || d.motion > 5)) errors.push(`${tag}: motion must be 1-5`);
    if (brief.animations === 'none' && d?.motion > 1) warns.push(`${tag}: brief asked for no animations (motion should be 1)`);
    if (brief.animations === 'subtle' && d?.motion > 3) warns.push(`${tag}: brief asked for subtle animations (motion 1-3)`);
  });
  const ok = dirs.filter((d) => d?.palette && hex(d.palette.bg) && hex(d.palette.accent));
  // fonts
  const disp = new Map();
  for (const d of dirs) { const f = String(d?.fonts?.display || '').toLowerCase(); if (f) disp.set(f, [...(disp.get(f) || []), d.name]); }
  if (!brief.fonts?.heading) for (const [f, names] of disp) if (names.length > 1) errors.push(`Heading font "${f}" used by ${names.join(', ')}: every direction needs its own heading font.`);
  const classes = new Set(dirs.map((d) => d?.fonts?.class).filter(Boolean));
  if (!brief.fonts?.heading && classes.size < 3) errors.push(`Typography classes used: ${[...classes].join(', ') || 'none'}. Mix serif, sans and display (3+).`);
  // colour
  for (let i = 0; i < ok.length; i++) for (let j = i + 1; j < ok.length; j++) {
    const a = ok[i].palette, b = ok[j].palette;
    if (dist(hex(a.bg), hex(b.bg)) < 28 && dist(hex(a.accent), hex(b.accent)) < 60) errors.push(`${ok[i].name} and ${ok[j].name} have nearly the same palette (background and accent).`);
  }
  const brand = !!(brief.colors && (brief.colors.primary || brief.colors.accent));
  const fams = new Set(ok.map((d) => hueFamily(hex(d.palette.accent))));
  if (!brand && fams.size < 6) errors.push(`Accent colour families: ${[...fams].join(', ')} (${fams.size}). Need 6+ different main colours.`);
  const darkish = ok.filter((d) => lum(hex(d.palette.bg)) < 0.2 || ['dark', 'colour', 'mixed'].includes(d.scheme)).length;
  const light = ok.filter((d) => lum(hex(d.palette.bg)) >= 0.6).length;
  if (brief.scheme !== 'light' && darkish < 3) errors.push(`Only ${darkish} dark, mixed or colour-led directions (need 3+).`);
  if (brief.scheme !== 'dark' && light < 3) errors.push(`Only ${light} light directions (need 3+).`);
  if (brand) { const bgs = new Set(ok.map((d) => hueFamily(hex(d.palette.bg)) + Math.round(lum(hex(d.palette.bg)) * 4))); if (bgs.size < 5) errors.push(`Brand colours given: still vary the backgrounds and colour roles (only ${bgs.size} distinct backgrounds).`); }
  // style, hero, order
  const styles = new Set(dirs.map((d) => d?.style).filter(Boolean)); if (styles.size < 6) errors.push(`Style families: ${styles.size} (${[...styles].join(', ')}). Need 6+.`);
  const heroes = new Set(dirs.map((d) => d?.hero).filter(Boolean)); if (heroes.size < 6) errors.push(`Hero layouts: ${heroes.size} (${[...heroes].join(', ')}). Need 6+.`);
  const orders = new Map(); for (const d of dirs) { const k = (d?.sections || []).join('>'); if (k) orders.set(k, [...(orders.get(k) || []), d.name]); }
  for (const [, names] of orders) if (names.length > 1) errors.push(`Same section order: ${names.join(', ')}.`);
  const motions = new Set(dirs.map((d) => d?.motion)); if (brief.animations !== 'none' && motions.size < 3) warns.push('Motion levels are very similar across the 10; spread them within what the brief allows.');
  const refsUsed = new Map(); for (const d of dirs) for (const r of d?.refs || []) refsUsed.set(r, (refsUsed.get(r) || 0) + 1);
  for (const [r, n] of refsUsed) if (n > 2) warns.push(`Reference ${r} leads ${n} directions; spread the references.`);
  return { errors, warns };
}

const a = args();
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname)) {
  const [cmd, slug] = a._;
  if (!slug) die('Usage: npm run directions -- check|show <slug>');
  const dirs = readJson(path.join(P.briefs, `${slug}.directions.json`));
  const brief = readJson(path.join(P.briefs, `${slug}.json`), {});
  if (cmd === 'show') {
    dirs.forEach((d, i) => console.log(`${String(i + 1).padStart(2)}. ${d.name.padEnd(22)} ${String(d.style).padEnd(15)} ${String(d.scheme).padEnd(6)} ${d.palette?.bg} ${d.palette?.accent}  ${d.fonts?.display} / ${d.fonts?.body}  hero ${d.hero}  motion ${d.motion}`));
  } else {
    const { errors, warns } = checkDirections(dirs, brief, new Set(loadRefs().map((r) => r.id)));
    for (const e of errors) console.log(`ERROR  ${e}`);
    for (const w of warns) console.log(`WARN   ${w}`);
    console.log(errors.length ? `\n${errors.length} problem(s): fix the directions and check again.` : `OK: 10 distinct directions${warns.length ? ` (${warns.length} warning(s))` : ''}.`);
    if (errors.length) process.exitCode = 1;
  }
}

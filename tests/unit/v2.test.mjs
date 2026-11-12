import { test } from 'node:test';
import assert from 'node:assert/strict';

const { slugFromUrl, summarize } = await import('../../engine/capture.mjs');
const { checkSource, isAiGradient } = await import('../../engine/slop.mjs');

test('reference slugs come from the published address', () => {
  assert.equal(slugFromUrl('https://calm-studio.framer.website/'), 'calm-studio');
  assert.equal(slugFromUrl('https://www.northwind-dental.com/about'), 'northwind-dental-about');
  assert.equal(slugFromUrl('file:///x/test-templates/spa-html-template/index.html'), 'spa-html-template');
});

test('reference summary is compact and complete', () => {
  const s = summarize({ id: 'spa/calm', licence: 'purchased', section_count: 2, page_height: 3000, colour: { scheme: 'light', page_bg: '#fff', accents: [{ value: '#c96' }], text: [{ value: '#222' }] }, typography: { display: { family: 'Fraunces', weight: 600, size: 88 }, body: { family: 'Outfit', weight: 400, size: 17 } }, components: { radius: [{ value: 24 }] }, motion: { scroll_reveals: 9 }, sections: [{ kind: 'hero', layout: 'split' }, { kind: 'footer', layout: 'stacked' }] });
  assert.match(s, /Fraunces 600 88px/); assert.match(s, /hero\(split\) > footer/); assert.match(s, /9 scroll reveals/);
});

test('flags the blue-to-purple AI gradient but not brand gradients', () => {
  assert.ok(isAiGradient('135deg,#6366f1,#a855f7'));
  assert.ok(isAiGradient('from-indigo-500 via-purple-500 to-pink-500'));
  assert.ok(!isAiGradient('180deg,#f4e9dc,#d9b48f'));
  assert.ok(!isAiGradient('90deg,#0f766e,#14b8a6'));
});

test('slop check finds generic copy, fake claims, emoji; ignores class names and URLs', () => {
  const bad = checkSource('<h1>Elevate your smile 🚀</h1><p>Trusted by 10,000+ happy patients.</p><h2>Why Choose Us</h2>', 'x.html');
  const rules = bad.map((f) => f.rule).join('|');
  assert.match(rules, /generic copy/); assert.match(rules, /unverified claim/); assert.match(rules, /emoji/); assert.match(rules, /generic heading/);
  const good = checkSource('<a class="seamless-btn" href="https://x.com/unlock-your-door">Book a cleaning for Tuesday</a><h2>Two hygienists, no rush</h2>', 'y.html');
  assert.deepEqual(good, []);
});

const { checkDirections, hueFamily, contrast } = await import('../../engine/directions.mjs');
const { cleanTitle, unwrap, diversePick } = await import('../../engine/refs.mjs');

const mk = (i, over = {}) => ({
  n: i + 1, name: `D${i}`, concept: 'c', refs: ['x/y'], why: 'w', imagery: 'i', signature: ['s'], motion: (i % 3) + 1,
  style: ['editorial', 'minimal', 'swiss', 'bold-graphic', 'luxury', 'warm-organic', 'playful', 'technical', 'retro', 'brutalist'][i],
  hero: ['split-image-right', 'full-bleed-image', 'centered-type', 'big-type-editorial', 'collage', 'asymmetric', 'card-stack', 'product-shot', 'split-image-left', 'full-bleed-video'][i],
  scheme: i < 4 ? 'dark' : 'light',
  palette: i < 4
    ? { bg: ['#101010', '#0b1d2a', '#1e140c', '#12081f'][i], ink: '#f5f2ea', muted: '#b9b4a8', accent: ['#e4572e', '#2ec4b6', '#e9c46a', '#9d4edd'][i] }
    : { bg: ['#ffffff', '#f6f1e8', '#eef3ef', '#fdf6f0', '#f2f4f8', '#fbfbf7'][i - 4], ink: '#141414', muted: '#555555', accent: ['#1d4ed8', '#2f6f4e', '#b91c1c', '#be185d', '#7c3aed', '#a16207'][i - 4] },
  fonts: { display: `Font${i}`, body: 'Inter', class: ['serif', 'sans', 'display'][i % 3] },
  sections: ['hero', 'services', `s${i}`, 'contact'],
  ...over,
});

test('ten distinct directions pass; duplicates and weak contrast are caught', () => {
  const ok = Array.from({ length: 10 }, (_, i) => mk(i));
  assert.deepEqual(checkDirections(ok).errors, []);
  const dup = ok.map((d, i) => (i === 1 ? { ...d, fonts: { ...d.fonts, display: 'Font0' }, palette: { ...ok[0].palette }, sections: ok[0].sections } : d));
  const e = checkDirections(dup).errors.join('\n');
  assert.match(e, /Heading font "font0"/); assert.match(e, /nearly the same palette/); assert.match(e, /Same section order/);
  const low = ok.map((d, i) => (i === 5 ? { ...d, palette: { ...d.palette, ink: '#9a9a9a' } } : d));
  assert.match(checkDirections(low).errors.join('\n'), /contrast/);
  assert.match(checkDirections(ok.slice(0, 9)).errors.join('\n'), /exactly 10/);
});

test('colour helpers', () => {
  assert.equal(hueFamily([234, 88, 12]), 'orange'); assert.equal(hueFamily([29, 78, 216]), 'blue'); assert.equal(hueFamily([245, 242, 234]), 'neutral');
  assert.ok(contrast([0, 0, 0], [255, 255, 255]) > 20);
});

test('reference titles, extract unwrapping and diverse picking', () => {
  assert.equal(cleanTitle('#015 / Skandic / Home Rental Website Template (copy)'), 'Skandic');
  assert.equal(cleanTitle('Irish Cafe (Template) (copy)'), 'Irish Cafe');
  assert.equal(unwrap({ output: { result: { sections: [1] } } }).sections.length, 1);
  const r = (id, display, scheme, style, s) => ({ r: { id, dna: {}, meta: { fonts: { display }, scheme, style: [style], hero: id } }, s });
  const picked = diversePick([r('a', 'Fraunces', 'light', 'editorial', 90), r('b', 'Fraunces', 'light', 'editorial', 88), r('c', 'Inter', 'dark', 'technical', 70)], 2);
  assert.deepEqual(picked.map((p) => p.r.id), ['a', 'c']);
});

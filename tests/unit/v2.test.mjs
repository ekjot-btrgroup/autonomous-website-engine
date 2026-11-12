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

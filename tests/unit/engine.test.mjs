import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const { detectFormat, rewriteImports, entryExport, guessCategory } = await import('../../engine/lib/inspect.mjs');
const { extractStrings, applyToSource, recolor, hexToHsl } = await import('../../engine/lib/sitekit.mjs');

test('detects formats', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fmt-'));
  const w = (n, s) => { fs.writeFileSync(path.join(dir, n), s); return path.join(dir, n); };
  assert.equal(detectFormat([w('a.tsx', 'export default () => <div className="flex px-4" />')]), 'react-tailwind');
  assert.equal(detectFormat([w('b.html', '<html><body><p>x</p></body></html>')]), 'html');
  assert.equal(detectFormat([w('c.vue', '<template></template>')]), 'vue');
});

test('rewrites @/ imports, Next.js imports, and collects packages', () => {
  const src = `import { X } from "@/components/ui/aurora";\nimport { Button } from "@/components/ui/button";\nimport Link from "next/link";\nimport { motion } from "framer-motion";\nimport { Thing } from "@/missing/thing";\nimport React from "react";`;
  const r = rewriteImports(src, { fileRel: 'demo.tsx', designFiles: new Set(['components/ui/aurora.tsx']), baseHas: (t) => t === 'components/ui/button' });
  assert.match(r.code, /from "\.\/components\/ui\/aurora"/);
  assert.match(r.code, /from "@\/components\/ui\/button"/);
  assert.match(r.code, /@\/lib\/shims\/next-link/);
  assert.deepEqual(r.deps, ['framer-motion']);
  assert.deepEqual(r.issues, ['missing @/missing/thing']);
});

test('finds default or named exports', () => {
  assert.deepEqual(entryExport('export default function A() {}', 'a.tsx'), { kind: 'default' });
  assert.deepEqual(entryExport('export const PricingSimple = () => null', 'pricing.tsx'), { kind: 'named', name: 'PricingSimple' });
  assert.deepEqual(entryExport('function Hero(){}\nexport { Hero, helper }', 'x.tsx'), { kind: 'named', name: 'Hero' });
});

test('guesses categories', () => {
  assert.equal(guessCategory(['footer.tsx'], '<footer>© 2026</footer>').category, 'footer');
  assert.equal(guessCategory(['x.tsx'], '<section>Simple pricing $19 /mo per month</section>').category, 'pricing');
});

test('copy extraction skips code and round-trips text safely', () => {
  const src = `import { A } from "./a";\nconst items = [{ title: "Fast setup", href: "/docs", icon: "zap" }];\nexport default () => (\n  <div className="flex items-center gap-2">\n    <h1>Hello world</h1>\n    <A label="Get started" variant="ghost" />\n    {items.map((i) => <p key={i.title}>{i.title}</p>)}\n  </div>\n);`;
  const items = extractStrings(src);
  assert.deepEqual(items.map((i) => i.text), ['Fast setup', 'Hello world', 'Get started']);
  const changes = items.map((i, n) => ({ ...i, text: ["Set up in a day", "We're <here>", 'Say "hi"'][n] }));
  const { out, skipped } = applyToSource(src, changes);
  assert.equal(skipped.length, 0);
  assert.match(out, /title: "Set up in a day"/);
  assert.match(out, /<h1>\{"We're <here>"\}<\/h1>/);
  assert.match(out, /label="Say \\"hi\\""/);
  assert.match(out, /className="flex items-center gap-2"/);
});

test('recolour swaps Tailwind palette names only', () => {
  const r = recolor('className="bg-blue-600 hover:bg-blue-700 text-blue-50 blue-ish border-indigo-200/50"', { blue: 'emerald', indigo: 'teal' });
  assert.equal(r.out, 'className="bg-emerald-600 hover:bg-emerald-700 text-emerald-50 blue-ish border-teal-200/50"');
  assert.equal(r.n, 4);
});

test('hex to hsl', () => {
  assert.equal(hexToHsl('#ffffff').css, '0 0% 100%');
  assert.equal(hexToHsl('#000').css, '0 0% 0%');
});

test('pipeline: add -> tag -> shortlist -> site -> copy (no installs)', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'engine-'));
  for (const d of ['engine', 'templates', 'knowledge']) fs.cpSync(path.join(REPO, d), path.join(root, d), { recursive: true });
  fs.cpSync(path.join(REPO, 'tests/fixtures/designs'), path.join(root, 'incoming'), { recursive: true });
  for (const d of ['briefs', 'sites', 'library/originals']) fs.mkdirSync(path.join(root, d), { recursive: true });
  const run = (script, ...argv) => execFileSync('node', [path.join(root, 'engine', script), ...argv], { cwd: root, encoding: 'utf8', env: { ...process.env, ENGINE_ROOT: root } });

  const added = run('add-designs.mjs', '--offline');
  assert.match(added, /ok 4/);
  assert.match(added, /needs_conversion 1/);
  const metas = fs.readdirSync(path.join(root, 'showcase/src/designs')).filter((d) => !d.startsWith('.'));
  assert.equal(metas.length, 6);
  const id = (prefix) => metas.find((m) => m.startsWith(prefix));
  assert.ok(fs.existsSync(path.join(root, 'library/originals', id('aurora-hero'), 'demo.tsx')), 'original preserved');

  // re-running is idempotent
  fs.cpSync(path.join(REPO, 'tests/fixtures/designs/minimal-footer.tsx'), path.join(root, 'incoming/minimal-footer.tsx'));
  assert.match(run('add-designs.mjs', '--offline'), /duplicate/);

  const tags = [
    { id: id('aurora-hero'), category: 'hero', style: ['futuristic'], industries: ['saas'], scheme: 'dark', quality: 4 },
    { id: id('navbar-glass'), category: 'navbar', style: ['minimal'], industries: ['architecture'], scheme: 'light', quality: 4 },
    { id: id('minimal-footer'), category: 'footer', style: ['minimal'], industries: ['architecture'], scheme: 'light', quality: 3 },
    { id: id('testimonials-marquee'), category: 'testimonials', style: ['editorial'], mood: ['premium'], industries: ['architecture'], scheme: 'light', quality: 4 },
    { id: id('simple-pricing'), category: 'pricing', style: ['corporate'], industries: ['saas'], scheme: 'light', quality: 3 },
  ];
  fs.writeFileSync(path.join(root, 'tags.json'), JSON.stringify(tags));
  assert.match(run('tag.mjs', 'apply', 'tags.json'), /saved/);

  fs.copyFileSync(path.join(REPO, 'briefs/_template.json'), path.join(root, 'briefs/acme.json'));
  run('shortlist.mjs', 'acme');
  const sl = JSON.parse(fs.readFileSync(path.join(root, 'showcase/src/shortlists/acme.json'), 'utf8'));
  assert.equal(sl.items[0].category === 'navbar' || sl.items[0].category === 'testimonials' || sl.items[0].category === 'footer', true);
  assert.ok(!sl.items.some((i) => i.id === id('html-cta')), 'unconverted design excluded');

  run('site.mjs', 'new', 'acme', '--pick', [id('navbar-glass'), id('testimonials-marquee'), id('minimal-footer')].join(','));
  const page = fs.readFileSync(path.join(root, 'sites/acme/src/pages/Index.tsx'), 'utf8');
  assert.match(page, /01-navbar/);
  assert.match(page, /footer/);
  const copy = JSON.parse(run('site.mjs', 'copy', 'acme'));
  const key = Object.entries(copy.sections).flatMap(([, v]) => Object.entries(v)).find(([, t]) => t === 'What our clients say')[0];
  fs.writeFileSync(path.join(root, 'sites/acme/.engine/copy.out.json'), JSON.stringify({ [key]: 'Kind words from clients' }));
  assert.match(run('site.mjs', 'copy-apply', 'acme'), /Applied 1/);
  const t = fs.readdirSync(path.join(root, 'sites/acme/src/sections')).find((d) => d.includes('testimonials'));
  assert.match(fs.readFileSync(path.join(root, 'sites/acme/src/sections', t, 'code/testimonials.tsx'), 'utf8'), /Kind words from clients/);
  fs.rmSync(root, { recursive: true, force: true });
});

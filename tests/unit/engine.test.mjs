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
  for (const d of ['engine', 'templates', 'knowledge', 'engine.config.json']) fs.cpSync(path.join(REPO, d), path.join(root, d), { recursive: true });
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
    { id: id('aurora-hero'), category: 'hero', layout: ['centered'], style: ['futuristic', 'gradient'], tone: 2, energy: 5, luxury: 3, density: 2, warmth: 1, modernity: 5, goals: ['signup'], scheme: 'dark', quality: 4, industries: ['saas'] },
    { id: id('navbar-glass'), category: 'navbar', layout: ['sticky'], style: ['glassmorphism', 'minimal'], tone: 4, energy: 2, luxury: 4, density: 1, warmth: 3, modernity: 4, scheme: 'light', quality: 4 },
    { id: id('minimal-footer'), category: 'footer', style: ['minimal'], tone: 4, energy: 1, luxury: 3, density: 1, warmth: 3, modernity: 3, scheme: 'light', quality: 3 },
    { id: id('testimonials-marquee'), category: 'testimonials', layout: ['marquee'], style: ['editorial', 'warm'], tone: 4, energy: 2, luxury: 4, density: 2, warmth: 4, modernity: 3, goals: ['trust'], quality: 4 },
    { id: id('simple-pricing'), category: 'pricing', layout: ['cards'], style: ['corporate'], tone: 4, energy: 3, luxury: 2, density: 3, warmth: 2, modernity: 4, goals: ['sales'], quality: 3 },
  ];
  fs.writeFileSync(path.join(root, 'tags.json'), JSON.stringify(tags));
  const applied = run('tag.mjs', 'apply', 'tags.json');
  assert.match(applied, /saved/);
  const auroraMeta = JSON.parse(fs.readFileSync(path.join(root, 'showcase/src/designs', id('aurora-hero'), 'meta.json'), 'utf8'));
  assert.equal(auroraMeta.tags.industries, undefined, 'no industry field stored');
  assert.deepEqual(auroraMeta.tags.origin, ['saas'], 'current niche kept as a minor origin signal');
  assert.equal(auroraMeta.tags.motion, 'subtle', 'motion derived from code (framer-motion)');
  assert.equal(auroraMeta.tags.warmth, 1);

  const brief = { slug: 'acme', company: 'Acme Architects', niche: 'architecture', style: 'minimal, editorial', goals: ['qualified enquiries'], sections: ['navbar', 'hero', 'testimonials', 'footer'], scheme: 'light', animations: 'subtle', colors: { primary: '#1f3a2e' }, picks: 3 };
  fs.writeFileSync(path.join(root, 'briefs/acme.json'), JSON.stringify(brief));
  const out1 = run('shortlist.mjs', 'acme');
  assert.match(out1, /niche=architecture/);
  const sl = JSON.parse(fs.readFileSync(path.join(root, 'showcase/src/shortlists/acme.json'), 'utf8'));
  assert.ok(!sl.items.some((i) => i.id === id('html-cta')), 'unconverted design excluded');
  const rankOf = (list, x) => list.items.find((i) => i.id === x)?.rank;
  // calm, light, minimal brief: the dark energetic hero must rank below the calm light navbar
  assert.ok(rankOf(sl, id('navbar-glass')) < rankOf(sl, id('aurora-hero')));

  // Memory: a note that the aurora hero is great for architects lifts it for architecture briefs only.
  const before = sl.items.find((i) => i.id === id('aurora-hero')).score;
  run('remember.mjs', id('aurora-hero'), '--good', 'architects, architecture studios');
  run('shortlist.mjs', 'acme');
  const sl2 = JSON.parse(fs.readFileSync(path.join(root, 'showcase/src/shortlists/acme.json'), 'utf8'));
  const after = sl2.items.find((i) => i.id === id('aurora-hero'));
  assert.ok(after.score > before && after.score - before <= 15, `note boost is capped (${before} -> ${after.score})`);
  assert.ok(after.reasons.some((r) => r.includes('you noted')));
  fs.writeFileSync(path.join(root, 'briefs/bakery.json'), JSON.stringify({ ...brief, slug: 'bakery', company: 'Bun', niche: 'restaurant' }));
  run('shortlist.mjs', 'bakery');
  const sl3 = JSON.parse(fs.readFileSync(path.join(root, 'showcase/src/shortlists/bakery.json'), 'utf8'));
  assert.ok(!sl3.items.find((i) => i.id === id('aurora-hero')).reasons.some((r) => r.includes('you noted')), 'note does not leak to other niches');

  // Preference: avoid glassmorphism for architecture briefs.
  run('remember.mjs', '--for', 'architecture', '--avoid', 'glassmorphism');
  run('shortlist.mjs', 'acme');
  const sl4 = JSON.parse(fs.readFileSync(path.join(root, 'showcase/src/shortlists/acme.json'), 'utf8'));
  assert.ok(sl4.items.find((i) => i.id === id('navbar-glass')).reasons.some((r) => r.includes('avoid')));

  run('site.mjs', 'new', 'acme', '--pick', [id('navbar-glass'), id('testimonials-marquee'), id('minimal-footer')].join(','));
  const page = fs.readFileSync(path.join(root, 'sites/acme/src/pages/Index.tsx'), 'utf8');
  assert.match(page, /01-navbar/);
  assert.match(page, /footer/);
  assert.doesNotMatch(page, /hero/, 'only picks by default');
  assert.match(fs.readFileSync(path.join(root, 'sites/acme/src/index.css'), 'utf8'), /--primary: 153/, 'brief colour applied');
  // Picks are remembered; used designs get an anti-repetition penalty next time.
  const sl5 = JSON.parse(run('shortlist.mjs', 'bakery') && fs.readFileSync(path.join(root, 'showcase/src/shortlists/bakery.json'), 'utf8'));
  assert.ok(sl5.items.find((i) => i.id === id('navbar-glass')).reasons.some((r) => r.includes('used in 1')));
  assert.match(run('remember.mjs', 'list'), /Pick history: 1 briefs/);

  // Dashboard snapshot: sites, briefs, memory and scoring weights exported for the admin pages.
  run('showcase.mjs', 'init');
  const snap = JSON.parse(fs.readFileSync(path.join(root, 'showcase/src/showcase/engine-data.json'), 'utf8'));
  assert.equal(snap.sites.length, 1);
  assert.equal(snap.sites[0].sections.length, 3);
  assert.ok(snap.briefs.some((b) => b.slug === 'acme' && b.niche === 'architecture'));
  assert.ok(snap.memory.counts.pick >= 1 && snap.memory.usage[id('navbar-glass')] === 1);
  assert.equal(snap.scoring.weights.style, 24);
  assert.ok(snap.presets.wellness && snap.niche_families.tech);

  // Admin dashboard overrides: admin tags win, hidden designs disappear, pinned designs gain points.
  const ovDir = path.join(root, 'showcase/src/overrides');
  fs.mkdirSync(ovDir, { recursive: true });
  const scoreOf = (slug, x) => JSON.parse(fs.readFileSync(path.join(root, `showcase/src/shortlists/${slug}.json`), 'utf8')).items.find((i) => i.id === x);
  run('shortlist.mjs', 'acme');
  const pricingBefore = scoreOf('acme', id('simple-pricing'));
  fs.writeFileSync(path.join(ovDir, `${id('simple-pricing')}.json`), JSON.stringify({ id: id('simple-pricing'), pinned: true, tags: { style: ['minimal', 'editorial'], origin: ['architecture'] }, updated_at: new Date().toISOString(), updated_by: 'admin' }));
  fs.writeFileSync(path.join(ovDir, `${id('aurora-hero')}.json`), JSON.stringify({ id: id('aurora-hero'), hidden: true, updated_at: new Date().toISOString() }));
  run('shortlist.mjs', 'acme');
  const pricingAfter = scoreOf('acme', id('simple-pricing'));
  assert.ok(pricingAfter.reasons.includes('pinned by you'));
  assert.ok(pricingAfter.reasons.includes('already used for architecture'));
  assert.ok(pricingAfter.score > (pricingBefore?.score ?? 0) + 20, 'admin style/origin/pin raise the score');
  assert.equal(scoreOf('acme', id('aurora-hero')), undefined, 'hidden design never shortlisted');
  assert.match(run('tag.mjs', 'list'), /admin/);

  // Admin-written memory events (raw words) are normalised like CLI ones.
  fs.writeFileSync(path.join(root, 'memory/events', `2026-01-01T00-00-00-000Z-note-${id('minimal-footer')}-abcd.json`), JSON.stringify({ type: 'note', at: new Date().toISOString(), design: id('minimal-footer'), good: ['architecture studios'], bad: [], text: 'admin', source: 'admin' }));
  run('shortlist.mjs', 'acme');
  assert.ok(scoreOf('acme', id('minimal-footer')).reasons.some((r) => r.includes('you noted')));
  const copy = JSON.parse(run('site.mjs', 'copy', 'acme'));
  const key = Object.entries(copy.sections).flatMap(([, v]) => Object.entries(v)).find(([, t]) => t === 'What our clients say')[0];
  fs.writeFileSync(path.join(root, 'sites/acme/.engine/copy.out.json'), JSON.stringify({ [key]: 'Kind words from clients' }));
  assert.match(run('site.mjs', 'copy-apply', 'acme'), /Applied 1/);
  const t = fs.readdirSync(path.join(root, 'sites/acme/src/sections')).find((d) => d.includes('testimonials'));
  assert.match(fs.readFileSync(path.join(root, 'sites/acme/src/sections', t, 'code/testimonials.tsx'), 'utf8'), /Kind words from clients/);
  fs.rmSync(root, { recursive: true, force: true });
});

test('release: merges branch into main, tags it, writes a restorable note; sync pulls main', () => {
  const base = fs.mkdtempSync(path.join(os.tmpdir(), 'rel-'));
  const g = (cwd, ...argv) => execFileSync('git', argv, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
  g(base, 'init', '-q', '--bare', '-b', 'main', 'origin.git');
  g(base, 'clone', '-q', 'origin.git', 'work');
  const work = path.join(base, 'work');
  g(work, 'config', 'user.email', 't@t'); g(work, 'config', 'user.name', 't');
  for (const d of ['engine', 'knowledge', 'engine.config.json']) fs.cpSync(path.join(REPO, d), path.join(work, d), { recursive: true });
  g(work, 'add', '-A'); g(work, 'commit', '-qm', 'init'); g(work, 'push', '-q', 'origin', 'main');
  g(work, 'checkout', '-qb', 'feature');
  fs.writeFileSync(path.join(work, 'a.txt'), 'a'); g(work, 'add', '-A'); g(work, 'commit', '-qm', 'Feature A');
  const run = (...argv) => execFileSync('node', [path.join(work, 'engine/release.mjs'), ...argv], { cwd: work, encoding: 'utf8', env: { ...process.env, ENGINE_ROOT: work } });
  assert.match(run('release', 'Feature A release'), /Released to main/);
  assert.ok(g(work, 'log', 'origin/main', '--oneline').includes('Release: Feature A release'));
  assert.match(g(work, 'ls-remote', '--tags', 'origin'), /release-\d{8}-\d{4}-feature-a-release/);
  const note = fs.readdirSync(path.join(work, 'docs/releases')).find((f) => f.endsWith('feature-a-release.md'));
  const txt = fs.readFileSync(path.join(work, 'docs/releases', note), 'utf8');
  assert.match(txt, /\| `[0-9a-f]+` \| Feature A \|/);
  assert.match(txt, /git cherry-pick/);
  const mergeSha = g(work, 'rev-parse', '--short=7', 'origin/main~1');
  assert.match(txt, new RegExp(`Merge commit on main: \`${mergeSha}\``), 'note names the exact merge commit');
  assert.match(run('releases'), /Feature A release/);
  // Another writer (e.g. the admin dashboard) commits to main; sync brings it in.
  g(base, 'clone', '-q', 'origin.git', 'other');
  const other = path.join(base, 'other');
  g(other, 'config', 'user.email', 't@t'); g(other, 'config', 'user.name', 't');
  fs.writeFileSync(path.join(other, 'admin.json'), '{}'); g(other, 'add', '-A'); g(other, 'commit', '-qm', 'admin: edit'); g(other, 'push', '-q', 'origin', 'main');
  assert.match(run('sync'), /Pulled 1 commit/);
  assert.ok(fs.existsSync(path.join(work, 'admin.json')));
  fs.rmSync(base, { recursive: true, force: true });
});

test('multi-design zips split into designs; why lines are stored on the shortlist', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'multi-'));
  for (const d of ['engine', 'templates', 'knowledge', 'engine.config.json']) fs.cpSync(path.join(REPO, d), path.join(root, d), { recursive: true });
  for (const d of ['incoming', 'briefs', 'library/originals', 'pack/designs/hero-one', 'pack/designs/footer-two', 'flat']) fs.mkdirSync(path.join(root, d), { recursive: true });
  const F = path.join(REPO, 'tests/fixtures/designs');
  fs.cpSync(path.join(F, 'aurora-hero'), path.join(root, 'pack/designs/hero-one'), { recursive: true });
  fs.copyFileSync(path.join(F, 'minimal-footer.tsx'), path.join(root, 'pack/designs/footer-two/footer.tsx'));
  fs.copyFileSync(path.join(F, 'navbar-glass/navbar.tsx'), path.join(root, 'flat/navbar.tsx'));
  fs.copyFileSync(path.join(F, 'simple-pricing/pricing.tsx'), path.join(root, 'flat/pricing.tsx'));
  execFileSync('zip', ['-qr', path.join(root, 'incoming/pack.zip'), 'designs'], { cwd: path.join(root, 'pack') });
  execFileSync('zip', ['-q', path.join(root, 'incoming/flat.zip'), 'navbar.tsx', 'pricing.tsx'], { cwd: path.join(root, 'flat') });
  const run = (script, ...argv) => execFileSync('node', [path.join(root, 'engine', script), ...argv], { cwd: root, encoding: 'utf8', env: { ...process.env, ENGINE_ROOT: root } });
  const out = run('add-designs.mjs', '--offline');
  assert.match(out, /ok 4/, '2 zips -> 4 designs (folder pack + flat files)');
  const ids = fs.readdirSync(path.join(root, 'showcase/src/designs')).filter((d) => !d.startsWith('.'));
  for (const prefix of ['hero-one', 'footer-two', 'navbar', 'pricing']) assert.ok(ids.some((i) => i.startsWith(prefix)), prefix);
  assert.ok(fs.existsSync(path.join(root, 'library/originals', ids.find((i) => i.startsWith('navbar')), 'navbar.tsx')), 'single-file original kept alone');
  fs.writeFileSync(path.join(root, 'briefs/spa.json'), JSON.stringify({ slug: 'spa', company: 'Spa', niche: 'wellness', sections: ['navbar', 'hero', 'footer'] }));
  run('shortlist.mjs', 'spa');
  const listFile = path.join(root, 'showcase/src/shortlists/spa.json');
  const first = JSON.parse(fs.readFileSync(listFile, 'utf8')).items[0].id;
  fs.writeFileSync(path.join(root, 'why.json'), JSON.stringify({ [first]: 'Calm   layout that suits a spa.' }));
  assert.match(run('shortlist.mjs', 'spa', '--why', 'why.json'), /Calm layout that suits a spa\./);
  run('shortlist.mjs', 'spa'); // re-ranking keeps the line
  assert.equal(JSON.parse(fs.readFileSync(listFile, 'utf8')).items.find((i) => i.id === first).why, 'Calm layout that suits a spa.');
  fs.rmSync(root, { recursive: true, force: true });
});

test('full-page HTML templates: convert, scope CSS, rank as pages, build page routes, theme template vars', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'pages-'));
  for (const d of ['engine', 'templates', 'knowledge', 'engine.config.json']) fs.cpSync(path.join(REPO, d), path.join(root, d), { recursive: true });
  for (const d of ['briefs', 'sites', 'showcase/src/designs']) fs.mkdirSync(path.join(root, d), { recursive: true });
  const env = { ...process.env, ENGINE_ROOT: root };
  const out = execFileSync('python3', ['-I', path.join(root, 'engine/tools/html_page.py'), path.join(REPO, 'tests/fixtures/pages'), '--group', 'fixture'], { cwd: root, encoding: 'utf8', env });
  assert.match(out, /Converted 2\/2/);
  const ids = fs.readdirSync(path.join(root, 'showcase/src/designs'));
  const cafe = ids.find((i) => i.startsWith('mini-cafe')), law = ids.find((i) => i.startsWith('mini-law'));
  const page = fs.readFileSync(path.join(root, 'showcase/src/designs', cafe, 'code/Page.tsx'), 'utf8');
  assert.match(page, new RegExp(`className="tpl-${cafe} home"`));
  assert.match(page, /className="hero"/);
  assert.match(page, /style=\{\{ backgroundImage: `url\(\$\{a\d+\}\)`, paddingTop: "40px" \}\}/);
  assert.match(page, /htmlFor="e"/);
  assert.match(page, /required=\{true\}/);
  assert.match(page, /\{"Fresh \{daily\} roasts\."\}/, 'braces in text are escaped');
  assert.doesNotMatch(page, /onclick/i);
  assert.match(page, /fonts\.googleapis\.com\/css2\?family=Lora/);
  const css = fs.readFileSync(path.join(root, 'showcase/src/designs', cafe, 'code/template.css'), 'utf8');
  assert.match(css, new RegExp(`\\.tpl-${cafe}\\{ --primary`), ':root becomes the wrapper');
  assert.match(css, new RegExp(`\\.tpl-${cafe} \\.btn, \\.tpl-${cafe} a\\.btn:hover`));
  assert.match(css, /@media \(max-width: 600px\)\{\.tpl-[a-z0-9-]+ \.hero h1/);
  assert.match(css, /@keyframes fade\{ from \{ opacity: 0 \}/, "keyframes untouched");
  assert.match(page, /family=Inter/, '@import fonts moved to links');
  const meta = JSON.parse(fs.readFileSync(path.join(root, 'showcase/src/designs', cafe, 'meta.json'), 'utf8'));
  assert.equal(meta.kind, 'page');
  assert.deepEqual(meta.page_sections, ['navbar', 'hero', 'menu', 'testimonials', 'footer']);
  assert.ok(fs.existsSync(path.join(root, 'test-templates/fixture/mini-cafe/index.html')), 'original kept');
  const run = (script, ...argv) => execFileSync('node', [path.join(root, 'engine', script), ...argv], { cwd: root, encoding: 'utf8', env });
  fs.writeFileSync(path.join(root, 'tags.json'), JSON.stringify([
    { id: cafe, category: 'page', style: ['warm', 'organic'], tone: 2, energy: 2, luxury: 3, density: 2, warmth: 5, modernity: 3, origin: ['restaurant'], quality: 4 },
    { id: law, category: 'page', style: ['classic', 'corporate'], tone: 5, energy: 1, luxury: 4, density: 3, warmth: 2, modernity: 2, origin: ['legal'], quality: 4 },
  ]));
  run('tag.mjs', 'apply', 'tags.json');
  fs.writeFileSync(path.join(root, 'briefs/bistro.json'), JSON.stringify({ slug: 'bistro', company: 'Bistro', niche: 'restaurant', style: 'warm, cozy', sections: ['navbar', 'hero', 'menu', 'footer'], colors: { primary: '#225533' } }));
  run('shortlist.mjs', 'bistro');
  const sl = JSON.parse(fs.readFileSync(path.join(root, 'showcase/src/shortlists/bistro.json'), 'utf8'));
  assert.equal(sl.items[0].id, cafe, 'warm restaurant page ranks first');
  assert.ok(sl.items[0].reasons[0].startsWith('full page covering 4/4'));
  run('site.mjs', 'new', 'bistro', '--pick', `${cafe},${law}`);
  const app = fs.readFileSync(path.join(root, 'sites/bistro/src/App.tsx'), 'utf8');
  assert.match(app, /path="\/" element=\{<P1 \/>\}/);
  assert.match(app, /path="\/option-2" element=\{<P2 \/>\}/);
  assert.match(app, /<OptionSwitcher options=\{OPTIONS\} brand=\{"Bistro"\}/, "switcher in every multi-option site");
  assert.ok(fs.existsSync(path.join(root, "sites/bistro/src/components/OptionSwitcher.tsx")));
  const siteCss = fs.readFileSync(path.join(root, 'sites/bistro/src/sections/01-page/code/template.css'), 'utf8');
  assert.match(siteCss, /THEME:START[\s\S]*--primary: #225533/, 'brief colour mapped onto the template variable');
  assert.ok(fs.existsSync(path.join(root, 'sites/bistro/src/lib/template-runtime.ts')));
  const copy = run('site.mjs', 'copy', 'bistro');
  assert.match(copy, /Coffee & calm/, 'page text is offered for rewriting');
  assert.doesNotMatch(copy, /template\.js|data-ready/, 'template scripts are never rewritten');
  fs.rmSync(root, { recursive: true, force: true });
});

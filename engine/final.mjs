// Final delivery of the user's 3 picks.
//
//   npm run final -- <slug> --picks 2,5,7 [--single]
//
// Always: output/<slug>/final/ (the 3 designs with the Designs switcher; opens from file://) + output/<slug>/<slug>-final.zip.
// --single: also output/<slug>/final-single/<n>-<name>.html, one self-contained file per design (photos inlined).
// delivery "lovable" (engine.config.json): also writes sites/<slug>/final/, a minimal Vite project that serves the
// 3 designs (public/options/...) for a new Lovable project via GitHub sync (npm run push -- sites/<slug>/final --repo ...).
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { ROOT, P, args, die, readJson, writeJson, rel, copyDir, config } from './lib/util.mjs';
import { listDesigns, writeBrowsable, esc } from './lib/designs.mjs';
import { checkPaths } from './slop.mjs';
import { record } from './lib/memory.mjs';

const a = args();
const slug = a._[0] || die('Usage: npm run final -- <slug> --picks 2,5,7');
const picks = String(a.picks || '').split(/[,\s]+/).filter(Boolean).map(Number);
if (picks.length !== 3 || picks.some((n) => !n)) die('Give exactly 3 picks, e.g. --picks 2,5,7');
const SITE = path.join(P.sites, slug);
const all = listDesigns(path.join(SITE, 'designs'));
const chosen = picks.map((n) => all.find((d) => d.n === n) || die(`Design ${n} not found in ${rel(path.join(SITE, 'designs'))}.`));
const dirs = readJson(path.join(P.briefs, `${slug}.directions.json`), []);
const brief = readJson(path.join(P.briefs, `${slug}.json`), {});
const brand = brief.name || slug;
const dirFor = (n) => dirs.find((d, i) => (d.n ?? i + 1) === n) || {};

const slop = checkPaths(chosen.map((d) => path.join(d.dir, 'index.html'))).filter((f) => f.level === 'error');
if (slop.length && !a.force) die(`Fix these before delivery (or --force):\n${slop.map((f) => `${rel(f.file)}:${f.line} ${f.rule} | ${f.text}`).join('\n')}`);

if (!a['no-memory']) record('pick', { version: 2, slug, industry: brief.industry, picks, refs: [...new Set(picks.flatMap((n) => dirFor(n).refs || []))], styles: picks.map((n) => dirFor(n).style).filter(Boolean) });

const OUT = path.join(ROOT, 'output', slug);
const final = path.join(OUT, 'final');
writeBrowsable(chosen, final, brand, dirFor);
const credits = chosen.flatMap((d) => readJson(path.join(d.dir, 'img', 'credits.json'), []).map((c) => `${d.folder}/img/${c.file}: ${c.credit || 'unknown'} (${c.license || ''}) ${c.source || ''}`));
if (credits.length) fs.writeFileSync(path.join(final, 'IMAGE-CREDITS.txt'), `Photo credits\n\n${credits.join('\n')}\n`);
const zip = (src, dest) => { fs.rmSync(dest, { force: true }); return spawnSync('python3', ['-I', '-c', 'import shutil,sys;shutil.make_archive(sys.argv[1][:-4],"zip",sys.argv[2])', dest, src]).status === 0; };
zip(final, path.join(OUT, `${slug}-final.zip`));
console.log(`Final designs: ${rel(path.join(final, 'index.html'))}  (zip: ${rel(path.join(OUT, `${slug}-final.zip`))})`);

if (a.single) {
  const single = path.join(OUT, 'final-single'); fs.rmSync(single, { recursive: true, force: true }); fs.mkdirSync(single, { recursive: true });
  const mime = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.gif': 'image/gif', '.avif': 'image/avif' };
  for (const d of chosen) {
    const src = path.join(final, d.folder);
    let html = fs.readFileSync(path.join(src, 'index.html'), 'utf8');
    html = html.replace(/(["'(])(img\/[\w.\-/]+\.(?:jpe?g|png|webp|svg|gif|avif))/gi, (m, q, f) => { const p = path.join(src, f); return fs.existsSync(p) ? `${q}data:${mime[path.extname(f).toLowerCase()]};base64,${fs.readFileSync(p).toString('base64')}` : m; });
    html = html.replace(/href="\.\.\/(\d{2}-[\w-]+)\/index\.html"/g, (m, f) => `href="${f}.html"`);
    fs.writeFileSync(path.join(single, `${d.folder}.html`), html);
  }
  zip(single, path.join(OUT, `${slug}-final-single.zip`));
  console.log(`Single files: ${rel(single)}/  (zip: ${rel(path.join(OUT, `${slug}-final-single.zip`))})`);
}

if (config().delivery === 'lovable') {
  const app = path.join(SITE, 'final');
  fs.rmSync(path.join(app, 'public', 'options'), { recursive: true, force: true });
  chosen.forEach((d, i) => copyDir(path.join(final, d.folder), path.join(app, 'public', 'options', d.folder)));
  for (const d of chosen) { const f = path.join(app, 'public', 'options', d.folder, 'index.html'); fs.writeFileSync(f, fs.readFileSync(f, 'utf8').replaceAll('href="../', 'href="/options/')); }
  if (!fs.existsSync(path.join(app, 'package.json'))) writeJson(path.join(app, 'package.json'), { name: slug, private: true, version: '1.0.0', type: 'module', scripts: { dev: 'vite', build: 'vite build', preview: 'vite preview' }, devDependencies: { vite: '^5.4.0' } });
  fs.writeFileSync(path.join(app, 'index.html'), `<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(brand)}</title>\n<script>location.replace('/options/${chosen[0].folder}/index.html')</script></head>\n<body><a href="/options/${chosen[0].folder}/index.html">Open ${esc(brand)}</a></body></html>\n`);
  fs.writeFileSync(path.join(app, 'README.md'), `# ${brand}\n\nThree homepage designs (static HTML in public/options/), switch between them with the Designs button.\n${chosen.map((d, i) => `${i + 1}. ${dirFor(d.n).name || d.folder}: /options/${d.folder}/`).join('\n')}\n`);
  writeJson(path.join(app, '.engine', 'final.json'), { picks, folders: chosen.map((d) => d.folder), built: new Date().toISOString() });
  console.log(`Lovable project folder: ${rel(app)}  (push with: npm run push -- sites/${slug}/final --repo <owner/name>)`);
}

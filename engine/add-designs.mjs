// npm run add                     -> import every new design in incoming/ (folders, single files or .zip)
// npm run add -- --offline        -> do not look up versions of new npm packages
// npm run add -- --keep           -> leave processed items in incoming/ (default: moved to .cache/processed/)
// npm run add -- --converted <id> -> re-inspect a design after Claude converted it by hand (HTML/Vue/... -> TSX)
//
// Zero Claude tokens. React/Tailwind sections are normalised into showcase/src/designs/<id>/ (index.tsx + code/).
// Originals are copied byte-for-byte into library/originals/<id>/ and never edited.
import fs from 'node:fs';
import path from 'node:path';
import { P, readJson, writeJson, slugify, walk, hashFiles, copyDir, args, sh, table, loadMetas, rel, metaPath } from './lib/util.mjs';
import { detectFormat, usableFiles, findEntry, entryExport, rewriteImports, summarize, guessCategory, CODE_EXT, importsOf } from './lib/inspect.mjs';
import { ensureShowcase } from './showcase.mjs';

const a = args();
ensureShowcase();
const pkgFile = path.join(P.showcase, 'package.json');
const pkg = readJson(pkgFile);
const known = new Set([...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.devDependencies || {})]);
const newDeps = {};
const posix = (p) => p.split(path.sep).join('/');
const humanize = (s) => s.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim().replace(/\b\w/g, (c) => c.toUpperCase()).slice(0, 60);

function baseHas(target) {
  const b = path.join(P.showcase, 'src', target);
  return ['', '.tsx', '.ts', '.jsx', '.js', '/index.tsx', '/index.ts'].some((s) => fs.existsSync(b + s));
}

function versionFor(dep, designPkg) {
  const declared = designPkg?.dependencies?.[dep] || designPkg?.peerDependencies?.[dep];
  if (declared && /^[\^~]?\d/.test(declared)) return declared;
  if (a.offline) return 'latest';
  try { return '^' + sh('npm', ['view', dep, 'version'], { timeout: 30000 }).trim().split('\n').pop().replace(/'/g, ''); } catch { return null; }
}

// ---------- normalise one React design into showcase/src/designs/<id>/ ----------
function normaliseReact(id, baseDir, files, designPkg) {
  const dest = path.join(P.designs, id);
  const usable = usableFiles(baseDir, files);
  const relSet = new Set(usable.map((f) => posix(path.relative(baseDir, f))));
  const issues = [], deps = new Set();
  let codeText = '';
  const importedCss = new Set();
  for (const f of usable) {
    const r = posix(path.relative(baseDir, f));
    const out = path.join(dest, 'code', r);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    if (CODE_EXT.has(path.extname(f).toLowerCase())) {
      const src = fs.readFileSync(f, 'utf8');
      const res = rewriteImports(src, { fileRel: r, designFiles: relSet, baseHas });
      res.issues.forEach((i) => issues.push(`${r}: ${i}`));
      res.deps.forEach((d) => deps.add(d));
      for (const spec of importsOf(src)) if (spec.endsWith('.css')) importedCss.add(posix(path.normalize(path.join(path.dirname(r), spec))));
      fs.writeFileSync(out, res.code);
      codeText += '\n' + src;
    } else fs.copyFileSync(f, out);
  }
  // Global CSS shipped with the design (not imported by its code).
  const cssImports = [];
  for (const r of [...relSet].filter((x) => x.endsWith('.css') && !importedCss.has(x))) {
    const css = fs.readFileSync(path.join(baseDir, r), 'utf8');
    if (/@tailwind\s|@import\s+["']tailwindcss|@theme\b/.test(css)) {
      const extra = css.replace(/@tailwind[^;]*;|@import[^;]*;/g, '').trim();
      if (/@theme\b|@import\s+["']tailwindcss/.test(css)) issues.push(`${r}: Tailwind v4 CSS; port its custom values to Tailwind 3 by hand`);
      else if (extra) issues.push(`${r}: global CSS with Tailwind directives; merge its custom rules into showcase/src/index.css`);
    } else cssImports.push(r);
  }
  if (files.some((f) => /^tailwind\.config\./i.test(path.basename(f)))) issues.push('has tailwind.config: merge its theme.extend (keyframes/colors) into showcase/tailwind.config.ts');

  const entry = findEntry(baseDir, usable.filter((f) => CODE_EXT.has(path.extname(f).toLowerCase())));
  let index;
  const cssLines = cssImports.map((r) => `import "./code/${r}";`).join('\n');
  if (!entry) { issues.push('no component file found'); index = null; }
  else {
    const er = posix(path.relative(baseDir, entry)).replace(/\.(tsx|ts|jsx|js|mjs)$/, '');
    const exp = entryExport(fs.readFileSync(entry, 'utf8'), entry);
    if (!exp) { issues.push(`${er}: no exported component`); index = null; }
    else index = exp.kind === 'default'
      ? `${cssLines}\nexport { default } from "./code/${er}";\n`
      : `${cssLines}\nimport { ${exp.name} } from "./code/${er}";\nexport default ${exp.name};\n`;
  }
  fs.writeFileSync(path.join(dest, 'index.tsx'), (index || 'export default function Missing() { return null; }\n').trimStart());

  for (const d of deps) if (!known.has(d)) {
    const v = versionFor(d, designPkg);
    if (v) { newDeps[d] = v; known.add(d); } else issues.push(`npm package ${d} not found`);
  }
  return { entry: entry ? posix(path.relative(baseDir, entry)) : null, deps: [...deps].sort(), issues, codeText, ok: !!index };
}

function placeholderIndex(id) {
  const dest = path.join(P.designs, id);
  fs.mkdirSync(dest, { recursive: true });
  fs.writeFileSync(path.join(dest, 'index.tsx'), 'export default function NotConverted() { return null; }\n');
}

// ---------- discover incoming items ----------
function discover() {
  if (!fs.existsSync(P.incoming)) return [];
  const items = [];
  for (const e of fs.readdirSync(P.incoming, { withFileTypes: true })) {
    if (e.name.startsWith('.') || e.name === 'README.md') continue;
    const p = path.join(P.incoming, e.name);
    if (e.isDirectory()) {
      // A folder that only wraps one folder (common after unzipping) -> use the inner folder.
      let dir = p;
      const inner = fs.readdirSync(dir, { withFileTypes: true }).filter((x) => !x.name.startsWith('.') && x.name !== '__MACOSX');
      if (inner.length === 1 && inner[0].isDirectory()) dir = path.join(dir, inner[0].name);
      items.push({ name: e.name, dir, files: walk(dir), src: p });
    } else if (/\.zip$/i.test(e.name)) {
      const out = path.join(P.cache, 'unzipped', slugify(e.name.replace(/\.zip$/i, '')));
      fs.rmSync(out, { recursive: true, force: true });
      fs.mkdirSync(out, { recursive: true });
      try { sh('unzip', ['-q', '-o', p, '-d', out]); } catch (err) { console.warn(`Skip ${e.name}: unzip failed (${err.message.split('\n')[0]})`); continue; }
      let dir = out;
      const inner = fs.readdirSync(out, { withFileTypes: true }).filter((x) => !x.name.startsWith('.') && x.name !== '__MACOSX');
      if (inner.length === 1 && inner[0].isDirectory()) dir = path.join(out, inner[0].name);
      items.push({ name: e.name.replace(/\.zip$/i, ''), dir, files: walk(dir), src: p });
    } else if (/\.(tsx|jsx|html?|vue|svelte|astro)$/i.test(e.name)) {
      items.push({ name: e.name.replace(/\.\w+$/, ''), dir: P.incoming, files: [p], src: p });
    }
  }
  return items;
}

function inspectExisting(id) {
  // Re-inspect a hand-converted design (showcase code is the source of truth here).
  const f = metaPath(id);
  if (!fs.existsSync(f)) throw new Error(`Unknown design ${id}`);
  const m = readJson(f);
  const dir = path.join(P.designs, id);
  const files = walk(dir).filter((x) => CODE_EXT.has(path.extname(x).toLowerCase()));
  const codeText = files.map((x) => fs.readFileSync(x, 'utf8')).join('\n');
  const deps = new Set();
  for (const s of importsOf(codeText)) if (!s.startsWith('.') && !s.startsWith('@/') && !/^react(-dom)?(\/|$)/.test(s)) deps.add(s.startsWith('@') ? s.split('/').slice(0, 2).join('/') : s.split('/')[0]);
  for (const d of deps) if (!known.has(d)) { const v = versionFor(d); if (v) { newDeps[d] = v; known.add(d); } }
  m.deps = [...deps].sort();
  m.summary = summarize(codeText);
  m.guess = guessCategory([m.name], codeText);
  m.status = 'ok';
  m.issues = [];
  m.converted_at = new Date().toISOString();
  writeJson(f, m);
  return m;
}

// ---------- main ----------
const rows = [];
if (a.converted) {
  const m = inspectExisting(a.converted);
  rows.push({ id: m.id, format: m.source.format, status: m.status, guess: m.guess.category, issues: 0, note: 'converted' });
} else {
  const byHash = new Map(loadMetas().map((m) => [m.source?.hash, m.id]));
  const items = discover();
  if (!items.length) console.log(`Nothing to add. Put design folders, .zip files or single .tsx/.html files in ${rel(P.incoming)}/`);
  for (const it of items) {
    if (!it.files.length) continue;
    const hash = hashFiles(it.dir, it.files);
    if (byHash.has(hash)) { rows.push({ id: byHash.get(hash), format: '-', status: 'duplicate', guess: '-', issues: 0, note: `same content as existing (${it.name})` }); moveDone(it); continue; }
    const id = `${slugify(it.name, 32)}-${hash.slice(0, 4)}`;
    // 1. preserve the original exactly
    const orig = path.join(P.originals, id);
    if (it.files.length === 1 && it.dir === P.incoming) { fs.mkdirSync(orig, { recursive: true }); fs.copyFileSync(it.files[0], path.join(orig, path.basename(it.files[0]))); }
    else copyDir(it.dir, orig);
    // 2. normalise
    const format = detectFormat(it.files);
    const designPkg = (() => { const f = it.files.find((x) => path.basename(x) === 'package.json'); return f ? readJson(f, null) : null; })();
    let res = { entry: null, deps: [], issues: [], codeText: '' };
    let status;
    if (format === 'react' || format === 'react-tailwind') {
      res = normaliseReact(id, it.dir, it.files, designPkg);
      status = !res.ok ? 'needs_attention' : res.issues.length ? 'needs_attention' : 'ok';
      if (format === 'react') res.issues.push('no Tailwind classes detected; styling may rely on CSS files');
    } else {
      placeholderIndex(id);
      res.codeText = it.files.filter((f) => /\.(html?|vue|svelte|astro|css)$/i.test(f)).map((f) => fs.readFileSync(f, 'utf8')).join('\n');
      res.issues.push(`${format} source: needs one-time conversion to a React + Tailwind component`);
      status = 'needs_conversion';
    }
    const meta = {
      id, name: humanize(it.name), status, issues: res.issues,
      source: { folder: it.name, format, hash, original: rel(orig) },
      entry: res.entry, deps: res.deps,
      summary: summarize(res.codeText), guess: guessCategory(it.files.map((f) => path.basename(f)).concat(it.name), res.codeText),
      tags: null, added_at: new Date().toISOString(),
    };
    writeJson(metaPath(id), meta);
    byHash.set(hash, id);
    rows.push({ id, format, status, guess: `${meta.guess.category} (${meta.guess.confidence})`, issues: res.issues.length, note: res.issues[0] || '' });
    moveDone(it);
  }
}
if (Object.keys(newDeps).length) {
  pkg.dependencies = Object.fromEntries(Object.entries({ ...pkg.dependencies, ...newDeps }).sort(([x], [y]) => x.localeCompare(y)));
  writeJson(pkgFile, pkg);
  console.log(`Added npm packages to showcase/package.json: ${Object.entries(newDeps).map(([k, v]) => `${k}@${v}`).join(', ')}`);
}
console.log(table(rows, ['id', 'format', 'status', 'guess', 'issues', 'note']));
const counts = rows.reduce((c, r) => ((c[r.status] = (c[r.status] || 0) + 1), c), {});
console.log(`\nSummary: ${Object.entries(counts).map(([k, v]) => `${k} ${v}`).join(', ') || 'nothing new'}`);
if (rows.some((r) => r.status !== 'duplicate')) console.log('Next: npm run showcase:check  (build test), then npm run tag -- queue  (one-time tagging).');

function moveDone(it) {
  if (a.keep) return;
  const dest = path.join(P.cache, 'processed', new Date().toISOString().slice(0, 10), path.basename(it.src));
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.rmSync(dest, { recursive: true, force: true });
  fs.renameSync(it.src, dest);
}

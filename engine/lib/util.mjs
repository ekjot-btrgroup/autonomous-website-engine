// Shared helpers for the website engine. No dependencies; Node 20+.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';

// ENGINE_ROOT lets tests run the whole engine inside a temp folder.
export const ROOT = path.resolve(process.env.ENGINE_ROOT || process.cwd());
export const P = {
  incoming: path.join(ROOT, 'incoming'),
  originals: path.join(ROOT, 'library', 'originals'),
  showcase: path.join(ROOT, 'showcase'),
  designs: path.join(ROOT, 'showcase', 'src', 'designs'),
  shortlists: path.join(ROOT, 'showcase', 'src', 'shortlists'),
  briefs: path.join(ROOT, 'briefs'),
  sites: path.join(ROOT, 'sites'),
  templates: path.join(ROOT, 'templates'),
  vocab: path.join(ROOT, 'knowledge', 'vocabulary.json'),
  cache: path.join(ROOT, '.cache'),
  memory: path.join(ROOT, 'memory', 'events'),
  overrides: path.join(ROOT, 'showcase', 'src', 'overrides'),
};

export const rel = (p) => path.relative(ROOT, p) || '.';
export const readJson = (f, fallback) => {
  try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch (e) {
    if (fallback !== undefined) return fallback;
    throw new Error(`Cannot read JSON ${rel(f)}: ${e.message}`);
  }
};
export function writeJson(f, data) {
  fs.mkdirSync(path.dirname(f), { recursive: true });
  const tmp = `${f}.${process.pid}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2) + '\n');
  fs.renameSync(tmp, f);
}
export const slugify = (s, max = 40) =>
  String(s || '').toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, max).replace(/-+$/, '') || 'item';

const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', 'build', '.next', '.cache', '.turbo', '__MACOSX']);
export function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === '.DS_Store' || e.name === '.gitkeep') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (!SKIP_DIRS.has(e.name)) out.push(...walk(p)); }
    else if (e.isFile()) out.push(p);
  }
  return out.sort();
}

// Content hash of a design: relative path inside the design + bytes. Folder name excluded,
// so the same design dropped under two names is detected as a duplicate.
export function hashFiles(baseDir, files) {
  const h = crypto.createHash('sha256');
  for (const f of [...files].sort()) {
    h.update(path.relative(baseDir, f).split(path.sep).join('/'));
    h.update('\0');
    h.update(fs.readFileSync(f));
  }
  return h.digest('hex');
}

export function copyDir(src, dest, { overwrite = true, filter = () => true } = {}) {
  let n = 0;
  for (const f of walk(src)) {
    const r = path.relative(src, f);
    if (!filter(r)) continue;
    const d = path.join(dest, r);
    if (!overwrite && fs.existsSync(d)) continue;
    fs.mkdirSync(path.dirname(d), { recursive: true });
    fs.copyFileSync(f, d);
    n++;
  }
  return n;
}

export function isInside(parent, child) {
  const r = path.relative(path.resolve(parent), path.resolve(child));
  return r && !r.startsWith('..') && !path.isAbsolute(r);
}

export function args(argv = process.argv.slice(2)) {
  const out = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const [k, v] = a.slice(2).split('=');
      if (v !== undefined) out[k] = v;
      else if (argv[i + 1] && !argv[i + 1].startsWith('--')) out[k] = argv[++i];
      else out[k] = true;
    } else out._.push(a);
  }
  return out;
}

export function sh(cmd, argv, opts = {}) {
  return execFileSync(cmd, argv, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], ...opts });
}

export function die(msg) { console.error(`ERROR: ${msg}`); process.exit(1); }

export function table(rows, cols) {
  if (!rows.length) return '(none)';
  const w = cols.map((c) => Math.min(70, Math.max(c.length, ...rows.map((r) => String(r[c] ?? '').length))));
  const line = (vals) => vals.map((v, i) => String(v ?? '').slice(0, w[i]).padEnd(w[i])).join('  ');
  return [line(cols), line(w.map((n) => '-'.repeat(n))), ...rows.map((r) => line(cols.map((c) => r[c])))].join('\n');
}

export function loadMetas() {
  if (!fs.existsSync(P.designs)) return [];
  return fs.readdirSync(P.designs, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => readJson(path.join(P.designs, e.name, 'meta.json'), null))
    .filter(Boolean);
}
export const categoryOf = (m) => m.tags?.category || m.guess?.category || 'unknown';
export const metaPath = (id) => path.join(P.designs, id, 'meta.json');

export function config() {
  const c = readJson(path.join(ROOT, 'engine.config.json'), {});
  return { showcase_url: '', shortlist_size: 10, fresh_slots: 2, max_per_section_type: 3, ...c, showcase_url: String(c.showcase_url || '').replace(/\/+$/, '') };
}
export const liveLink = (route) => { const u = config().showcase_url; return u ? `${u}${route}` : route; };

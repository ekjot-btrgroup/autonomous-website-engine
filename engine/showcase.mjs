// npm run showcase:init   -> create showcase/ from templates (lovable-base + showcase-overlay). Safe to re-run.
// npm run showcase:check  -> npm install + vite build of showcase; marks designs that break the build.
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync, execFileSync } from 'node:child_process';
import { P, ROOT, copyDir, readJson, writeJson, rel, args, metaPath, config } from './lib/util.mjs';

const BASE = () => path.join(P.templates, 'lovable-base');
const OVERLAY = () => path.join(P.templates, 'showcase-overlay');

// Files the engine owns in showcase/ (refreshed from templates on init). Designs/shortlists are never touched.
const OWNED = (r) => !r.startsWith('src/designs/') && !r.startsWith('src/shortlists/') && !r.startsWith('src/overrides/') && r !== 'package.json' && r !== 'tailwind.config.ts' && r !== 'src/index.css';

// Engine repo "owner/name" for the admin dashboard: engine.config.json `engine_repo`, else the git remote.
export function engineRepo() {
  const cfg = config();
  if (cfg.engine_repo) return cfg.engine_repo;
  try {
    const url = execFileSync('git', ['remote', 'get-url', 'origin'], { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
    const m = url.replace(/\.git$/, '').match(/([\w.-]+)\/([\w.-]+)$/);
    return m ? `${m[1]}/${m[2]}` : '';
  } catch { return ''; }
}

// Files the admin dashboard reads, refreshed on every run (vocabulary + where to save edits).
function writeAdminData() {
  const dir = path.join(P.showcase, 'src', 'showcase');
  if (!fs.existsSync(dir)) return;
  fs.copyFileSync(P.vocab, path.join(dir, 'vocabulary.json'));
  const cfgFile = path.join(dir, 'admin-config.json');
  const next = { engine_repo: engineRepo(), branch: 'main' };
  if (JSON.stringify(readJson(cfgFile, {})) !== JSON.stringify(next)) writeJson(cfgFile, next);
}

export function ensureShowcase({ refresh = false } = {}) {
  const fresh = !fs.existsSync(path.join(P.showcase, 'package.json'));
  if (fresh || refresh) {
    copyDir(BASE(), P.showcase, { filter: (r) => fresh || OWNED(r) });
    copyDir(OVERLAY(), P.showcase, { filter: (r) => fresh || OWNED(r) });
    fs.mkdirSync(P.designs, { recursive: true });
    fs.mkdirSync(P.shortlists, { recursive: true });
    for (const d of [P.designs, P.shortlists, P.overrides]) fs.mkdirSync(d, { recursive: true });
    for (const d of [P.designs, P.shortlists, P.overrides]) if (!fs.existsSync(path.join(d, '.gitkeep'))) fs.writeFileSync(path.join(d, '.gitkeep'), '');
    if (fresh) {
      const pkg = readJson(path.join(P.showcase, 'package.json'));
      pkg.name = 'design-showcase';
      writeJson(path.join(P.showcase, 'package.json'), pkg);
      const html = path.join(P.showcase, 'index.html');
      fs.writeFileSync(html, fs.readFileSync(html, 'utf8').replace('<title>Site</title>', '<title>Design showcase</title>'));
    }
  }
  writeAdminData();
  return fresh;
}

// Build an app folder (showcase or a site). Returns { ok, output }.
export function buildApp(dir, { install = true } = {}) {
  const run = (cmd, a) => spawnSync(cmd, a, { cwd: dir, encoding: 'utf8', env: { ...process.env, CI: '1' }, maxBuffer: 64 * 1024 * 1024 });
  if (install) {
    const i = run('npm', ['install', '--no-audit', '--no-fund', '--prefer-offline', '--loglevel=error']);
    if (i.status !== 0) return { ok: false, stage: 'install', output: (i.stdout + i.stderr).trim() };
  }
  const b = run('npx', ['vite', 'build', '--logLevel', 'warn']);
  return { ok: b.status === 0, stage: 'build', output: (b.stdout + b.stderr).trim() };
}

function check() {
  ensureShowcase();
  console.log('Building showcase (npm install + vite build)...');
  const r = buildApp(P.showcase);
  const out = r.output;
  const broken = new Set([...out.matchAll(/src\/designs\/([a-z0-9-]+)\//g)].map((m) => m[1]));
  for (const id of broken) {
    const f = metaPath(id);
    if (!fs.existsSync(f)) continue;
    const m = readJson(f);
    m.status = 'build_failed';
    m.issues = [...new Set([...(m.issues || []), `build error: ${out.split('\n').find((l) => l.includes(id))?.slice(0, 200) || 'see showcase:check'}`])];
    writeJson(f, m);
  }
  if (r.ok) {
    // Designs that previously failed and now build are ok again (unless other issues remain).
    for (const e of fs.readdirSync(P.designs, { withFileTypes: true })) {
      if (!e.isDirectory()) continue;
      const f = metaPath(e.name);
      const m = readJson(f, null);
      if (m?.status === 'build_failed') { m.status = (m.issues || []).some((i) => !i.startsWith('build error')) ? 'needs_attention' : 'ok'; m.issues = (m.issues || []).filter((i) => !i.startsWith('build error')); writeJson(f, m); }
    }
    console.log('PASS showcase builds.');
    if (args().smoke) return smoke();
  } else {
    console.log(`FAIL showcase ${r.stage}.${broken.size ? ` Designs marked build_failed: ${[...broken].join(', ')}` : ''}`);
    console.log(out.split('\n').filter((l) => /error|Error|failed/.test(l)).slice(0, 15).join('\n') || out.slice(-1500));
    process.exitCode = 1;
  }
}

// Open /raw/<id> for every design in a headless browser; mark crashes and blank renders. Zero tokens.
export async function loadChromium() {
  const { createRequire } = await import('node:module');
  const req = createRequire(path.join(ROOT, 'package.json'));
  let pw;
  for (const name of ['playwright', 'playwright-core']) { try { pw = req(name); break; } catch { /* next */ } }
  if (!pw) return null;
  try { return await pw.chromium.launch(); }
  catch { return pw.chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium', args: ['--no-sandbox'] }); }
}

async function smoke() {
  const browser = await loadChromium();
  if (!browser) { console.log('SKIP smoke test: Playwright not installed (npm i -g playwright && npx playwright install chromium).'); return; }
  const { spawn } = await import('node:child_process');
  const port = 4300 + Math.floor(Math.random() * 500);
  const server = spawn('npx', ['vite', 'preview', '--host', '127.0.0.1', '--port', String(port), '--strictPort'], { cwd: P.showcase, stdio: 'ignore' });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    for (let i = 0; i < 50; i++) { try { await page.goto(`http://127.0.0.1:${port}/`, { timeout: 2000 }); break; } catch { await new Promise((r) => setTimeout(r, 300)); } }
    const ids = fs.readdirSync(P.designs, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name);
    const rows = [];
    for (const id of ids) {
      const f = metaPath(id);
      const m = readJson(f, null);
      if (!m || m.status === 'needs_conversion') continue;
      const errors = [];
      const onErr = (e) => errors.push(String(e.message || e).split('\n')[0]);
      const onCon = (msg) => { if (msg.type() === 'error' && !/Failed to load resource|favicon/i.test(msg.text())) errors.push(msg.text().split('\n')[0]); };
      page.on('pageerror', onErr); page.on('console', onCon);
      await page.goto(`http://127.0.0.1:${port}/raw/${id}`, { waitUntil: 'networkidle', timeout: 20000 }).catch((e) => errors.push(`load: ${e.message.split('\n')[0]}`));
      await page.waitForTimeout(400);
      const height = await page.evaluate(() => document.getElementById('root')?.scrollHeight || 0).catch(() => 0);
      page.off('pageerror', onErr); page.off('console', onCon);
      const runtime = errors.length ? `runtime error: ${errors[0].slice(0, 160)}` : height < 40 ? 'renders nothing visible (needs props or data?)' : null;
      m.issues = (m.issues || []).filter((x) => !x.startsWith('runtime error') && !x.startsWith('renders nothing'));
      if (runtime) { m.issues.push(runtime); if (m.status === 'ok') m.status = 'needs_attention'; }
      m.rendered = { ok: !runtime, height, at: new Date().toISOString().slice(0, 10) };
      writeJson(f, m);
      rows.push(`${runtime ? 'FAIL' : 'ok  '} ${id}${runtime ? `  ${runtime}` : ''}`);
    }
    console.log(`Smoke test (render each design):\n${rows.join('\n')}`);
  } finally { await browser.close(); server.kill(); }
}

const isMain =process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname);
if (isMain) {
  const a = args();
  const cmd = a._[0] || 'init';
  if (cmd === 'init') {
    const fresh = ensureShowcase({ refresh: !!a.refresh });
    console.log(fresh ? `Created ${rel(P.showcase)} from templates.` : a.refresh ? `Refreshed engine-owned files in ${rel(P.showcase)}.` : `${rel(P.showcase)} already exists (use --refresh to update engine-owned files).`);
  } else if (cmd === 'check') check();
  else { console.error('Usage: npm run showcase:init [-- --refresh] | npm run showcase:check'); process.exit(1); }
}
void ROOT;

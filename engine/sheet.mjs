// npm run sheet -- <slug> [--no-build]
// Renders the shortlist's designs live (desktop 1440 + mobile 390) and lays them out on one contact sheet:
// reports/<slug>/shortlist.png (+ shortlist.html and per-design images). Zero Claude tokens; Claude just sends the PNG.
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { P, ROOT, args, die, readJson, loadMetas, rel } from './lib/util.mjs';
import { ensureShowcase, buildApp, loadChromium } from './showcase.mjs';

const a = args();
const slug = a._[0] || die('Usage: npm run sheet -- <slug>');
const list = readJson(path.join(P.shortlists, `${slug}.json`), null) || die(`No shortlist ${slug}. Run npm run shortlist -- ${slug}`);
const metas = new Map(loadMetas().map((m) => [m.id, m]));
const out = path.join(ROOT, 'reports', slug);
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

ensureShowcase();
if (!a['no-build'] || !fs.existsSync(path.join(P.showcase, 'dist', 'index.html'))) {
  console.log('Building the showcase...');
  const b = buildApp(P.showcase);
  if (!b.ok) die(`Showcase build failed:\n${b.output.slice(-1200)}`);
}
const browser = await loadChromium();
if (!browser) die('Playwright/Chromium not available.');
const port = 4500 + Math.floor(Math.random() * 400);
const server = spawn('npx', ['vite', 'preview', '--host', '127.0.0.1', '--port', String(port), '--strictPort'], { cwd: P.showcase, stdio: 'ignore' });
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

try {
  const shoot = async (id, width, height, maxH, file) => {
    const page = await browser.newPage({ viewport: { width, height } });
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto(`http://127.0.0.1:${port}/raw/${id}`, { waitUntil: 'networkidle', timeout: 30000 }).catch((e) => errors.push(e.message));
    await page.waitForTimeout(900);
    const h = await page.evaluate(() => document.getElementById('root')?.scrollHeight || document.body.scrollHeight).catch(() => height);
    await page.screenshot({ path: file, type: 'jpeg', quality: 82, clip: { x: 0, y: 0, width, height: Math.max(200, Math.min(h, maxH)) } });
    await page.close();
    return errors;
  };
  for (let i = 0; i < 50; i++) { try { await fetch(`http://127.0.0.1:${port}/`); break; } catch { await new Promise((r) => setTimeout(r, 300)); } }
  const cards = [];
  for (const it of list.items) {
    const d = `${String(it.rank).padStart(2, '0')}-${it.id}-desktop.jpg`, m = `${String(it.rank).padStart(2, '0')}-${it.id}-mobile.jpg`;
    const errs = [...await shoot(it.id, 1440, 900, 1300, path.join(out, d)), ...await shoot(it.id, 390, 844, 1300, path.join(out, m))];
    process.stdout.write(`${it.rank}. ${it.id}${errs.length ? ' (render warning)' : ''}\n`);
    const meta = metas.get(it.id);
    cards.push(`<article class="card"><header><span class="rank">${it.rank}</span><div><h2>${esc(meta?.name || it.id)}</h2><p class="id">${esc(it.id)} · ${esc(it.category)} · score ${it.score}</p></div></header>
<p class="why">${esc(it.why || 'Why line not written yet.')}</p>
<p class="reasons">${esc((it.reasons || []).slice(0, 3).join(' · '))}</p>
<div class="shots"><img class="desk" src="${d}" alt=""><img class="mob" src="${m}" alt=""></div></article>`);
  }
  const b = list.brief || {};
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${esc(list.company)} shortlist</title><style>
*{box-sizing:border-box}body{margin:0;background:#f4f4f5;font:14px/1.45 -apple-system,Segoe UI,Inter,Arial,sans-serif;color:#18181b}
.top{padding:32px 40px 8px}.top h1{margin:0;font-size:26px}.top p{margin:6px 0 0;color:#52525b}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;padding:20px 40px 40px}
.card{background:#fff;border:1px solid #e4e4e7;border-radius:14px;padding:16px;overflow:hidden}
header{display:flex;gap:12px;align-items:center}.rank{width:30px;height:30px;border-radius:999px;background:#18181b;color:#fff;display:grid;place-items:center;font-weight:700;flex:none}
h2{margin:0;font-size:16px}.id{margin:2px 0 0;color:#71717a;font:12px ui-monospace,Menlo,monospace}
.why{margin:12px 0 4px;font-size:14px;font-weight:600;color:#3f3f46}.reasons{margin:0 0 12px;color:#71717a;font-size:12px}
.shots{display:flex;gap:10px;align-items:flex-start}.desk{width:76%;border:1px solid #e4e4e7;border-radius:8px}.mob{width:22%;border:1px solid #e4e4e7;border-radius:8px}
</style></head><body><div class="top"><h1>${esc(list.company)}: top ${list.items.length} designs</h1>
<p>${esc([b.niche && `For: ${b.niche}`, b.style && `Style: ${b.style}`, b.animations && `Animations: ${b.animations}`, b.scheme && `Scheme: ${b.scheme}`].filter(Boolean).join(' · '))}</p>
<p>Pick ${list.picks || 3}: reply with their numbers, for example 2, 5, 7</p></div><div class="grid">${cards.join('\n')}</div></body></html>`;
  fs.writeFileSync(path.join(out, 'shortlist.html'), html);
  const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
  await page.goto(`file://${path.join(out, 'shortlist.html')}`, { waitUntil: 'load' });
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(out, 'shortlist.png'), fullPage: true });
  console.log(`\nContact sheet: ${rel(path.join(out, 'shortlist.png'))}  (also ${rel(path.join(out, 'shortlist.html'))})`);
} finally { await browser.close(); server.kill(); }

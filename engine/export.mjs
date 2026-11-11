// npm run export -- <slug>               final site  -> output/<slug>/final/index.html (option 1), option-2.html, ... + output/<slug>/<slug>-final.zip
// npm run export -- <slug> --single      final site as self-contained HTML files (images + scripts inside each file)
// npm run export -- <slug> --shortlist   shortlist   -> output/<slug>/shortlist/index.html (gallery) + one HTML file per design
//
// Static, client-ready HTML: each page is captured from the built app in a headless browser (template script NOT run),
// styles inlined, images copied next to the file, then the template's own script and (final site) the Designs switcher
// are attached. Files open with a double click (file://), offline except web fonts. Zero Claude tokens.
import fs from 'node:fs';
import path from 'node:path';
import { spawn, spawnSync } from 'node:child_process';
import { P, ROOT, args, die, readJson, rel, directionNames } from './lib/util.mjs';
import { loadLibrary } from './lib/library.mjs';
import { ensureShowcase, buildApp, loadChromium } from './showcase.mjs';
import { switcherSnippet } from './lib/static-switcher.mjs';

const a = args();
const slug = a._[0] || die('Usage: npm run export -- <slug> [--shortlist]');
const OUT = path.join(ROOT, 'output', slug);
const FINAL = path.join(OUT, a.single ? 'final-single' : 'final');
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const metas = new Map(loadLibrary().map((m) => [m.id, m]));
const brief = readJson(path.join(P.briefs, `${slug}.json`), {});
const shortlist = readJson(path.join(P.shortlists, `${slug}.json`), { items: [] });
const why = new Map((shortlist.items || []).map((i) => [i.id, i.why]));

function accentOf(hex) {
  const h = String(hex || '').replace('#', '');
  if (!/^[0-9a-f]{6}$/i.test(h)) return '#6ee7d2';
  let [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  if (lum < 0.55) { const t = Math.min(0.75, 0.55 - lum + 0.35); [r, g, b] = [r, g, b].map((c) => Math.round(c + (255 - c) * t)); }
  return '#' + [r, g, b].map((c) => c.toString(16).padStart(2, '0')).join('');
}

async function serve(dir) {
  const port = 4600 + Math.floor(Math.random() * 300);
  const proc = spawn('npx', ['vite', 'preview', '--host', '127.0.0.1', '--port', String(port), '--strictPort'], { cwd: dir, stdio: 'ignore' });
  for (let i = 0; i < 60; i++) { try { await fetch(`http://127.0.0.1:${port}/`); return { port, stop: () => proc.kill() }; } catch { await new Promise((r) => setTimeout(r, 300)); } }
  proc.kill(); die('Preview server did not start.');
}

// Capture one page as static HTML. prefix = path from the html file to its assets folder ("assets/").
async function capture(page, url, prefix) {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
  await page.waitForTimeout(700);
  return page.evaluate(async (prefix) => {
    const origin = location.origin, map = {};
    const local = (u) => {
      try {
        const url = new URL(u, location.href);
        if (url.origin !== origin || url.protocol === 'data:') return null;
        if (!map[url.href]) {
          const base = url.pathname.split('/').pop() || 'file';
          map[url.href] = prefix + base;
        }
        return map[url.href];
      } catch { return null; }
    };
    const fixCss = (css, base) => css.replace(/url\((['"]?)([^'")]+)\1\)/g, (m, q, u) => {
      if (u.startsWith('data:') || u.startsWith('#')) return m;
      const r = local(new URL(u, base).href);
      return r ? `url(${r})` : m;
    });
    for (const l of [...document.querySelectorAll('link[rel="stylesheet"]')]) {
      const url = new URL(l.getAttribute('href'), location.href);
      if (url.origin !== origin) continue;
      const st = document.createElement('style');
      st.textContent = fixCss(await (await fetch(url)).text(), url.href);
      l.replaceWith(st);
    }
    document.querySelectorAll('style').forEach((st) => { st.textContent = fixCss(st.textContent || '', location.href); });
    document.querySelectorAll('[src]').forEach((e) => { if (e.tagName !== 'SCRIPT') { const r = local(e.getAttribute('src')); if (r) e.setAttribute('src', r); } });
    document.querySelectorAll('[poster]').forEach((e) => { const r = local(e.getAttribute('poster')); if (r) e.setAttribute('poster', r); });
    document.querySelectorAll('[srcset]').forEach((e) => {
      e.setAttribute('srcset', e.getAttribute('srcset').split(',').map((part) => {
        const [u, ...rest] = part.trim().split(/\s+/);
        return [local(u) || u, ...rest].join(' ');
      }).join(', '));
    });
    document.querySelectorAll('[style]').forEach((e) => e.setAttribute('style', fixCss(e.getAttribute('style'), location.href)));
    document.querySelectorAll('link[rel~="icon"]').forEach((e) => { const r = local(e.getAttribute('href')); if (r) e.setAttribute('href', r); });
    document.querySelectorAll('script, link[rel="modulepreload"]').forEach((e) => e.remove());
    return { html: '<!DOCTYPE html>\n' + document.documentElement.outerHTML, assets: map };
  }, prefix);
}

async function saveAssets(map, baseDir) {
  for (const [url, relPath] of Object.entries(map)) {
    const dest = path.join(baseDir, relPath);
    if (fs.existsSync(dest)) continue;
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const res = await fetch(url);
    if (res.ok) fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
  }
}

// Template script + CDN scripts of a converted page folder (…/<design or section>/).
function pageScripts(designDir, assetsDir, name) {
  const tags = [];
  const pageFile = path.join(designDir, 'code', 'Page.tsx');
  if (fs.existsSync(pageFile)) {
    const m = fs.readFileSync(pageFile, 'utf8').match(/const SCRIPTS: string\[\] = (\[.*?\]);/);
    for (const src of m ? JSON.parse(m[1]) : []) tags.push(`<script src="${esc(src)}"></script>`);
  }
  const js = path.join(designDir, 'code', 'template.js');
  if (fs.existsSync(js) && fs.readFileSync(js, 'utf8').trim()) {
    fs.mkdirSync(assetsDir, { recursive: true });
    fs.copyFileSync(js, path.join(assetsDir, `${name}.js`));
    tags.push(`<script src="assets/${name}.js"></script>`);
  }
  return tags.join('\n');
}

// Self-contained files: images become data URIs, the template script goes inline; the assets folder is removed.
function inlineAll(dirPath, files) {
  const mime = { '.webp': 'image/webp', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.gif': 'image/gif', '.svg': 'image/svg+xml', '.avif': 'image/avif', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ico': 'image/x-icon' };
  const cache = new Map();
  const dataUri = (name) => {
    if (!cache.has(name)) {
      const f = path.join(dirPath, 'assets', name), ext = path.extname(name).toLowerCase();
      cache.set(name, fs.existsSync(f) && mime[ext] ? `data:${mime[ext]};base64,${fs.readFileSync(f).toString('base64')}` : null);
    }
    return cache.get(name);
  };
  for (const file of files) {
    const p = path.join(dirPath, file);
    let html = fs.readFileSync(p, 'utf8');
    html = html.replace(/<script src="assets\/([\w.-]+\.js)"><\/script>/g, (m, n) => {
      const f = path.join(dirPath, 'assets', n);
      return fs.existsSync(f) ? `<script>\n${fs.readFileSync(f, 'utf8').replace(/<\/script/gi, '<\\/script')}\n</script>` : m;
    });
    html = html.replace(/assets\/([\w.-]+\.(?:webp|jpe?g|png|gif|svg|avif|woff2?|ico))/gi, (m, n) => dataUri(n) || m);
    fs.writeFileSync(p, html);
  }
  fs.rmSync(path.join(dirPath, 'assets'), { recursive: true, force: true });
}

const inject = (html, snippet) => html.replace(/<\/body>/i, `${snippet}\n</body>`);

async function exportFinal() {
  const dir = path.join(P.sites, slug);
  const plan = readJson(path.join(dir, '.engine', 'site.json'), null) || die(`No site ${slug}. Build it first.`);
  console.log('Building the site...');
  const b = buildApp(dir);
  if (!b.ok) die(`Build failed:\n${b.output.slice(-1200)}`);
  fs.rmSync(FINAL, { recursive: true, force: true });
  fs.mkdirSync(path.join(FINAL, 'assets'), { recursive: true });
  const pages = plan.mode === 'pages' ? plan.sections : [{ folder: null, id: plan.slug, slot: 'page' }];
  const brand = String(brief.company || plan.company || slug);
  const names = directionNames(pages.map((s) => metas.get(s.id)));
  const options = pages.map((s, i) => {
    const m = metas.get(s.id) || {};
    const sw = (m.summary?.colors || []).filter((c) => /^#[0-9a-f]{6}$/i.test(c)).slice(0, 3);
    return { href: i ? `option-${i + 1}.html` : 'index.html', route: i ? `/option-${i + 1}` : '/', name: names[i], tagline: why.get(s.id) || m.tags?.note || '', swatches: sw.length ? sw : ['#e7e2d8', '#1b1d22'], folder: s.folder };
  });
  const accent = accentOf(brief.colors?.primary || plan.theme?.primary);
  const browser = await loadChromium();
  if (!browser) die('Chromium is not available. Run: npm run setup');
  const srv = await serve(dir);
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    for (const [i, o] of options.entries()) {
      const { html, assets } = await capture(page, `http://127.0.0.1:${srv.port}${o.route}?export=1`, 'assets/');
      await saveAssets(assets, FINAL);
      const scripts = o.folder ? pageScripts(path.join(dir, 'src', 'sections', o.folder), path.join(FINAL, 'assets'), `option-${i + 1}`) : '';
      fs.writeFileSync(path.join(FINAL, o.href), inject(html, `${scripts}\n${switcherSnippet({ options, current: i, brand, accent })}`));
      console.log(`  ${o.href}  ${o.name}`);
    }
  } finally { await browser.close(); srv.stop(); }
  const credits = readJson(path.join(dir, '.engine', 'image-credits.json'), []);
  if (credits.length) fs.writeFileSync(path.join(FINAL, 'IMAGE-CREDITS.txt'), `Photos from Openverse (licences allow commercial use; keep these credits when publishing):\n\n${credits.map((c) => `- ${c.title || 'Untitled'} by ${c.creator || 'unknown'} (${c.license}) ${c.source || ''}`).join('\n')}\n`);
  if (a.single) inlineAll(FINAL, options.map((o) => o.href));
  fs.writeFileSync(path.join(FINAL, 'README.txt'), `${brand}: ${options.length} homepage directions\n\nOpen index.html in a browser (double click). Use the Designs button (bottom right) to switch between options.\n${options.map((o, i) => `${i + 1}. ${o.href}  ${o.name}${o.tagline ? `: ${o.tagline}` : ''}`).join('\n')}\n`);
  const zipName = `${slug}-${path.basename(FINAL)}.zip`;
  fs.rmSync(path.join(OUT, zipName), { force: true });
  const zip = spawnSync('zip', ['-qr', zipName, path.basename(FINAL)], { cwd: OUT });
  console.log(`\nReady: ${rel(path.join(FINAL, 'index.html'))}${zip.status === 0 ? `  (zip: ${rel(path.join(OUT, zipName))})` : ''}`);
}

async function exportShortlist() {
  if (!shortlist.items?.length) die(`No shortlist ${slug}. Run npm run shortlist -- ${slug}`);
  ensureShowcase();
  console.log('Building the design library...');
  const b = buildApp(P.showcase);
  if (!b.ok) die(`Build failed:\n${b.output.slice(-1200)}`);
  const out = path.join(OUT, 'shortlist');
  fs.rmSync(out, { recursive: true, force: true });
  fs.mkdirSync(path.join(out, 'assets'), { recursive: true });
  const browser = await loadChromium();
  if (!browser) die('Chromium is not available. Run: npm run setup');
  const srv = await serve(P.showcase);
  const cards = [];
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    for (const it of shortlist.items) {
      const n = String(it.rank).padStart(2, '0');
      const file = `design-${n}-${it.id}.html`;
      const { html, assets } = await capture(page, `http://127.0.0.1:${srv.port}/raw/${it.id}?export=1`, 'assets/');
      // Thumbnail from a normal load (template script running), so scroll-reveal content is visible.
      await page.goto(`http://127.0.0.1:${srv.port}/raw/${it.id}`, { waitUntil: 'networkidle', timeout: 45000 }).catch(() => {});
      await page.waitForTimeout(1200);
      await page.screenshot({ path: path.join(out, 'assets', `thumb-${n}.jpg`), type: 'jpeg', quality: 78 });
      await saveAssets(assets, out);
      const scripts = pageScripts(path.join(P.designs, it.id), path.join(out, 'assets'), `design-${n}`);
      fs.writeFileSync(path.join(out, file), inject(html, scripts));
      const m = metas.get(it.id) || {};
      cards.push(`<a class="card" href="${file}"><img src="assets/thumb-${n}.jpg" alt="" loading="lazy"><div class="meta"><span class="rank">${it.rank}</span><div><h2>${esc(m.name || it.id)}</h2><p class="id">${esc(it.id)}</p></div></div><p class="why">${esc(it.why || (it.reasons || [])[0] || '')}</p></a>`);
      console.log(`  ${file}`);
    }
  } finally { await browser.close(); srv.stop(); }
  const company = esc(shortlist.company || slug);
  fs.writeFileSync(path.join(out, 'index.html'), `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${company}: 10 designs</title><style>
*{box-sizing:border-box}body{margin:0;background:#f4f4f5;color:#18181b;font:15px/1.5 Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;-webkit-tap-highlight-color:transparent}
header{padding:40px 24px 8px;max-width:1280px;margin:0 auto}h1{margin:0;font-size:clamp(26px,4vw,40px);letter-spacing:-.02em}header p{margin:8px 0 0;color:#52525b}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:20px;padding:24px;max-width:1280px;margin:0 auto}
.card{display:block;background:#fff;border:1px solid #e4e4e7;border-radius:16px;overflow:hidden;color:inherit;text-decoration:none;transition:transform .15s,box-shadow .15s}
@media (hover:hover){.card:hover{transform:translateY(-2px);box-shadow:0 18px 40px -24px rgba(0,0,0,.35)}}
.card img{display:block;width:100%;aspect-ratio:16/10;object-fit:cover;object-position:top;border-bottom:1px solid #e4e4e7}
.meta{display:flex;gap:12px;align-items:center;padding:16px 16px 0}.rank{flex:none;width:30px;height:30px;border-radius:999px;background:#18181b;color:#fff;display:grid;place-items:center;font-weight:700}
h2{margin:0;font-size:16px}.id{margin:2px 0 0;color:#71717a;font:12px ui-monospace,Menlo,monospace}.why{margin:10px 16px 18px;color:#3f3f46;font-size:14px}
footer{max-width:1280px;margin:0 auto;padding:8px 24px 48px;color:#52525b}code{background:#e4e4e7;padding:2px 6px;border-radius:6px}
</style></head><body><header><h1>${company}: 10 designs</h1><p>Click a design to open it full size. Then reply with the numbers of your 3 favourites, for example <code>2, 5, 7</code>.</p></header>
<main class="grid">${cards.join('\n')}</main><footer>Each file opens on its own (double click). Fonts load from Google Fonts when online.</footer></body></html>`);
  fs.rmSync(path.join(OUT, `${slug}-shortlist.zip`), { force: true });
  const zip = spawnSync('zip', ['-qr', `${slug}-shortlist.zip`, 'shortlist'], { cwd: OUT });
  console.log(`\nReady: ${rel(path.join(out, 'index.html'))}${zip.status === 0 ? `  (zip: ${rel(path.join(OUT, `${slug}-shortlist.zip`))})` : ''}`);
}

await (a.shortlist ? exportShortlist() : exportFinal());

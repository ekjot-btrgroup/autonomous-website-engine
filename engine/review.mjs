// Render and check generated designs (sites/<slug>/designs/NN-<name>/index.html).
//
//   npm run review -- <slug> [--only 2,5,7]   screenshots (desktop 1440, phone 390) + checks + slop scan
//   npm run review -- <slug> --gallery        contact sheet PNG + browsable copy of all designs with the Designs switcher
//
// Screenshots: reports/<slug>/NN-desktop.jpg, NN-phone.jpg (for the visual critic). Findings: reports/<slug>/review.json.
// Gallery: reports/<slug>/designs.png, output/<slug>/designs/ (opens from file://) and output/<slug>/<slug>-designs.zip.
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { ROOT, P, args, die, readJson, writeJson, rel, copyDir } from './lib/util.mjs';
import { loadChromium } from './showcase.mjs';
import { checkPaths } from './slop.mjs';
import { listDesigns as listIn, writeBrowsable, esc, crossCheck } from './lib/designs.mjs';
const listDesigns = () => listIn(DES);

const a = args();
const slug = a._[0] || die('Usage: npm run review -- <slug> [--only 2,5] [--gallery]');
const SITE = path.join(P.sites, slug);
const DES = path.join(SITE, 'designs');
const REP = path.join(ROOT, 'reports', slug);
const OUT = path.join(ROOT, 'output', slug);

const directions = () => readJson(path.join(P.briefs, `${slug}.directions.json`), []);
const dirFor = (n) => directions().find((d, i) => (d.n ?? i + 1) === n) || {};

async function inspect(page, width) {
  return page.evaluate((w) => {
    const vis = (el) => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
    const imgs = [...document.images];
    const taps = [...document.querySelectorAll('a, button, [role=button], input, select, textarea')].filter(vis).filter((el) => { const r = el.getBoundingClientRect(); return r.height < 40 && r.width < 40 && w < 500; });
    const h1 = document.querySelectorAll('h1').length;
    const over = document.documentElement.scrollWidth - w;
    const wide = over > 2 ? [...document.querySelectorAll('body *')].filter((el) => el.getBoundingClientRect().right > w + 2).slice(0, 3).map((el) => `${el.tagName.toLowerCase()}${el.className && typeof el.className === 'string' ? '.' + el.className.split(' ')[0] : ''}`) : [];
    const fam = (sel) => { const el = document.querySelector(sel); return el ? getComputedStyle(el).fontFamily.split(',')[0].replace(/["']/g, '').trim() : null; };
    const fontsOk = [fam('h1'), fam('p')].filter(Boolean).every((f) => /^(ui-|system-ui|-apple|serif|sans-serif|monospace)/.test(f) || document.fonts.check(`16px "${f}"`));
    // Text contrast: visible text against its first solid ancestor background (skipped over images/gradients).
    const rgb = (c) => { const m = c.match(/rgba?\(([^)]+)\)/); if (!m) return null; const v = m[1].split(/[ ,/]+/).filter(Boolean).map(Number); return { r: v[0], g: v[1], b: v[2], a: v.length > 3 ? v[3] : 1 }; };
    const lum = ({ r, g, b }) => { const f = (x) => { x /= 255; return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
    const ratio = (x, y) => { const [h, l] = [lum(x), lum(y)].sort((p, q) => q - p); return (h + 0.05) / (l + 0.05); };
    const bgOf = (el) => { for (let e = el; e; e = e.parentElement) { const cs = getComputedStyle(e); if (cs.backgroundImage !== 'none') return null; const c = rgb(cs.backgroundColor); if (c && c.a >= 0.95) return c; if (c && c.a > 0.05) return null; } return { r: 255, g: 255, b: 255, a: 1 }; };
    const lowContrast = [];
    for (const el of document.querySelectorAll('body *')) {
      if (lowContrast.length >= 8) break;
      const own = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim().length > 1);
      if (!own || !vis(el) || el.closest('[aria-hidden=true], svg, .sr-only')) continue;
      const cs = getComputedStyle(el); if (cs.visibility === 'hidden' || Number(cs.opacity) < 0.3) continue;
      const fg = rgb(cs.color), bg = bgOf(el); if (!fg || !bg || fg.a < 0.5) continue;
      const size = parseFloat(cs.fontSize), bold = Number(cs.fontWeight) >= 700, large = size >= 24 || (size >= 18.5 && bold);
      const r = ratio(fg, bg), need = large ? 3 : 4.5;
      if (r < need - 0.05) lowContrast.push(`"${el.textContent.trim().slice(0, 30)}" ${r.toFixed(1)}:1 (need ${need})`);
    }
    return {
      lowContrast,
      overflow: over > 2 ? over : 0, wide, h1, title: !!document.title.trim(), viewport: !!document.querySelector('meta[name=viewport]'),
      brokenImages: imgs.filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.getAttribute('src')).slice(0, 5),
      noAlt: imgs.filter((i) => !i.hasAttribute('alt')).length, smallTaps: taps.length, fontsOk, height: document.documentElement.scrollHeight,
    };
  }, width);
}

async function review(only) {
  const list = listDesigns().filter((d) => !only || only.includes(d.n));
  if (!list.length) die(`No designs in ${rel(DES)} (expected folders like 01-name/index.html).`);
  fs.mkdirSync(REP, { recursive: true });
  const browser = await loadChromium(); if (!browser) die('Playwright is not installed. Run: npm run setup');
  const results = readJson(path.join(REP, 'review.json'), {});
  try {
    for (const d of list) {
      const url = pathToFileURL(path.join(d.dir, 'index.html')).href;
      const r = { errors: [], failed: [], checks: {} };
      for (const [name, vp, mobile] of [['desktop', { width: 1440, height: 900 }, false], ['tablet', { width: 820, height: 1180 }, true], ['phone', { width: 390, height: 844 }, true]]) {
        const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1, isMobile: mobile, hasTouch: mobile, reducedMotion: 'reduce' });
        const page = await ctx.newPage();
        page.on('console', (m) => { if (m.type() === 'error') r.errors.push(`${name}: ${m.text().slice(0, 140)}`); });
        page.on('pageerror', (e) => r.errors.push(`${name}: ${e.message.slice(0, 140)}`));
        page.on('requestfailed', (q) => r.failed.push(`${q.url().slice(0, 100)} (${q.failure()?.errorText})`));
        await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => page.waitForLoadState('load'));
        await page.evaluate(async () => { for (let y = 0; y < document.documentElement.scrollHeight; y += 700) { scrollTo(0, y); await new Promise((s) => setTimeout(s, 60)); } scrollTo(0, 0); });
        await page.waitForTimeout(500);
        r.checks[name] = await inspect(page, vp.width);
        if (name !== 'tablet') {
          const h = Math.min(r.checks[name].height, name === 'phone' ? 14000 : 12000);
          await page.screenshot({ path: path.join(REP, `${String(d.n).padStart(2, '0')}-${name}.jpg`), type: 'jpeg', quality: 70, fullPage: true, clip: { x: 0, y: 0, width: vp.width, height: h } });
        }
        await ctx.close();
      }
      r.slop = checkPaths([path.join(d.dir, 'index.html')]).map((f) => `${f.level} ${f.rule}${f.text ? ` | ${f.text}` : ''}`);
      const c = r.checks, issues = [];
      for (const k of ['desktop', 'tablet', 'phone']) {
        if (c[k].overflow) issues.push(`${k}: page is ${c[k].overflow}px too wide (${c[k].wide.join(', ')})`);
        if (c[k].brokenImages.length) issues.push(`${k}: broken images ${c[k].brokenImages.join(', ')}`);
      }
      if (c.desktop.h1 !== 1) issues.push(`${c.desktop.h1} h1 headings (need exactly 1)`);
      if (!c.desktop.title) issues.push('missing <title>');
      if (!c.phone.viewport) issues.push('missing viewport meta');
      const lc = [...new Set([...(c.desktop.lowContrast || []), ...(c.phone.lowContrast || [])])];
      if (lc.length) issues.push(`${lc.length} low-contrast text: ${lc.slice(0, 3).join('; ')}`);
      if (c.desktop.noAlt) issues.push(`${c.desktop.noAlt} images without alt text`);
      if (c.phone.smallTaps > 2) issues.push(`${c.phone.smallTaps} tap targets smaller than 40px on phone`);
      if (!c.desktop.fontsOk) issues.push('heading or body font did not load');
      if (r.errors.length) issues.push(`${r.errors.length} script error(s): ${r.errors[0]}`);
      const slopErr = r.slop.filter((s) => s.startsWith('error')); if (slopErr.length) issues.push(`slop: ${slopErr.length} error(s): ${slopErr[0]}`);
      r.issues = issues; r.ok = !issues.length;
      results[d.folder] = r;
      console.log(`${d.folder.padEnd(28)} ${r.ok ? 'ok' : 'FIX'}  ${issues.join('; ')}${r.slop.length - slopErr.length ? `  (${r.slop.length - slopErr.length} slop warnings)` : ''}`);
    }
  } finally { await browser.close(); }
  const cross = crossCheck(listDesigns(), readJson(path.join(P.briefs, `${slug}.json`), {}));
  for (const d of list) {
    const r = results[d.folder], extra = cross[d.folder] || [];
    r.issues = (r.issues || []).filter((s) => !s.startsWith('across designs: ')).concat(extra.map((s) => `across designs: ${s}`)); r.ok = !r.issues.length;
    if (extra.length) console.log(`${d.folder.padEnd(28)} FIX  ${extra.length} item(s) repeat another design: ${extra.slice(0, 3).join('; ')}${extra.length > 3 ? ' ...' : ''}`);
  }
  writeJson(path.join(REP, 'review.json'), results);
  console.log(`\nScreenshots: ${rel(REP)}/NN-desktop.jpg and NN-phone.jpg. Give them to the critic.`);
}

async function gallery() {
  const list = listDesigns(); if (!list.length) die('No designs to show.');
  const brief = readJson(path.join(P.briefs, `${slug}.json`), {});
  const brand = brief.name || slug;
  for (const d of list) if (!fs.existsSync(path.join(REP, `${String(d.n).padStart(2, '0')}-desktop.jpg`))) die(`Run npm run review -- ${slug} first (no screenshots for ${d.folder}).`);
  // contact sheet: 2 columns of cards (desktop top + phone top), number, name, why line
  const thumbs = path.join(REP, 'thumbs'); fs.mkdirSync(thumbs, { recursive: true });
  const py = `import sys\nfrom PIL import Image\nfor src,dst,w,h in [a.split('|') for a in sys.argv[1:]]:\n  im=Image.open(src); w,h=int(w),int(h); im=im.crop((0,0,im.width,min(im.height,round(im.width*h/w)))).resize((w,h)); im.convert('RGB').save(dst,'JPEG',quality=78)`;
  const jobs = list.flatMap((d) => { const nn = String(d.n).padStart(2, '0'); return [`${path.join(REP, `${nn}-desktop.jpg`)}|${path.join(thumbs, `${nn}-d.jpg`)}|720|450`, `${path.join(REP, `${nn}-phone.jpg`)}|${path.join(thumbs, `${nn}-p.jpg`)}|150|325`]; });
  const pr = spawnSync('python3', ['-I', '-c', py, ...jobs], { encoding: 'utf8' }); if (pr.status) die(pr.stderr);
  const cards = list.map((d) => { const dd = dirFor(d.n); const nn = String(d.n).padStart(2, '0'); return `<div class="c"><div class="sh"><img src="thumbs/${nn}-d.jpg"><img class="p" src="thumbs/${nn}-p.jpg"></div><div class="t"><b>${d.n}</b><div><h3>${esc(dd.name || d.folder.slice(3))}</h3><p>${esc(dd.why || '')}</p><div class="sw">${[dd.palette?.bg, dd.palette?.surface, dd.palette?.ink, dd.palette?.accent].filter(Boolean).map((c) => `<i style="background:${esc(c)}"></i>`).join('')}<span>${esc(dd.fonts?.display || '')} / ${esc(dd.fonts?.body || '')}</span></div></div></div></div>`; }).join('');
  const html = `<!doctype html><meta charset="utf-8"><style>body{margin:0;background:#0f1012;color:#f3f1ec;font:14px/1.45 Inter,system-ui,sans-serif;padding:36px}h1{font-weight:600;font-size:26px;margin:0 0 4px}.s{color:#9a988f;margin:0 0 26px}.g{display:grid;grid-template-columns:1fr 1fr;gap:26px}.c{background:#18191c;border:1px solid #2a2b2f;border-radius:16px;overflow:hidden}.sh{position:relative;height:450px;overflow:hidden}.sh img{display:block;width:100%}.sh .p{position:absolute;right:16px;bottom:16px;width:150px;border-radius:14px;border:3px solid #0f1012;box-shadow:0 12px 30px rgba(0,0,0,.5)}.t{display:flex;gap:14px;padding:16px 18px}.t b{font-size:30px;line-height:1;min-width:38px;color:#e8e3d8}h3{margin:2px 0 4px;font-size:17px}p{margin:0 0 8px;color:#b9b6ad}.sw{display:flex;gap:6px;align-items:center}.sw i{width:16px;height:16px;border-radius:50%;border:1px solid #333}.sw span{color:#8d8a82;font-size:12px;margin-left:6px}</style><h1>${esc(brand)}: 10 designs</h1><p class="s">Reply with the numbers of your 3 favourites.</p><div class="g">${cards}</div>`;
  fs.writeFileSync(path.join(REP, 'designs.html'), html);
  const browser = await loadChromium(); if (!browser) die('Playwright is not installed.');
  try { const pg = await browser.newPage({ viewport: { width: 1560, height: 1000 }, deviceScaleFactor: 1 }); await pg.goto(pathToFileURL(path.join(REP, 'designs.html')).href); await pg.waitForTimeout(300); await pg.screenshot({ path: path.join(REP, 'designs.png'), fullPage: true }); } finally { await browser.close(); }
  writeBrowsable(list, path.join(OUT, 'designs'), brand, dirFor);
  fs.mkdirSync(OUT, { recursive: true });
  const zip = path.join(OUT, `${slug}-designs.zip`); fs.rmSync(zip, { force: true });
  const z = spawnSync('python3', ['-I', '-c', 'import shutil,sys;shutil.make_archive(sys.argv[1][:-4],"zip",sys.argv[2])', zip, path.join(OUT, 'designs')]);
  console.log(`Contact sheet: ${rel(path.join(REP, 'designs.png'))}\nBrowsable designs: ${rel(path.join(OUT, 'designs', 'index.html'))}${z.status === 0 ? `\nZip: ${rel(zip)}` : ''}`);
}

if (a.gallery) await gallery();
else await review(a.only ? String(a.only).split(',').map(Number) : null);

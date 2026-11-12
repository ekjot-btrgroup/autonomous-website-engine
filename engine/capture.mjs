// Reference library: record what a great template LOOKS like, never its text, images or code.
//
//   npm run capture -- <url> --industry <name> [--name <slug>] [--licence purchased|free|own|unknown]
//   npm run capture -- --batch <file>          one per line: "<industry> <url> [licence]"  (# = comment)
//   npm run capture -- --list [--industry <name>]
//
// Saves references/<industry>/<slug>/: dna.json (type scale, palette, spacing, section order and layout,
// image treatment, buttons, nav, motion), thumb.jpg, mobile.jpg and sections/NN-<kind>.jpg (desktop crops).
// The design system and the section library are built from these files; copy and assets are never kept.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, args, die, readJson, writeJson, slugify, rel } from './lib/util.mjs';
import { loadChromium } from './showcase.mjs';

const REFS = path.join(ROOT, 'references');
const a = args();
const MAX_H = 16000;

export function slugFromUrl(url) {
  try {
    const u = new URL(url);
    if (u.protocol === 'file:') return slugify(path.basename(path.dirname(u.pathname)));
    const host = u.hostname.replace(/^www\./, '');
    const sub = host.match(/^([^.]+)\.(framer\.(website|app|ai|media|photos|wiki)|webflow\.io|vercel\.app|netlify\.app)$/);
    const base = sub ? sub[1] : host.split('.').slice(0, -1).join('-') || host;
    const page = u.pathname.replace(/\/+$/, '').split('/').filter(Boolean).join('-');
    return slugify(page ? `${base}-${page}` : base);
  } catch { return slugify(url); }
}

// ---------- runs inside the page ----------
function extractDNA() {
  const W = innerWidth, H = Math.min(document.documentElement.scrollHeight, 16000);
  const cv = document.createElement('canvas').getContext('2d', { willReadFrequently: true });
  const memo = new Map();
  const hex = (c) => {
    if (!c || c === 'transparent' || /rgba?\([^)]*,\s*0\)$/.test(c)) return null;
    if (memo.has(c)) return memo.get(c);
    cv.clearRect(0, 0, 1, 1); cv.fillStyle = '#000'; cv.fillStyle = c; cv.fillRect(0, 0, 1, 1);
    const [r, g, b, al] = cv.getImageData(0, 0, 1, 1).data;
    const out = al < 26 ? null : '#' + [r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('');
    memo.set(c, out); return out;
  };
  const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  const sat = (h) => { const [r, g, b] = rgb(h); const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2; return mx === mn ? 0 : (mx - mn) / (l > 0.5 ? 2 - mx - mn : mx + mn); };
  const lum = (h) => { const [r, g, b] = rgb(h).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
  const S = (el) => getComputedStyle(el);
  const box = (el) => { const r = el.getBoundingClientRect(); return { x: r.left + scrollX, y: r.top + scrollY, w: r.width, h: r.height }; };
  const vis = (el) => { const r = el.getBoundingClientRect(); if (r.width < 2 || r.height < 2) return false; const s = S(el); return s.visibility !== 'hidden' && s.display !== 'none' && +s.opacity > 0.05; };
  const fam = (s) => s.fontFamily.split(',')[0].replace(/["']/g, '').trim();
  const directText = (el) => [...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join(' ').replace(/\s+/g, ' ').trim();
  const round = (n, d = 2) => +n.toFixed(d);
  const tally = (m, k, w) => m.set(k, (m.get(k) || 0) + w);
  const top = (m, n, total) => [...m].sort((x, y) => y[1] - x[1]).slice(0, n).map(([k, v]) => ({ value: k, share: round(v / (total || 1)) }));
  const all = [...document.body.querySelectorAll('*')].filter((el) => !/^(SCRIPT|STYLE|NOSCRIPT|TEMPLATE|META|LINK|PATH|G|DEFS)$/i.test(el.tagName));

  // ---- typography ----
  const styles = new Map(); const fonts = new Map(); const textCol = new Map(); let chars = 0, words = 0;
  for (const el of all) {
    const t = directText(el); if (t.length < 2 || !vis(el)) continue;
    const s = S(el), size = parseFloat(s.fontSize), f = fam(s), w = +s.fontWeight || 400;
    const key = `${f}|${Math.round(size)}|${w}`;
    const st = styles.get(key) || { family: f, size: Math.round(size), weight: w, chars: 0, count: 0, transform: s.textTransform, tracking: round((parseFloat(s.letterSpacing) || 0) / size, 3), leading: round((parseFloat(s.lineHeight) || size * 1.2) / size), italic: s.fontStyle === 'italic' };
    st.chars += t.length; st.count++; styles.set(key, st);
    tally(fonts, f, t.length); const c = hex(s.color); if (c) tally(textCol, c, t.length);
    chars += t.length; words += t.split(' ').length;
  }
  const st = [...styles.values()];
  const body = st.filter((x) => x.size >= 13 && x.size <= 22).sort((x, y) => y.chars - x.chars)[0] || st[0];
  const heads = st.filter((x) => x.size >= (body?.size || 16) * 1.25).sort((x, y) => y.size - x.size);
  const levels = []; for (const h of heads) if (!levels.some((l) => Math.abs(l.size - h.size) / h.size < 0.12)) levels.push(h);
  const label = st.filter((x) => x.size <= 14 && (x.transform === 'uppercase' || x.tracking >= 0.04)).sort((x, y) => y.count - x.count)[0];
  const pickT = (x) => x && { family: x.family, size: x.size, weight: x.weight, tracking: x.tracking, leading: x.leading, transform: x.transform !== 'none' ? x.transform : undefined, italic: x.italic || undefined };
  const typography = {
    fonts: top(fonts, 4, chars),
    display: pickT(levels[0]), headings: levels.slice(1, 5).map(pickT), body: pickT(body), label: pickT(label),
    scale_ratio: levels.length > 1 && body ? round(levels[0].size / body.size, 1) : null,
    words, density_words_per_1000px: Math.round(words / (H / 1000)),
  };

  // ---- sections ----
  const inflow = (el) => { const p = S(el).position; return p !== 'fixed' && p !== 'absolute'; };
  let root = document.body;
  for (let i = 0; i < 12; i++) {
    const kids = [...root.children].filter((k) => vis(k) && inflow(k) && box(k).h >= 40);
    if (kids.length >= 3) break;
    const big = kids.sort((x, y) => box(y).h - box(x).h)[0];
    if (!big) break; root = big;
  }
  const navEl = document.querySelector('nav, header') || [...all].find((el) => /fixed|sticky/.test(S(el).position) && box(el).y < 20 && box(el).h < 160 && box(el).w > W * 0.6);
  const RX = [['testimonials', /\b(say|says|words|reviews?|testimonials?|loved by|love us|feedback|kind words)\b/], ['pricing', /\b(pricing|plans?|packages?|prices?|rates|membership|tiers?)\b/], ['faq', /\b(faq|questions?|asked)\b/], ['contact', /\b(contact|get in touch|reach us|book|appointment|reservation|reserve|visit us|enquir|inquir)/], ['team', /\b(team|meet (the|our)|our people|founders?|doctors|chefs|trainers|stylists)\b/], ['stats', /\b(numbers|stats|results|impact|at a glance|in figures)\b/], ['process', /\b(process|how it works|steps?|workflow|approach)\b/], ['portfolio', /\b(work|projects?|portfolio|case stud|selected|showcase)/], ['gallery', /\b(gallery|moments|photos|inside)\b/], ['blog', /\b(blog|journal|news|insights|articles|stories)\b/], ['logos', /\b(trusted|partners|clients|brands|as seen|featured in)\b/], ['menu', /\b(menu|dishes|drinks|wine)\b/], ['services', /\b(services?|what we do|we offer|expertise|solutions|capabilities|treatments?|programs?|classes|offerings?)/], ['features', /\b(features?|benefits?|why choose|why us|advantages|everything you need)\b/], ['about', /\b(about|our story|who we are|mission|philosophy|values|since \d{4})\b/], ['cta', /\b(ready|get started|start (your|today|now)|join|try|free trial|subscribe|let.s talk|newsletter)\b/]];
  const runningAnims = document.getAnimations ? document.getAnimations() : [];
  const sections = [];
  const secs = [...root.children].filter((k) => vis(k) && inflow(k) && box(k).h >= 40);
  secs.forEach((el, i) => {
    const b = box(el); const desc = [...el.querySelectorAll('*')].slice(0, 2500).filter(vis);
    const imgs = desc.filter((d) => d.tagName === 'IMG' || d.tagName === 'VIDEO' || (S(d).backgroundImage.includes('url(') && box(d).w > 80));
    const headsIn = desc.filter((d) => /^H[1-4]$/.test(d.tagName) || (parseFloat(S(d).fontSize) >= (body?.size || 16) * 1.6 && directText(d).length > 2));
    // classify by the section's own heading (+ eyebrow above it), never by card titles
    const main = [...headsIn].sort((x, y) => parseFloat(S(y).fontSize) - parseFloat(S(x).fontSize) || box(x).y - box(y).y)[0];
    const mb0 = main && box(main);
    const eyebrow = main ? desc.filter((d) => directText(d).length > 1 && box(d).y < mb0.y && box(d).y > mb0.y - 160).map((d) => directText(d)).join(' ') : '';
    const headText = `${eyebrow} ${main ? main.textContent : ''}`.toLowerCase().slice(0, 300);
    const txt = el.textContent.replace(/\s+/g, ' ');
    const btns = desc.filter((d) => (d.tagName === 'A' || d.tagName === 'BUTTON') && hex(S(d).backgroundColor) && box(d).h >= 28 && box(d).h <= 80);
    // columns: the widest row of similar sibling boxes
    let cols = 1, rows = 1;
    for (const d of desc) {
      const kids = [...d.children].filter(vis).map(box).filter((k) => k.w > 60 && k.h > 40);
      if (kids.length < 2) continue;
      const tops = new Map(); kids.forEach((k) => tally(tops, Math.round(k.y / 10), 1));
      const perRow = Math.max(...tops.values()); const similar = kids.every((k) => Math.abs(k.w - kids[0].w) / kids[0].w < 0.15);
      if (similar && perRow > cols && perRow <= 8) { cols = perRow; rows = Math.ceil(kids.length / perRow); }
    }
    const fullImg = imgs.some((m) => { const mb = box(m); return mb.w >= b.w * 0.85 && mb.h >= b.h * 0.5; });
    const split = desc.some((d) => { const k = [...d.children].filter(vis).map(box); return k.length === 2 && k.every((x) => x.w >= b.w * 0.3) && Math.abs(k[0].y - k[1].y) < 40; });
    const center = main ? S(main).textAlign === 'center' : false;
    const marquee = runningAnims.some((an) => an.effect?.target && el.contains(an.effect.target) && an.effect.getComputedTiming().iterations === Infinity);
    let kind = null; const isNav = navEl && (el === navEl || el.contains(navEl)) && b.h < 200;
    if (isNav) kind = 'navbar';
    else if (el.tagName === 'FOOTER' || (i === secs.length - 1 && b.y > H * 0.7)) kind = 'footer';
    else if (!sections.some((s) => s.kind === 'hero') && b.y < 900) kind = 'hero';
    else {
      for (const [k, rx] of RX) if (rx.test(headText)) { kind = k; break; }
      if (!kind && el.querySelector('form, input, textarea')) kind = 'contact';
      if (!kind && el.querySelector('details')) kind = 'faq';
      if (!kind && (txt.match(/[$€£₹]\s?\d+/g) || []).length >= 2) kind = 'pricing';
      if (!kind && imgs.length >= 5 && imgs.every((m) => box(m).h < 90)) kind = 'logos';
      if (!kind && imgs.length >= 6) kind = 'gallery';
      if (!kind && cols >= 3) kind = 'features';
      if (!kind && txt.length < 400 && btns.length) kind = 'cta';
      if (!kind) kind = 'about';
    }
    const firstY = Math.min(...desc.filter((d) => directText(d).length > 1 || d.tagName === 'IMG').map((d) => box(d).y), b.y + b.h);
    const radii = imgs.map((m) => parseFloat(S(m).borderRadius) || 0);
    sections.push({
      i, kind, y: Math.round(b.y), h: Math.round(b.h), bg: hex(S(el).backgroundColor) || null,
      layout: marquee ? 'marquee' : fullImg ? 'full-bleed-media' : split ? 'split' : cols >= 2 ? `grid-${cols}` : center ? 'centered' : 'stacked',
      cols, rows, align: center ? 'center' : 'left', pad_top: Math.max(0, Math.round(firstY - b.y)),
      headline_words: main ? main.textContent.trim().split(/\s+/).length : 0,
      words: txt.trim().split(' ').length, images: imgs.length, buttons: btns.length,
      image_radius: radii.length ? Math.round(radii.sort((x, y) => x - y)[radii.length >> 1]) : null,
      grayscale: imgs.some((m) => /grayscale/.test(S(m).filter)) || undefined,
    });
  });
  // section backgrounds: inherit the page background when transparent
  const pageBg = hex(S(document.body).backgroundColor) || hex(S(document.documentElement).backgroundColor) || '#ffffff';
  for (const s of sections) s.bg = s.bg || pageBg;

  // ---- colour ----
  const bgArea = new Map(); let areaTot = 0;
  for (const s of sections) { tally(bgArea, s.bg, s.h); areaTot += s.h; }
  const surfaces = new Map();
  for (const el of all) { const c = hex(S(el).backgroundColor); if (!c || !vis(el)) continue; const b = box(el); const ar = b.w * b.h; if (ar > 4000 && ar < W * 900 * 0.6) tally(surfaces, c, ar); }
  const accentMap = new Map();
  for (const el of all) {
    if (!vis(el)) continue; const s = S(el);
    const bg = hex(s.backgroundColor); const b = box(el);
    if (bg && sat(bg) > 0.3 && b.w * b.h < W * 600) tally(accentMap, bg, 3);
    const c = hex(s.color); if (c && sat(c) > 0.3 && directText(el).length > 1) tally(accentMap, c, 1);
  }
  const grads = [...new Set(all.map((el) => S(el).backgroundImage).filter((g) => g.includes('gradient')))];
  const darkShare = sections.filter((s) => lum(s.bg) < 0.2).reduce((n, s) => n + s.h, 0) / (areaTot || 1);
  const colour = {
    page_bg: pageBg, scheme: lum(pageBg) < 0.2 ? 'dark' : darkShare > 0.35 ? 'mixed' : 'light', dark_share: round(darkShare),
    section_bgs: top(bgArea, 6, areaTot), surfaces: top(surfaces, 5, [...surfaces.values()].reduce((x, y) => x + y, 0)),
    text: top(textCol, 4, chars), accents: top(accentMap, 3, [...accentMap.values()].reduce((x, y) => x + y, 0)),
    gradients: grads.length, gradient_samples: grads.slice(0, 3).map((g) => g.slice(0, 140)),
  };

  // ---- components ----
  const btnEls = all.filter((el) => (el.tagName === 'A' || el.tagName === 'BUTTON') && vis(el) && hex(S(el).backgroundColor) && box(el).h >= 28 && box(el).h <= 80 && el.textContent.trim().length > 1);
  const btn = btnEls[0] || btnEls.find(Boolean);
  const bs = btn && S(btn);
  const radiusMap = new Map();
  for (const el of all) { const s = S(el); if ((hex(s.backgroundColor) || parseFloat(s.borderTopWidth) > 0) && vis(el) && box(el).w > 120) { const r = parseFloat(s.borderTopLeftRadius) || 0; if (r < 200) tally(radiusMap, Math.round(r), 1); } }
  const shadows = all.filter((el) => S(el).boxShadow !== 'none').length;
  const hairlines = all.filter((el) => { const s = S(el); return parseFloat(s.borderTopWidth) === 1 || parseFloat(s.borderBottomWidth) === 1; }).length;
  const lefts = sections.map((s, i) => { const el = secs[i]; const ds = [...el.querySelectorAll('*')].slice(0, 800).filter((d) => vis(d) && directText(d).length > 1); return ds.length ? Math.min(...ds.map((d) => box(d).x)) : null; }).filter((x) => x !== null && x >= 0).sort((x, y) => x - y);
  const gutter = lefts.length ? Math.round(lefts[lefts.length >> 1]) : null;
  const nb = navEl && box(navEl); const ns = navEl && S(navEl);
  const components = {
    button: bs && { bg: hex(bs.backgroundColor), text: hex(bs.color), radius: Math.round(parseFloat(bs.borderTopLeftRadius) || 0), height: Math.round(box(btn).h), weight: +bs.fontWeight, transform: bs.textTransform !== 'none' ? bs.textTransform : undefined, icon: !!btn.querySelector('svg') || undefined, border: parseFloat(bs.borderTopWidth) > 0 || undefined },
    radius: top(radiusMap, 3, [...radiusMap.values()].reduce((x, y) => x + y, 0)),
    shadows, hairlines, gutter, content_width: gutter !== null ? Math.max(0, W - 2 * gutter) : null,
    nav: navEl ? { position: ns.position, height: Math.round(nb.h), links: navEl.querySelectorAll('a').length, transparent: !hex(ns.backgroundColor), blur: /blur/.test(ns.backdropFilter || '') || undefined } : null,
  };
  return { viewport: W, page_height: H, section_count: sections.length, sections, typography, colour, components };
}

function motionBefore() {
  const hidden = [...document.querySelectorAll('body *')].filter((el) => { const s = getComputedStyle(el); const r = el.getBoundingClientRect(); return r.top + scrollY > innerHeight && r.width > 20 && (+s.opacity < 0.05 || (s.transform !== 'none' && s.transform !== 'matrix(1, 0, 0, 1, 0, 0)')); });
  hidden.forEach((el) => el.setAttribute('data-ref-hidden', ''));
  return { start_hidden: hidden.length, framer_appear: document.querySelectorAll('[data-framer-appear-id]').length };
}
function motionAfter() {
  const revealed = [...document.querySelectorAll('[data-ref-hidden]')].filter((el) => +getComputedStyle(el).opacity > 0.9).length;
  const an = document.getAnimations ? document.getAnimations() : [];
  const inf = an.filter((x) => x.effect?.getComputedTiming().iterations === Infinity).length;
  const sticky = [...document.querySelectorAll('body *')].filter((el) => getComputedStyle(el).position === 'sticky').length;
  const transitions = [...document.querySelectorAll('a, button')].filter((el) => parseFloat(getComputedStyle(el).transitionDuration) > 0).length;
  return {
    scroll_reveals: revealed, running_animations: an.length, looping_animations: inf, sticky_elements: sticky, hover_transitions: transitions,
    smooth_scroll: !!(document.documentElement.classList.contains('lenis') || window.Lenis || window.lenis) || undefined,
    gsap: !!window.gsap || undefined, videos: document.querySelectorAll('video').length,
  };
}

async function scrollThrough(page) {
  await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const H = Math.min(document.documentElement.scrollHeight, 16000);
    for (let y = 0; y < H; y += 500) { scrollTo(0, y); await sleep(140); }
    scrollTo(0, 0); await sleep(700);
  });
}

async function captureOne(browser, url, industry, opts = {}) {
  const slug = opts.name ? slugify(opts.name) : slugFromUrl(url);
  const ind = slugify(industry);
  const dir = path.join(REFS, ind, slug);
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(path.join(dir, 'sections'), { recursive: true });
  const blocked = new Set();
  const track = (page) => page.on('requestfailed', (r) => { if (/TUNNEL|BLOCKED|NAME_NOT_RESOLVED|CONNECTION_REFUSED/i.test(r.failure()?.errorText || '')) { try { blocked.add(new URL(r.url()).hostname); } catch { /* ignore */ } } });

  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage(); track(page);
  try { await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }); }
  catch (e) {
    if (/TUNNEL|BLOCKED|ERR_/.test(e.message)) { await ctx.close(); fs.rmSync(dir, { recursive: true, force: true }); return { url, error: 'blocked', hosts: [new URL(url).hostname] }; }
    await page.waitForLoadState('load').catch(() => {});
  }
  await page.waitForTimeout(800);
  const before = await page.evaluate(motionBefore);
  await scrollThrough(page);
  const after = await page.evaluate(motionAfter);
  const dna = await page.evaluate(extractDNA);
  await page.screenshot({ path: path.join(dir, 'thumb.jpg'), type: 'jpeg', quality: 62 });
  for (const s of dna.sections) {
    const h = Math.min(s.h, 2400); if (s.y >= MAX_H || h < 20) continue;
    s.shot = `sections/${String(s.i + 1).padStart(2, '0')}-${s.kind}.jpg`;
    await page.screenshot({ path: path.join(dir, s.shot), type: 'jpeg', quality: 58, fullPage: true, clip: { x: 0, y: s.y, width: 1440, height: h } }).catch(() => { delete s.shot; });
  }
  await ctx.close();

  const mctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
  const mp = await mctx.newPage(); track(mp);
  let mobile = null;
  try {
    await mp.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(() => mp.waitForLoadState('load'));
    await scrollThrough(mp);
    mobile = await mp.evaluate(() => {
      const hs = [...document.querySelectorAll('h1, h2')].filter((h) => h.getBoundingClientRect().width > 0);
      const nav = document.querySelector('nav, header');
      const visibleLinks = nav ? [...nav.querySelectorAll('a')].filter((x) => x.getBoundingClientRect().width > 0 && getComputedStyle(x).visibility !== 'hidden').length : 0;
      return { display_size: hs.length ? Math.round(Math.max(...hs.map((h) => parseFloat(getComputedStyle(h).fontSize)))) : null, nav_links_visible: visibleLinks, page_height: document.documentElement.scrollHeight };
    });
    const mh = Math.min(mobile.page_height, 12000);
    await mp.screenshot({ path: path.join(dir, 'mobile.jpg'), type: 'jpeg', quality: 55, fullPage: true, clip: { x: 0, y: 0, width: 390, height: mh } });
  } catch (e) { mobile = { error: e.message.split('\n')[0].slice(0, 120) }; }
  await mctx.close();

  const out = {
    id: `${ind}/${slug}`, url, industry: ind, licence: opts.licence || 'unknown', captured: new Date().toISOString().slice(0, 10),
    rule: 'Reference only: learn proportions, rhythm, type, colour and motion. Never copy its text, images or code.',
    ...dna, motion: { ...before, ...after }, mobile,
    missing_assets_from: blocked.size ? [...blocked] : undefined,
  };
  writeJson(path.join(dir, 'dna.json'), out);
  return { url, id: out.id, dir, dna: out, blocked: [...blocked] };
}

export function summarize(d) {
  const t = d.typography || {}, c = d.colour || {}, m = d.motion || {};
  const font = (x) => (x ? `${x.family} ${x.weight} ${x.size}px` : '?');
  const kinds = (d.sections || []).map((s) => `${s.kind}${s.layout && !['stacked', 'centered'].includes(s.layout) ? `(${s.layout})` : ''}`).join(' > ');
  const motion = [m.scroll_reveals ? `${m.scroll_reveals} scroll reveals` : '', m.looping_animations ? `${m.looping_animations} loops` : '', m.sticky_elements ? 'sticky parts' : '', m.smooth_scroll ? 'smooth scroll' : '', m.videos ? `${m.videos} video` : ''].filter(Boolean).join(', ') || 'static';
  return [
    `${d.id}  [${d.licence}]  ${c.scheme || '?'} scheme, ${d.section_count} sections, ${d.page_height}px`,
    `  type: display ${font(t.display)} / body ${font(t.body)}${t.label ? ` / label ${font(t.label)}${t.label.transform ? ' ' + t.label.transform : ''}` : ''}  ratio ${t.scale_ratio ?? '?'}  density ${t.density_words_per_1000px ?? '?'} w/1000px`,
    `  colour: bg ${c.page_bg}  accents ${(c.accents || []).map((x) => x.value).join(' ') || 'none'}  text ${(c.text || []).slice(0, 2).map((x) => x.value).join(' ')}  gradients ${c.gradients ?? 0}`,
    `  shape: radius ${(d.components?.radius || []).map((r) => r.value).join('/') || '?'}  button ${d.components?.button ? `${d.components.button.bg} r${d.components.button.radius} h${d.components.button.height}` : 'none'}  gutter ${d.components?.gutter ?? '?'}px  shadows ${d.components?.shadows ?? 0}  hairlines ${d.components?.hairlines ?? 0}`,
    `  motion: ${motion}`,
    `  sections: ${kinds}`,
  ].join('\n');
}

function list(industry) {
  if (!fs.existsSync(REFS)) return console.log('No references yet.');
  const inds = fs.readdirSync(REFS, { withFileTypes: true }).filter((e) => e.isDirectory() && (!industry || e.name === slugify(industry))).map((e) => e.name).sort();
  let n = 0;
  for (const ind of inds) {
    const ids = fs.readdirSync(path.join(REFS, ind), { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name).sort();
    console.log(`\n# ${ind} (${ids.length})`);
    for (const id of ids) { const d = readJson(path.join(REFS, ind, id, 'dna.json'), null); if (d) { console.log(summarize(d)); n++; } }
  }
  console.log(`\n${n} reference(s) in ${inds.length} industr${inds.length === 1 ? 'y' : 'ies'}.`);
}

async function main() {
  if (a.list) return list(typeof a.list === 'string' ? a.list : a.industry);
  let jobs = [];
  if (a.batch) {
    const f = path.resolve(String(a.batch));
    if (!fs.existsSync(f)) die(`No such file: ${a.batch}`);
    jobs = fs.readFileSync(f, 'utf8').split('\n').map((l) => l.replace(/#.*/, '').trim()).filter(Boolean).map((l) => { const [industry, url, licence] = l.split(/\s+/); return { industry, url, licence }; });
  } else if (a._[0]) jobs = [{ url: a._[0], industry: a.industry, licence: a.licence, name: a.name }];
  else die('Usage: npm run capture -- <url> --industry <name>   |   --batch <file>   |   --list');
  for (const j of jobs) if (!j.industry || !/^(https?|file):/.test(j.url || '')) die(`Each reference needs an industry and a full link (got "${j.industry || ''} ${j.url || ''}").`);

  const browser = await loadChromium();
  if (!browser) die('Playwright is not installed. Run: npm run setup');
  const blockedHosts = new Set(); let ok = 0;
  try {
    for (const j of jobs) {
      process.stdout.write(`capture ${j.url} ... `);
      try {
        const r = await captureOne(browser, j.url, j.industry, j);
        if (r.error) { console.log('BLOCKED (network settings)'); r.hosts.forEach((h) => blockedHosts.add(h)); continue; }
        r.blocked.forEach((h) => blockedHosts.add(h)); ok++;
        console.log(`ok -> ${rel(r.dir)}\n${summarize(r.dna)}`);
      } catch (e) { console.log(`failed: ${e.message.split('\n')[0].slice(0, 120)}`); }
    }
  } finally { await browser.close(); }
  console.log(`\n${ok}/${jobs.length} captured.`);
  if (blockedHosts.size) console.log(`Not reachable from here (allow these hosts, or run the capture on your own computer): ${[...blockedHosts].sort().join(', ')}`);
  if (!ok) process.exitCode = 1;
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname)) await main();

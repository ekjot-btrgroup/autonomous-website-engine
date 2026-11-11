// Text extraction/replacement, Tailwind recolouring and theme tokens for generated sites.
// Purpose: Claude rewrites copy and picks colours/fonts WITHOUT reading or rewriting component code.
import fs from 'node:fs';
import path from 'node:path';
import { sh } from './util.mjs';

// ---------------- copy (text) ----------------
const PROP_CTX = /\b(label|title|name|text|heading|subheading|subtitle|description|desc|cta|ctaText|button|buttonText|quote|author|role|position|company|alt|placeholder|aria-label|tagline|eyebrow|badge|price|period|question|answer|content|caption|location|date|value|feature|features|tag)\s*[:=]\s*\{?\s*$/i;
const CLASS_WORDS = new Set('flex grid block inline hidden relative absolute fixed sticky static group peer container contents truncate underline italic uppercase lowercase capitalize border rounded shadow transition grow shrink isolate invisible visible antialiased transform filter blur outline ring prose sr-only'.split(' '));
const classLike = (s) => {
  const toks = s.trim().split(/\s+/);
  return toks.every((t) => CLASS_WORDS.has(t) || /^[!-]?[a-z0-9@[\]()/.:#%_,'&>*=-]+$/.test(t)) && toks.some((t) => /[-:[]/.test(t) || CLASS_WORDS.has(t));
};
const looksLikeCode = (s) => /^(https?:|\/|\.\.?\/|#[0-9a-f]{3,8}$|mailto:|tel:|data:|rgba?\(|hsla?\()/i.test(s) || /^[a-z]+([A-Z][a-z]+)+$/.test(s) || /\.(png|jpe?g|svg|webp|gif|mp4|tsx?|jsx?|css)$/i.test(s);

export function extractStrings(src) {
  const items = [];
  // 1. string literals
  const reStr = /(["'`])((?:\\.|(?!\1)[^\\\n])*)\1/g;
  let m;
  while ((m = reStr.exec(src))) {
    const [full, q, raw] = m;
    const start = m.index + 1, end = start + raw.length;
    const lineStart = src.lastIndexOf('\n', m.index) + 1;
    const before = src.slice(Math.max(lineStart, m.index - 60), m.index);
    const after = src.slice(m.index + full.length, m.index + full.length + 3);
    if (/^\s*(\/\/|\*|\/\*)/.test(src.slice(lineStart, m.index))) continue;
    if (/\b(import|from|require|import\()\s*\(?\s*$/.test(before) || /^\s*import\b/.test(src.slice(lineStart, m.index))) continue;
    if (/\b(className|class|style|variant|size|type|id|key|href|src|target|rel|role|as|ref|htmlFor|viewBox|d|fill|stroke|xmlns)\s*=\s*\{?\s*$/.test(before)) continue;
    if (/\b(cn|clsx|cva|twMerge|classNames)\([^)]*$/.test(before)) continue;
    if (/^\s*:/.test(after) && !/\?[^:]*$/.test(before)) continue; // object key
    if (q === '`' && raw.includes('${')) continue;
    if (/^use (client|server|strict)$/.test(raw)) continue;
    const text = raw.replace(/\\(['"`\\])/g, '$1').replace(/\\n/g, '\n');
    if (!/[A-Za-z]/.test(text) || looksLikeCode(text) || classLike(text)) continue;
    const words = text.trim().split(/\s+/).length;
    // {"text"} written as a JSX child (converted templates keep spacing this way) is always page text.
    const jsxChild = /\{\s*$/.test(before) && /^\s*\}/.test(src.slice(m.index + full.length, m.index + full.length + 4)) && !/=\s*\{\s*$/.test(before);
    const ctx = PROP_CTX.test(before) || jsxChild;
    if (!(ctx || words >= 2)) continue;
    if (!ctx && /^[a-z0-9-]+$/.test(text)) continue;
    items.push({ kind: 'str', quote: q, start, end, raw, text });
  }
  // 2. JSX text between tags
  const reJsx = />([^<>{}]+)</g;
  while ((m = reJsx.exec(src))) {
    const prev = src[m.index - 1];
    if (prev === '=' || prev === '-') continue; // => or ->
    const raw = m[1];
    if (!(/[A-Za-z]/.test(raw) || /[$€£₹]\s?\d/.test(raw)) || /[;=()]|&&|\|\|/.test(raw)) continue;
    const lead = raw.length - raw.trimStart().length;
    const trimmed = raw.trim();
    if (!trimmed || /^\/\//.test(trimmed)) continue;
    const start = m.index + 1 + lead;
    items.push({ kind: 'jsx', start, end: start + trimmed.length, raw: trimmed, text: trimmed.replace(/\s+/g, ' ') });
  }
  return items.sort((x, y) => x.start - y.start).filter((it, i, arr) => !i || it.start >= arr[i - 1].end);
}

export function encodeText(item, text) {
  if (item.kind === 'jsx') return /[{}<>]/.test(text) ? `{${JSON.stringify(text)}}` : text;
  const q = item.quote;
  let s = String(text).replace(/\\/g, '\\\\');
  s = q === '`' ? s.replace(/`/g, '\\`').replace(/\$\{/g, '\\${') : s.replace(new RegExp(q, 'g'), `\\${q}`).replace(/\n/g, '\\n');
  return s;
}

// Apply replacements to one file's source. changes: [{start,end,raw,item,text}]
export function applyToSource(src, changes) {
  let out = src;
  const skipped = [];
  for (const c of [...changes].sort((x, y) => y.start - x.start)) {
    if (out.slice(c.start, c.end) !== c.raw) { skipped.push(c); continue; }
    out = out.slice(0, c.start) + encodeText(c, c.text) + out.slice(c.end);
  }
  return { out, skipped };
}

// ---------------- recolour (Tailwind palette names / hex) ----------------
const PREFIX = '(?:bg|text|border(?:-[trblxyse])?|from|via|to|ring|ring-offset|fill|stroke|shadow|outline|decoration|divide|placeholder|accent|caret)';
export function recolor(src, map = {}, hexMap = {}) {
  let n = 0;
  const names = Object.keys(map);
  let out = src;
  if (names.length) {
    const re = new RegExp(`\\b(${PREFIX}-)(${names.join('|')})(-(?:50|[1-9]00|950))\\b`, 'g');
    out = out.replace(re, (_, p, c, s) => { n++; return `${p}${map[c]}${s}`; });
  }
  for (const [from, to] of Object.entries(hexMap)) {
    const re = new RegExp(from.replace('#', '#'), 'gi');
    out = out.replace(re, () => { n++; return to; });
  }
  return { out, n };
}

// ---------------- theme tokens ----------------
export function hexToHsl(hex) {
  let h = hex.replace('#', '');
  if (h.length === 3) h = [...h].map((c) => c + c).join('');
  if (!/^[0-9a-f]{6}$/i.test(h)) throw new Error(`Bad hex colour ${hex}`);
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2;
  let hue = 0, s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    hue = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
    hue *= 60;
  }
  return { css: `${+hue.toFixed(1)} ${+(s * 100).toFixed(1)}% ${+(l * 100).toFixed(1)}%`, lum: luminance([r, g, b]) };
}
const luminance = (rgb) => { const [r, g, b] = rgb.map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };

const SERIF = /serif|playfair|lora|merriweather|cormorant|garamond|baskerville|fraunces|crimson|caslon|bodoni|didot|prata|cinzel|spectral|newsreader|literata|gloock|young serif/i;
const fontStack = (name) => `"${name}", ${SERIF.test(name) && !/sans/i.test(name) ? 'Georgia, serif' : 'ui-sans-serif, system-ui, sans-serif'}`;

function setVar(block, name, value) {
  const re = new RegExp(`(--${name}:\\s*)[^;]+;`);
  return re.test(block) ? block.replace(re, `$1${value};`) : block.replace(/:root\s*\{/, `:root {\n    --${name}: ${value};`);
}

// Edits src/index.css (:root only) and index.html (Google Fonts). Returns a list of changes.
export function applyTheme(siteDir, t) {
  const done = [];
  const cssFile = path.join(siteDir, 'src', 'index.css');
  let css = fs.readFileSync(cssFile, 'utf8');
  const rootMatch = css.match(/:root\s*\{[^}]*\}/);
  if (!rootMatch) throw new Error('No :root block in src/index.css');
  let root = rootMatch[0];
  const color = (key, hex, fgKey) => {
    const c = hexToHsl(hex);
    root = setVar(root, key, c.css);
    if (fgKey) root = setVar(root, fgKey, c.lum > 0.4 ? '222 47% 11%' : '0 0% 100%');
    done.push(`${key}=${hex}`);
    return c;
  };
  if (t.primary) { color('primary', t.primary, 'primary-foreground'); root = setVar(root, 'ring', hexToHsl(t.primary).css); }
  if (t.accent) color('accent', t.accent, 'accent-foreground');
  if (t.background) color('background', t.background);
  if (t.foreground) color('foreground', t.foreground);
  if (t.radius) { root = setVar(root, 'radius', t.radius); done.push(`radius=${t.radius}`); }
  if (t.body) { root = setVar(root, 'font-body', fontStack(t.body)); done.push(`body font=${t.body}`); }
  if (t.heading) { root = setVar(root, 'font-heading', fontStack(t.heading)); done.push(`heading font=${t.heading}`); }
  css = css.replace(rootMatch[0], root);
  fs.writeFileSync(cssFile, css);

  const fonts = [...new Set([t.heading, t.body].filter(Boolean))];
  if (fonts.length) {
    const htmlFile = path.join(siteDir, 'index.html');
    let html = fs.readFileSync(htmlFile, 'utf8');
    const block = `<!-- FONTS -->\n    <link rel="preconnect" href="https://fonts.googleapis.com" />\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n    <link rel="stylesheet" href="${googleFontsUrl(fonts)}" />\n    <!-- /FONTS -->`;
    html = /<!-- FONTS -->[\s\S]*?<!-- \/FONTS -->/.test(html) ? html.replace(/<!-- FONTS -->[\s\S]*?<!-- \/FONTS -->/, block) : html.replace('<!-- FONTS -->', block);
    fs.writeFileSync(htmlFile, html);
  }
  return done;
}

// Ask Google which weight set exists for each family (static fonts reject missing weights).
export function googleFontsUrl(fonts) {
  const fam = (name, axis) => `family=${encodeURIComponent(name).replace(/%20/g, '+')}${axis}`;
  const parts = fonts.map((name) => {
    for (const axis of [':wght@400;500;600;700', ':wght@400;700', '']) {
      const url = `https://fonts.googleapis.com/css2?${fam(name, axis)}&display=swap`;
      try { sh('curl', ['-sf', '-o', '/dev/null', '--max-time', '8', url]); return fam(name, axis); } catch { /* try next */ }
    }
    return fam(name, ':wght@400;700'); // offline: best guess
  });
  return `https://fonts.googleapis.com/css2?${parts.join('&')}&display=swap`;
}

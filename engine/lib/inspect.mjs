// Static inspection of a design's source: format, entry file, imports, compact summary, category guess.
import fs from 'node:fs';
import path from 'node:path';
import { extractStrings } from './sitekit.mjs';

export const CODE_EXT = new Set(['.tsx', '.ts', '.jsx', '.js', '.mjs']);
export const STYLE_EXT = new Set(['.css']);
export const ASSET_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.avif', '.mp4', '.webm', '.woff', '.woff2', '.ttf', '.otf', '.json']);
const SKIP_NAMES = /^(package-lock\.json|yarn\.lock|pnpm-lock\.yaml|bun\.lockb?|tsconfig.*\.json|components\.json|\.eslintrc.*|eslint\.config\..*|vite\.config\..*|postcss\.config\..*|next\.config\..*|next-env\.d\.ts)$/i;

const read = (f) => { try { return fs.readFileSync(f, 'utf8'); } catch { return ''; } };

export function detectFormat(files) {
  const ext = (e) => files.some((f) => f.toLowerCase().endsWith(e));
  const code = files.filter((f) => CODE_EXT.has(path.extname(f).toLowerCase())).map(read).join('\n');
  if (ext('.vue')) return 'vue';
  if (ext('.svelte')) return 'svelte';
  if (ext('.astro')) return 'astro';
  const jsx = ext('.tsx') || ext('.jsx') || /from\s+['"]react['"]/.test(code) || /return\s*\(\s*</.test(code);
  if (jsx) return /\bclassName=\s*["'{`][^"'`]*\b(flex|grid|px-|py-|text-|bg-)/.test(code) || /\bcn\(/.test(code) ? 'react-tailwind' : 'react';
  if (ext('.html') || ext('.htm')) return /cdn\.tailwindcss\.com|class="[^"]*\b(px-\d|py-\d|bg-\w+-\d{2,3})/.test(files.filter((f) => /\.html?$/i.test(f)).map(read).join('\n')) ? 'html-tailwind' : 'html';
  return 'unknown';
}

// Which files of a design are copied into the showcase (code, styles, assets; no configs/lockfiles).
export function usableFiles(baseDir, files) {
  return files.filter((f) => {
    const name = path.basename(f);
    if (SKIP_NAMES.test(name)) return false;
    if (name === 'package.json') return false;
    if (/^tailwind\.config\./i.test(name)) return false;
    const e = path.extname(f).toLowerCase();
    return CODE_EXT.has(e) || STYLE_EXT.has(e) || ASSET_EXT.has(e);
  });
}

const DEMO_RE = /(^|[./-])(demo|example|usage|preview)s?\.(t|j)sx?$/i;
// Pick the file that renders the section. Demo/usage files win because they render with props.
export function findEntry(baseDir, files) {
  const code = files.filter((f) => /\.(t|j)sx$/i.test(f) || (/\.(t|j)s$/i.test(f) && /<[A-Z]|return\s*\(\s*</.test(read(f))));
  if (!code.length) return null;
  const relp = (f) => path.relative(baseDir, f).split(path.sep).join('/');
  const score = (f) => {
    const r = relp(f), src = read(f);
    let s = 0;
    if (DEMO_RE.test(path.basename(f))) s += 50;
    if (/^(src\/)?(App)\.(t|j)sx$/.test(r)) s += 30;
    if (/^index\.(t|j)sx$/.test(r)) s += 25;
    if (/\/components\/ui\//.test(r)) s -= 40;
    if (/export\s+default/.test(src)) s += 10;
    if (/export\s+(const|function)\s+[A-Z]/.test(src) || /export\s*\{[^}]*[A-Z]/.test(src)) s += 5;
    s += Math.min(15, (src.match(/<[a-zA-Z]/g) || []).length / 10);
    s -= r.split('/').length; // prefer shallow files
    return s;
  };
  return code.sort((a, b) => score(b) - score(a))[0];
}

// How to import the entry's component: default export, or a named PascalCase export.
export function entryExport(src, file) {
  if (/export\s+default\b/.test(src)) return { kind: 'default' };
  const names = [
    ...[...src.matchAll(/export\s+(?:const|function|class)\s+([A-Z]\w*)/g)].map((m) => m[1]),
    ...[...src.matchAll(/export\s*\{([^}]*)\}/g)].flatMap((m) => m[1].split(',').map((s) => s.trim().split(/\s+as\s+/).pop().trim())).filter((n) => /^[A-Z]/.test(n)),
  ];
  if (!names.length) return null;
  const base = path.basename(file).replace(/\.\w+$/, '').toLowerCase();
  const pick = names.find((n) => /demo|example|default/i.test(n)) || names.find((n) => n.toLowerCase() === base) || names[names.length - 1];
  return { kind: 'named', name: pick };
}

const IMPORT_RE = /(\bimport\s+(?:[^'";]*?\s+from\s+)?|\bexport\s+[^'";]*?\s+from\s+|\bimport\s*\(\s*|\brequire\s*\(\s*)(['"])([^'"]+)\2/g;
export function importsOf(src) {
  return [...src.matchAll(IMPORT_RE)].map((m) => m[3]);
}
export const pkgName = (spec) => (spec.startsWith('@') ? spec.split('/').slice(0, 2).join('/') : spec.split('/')[0]);
const BUILTIN = new Set(['react', 'react-dom', 'react/jsx-runtime']);
export const isBare = (s) => !s.startsWith('.') && !s.startsWith('/') && !s.startsWith('@/') && !s.startsWith('~/') && !/^(https?:|data:|node:)/.test(s);

// Rewrite imports of one copied code file so it works inside showcase/src/designs/<id>/code/.
// `@/x` -> relative path if x exists inside the design; kept if the base app provides it.
export function rewriteImports(src, { fileRel, designFiles, baseHas }) {
  const issues = [];
  const deps = new Set();
  const out = src.replace(IMPORT_RE, (full, head, q, spec) => {
    if (spec === 'next/image' || spec === 'next/link') return `${head}${q}@/lib/shims/${spec.split('/')[1] === 'image' ? 'next-image' : 'next-link'}${q}`;
    if (/^next(\/|$)/.test(spec)) { issues.push(`uses ${spec} (Next.js only)`); return full; }
    if (spec.startsWith('@/') || spec.startsWith('~/')) {
      const target = spec.slice(2);
      const local = resolveLocal(target, designFiles);
      if (local) {
        let r = path.posix.relative(path.posix.dirname(fileRel), local.replace(/\.(tsx|ts|jsx|js)$/, '').replace(/\/index$/, ''));
        if (!r.startsWith('.')) r = './' + r;
        return `${head}${q}${r}${q}`;
      }
      if (baseHas(target)) return spec.startsWith('~/') ? `${head}${q}@/${target}${q}` : full;
      issues.push(`missing ${spec}`);
      return full;
    }
    if (isBare(spec)) { const p = pkgName(spec); if (!BUILTIN.has(p) && !BUILTIN.has(spec)) deps.add(p); }
    return full;
  });
  return { code: out, issues, deps: [...deps] };
}

function resolveLocal(target, designFiles) {
  const tries = [];
  for (const prefix of ['', 'src/']) for (const suf of ['', '.tsx', '.ts', '.jsx', '.js', '/index.tsx', '/index.ts', '/index.jsx', '/index.js', '.css'])
    tries.push(prefix + target + suf);
  // Also allow a flat drop: `@/components/ui/button` provided as `button.tsx` at the design root.
  const flat = target.split('/').pop();
  for (const suf of ['.tsx', '.ts', '.jsx', '.js']) tries.push(flat + suf);
  return tries.find((t) => designFiles.has(t)) || null;
}

// ---------- compact summary (what the tagger reads instead of source code) ----------
const strip = (s) => s.replace(/\{[^{}]*\}/g, ' ').replace(/\s+/g, ' ').trim();
export function summarize(codeText) {
  const headings = [...codeText.matchAll(/<h([1-3])[^>]*>([\s\S]*?)<\/h\1>/g)].map((m) => strip(m[2].replace(/<[^>]+>/g, ' '))).filter((t) => /[a-z]/i.test(t));
  const ctas = [...codeText.matchAll(/<(button|Button|a|Link)\b[^>]*>([^<{]{2,40})</g)].map((m) => m[2].trim()).filter(Boolean);
  const texts = extractStrings(codeText).map((i) => i.text.replace(/\s+/g, ' ').trim()).filter((t) => t.length > 2 && t.split(' ').length > 1 && !ctas.includes(t));
  const colorCounts = {};
  for (const m of codeText.matchAll(/\b(?:bg|text|from|via|to|border|ring)-([a-z]+)-(\d{2,3})\b/g)) colorCounts[m[1]] = (colorCounts[m[1]] || 0) + 1;
  const colors = Object.entries(colorCounts).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([c]) => c);
  const darkHits = (codeText.match(/\bbg-(black|(zinc|neutral|slate|gray|stone)-(9\d\d|8\d\d))\b|\bbg-\[#0|\bdark\b/g) || []).length;
  const lightHits = (codeText.match(/\bbg-(white|(zinc|neutral|slate|gray|stone)-(50|100))\b/g) || []).length;
  const fonts = [...new Set([...codeText.matchAll(/\bfont-(serif|mono|display|heading)\b/g)].map((m) => m[1]))];
  const images = (codeText.match(/<img\b|<Image\b|url\(|background-image/g) || []).length;
  const uniq = (a, n, len = 80) => [...new Set(a)].slice(0, n).map((t) => t.slice(0, len));
  return {
    headings: uniq(headings, 4), ctas: uniq(ctas, 4, 30), texts: uniq(texts.filter((t) => !headings.includes(t)), 6),
    colors, dark: darkHits > lightHits ? true : lightHits > darkHits ? false : null, fonts, images,
    motion: /framer-motion|from\s+['"]motion/.test(codeText), lines: codeText.split('\n').length,
  };
}

const CATEGORY_HINTS = [
  ['navbar', /<nav\b|navbar|navigation|NavLink|menu-?toggle|hamburger/i, 3],
  ['footer', /<footer\b|footer|©|&copy;|all rights reserved/i, 4],
  ['hero', /<h1\b|hero|headline|get started|book a demo/i, 2],
  ['pricing', /pricing|\/mo\b|per month|\/month|billed (annually|yearly)|plans?\b/i, 3],
  ['faq', /faq|frequently asked|accordion/i, 3],
  ['testimonials', /testimonial|what (our )?(clients|customers) say|review|quote|stars?/i, 3],
  ['features', /features?|benefits?|why choose|capabilit/i, 2],
  ['logos', /trusted by|logos?|partners|clients/i, 1],
  ['stats', /stats|statistics|\d+\+|\d+%|counter/i, 1],
  ['team', /our team|team|founder|member/i, 2],
  ['portfolio', /portfolio|projects|case stud|our work|selected work/i, 2],
  ['gallery', /gallery|masonry|lightbox/i, 2],
  ['contact', /contact|<form\b|<input\b|email address|send message/i, 2],
  ['newsletter', /newsletter|subscribe/i, 2],
  ['cta', /\bcta\b|call to action|ready to|start (your|free)|sign up/i, 1],
  ['process', /how it works|process|steps?\b|timeline/i, 1],
  ['about', /about|our story|mission|who we are/i, 1],
  ['blog', /blog|article|read more|posts?/i, 1],
  ['services', /services|what we do|offerings/i, 2],
  ['product', /add to cart|shop now|product|collection/i, 2],
  ['menu', /menu|starters|mains|desserts|dishes/i, 1],
];
export function guessCategory(fileNames, codeText) {
  const names = fileNames.join(' ');
  const scores = {};
  for (const [cat, re, w] of CATEGORY_HINTS) {
    const inName = new RegExp(re.source, 'i').test(names) ? 6 : 0;
    const hits = Math.min(4, (codeText.match(new RegExp(re.source, 'gi')) || []).length);
    if (inName || hits) scores[cat] = inName + hits * w;
  }
  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  if (!ranked.length) return { category: 'other', confidence: 0.1 };
  const [top, s] = ranked[0];
  const second = ranked[1]?.[1] || 0;
  return { category: top, confidence: Math.round(Math.min(0.9, 0.3 + (s - second) / Math.max(s, 1) * 0.6) * 100) / 100 };
}

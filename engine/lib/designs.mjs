// Shared helpers for generated designs (sites/<slug>/designs/NN-<name>/index.html).
import fs from 'node:fs';
import path from 'node:path';
import { copyDir } from './util.mjs';
import { switcherSnippet } from './static-switcher.mjs';

export function listDesigns(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).filter((e) => e.isDirectory() && /^\d{2}-/.test(e.name) && fs.existsSync(path.join(dir, e.name, 'index.html')))
    .map((e) => ({ n: Number(e.name.slice(0, 2)), dir: path.join(dir, e.name), folder: e.name })).sort((x, y) => x.n - y.n);
}

export const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function writeBrowsable(list, outDir, brand, dirLookup) {
  fs.rmSync(outDir, { recursive: true, force: true }); fs.mkdirSync(outDir, { recursive: true });
  const options = list.map((d) => { const dd = dirLookup(d.n); return { href: `../${d.folder}/index.html`, name: dd.name || d.folder.slice(3), tagline: dd.why || dd.concept || '', swatches: [dd.palette?.bg, dd.palette?.accent, dd.palette?.ink].filter(Boolean) }; });
  list.forEach((d, i) => {
    copyDir(d.dir, path.join(outDir, d.folder), { filter: (r) => !/^(direction\.json|notes\.md)$/.test(r) });
    const f = path.join(outDir, d.folder, 'index.html');
    fs.writeFileSync(f, fs.readFileSync(f, 'utf8').replace(/<\/body>/i, `${switcherSnippet({ options, current: i, brand, accent: options[i].swatches[1] || '#6ee7d2' })}\n</body>`));
  });
  fs.writeFileSync(path.join(outDir, 'index.html'), `<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=${list[0].folder}/index.html"><title>${esc(brand)}</title><a href="${list[0].folder}/index.html">Open the designs</a>`);
}


// Cross-design sameness: headings (h1-h3) and photos shared between designs of one brief.
// The lower-numbered design keeps a shared item; every higher-numbered design that repeats it must change.
const norm = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').toLowerCase().replace(/[^a-z0-9£$€ ]+/g, ' ').replace(/\s+/g, ' ').trim();
// Headings are compared sentence by sentence; sentences that are brief facts (service names, address, CTA) are exempt.
export function designFingerprint(d, factText = '') {
  const html = fs.readFileSync(path.join(d.dir, 'index.html'), 'utf8');
  const headings = [...html.matchAll(/<h([1-3])\b[^>]*>([\s\S]*?)<\/h\1>/gi)]
    .flatMap((m) => m[2].replace(/<[^>]+>/g, ' ').split(/[.!?]+(?:\s|$)/).map((t) => ({ level: Number(m[1]), text: norm(t) })))
    .filter((h) => h.text.split(' ').length >= 3 && !factText.includes(h.text));
  let credits = [];
  try { credits = JSON.parse(fs.readFileSync(path.join(d.dir, 'img', 'credits.json'), 'utf8')); } catch {}
  const photos = credits.map((c) => ({ file: c.file, id: String(c.source || '').split('?')[0].replace(/\/+$/, '') })).filter((p) => p.id);
  return { headings, photos };
}
export function crossCheck(list, brief = {}) {
  const factText = norm(JSON.stringify(brief).replace(/["{}\[\],:]/g, ' '));
  const fp = list.map((d) => ({ d, ...designFingerprint(d, factText) }));
  const issues = {};
  const add = (folder, msg) => (issues[folder] ||= []).push(msg);
  fp.forEach((x, i) => {
    for (const y of fp.slice(0, i)) {
      const yText = new Set(y.headings.map((h) => h.text));
      for (const h of x.headings) if (yText.has(h.text)) add(x.d.folder, `heading "${h.text}" repeats design ${String(y.d.n).padStart(2, '0')}: write a new one`);
      const yIds = new Set(y.photos.map((p) => p.id));
      for (const p of x.photos) if (yIds.has(p.id)) add(x.d.folder, `photo img/${p.file} is also used in design ${String(y.d.n).padStart(2, '0')}: choose a different photo`);
    }
  });
  for (const k of Object.keys(issues)) issues[k] = [...new Set(issues[k])];
  return issues;
}

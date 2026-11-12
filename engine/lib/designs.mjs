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


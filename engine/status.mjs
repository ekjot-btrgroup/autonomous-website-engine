// npm run status -> one-screen overview: reference library, briefs, designs per brief, final deliveries (zero tokens).
import fs from 'node:fs';
import path from 'node:path';
import { P, readJson } from './lib/util.mjs';
import { loadRefs } from './refs.mjs';
import { listDesigns } from './lib/designs.mjs';

const refs = loadRefs();
const by = {}; for (const r of refs) by[r.industry] = (by[r.industry] || 0) + 1;
console.log(`References: ${refs.length} in ${Object.keys(by).length} industries (${refs.filter((r) => r.meta?.name && r.hasCard).length} with notes)`);
console.log('  ' + Object.entries(by).sort().map(([k, v]) => `${k} ${v}`).join('  '));
const briefs = fs.existsSync(P.briefs) ? fs.readdirSync(P.briefs).filter((f) => /^[a-z0-9-]+\.json$/.test(f) && !f.startsWith('_')) : [];
console.log(`\nBriefs: ${briefs.length}`);
for (const f of briefs) {
  const slug = f.replace(/\.json$/, ''); const b = readJson(path.join(P.briefs, f), {});
  const designs = listDesigns(path.join(P.sites, slug, 'designs')).length;
  const final = readJson(path.join(P.sites, slug, 'final', '.engine', 'final.json'), null);
  const out = fs.existsSync(path.join(P.sites, '..', 'output', slug, 'final'));
  console.log(`  ${slug.padEnd(28)} ${String(b.industry || '').padEnd(22)} designs ${designs}/10  ${final || out ? 'final delivered' : designs >= 10 ? 'waiting for picks' : 'in progress'}`);
}

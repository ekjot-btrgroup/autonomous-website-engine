// npm run status -> one-screen overview of the library, shortlists and sites (zero tokens).
import fs from 'node:fs';
import path from 'node:path';
import { P, loadMetas, readJson, table, categoryOf } from './lib/util.mjs';

const metas = loadMetas();
const by = (f) => metas.reduce((c, m) => ((c[f(m)] = (c[f(m)] || 0) + 1), c), {});
console.log(`Library: ${metas.length} designs | status ${JSON.stringify(by((m) => m.status))} | tagged ${metas.filter((m) => m.tags).length}/${metas.length}`);
console.log(`Categories: ${Object.entries(by(categoryOf)).sort((x, y) => y[1] - x[1]).map(([k, v]) => `${k} ${v}`).join(', ') || '-'}`);
const pending = fs.existsSync(P.incoming) ? fs.readdirSync(P.incoming).filter((n) => !n.startsWith('.') && n !== 'README.md') : [];
if (pending.length) console.log(`Waiting in incoming/: ${pending.length} item(s) -> npm run add`);
const sc = readJson(path.join(P.showcase, '.engine', 'sync.json'), null);
console.log(`Showcase repo: ${sc ? `${sc.repo} (last push ${sc.synced_at.slice(0, 16)})` : 'not pushed yet'}`);
const shorts = fs.existsSync(P.shortlists) ? fs.readdirSync(P.shortlists).filter((f) => f.endsWith('.json')) : [];
console.log(`Shortlists: ${shorts.map((f) => f.replace('.json', '')).join(', ') || '-'}`);
const sites = fs.existsSync(P.sites) ? fs.readdirSync(P.sites, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name) : [];
const rows = sites.map((s) => {
  const plan = readJson(path.join(P.sites, s, '.engine', 'site.json'), {});
  const sync = readJson(path.join(P.sites, s, '.engine', 'sync.json'), null);
  return { site: s, sections: (plan.sections || []).length, picks: (plan.picks || []).join(','), lovable_repo: sync?.repo || '-', last_push: sync?.synced_at?.slice(0, 16) || '-' };
});
console.log(`\nSites:\n${table(rows, ['site', 'sections', 'picks', 'lovable_repo', 'last_push'])}`);

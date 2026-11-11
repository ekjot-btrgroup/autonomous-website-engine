// npm run shortlist -- <slug> [--top 10]
// Reads briefs/<slug>.json, ranks the library, writes showcase/src/shortlists/<slug>.json.
// The showcase page /s/<slug> then shows the live designs for the user to pick from. Zero Claude tokens.
import fs from 'node:fs';
import path from 'node:path';
import { P, args, die, loadMetas, readJson, writeJson, table, rel } from './lib/util.mjs';
import { rank, isUsable } from './lib/score.mjs';

const a = args();
const slug = (a._[0] || '').replace(/^briefs\//, '').replace(/\.json$/, '') || die('Usage: npm run shortlist -- <brief-slug>   (brief file: briefs/<slug>.json)');
const briefFile = path.join(P.briefs, `${slug}.json`);
if (!fs.existsSync(briefFile)) die(`Missing ${rel(briefFile)}. Create it first (see briefs/_template.json).`);
const brief = readJson(briefFile);
const metas = loadMetas();
if (!metas.length) die('The library is empty. Run: npm run add');

const r = rank(metas, brief, { top: Number(a.top || 10) });
const out = {
  slug, company: brief.company || slug, created_at: new Date().toISOString(), picks: Number(brief.picks || 3),
  brief: { industry: brief.industry, style: brief.style, audience: brief.audience, sections: r.query.sections },
  items: r.items.map(({ id, rank: rk, score, category, reasons }) => ({ id, rank: rk, score, category, reasons })),
};
writeJson(path.join(P.shortlists, `${slug}.json`), out);

console.log(`Brief understood as: sections=${r.query.sections.join(',')} | industries=${r.query.industries.join(',') || '-'} | style=${r.query.style.join(',') || '-'} | scheme=${r.query.scheme || 'any'}`);
console.log(table(out.items.map((i) => ({ ...i, why: i.reasons.join('; ') })), ['rank', 'id', 'category', 'score', 'why']));
if (r.missing.length) console.log(`\nLibrary has no usable design for: ${r.missing.join(', ')}`);
if (r.excluded.length) console.log(`Excluded (needs conversion or crashes when rendered): ${r.excluded.map((e) => `${e.id} [${e.status}]`).join(', ')}`);
if (metas.some((m) => isUsable(m) && !m.tags)) console.log('Note: some designs are untagged; run npm run tag -- queue for better ranking.');
console.log(`\nWrote ${rel(path.join(P.shortlists, `${slug}.json`))}. Next: npm run push -- showcase, then open /s/${slug} in the Lovable showcase.`);

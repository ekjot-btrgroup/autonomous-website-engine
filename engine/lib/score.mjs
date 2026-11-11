// Deterministic ranking of library designs against a brief. No model calls.
import { categoryOf } from './util.mjs';
import { terms, norm, vocab } from './vocab.mjs';

export const DEFAULT_SECTIONS = ['navbar', 'hero', 'features', 'about', 'testimonials', 'cta', 'footer'];

export function parseBrief(b) {
  const v = vocab();
  const sectionsRaw = b.sections || b.required_sections || [];
  const sections = [...new Set(sectionsRaw.map((s) => norm(s)).filter((s) => v.sets.category.has(s)))];
  const all = terms([b.industry, b.style, b.visual_direction, b.audience, b.goals, b.tone, b.notes].flat().filter(Boolean).join(' '));
  const pick = (set) => new Set([...all].filter((t) => v.sets[set].has(t)));
  const industries = terms(b.industry || '');
  const scheme = ['light', 'dark'].includes(String(b.scheme || '').toLowerCase()) ? b.scheme.toLowerCase() : null;
  return {
    sections: sections.length ? sections : DEFAULT_SECTIONS,
    explicitSections: sections.length > 0,
    industries: new Set([...industries].filter((t) => v.sets.industries.has(t)).concat([...pick('industries')])),
    style: new Set([...pick('style'), ...pick('mood')]),
    scheme,
    avoid: terms(b.avoid || ''),
    words: new Set(String([b.company, b.industry, b.style, b.goals, b.notes].flat().join(' ')).toLowerCase().split(/[^a-z]+/).filter((w) => w.length > 3)),
  };
}

export function scoreDesign(m, q) {
  const t = m.tags;
  const cat = categoryOf(m);
  const also = t?.also || [];
  const reasons = [];
  let s = 0;
  const w = t ? 1 : 0.5; // untagged designs only have a heuristic category guess

  if (q.sections.includes(cat)) { s += 30 * w; reasons.push(`fills the ${cat} section`); }
  else if (also.some((c) => q.sections.includes(c))) { s += 15; reasons.push(`can also serve as ${also.find((c) => q.sections.includes(c))}`); }
  if (t) {
    const ind = (t.industries || []).filter((i) => q.industries.has(i));
    if (ind.length) { s += 25; reasons.push(`industry fit: ${ind.join(', ')}`); }
    else if ((t.industries || []).includes('general')) { s += 8; reasons.push('general-purpose'); }
    const st = [...(t.style || []), ...(t.mood || [])].filter((x) => q.style.has(x));
    if (st.length) { s += Math.min(25, st.length * 10); reasons.push(`style match: ${st.join(', ')}`); }
    if (q.scheme) {
      if (t.scheme === q.scheme) { s += 10; reasons.push(`${t.scheme} scheme as requested`); }
      else if (t.scheme === 'mixed') s += 3;
      else { s -= 10; reasons.push(`${t.scheme} scheme (brief asks ${q.scheme})`); }
    }
    s += (t.quality - 3) * 4;
    if (t.quality >= 4) reasons.push(`quality ${t.quality}/5`);
    const bad = [...(t.style || []), ...(t.mood || []), t.scheme].filter((x) => q.avoid.has(x));
    if (bad.length) { s -= 20; reasons.push(`has avoided trait: ${bad.join(', ')}`); }
    const text = `${t.note} ${(m.summary?.headings || []).join(' ')}`.toLowerCase();
    const hits = [...q.words].filter((x) => text.includes(x)).length;
    s += Math.min(5, hits);
  } else reasons.push('not tagged yet (category guessed from code)');
  if (m.status === 'needs_attention') { s -= 5; reasons.push('has open issues'); }
  return { id: m.id, category: cat, score: Math.round(s), reasons };
}

// Previewable and not known to crash when rendered.
export const isUsable = (m) => ['ok', 'needs_attention'].includes(m.status) && m.rendered?.ok !== false;

// Top-N with section coverage and variety: best design per brief section first, then best remaining,
// never more than `maxPerCategory` of one category.
export function rank(metas, brief, { top = 10, maxPerCategory = 3 } = {}) {
  const q = parseBrief(brief);
  const usable = metas.filter(isUsable);
  const scored = usable.map((m) => scoreDesign(m, q)).sort((x, y) => y.score - x.score || x.id.localeCompare(y.id));
  const chosen = [], per = {};
  const take = (d) => { chosen.push(d); per[d.category] = (per[d.category] || 0) + 1; };
  for (const sec of q.sections) {
    if (chosen.length >= top) break;
    const best = scored.find((d) => d.category === sec && !chosen.includes(d));
    if (best) take(best);
  }
  for (const d of scored) {
    if (chosen.length >= top) break;
    if (!chosen.includes(d) && (per[d.category] || 0) < maxPerCategory) take(d);
  }
  chosen.sort((x, y) => y.score - x.score || x.id.localeCompare(y.id));
  return {
    query: { sections: q.sections, industries: [...q.industries], style: [...q.style], scheme: q.scheme },
    items: chosen.map((d, i) => ({ ...d, rank: i + 1 })),
    excluded: metas.filter((m) => !usable.includes(m)).map((m) => ({ id: m.id, status: m.status })),
    missing: q.sections.filter((s) => !usable.some((m) => categoryOf(m) === s)),
  };
}

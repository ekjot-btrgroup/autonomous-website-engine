// Deterministic ranking of library designs against a brief. No model calls. See docs/ALGORITHM.md.
//
// Designs carry niche-NEUTRAL traits (section, layout, style, 6 feel axes, media, typography, motion, goals,
// scheme, quality). Niches only exist on the brief side: a niche preset gives starting targets, the brief's own
// answers override them, and past picks for similar briefs nudge them. Memory (notes, preferences, picks,
// usage) adds capped, fading adjustments; recently used designs are penalised and never-shown designs get
// a guaranteed place so the shortlist does not repeat itself.
import { categoryOf } from './util.mjs';
import { terms, norm, vocab, presets, contextOf, goalsOf, clean, clampAxis, AXES } from './vocab.mjs';
import { buildMemory, designMemory, prefScore, usagePenalty, learnedProfile, LIMITS } from './memory.mjs';

export const DEFAULT_SECTIONS = ['navbar', 'hero', 'features', 'about', 'testimonials', 'cta', 'footer'];
export const WEIGHTS = { section: 30, sectionAlso: 15, feel: 30, style: 16, layout: 10, goals: 12, media: -10, scheme: 8, motion: 8, quality: 4, avoid: -20 };
const AXIS_WORDS = { tone: ['playful', 'formal'], energy: ['calm', 'energetic'], luxury: ['everyday', 'premium'], density: ['airy', 'dense'], warmth: ['cool', 'warm'], modernity: ['classic', 'cutting-edge'] };
const ANIMATION = { none: ['none'], subtle: ['none', 'subtle'], rich: ['subtle', 'heavy'] };

export const isUsable = (m) => ['ok', 'needs_attention'].includes(m.status) && m.rendered?.ok !== false;

export function parseBrief(b, mem = buildMemory([])) {
  const v = vocab();
  const sectionsRaw = b.sections || b.required_sections || [];
  const sections = [...new Set(sectionsRaw.map((s) => norm(s)).filter((s) => v.sets.category.has(s)))];
  const niche = [norm(b.niche), ...terms(b.niche || b.industry || '')].find((t) => t && v.sets.niches.has(t)) || null;
  const preset = { ...presets().default, ...(niche ? presets()[niche] : {}) };
  const ctx = contextOf([b.niche, b.industry, b.audience, b.style, b.visual_direction, b.tone, b.keywords].flat().filter(Boolean).join(' '));
  if (niche) ctx.add(niche);

  // Feel profile: brief answers > niche preset; then blend in what the user picked for similar briefs.
  const profile = {}, source = {};
  for (const a of AXES) {
    const own = clampAxis(b.profile?.[a]);
    profile[a] = own ?? preset[a] ?? 3;
    source[a] = own ? 'brief' : niche ? `preset:${niche}` : 'default';
  }
  const learned = learnedProfile(mem, ctx);
  let learnedWeight = 0;
  if (learned.n >= 2) {
    learnedWeight = Math.min(LIMITS.learnedMaxWeight, 0.1 * learned.n);
    for (const a of AXES) if (learned.axes[a]) {
      const w = source[a] === 'brief' ? learnedWeight / 2 : learnedWeight;
      profile[a] = +(profile[a] * (1 - w) + learned.axes[a] * w).toFixed(2);
    }
  }
  const styleText = [b.style, b.visual_direction, b.tone].flat().filter(Boolean).join(' ');
  const style = new Set([...terms(styleText)].filter((t) => v.sets.style.has(t)));
  const goals = goalsOf([b.goals].flat().filter(Boolean).join(' '));
  const media = b.media_available ? new Set(clean('media', [b.media_available].flat().join(',').split(/[,\s]+/)).values) : null;
  const animations = ['none', 'subtle', 'rich'].includes(String(b.animations || '').toLowerCase()) ? b.animations.toLowerCase() : null;
  const scheme = ['light', 'dark'].includes(String(b.scheme || '').toLowerCase()) ? b.scheme.toLowerCase() : null;
  return {
    sections: sections.length ? sections : DEFAULT_SECTIONS,
    explicitSections: sections.length > 0,
    niche, ctx, profile, source, learned: { n: learned.n, briefs: learned.briefs || [], weight: learnedWeight },
    style, styleHint: new Set((preset.style || []).filter((s) => !style.has(s))),
    layout: new Set([...terms(b.layout || '')].filter((t) => v.sets.layout.has(t))),
    goals: goals.size ? goals : new Set(preset.goals || []),
    media, animations, scheme,
    avoid: terms(b.avoid || ''),
  };
}

// All descriptive terms of a design (for preferences/avoid matching).
const designTerms = (m) => {
  const t = m.tags || {};
  return new Set([categoryOf(m), ...(t.also || []), ...(t.style || []), ...(t.layout || []), ...(t.media || []), t.typography, t.scheme, t.motion].filter(Boolean));
};

export function scoreDesign(m, q, mem = buildMemory([])) {
  const t = m.tags;
  const cat = categoryOf(m);
  const reasons = [], parts = {};
  const add = (k, pts, why) => { if (!pts) return; parts[k] = Math.round((parts[k] || 0) + pts); if (why) reasons.push(why); };

  if (q.sections.includes(cat)) add('section', WEIGHTS.section * (t ? 1 : 0.5), `fills the ${cat} section`);
  else if ((t?.also || []).some((c) => q.sections.includes(c))) add('section', WEIGHTS.sectionAlso, `can serve as ${t.also.find((c) => q.sections.includes(c))}`);

  if (t) {
    // Feel: average closeness on the 6 axes (1 = identical, 0 = opposite ends).
    const axes = AXES.filter((a) => t[a]);
    if (axes.length) {
      const sims = axes.map((a) => 1 - Math.abs(t[a] - q.profile[a]) / 4);
      const sim = sims.reduce((x, y) => x + y, 0) / sims.length;
      const off = axes.filter((a) => Math.abs(t[a] - q.profile[a]) >= 2).map((a) => `${t[a] > q.profile[a] ? 'more' : 'less'} ${AXIS_WORDS[a][1]}`);
      add('feel', WEIGHTS.feel * sim, sim >= 0.8 ? `feel matches (${Math.round(sim * 100)}%)` : `feel ${Math.round(sim * 100)}%${off.length ? `: ${off.join(', ')} than wanted` : ''}`);
    }
    const st = (t.style || []).filter((x) => q.style.has(x));
    const hint = (t.style || []).filter((x) => q.styleHint.has(x));
    add('style', Math.min(WEIGHTS.style, st.length * 8 + hint.length * 4), st.length || hint.length ? `style: ${[...st, ...hint].join(', ')}` : null);
    const lay = (t.layout || []).filter((x) => q.layout.has(x));
    add('layout', Math.min(WEIGHTS.layout, lay.length * 5), lay.length ? `layout: ${lay.join(', ')}` : null);
    const g = (t.goals || []).filter((x) => q.goals.has(x));
    add('goals', Math.min(WEIGHTS.goals, g.length * 6), g.length ? `serves goal: ${g.join(', ')}` : null);
    if (q.media && t.image_need === 2) {
      const lacking = (t.media || []).filter((x) => ['photo', 'product', 'video', '3d', 'illustration'].includes(x) && !q.media.has(x));
      if (lacking.length) add('media', WEIGHTS.media, `needs ${lacking.join('/')} the brand may not have`);
    }
    if (q.scheme) {
      if (t.scheme === q.scheme) add('scheme', WEIGHTS.scheme, `${t.scheme} as requested`);
      else if (t.scheme !== 'mixed') add('scheme', -WEIGHTS.scheme, `${t.scheme} (brief wants ${q.scheme})`);
    }
    if (q.animations && t.motion) {
      if (ANIMATION[q.animations].includes(t.motion)) add('motion', WEIGHTS.motion, q.animations === 'rich' ? `animated (${t.motion})` : null);
      else add('motion', -WEIGHTS.motion, `animation ${t.motion} (wanted ${q.animations})`);
    }
    add('quality', (t.quality - 3) * WEIGHTS.quality, t.quality >= 4 ? `quality ${t.quality}/5` : null);
    const bad = [...designTerms(m)].filter((x) => q.avoid.has(x));
    if (bad.length) add('avoid', WEIGHTS.avoid, `has avoided trait: ${bad.join(', ')}`);
  } else reasons.push('not tagged yet (category guessed from code)');

  const dm = designMemory(mem, m.id, q.ctx);
  add('memory', dm.score, dm.reasons.join('; ') || null);
  const pf = prefScore(mem, designTerms(m), q.ctx);
  add('prefs', pf.score, pf.reasons.join('; ') || null);
  const up = usagePenalty(mem, m.id);
  add('repeat', up.score, up.reason);
  if (m.status === 'needs_attention') add('issues', -5, 'has open issues');
  const score = Math.round(Object.values(parts).reduce((x, y) => x + y, 0));
  return { id: m.id, category: cat, score, parts, reasons, fresh: !mem.shown.has(m.id) };
}

// Top-N: best design per brief section first (coverage), then best remaining with at most `maxPerCategory`
// per section type, then up to `freshSlots` never-shown designs swapped in if they score >= 60% of the best.
export function rank(metas, brief, { top = 10, maxPerCategory = 3, freshSlots = 2, events } = {}) {
  const mem = buildMemory(events);
  const q = parseBrief(brief, mem);
  const usable = metas.filter(isUsable);
  const scored = usable.map((m) => scoreDesign(m, q, mem)).sort((x, y) => y.score - x.score || x.id.localeCompare(y.id));
  const chosen = [], per = {};
  const take = (d, why) => { chosen.push({ ...d, why }); per[d.category] = (per[d.category] || 0) + 1; };
  for (const sec of q.sections) {
    if (chosen.length >= top) break;
    const best = scored.find((d) => d.category === sec && !chosen.some((c) => c.id === d.id));
    if (best) take(best, 'cover');
  }
  for (const d of scored) {
    if (chosen.length >= top) break;
    if (!chosen.some((c) => c.id === d.id) && (per[d.category] || 0) < maxPerCategory) take(d, 'score');
  }
  // Exploration: make sure new designs get seen instead of the same favourites every time.
  const bestScore = scored[0]?.score || 0;
  const freshIn = chosen.filter((c) => c.fresh).length;
  const candidates = scored.filter((d) => d.fresh && !chosen.some((c) => c.id === d.id) && d.score >= 0.6 * bestScore);
  for (let i = 0; i < Math.max(0, freshSlots - freshIn) && candidates[i]; i++) {
    const replaceable = [...chosen].reverse().find((c) => c.why === 'score' && !c.fresh);
    if (chosen.length < top) take(candidates[i], 'fresh');
    else if (replaceable) { chosen.splice(chosen.indexOf(replaceable), 1, { ...candidates[i], why: 'fresh' }); }
  }
  for (const c of chosen) if (c.why === 'fresh') c.reasons = [...c.reasons, 'new to you (never shown before)'];
  chosen.sort((x, y) => y.score - x.score || x.id.localeCompare(y.id));
  return {
    query: q,
    items: chosen.map((d, i) => ({ ...d, rank: i + 1 })),
    excluded: metas.filter((m) => !usable.includes(m)).map((m) => ({ id: m.id, status: m.status })),
    missing: q.sections.filter((s) => !usable.some((m) => categoryOf(m) === s)),
    memoryEvents: mem.count,
  };
}

// Client-side PREVIEW of the engine's ranking (engine/lib/score.mjs). Claude's engine run, with full memory,
// is authoritative; this mirrors its structure so the Match Lab shows what a brief would surface.
import { categoryOf, type DesignMeta } from "@/showcase/data";
import { AXIS_KEYS, type AxisKey } from "./vocab";
import { engine, usageOf, type Weights } from "./engine";

export type LabBrief = {
  company: string;
  niche: string;
  profile: Record<AxisKey, number>;
  style: string[];
  styleHint: string[];
  layout: string[];
  goals: string[];
  scheme: "" | "light" | "dark";
  animations: "" | "none" | "subtle" | "rich";
  sections: string[];
  avoid: string[];
};

export type Part = { key: string; label: string; value: number };
export type Scored = { id: string; design: DesignMeta; category: string; score: number; parts: Part[]; reasons: string[]; why?: "cover" | "score" };

const ANIM: Record<string, string[]> = { none: ["none"], subtle: ["none", "subtle"], rich: ["subtle", "heavy"] };
const AXIS_HIGH: Record<AxisKey, string> = { tone: "formal", energy: "energetic", luxury: "premium", density: "dense", warmth: "warm", modernity: "cutting-edge" };

export const isUsable = (d: DesignMeta) => (d.status === "ok" || d.status === "needs_attention") && !d.hidden;

function familyOf(niche: string): string[] {
  return Object.entries(engine.niche_families).filter(([, list]) => list.includes(niche)).map(([f]) => f);
}

export function scoreDesign(d: DesignMeta, q: LabBrief, W: Weights = engine.scoring.weights): Scored {
  const t = d.tags;
  const cat = categoryOf(d);
  const parts: Record<string, number> = {};
  const reasons: string[] = [];
  const add = (k: string, v: number, why?: string | null) => {
    if (!v) return;
    parts[k] = Math.round((parts[k] ?? 0) + v);
    if (why) reasons.push(why);
  };
  const sections = q.sections.length ? q.sections : engine.scoring.default_sections;
  if (sections.includes(cat)) add("section", W.section * (t ? 1 : 0.5), `fills the ${cat} section`);
  else if (t?.also?.some((c) => sections.includes(c))) add("section", W.sectionAlso, `can serve as ${t.also.find((c) => sections.includes(c))}`);

  if (t) {
    const axes = AXIS_KEYS.filter((a) => typeof t[a] === "number");
    if (axes.length) {
      const sims = axes.map((a) => 1 - Math.abs((t[a] as number) - q.profile[a]) / 4);
      const sim = sims.reduce((x, y) => x + y, 0) / sims.length;
      const off = axes.filter((a) => Math.abs((t[a] as number) - q.profile[a]) >= 2).map((a) => `${(t[a] as number) > q.profile[a] ? "more" : "less"} ${AXIS_HIGH[a]}`);
      add("feel", W.feel * sim, sim >= 0.8 ? `feel matches (${Math.round(sim * 100)}%)` : `feel ${Math.round(sim * 100)}%${off.length ? `: ${off.join(", ")}` : ""}`);
    }
    const st = (t.style ?? []).filter((x) => q.style.includes(x));
    const hint = (t.style ?? []).filter((x) => q.styleHint.includes(x) && !q.style.includes(x));
    add("style", Math.min(W.style, st.length * W.styleWord + hint.length * W.styleHint), st.length || hint.length ? `style: ${[...st, ...hint].join(", ")}` : null);
    if (q.niche && t.origin?.length) {
      if (t.origin.includes(q.niche)) add("origin", W.origin, `already used for ${q.niche}`);
      else {
        const fams = familyOf(q.niche);
        if (fams.some((f) => t.origin!.some((o) => familyOf(o).includes(f)))) add("origin", W.originFamily, `built for a related niche (${t.origin.join(", ")})`);
      }
    }
    const lay = (t.layout ?? []).filter((x) => q.layout.includes(x));
    add("layout", Math.min(W.layout, lay.length * 5), lay.length ? `layout: ${lay.join(", ")}` : null);
    const g = (t.goals ?? []).filter((x) => q.goals.includes(x));
    add("goals", Math.min(W.goals, g.length * 6), g.length ? `serves goal: ${g.join(", ")}` : null);
    if (q.scheme) {
      if (t.scheme === q.scheme) add("scheme", W.scheme, `${t.scheme} as requested`);
      else if (t.scheme && t.scheme !== "mixed") add("scheme", -W.scheme, `${t.scheme} (brief wants ${q.scheme})`);
    }
    if (q.animations && t.motion) {
      if (ANIM[q.animations].includes(t.motion)) add("motion", W.motion, q.animations === "rich" ? `animated (${t.motion})` : null);
      else add("motion", -W.motion, `animation ${t.motion} (wanted ${q.animations})`);
    }
    if (typeof t.quality === "number") add("quality", (t.quality - 3) * W.quality, t.quality >= 4 ? `quality ${t.quality}/5` : null);
    const terms = new Set([cat, ...(t.also ?? []), ...(t.style ?? []), ...(t.layout ?? []), ...(t.media ?? []), ...(t.origin ?? []), t.typography, t.scheme, t.motion].filter(Boolean) as string[]);
    const bad = q.avoid.filter((x) => terms.has(x));
    if (bad.length) add("avoid", W.avoid, `has avoided trait: ${bad.join(", ")}`);
  } else reasons.push("not tagged yet");

  const uses = usageOf(d.id);
  if (uses) add("repeat", -Math.min(engine.scoring.limits.usageMax, engine.scoring.limits.usagePerSite * uses), `used in ${uses} recent site${uses > 1 ? "s" : ""}`);
  if (d.pinned) add("pinned", W.pinned, "pinned by you");
  if (d.status === "needs_attention") add("issues", -5, "has open issues");

  const LABEL: Record<string, string> = { section: "Section", feel: "Feel", style: "Style", origin: "Niche", layout: "Layout", goals: "Goals", scheme: "Scheme", motion: "Motion", quality: "Quality", avoid: "Avoid", repeat: "Repeat", pinned: "Pinned", issues: "Issues" };
  const list = Object.entries(parts).map(([k, v]) => ({ key: k, label: LABEL[k] ?? k, value: v }));
  return { id: d.id, design: d, category: cat, score: Math.round(list.reduce((a, p) => a + p.value, 0)), parts: list, reasons };
}

/** Coverage first (best per section), then best remaining with at most `maxPerCategory` per section type. */
export function rank(designs: DesignMeta[], q: LabBrief, top = 10, maxPerCategory = 3): Scored[] {
  const scored = designs.filter(isUsable).map((d) => scoreDesign(d, q)).sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
  const chosen: Scored[] = [];
  const per: Record<string, number> = {};
  const take = (s: Scored, why: Scored["why"]) => {
    chosen.push({ ...s, why });
    per[s.category] = (per[s.category] ?? 0) + 1;
  };
  for (const sec of q.sections.length ? q.sections : engine.scoring.default_sections) {
    if (chosen.length >= top) break;
    const best = scored.find((s) => s.category === sec && !chosen.some((c) => c.id === s.id));
    if (best) take(best, "cover");
  }
  for (const s of scored) {
    if (chosen.length >= top) break;
    if (!chosen.some((c) => c.id === s.id) && (per[s.category] ?? 0) < maxPerCategory) take(s, "score");
  }
  return chosen.sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
}

/** Similar designs: same section weighs most, then feel distance, then shared style/layout. */
export function similarTo(d: DesignMeta, pool: DesignMeta[], n = 6): { design: DesignMeta; score: number }[] {
  const t = d.tags;
  const cat = categoryOf(d);
  return pool
    .filter((x) => x.id !== d.id)
    .map((x) => {
      const u = x.tags;
      let s = categoryOf(x) === cat ? 40 : u?.also?.includes(cat) || t?.also?.includes(categoryOf(x)) ? 18 : 0;
      if (t && u) {
        const axes = AXIS_KEYS.filter((a) => typeof t[a] === "number" && typeof u[a] === "number");
        if (axes.length) s += 30 * (axes.reduce((acc, a) => acc + (1 - Math.abs((t[a] as number) - (u[a] as number)) / 4), 0) / axes.length);
        s += 6 * (t.style ?? []).filter((z) => u.style?.includes(z)).length;
        s += 5 * (t.layout ?? []).filter((z) => u.layout?.includes(z)).length;
        if (t.scheme && t.scheme === u.scheme) s += 4;
      }
      return { design: x, score: Math.round(s) };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, n);
}

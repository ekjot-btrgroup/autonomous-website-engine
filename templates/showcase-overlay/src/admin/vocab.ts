// Vocabulary copied from knowledge/vocabulary.json by the engine on every showcase init.
type Vocab = {
  category: string[];
  layout: string[];
  style: string[];
  typography: string[];
  media: string[];
  motion: string[];
  scheme: string[];
  goals: string[];
  niches: string[];
  axes: Record<string, string>;
};

const mods = import.meta.glob("../showcase/vocabulary.json", { eager: true, import: "default" }) as Record<string, Partial<Vocab>>;
const raw = Object.values(mods)[0] ?? {};

export const vocab: Vocab = {
  category: raw.category ?? [],
  layout: raw.layout ?? [],
  style: raw.style ?? [],
  typography: raw.typography ?? ["sans", "serif", "mono", "mixed", "expressive"],
  media: raw.media ?? [],
  motion: raw.motion ?? ["none", "subtle", "heavy"],
  scheme: raw.scheme ?? ["light", "dark", "mixed"],
  goals: raw.goals ?? [],
  niches: raw.niches ?? [],
  axes: raw.axes ?? {},
};

export const AXIS_KEYS = ["tone", "energy", "luxury", "density", "warmth", "modernity"] as const;
export type AxisKey = (typeof AXIS_KEYS)[number];

/** "1 playful .. 5 formal" -> { low: "playful", high: "formal" } */
export function axisWords(key: AxisKey): { low: string; high: string } {
  const m = String(vocab.axes[key] ?? "").match(/^1\s+(.+?)\s*\.\.\s*5\s+(.+)$/);
  const fallback: Record<AxisKey, [string, string]> = {
    tone: ["playful", "formal"],
    energy: ["calm", "energetic"],
    luxury: ["everyday", "premium"],
    density: ["airy", "dense"],
    warmth: ["cool", "warm"],
    modernity: ["classic", "cutting-edge"],
  };
  const short = (w: string) => w.split("/")[0].trim();
  return m ? { low: short(m[1]), high: short(m[2]) } : { low: fallback[key][0], high: fallback[key][1] };
}

/** Free text "Bakeries, cozy cafés" -> ["bakeries", "cozy", "cafés"] (engine normalises further). */
export function words(text: string): string[] {
  return [
    ...new Set(
      text
        .toLowerCase()
        .split(/[,;\n]+/)
        .flatMap((p) => p.trim().split(/\s+/))
        .map((w) => w.replace(/[^\p{L}\p{N}&-]/gu, ""))
        .filter((w) => w.length > 1),
    ),
  ];
}

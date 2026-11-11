// Small SVG/CSS charts for the admin, following the dataviz method:
// one series -> one hue (indigo 600 light / indigo 500 dark, validated); magnitude -> one-hue ramp;
// thin marks with rounded data-ends anchored to the baseline; values in text ink, never series colour;
// hover/focus tooltips that lead with the value; recessive axes.
import { useState, type ReactNode } from "react";
import { cn, muted, subtle } from "./core";

const MARK = "bg-indigo-600 dark:bg-indigo-500";

/** Stat tile: label · value (proportional figures) · optional delta/footnote. */
export function StatTile({ label, value, sub, icon, tone = "neutral", href, onClick }: { label: string; value: ReactNode; sub?: ReactNode; icon?: ReactNode; tone?: "neutral" | "warn" | "ok"; href?: string; onClick?: () => void }) {
  const Comp = (href || onClick ? "button" : "div") as "button" | "div";
  return (
    <Comp
      type={Comp === "button" ? "button" : undefined}
      onClick={onClick}
      className={cn(
        "group relative flex min-w-0 flex-col rounded-xl border border-zinc-200/80 bg-white p-4 text-left shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-colors duration-150 dark:border-zinc-800 dark:bg-zinc-900",
        (href || onClick) && "hover:border-zinc-300 dark:hover:border-zinc-700",
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <span className={cn("truncate text-xs font-medium", muted)}>{label}</span>
        {icon && (
          <span className={cn("flex h-7 w-7 items-center justify-center rounded-lg", tone === "warn" ? "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400" : tone === "ok" ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400" : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400")}>
            {icon}
          </span>
        )}
      </div>
      <div className="mt-2 text-[26px] font-semibold leading-none tracking-[-0.02em] text-zinc-950 dark:text-white">{value}</div>
      {sub && <div className={cn("mt-2 truncate text-xs", muted)}>{sub}</div>}
    </Comp>
  );
}

function Tip({ show, children, className }: { show: boolean; children: ReactNode; className?: string }) {
  return (
    <div
      role="tooltip"
      className={cn(
        "pointer-events-none absolute z-30 whitespace-nowrap rounded-lg border border-zinc-200/80 bg-white px-2.5 py-1.5 text-xs shadow-lg shadow-zinc-950/10 transition-opacity duration-100 dark:border-zinc-700 dark:bg-zinc-800",
        show ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Ranked horizontal bars (one series). Label left, value right in text ink, bar between. */
export function BarList({
  data,
  max,
  onSelect,
  format = (n) => String(n),
  unit,
  empty = "No data yet",
}: {
  data: { key: string; label: ReactNode; value: number; hint?: string }[];
  max?: number;
  onSelect?: (key: string) => void;
  format?: (n: number) => string;
  unit?: string;
  empty?: ReactNode;
}) {
  const [hover, setHover] = useState<string | null>(null);
  const top = max ?? Math.max(1, ...data.map((d) => d.value));
  const total = data.reduce((a, d) => a + d.value, 0) || 1;
  if (!data.length) return <p className={cn("py-6 text-center text-[13px]", muted)}>{empty}</p>;
  return (
    <ul className="space-y-1" role="list">
      {data.map((d) => {
        const pct = Math.max(d.value > 0 ? 1.5 : 0, (d.value / top) * 100);
        return (
          <li key={d.key} className="relative">
            <button
              type="button"
              onMouseEnter={() => setHover(d.key)}
              onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(d.key)}
              onBlur={() => setHover(null)}
              onClick={() => onSelect?.(d.key)}
              aria-label={`${d.key}: ${format(d.value)}${unit ? ` ${unit}` : ""}`}
              className={cn("grid w-full grid-cols-[minmax(84px,132px)_1fr_40px] items-center gap-3 rounded-md px-1.5 py-1 text-left transition-colors duration-100", onSelect ? "hover:bg-zinc-50 dark:hover:bg-zinc-800/50" : "cursor-default")}
            >
              <span className="truncate text-[13px] text-zinc-700 dark:text-zinc-300">{d.label}</span>
              <span className="relative h-2 rounded-r-[4px]">
                <span className={cn("absolute inset-y-0 left-0 rounded-r-[4px] transition-[width] duration-300", MARK, hover && hover !== d.key && "opacity-40")} style={{ width: `${pct}%` }} />
              </span>
              <span className="text-right text-[13px] font-medium tabular-nums text-zinc-900 dark:text-zinc-100">{format(d.value)}</span>
            </button>
            <Tip show={hover === d.key} className="left-[140px] top-[-30px]">
              <span className="font-semibold text-zinc-900 dark:text-white">{format(d.value)}{unit ? ` ${unit}` : ""}</span>
              <span className={cn("ml-1.5", muted)}>
                {d.key} · {Math.round((d.value / total) * 100)}%{d.hint ? ` · ${d.hint}` : ""}
              </span>
            </Tip>
          </li>
        );
      })}
    </ul>
  );
}

/** Vertical columns for an ordered distribution (e.g. quality 1-5, an axis histogram). */
export function Columns({ data, height = 96, format = (n) => String(n), caption }: { data: { key: string; label: string; value: number }[]; height?: number; format?: (n: number) => string; caption?: string }) {
  const [hover, setHover] = useState<number | null>(null);
  const top = Math.max(1, ...data.map((d) => d.value));
  return (
    <figure>
      <div className="relative flex items-end gap-1.5 border-b border-zinc-200 dark:border-zinc-800" style={{ height }} role="img" aria-label={caption}>
        {data.map((d, i) => {
          const h = d.value ? Math.max(3, (d.value / top) * (height - 8)) : 0;
          return (
            <button
              key={d.key}
              type="button"
              className="group relative flex h-full flex-1 items-end justify-center"
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(i)}
              onBlur={() => setHover(null)}
              aria-label={`${d.label}: ${format(d.value)}`}
            >
              <span className={cn("w-full max-w-[28px] rounded-t-[4px] transition-opacity duration-100", MARK, hover !== null && hover !== i && "opacity-40")} style={{ height: h }} />
              <Tip show={hover === i} className="bottom-full mb-1">
                <span className="font-semibold text-zinc-900 dark:text-white">{format(d.value)}</span>
                <span className={cn("ml-1.5", muted)}>{d.label}</span>
              </Tip>
            </button>
          );
        })}
      </div>
      <div className="mt-1.5 flex gap-1.5">
        {data.map((d) => (
          <span key={d.key} className={cn("flex-1 text-center text-[11px] tabular-nums", subtle)}>
            {d.key}
          </span>
        ))}
      </div>
      {caption && <figcaption className="sr-only">{caption}</figcaption>}
    </figure>
  );
}

/** Six tiny bars for the feel axes (list rows). Decorative summary; numbers in the title. */
export function FeelSpark({ values, className }: { values: (number | undefined)[]; className?: string }) {
  return (
    <span className={cn("inline-flex h-4 items-end gap-[2px]", className)} title={values.map((v) => v ?? "-").join(" / ")}>
      {values.map((v, i) => (
        <span key={i} className="relative w-[4px] rounded-[1px] bg-zinc-200 dark:bg-zinc-800" style={{ height: 16 }}>
          {v ? <span className={cn("absolute bottom-0 left-0 right-0 rounded-[1px]", MARK)} style={{ height: (v / 5) * 16 }} /> : null}
        </span>
      ))}
    </span>
  );
}

/** Track with a marker per axis (target profile, design profile, or both for comparison). */
export function ProfileRows({ axes, a, b, aLabel = "Design", bLabel }: { axes: { key: string; low: string; high: string }[]; a: Record<string, number | undefined>; b?: Record<string, number | undefined>; aLabel?: string; bLabel?: string }) {
  return (
    <div className="space-y-2.5">
      {b && (
        <div className={cn("flex items-center gap-4 text-[11px]", muted)}>
          <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-indigo-600 dark:bg-indigo-500" />{aLabel}</span>
          <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full border-2 border-zinc-500 bg-white dark:border-zinc-300 dark:bg-zinc-900" />{bLabel}</span>
        </div>
      )}
      {axes.map((x) => {
        const va = a[x.key];
        const vb = b?.[x.key];
        return (
          <div key={x.key} className="grid grid-cols-[76px_1fr_84px] items-center gap-2.5 text-[11px]">
            <span className={cn("truncate text-right", muted)}>{x.low}</span>
            <span className="relative h-4" aria-label={`${x.key}: ${va ?? "-"}${vb !== undefined ? ` vs ${vb}` : ""}`}>
              <span className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-zinc-200 dark:bg-zinc-800" />
              {vb !== undefined && (
                <span className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-zinc-500 bg-white dark:border-zinc-300 dark:bg-zinc-900" style={{ left: `${((vb - 1) / 4) * 100}%` }} />
              )}
              {va !== undefined && (
                <span className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600 ring-2 ring-white dark:bg-indigo-500 dark:ring-zinc-900" style={{ left: `${((va - 1) / 4) * 100}%` }} />
              )}
            </span>
            <span className={cn("truncate", muted)}>{x.high}</span>
          </div>
        );
      })}
    </div>
  );
}

/** Sequential one-hue heat cell (indigo ramp light->dark). Count printed in text ink. */
export function heatClass(v: number, max: number): string {
  if (!v) return "bg-zinc-50 text-zinc-400 dark:bg-zinc-900 dark:text-zinc-600";
  const r = v / Math.max(1, max);
  if (r <= 0.2) return "bg-indigo-50 text-zinc-800 dark:bg-indigo-950/70 dark:text-zinc-200";
  if (r <= 0.4) return "bg-indigo-100 text-zinc-900 dark:bg-indigo-900/70 dark:text-zinc-100";
  if (r <= 0.6) return "bg-indigo-200 text-zinc-900 dark:bg-indigo-800/80 dark:text-white";
  if (r <= 0.8) return "bg-indigo-400 text-white dark:bg-indigo-600 dark:text-white";
  return "bg-indigo-600 text-white dark:bg-indigo-500 dark:text-white";
}

export function HeatLegend({ max }: { max: number }) {
  return (
    <div className={cn("flex items-center gap-2 text-[11px]", muted)}>
      <span>0</span>
      <div className="flex overflow-hidden rounded">
        {[0, 0.2, 0.4, 0.6, 0.8, 1].map((r) => (
          <span key={r} className={cn("h-2.5 w-5", heatClass(r * Math.max(1, max), Math.max(1, max)))} />
        ))}
      </div>
      <span className="tabular-nums">{max}</span>
    </div>
  );
}

/**
 * Score breakdown: one row per component; positive contributions extend right in the accent,
 * negative ones extend left in a warm hue (diverging pair, neutral zero line).
 */
export function Breakdown({ parts, scale = 30 }: { parts: { key: string; label: string; value: number }[]; scale?: number }) {
  return (
    <div className="space-y-1">
      {parts.map((p) => {
        const w = Math.min(100, (Math.abs(p.value) / scale) * 100);
        return (
          <div key={p.key} className="grid grid-cols-[72px_1fr_34px] items-center gap-2 text-[11px]">
            <span className={cn("truncate", muted)}>{p.label}</span>
            <span className="relative grid h-2 grid-cols-2">
              <span className="relative">
                {p.value < 0 && <span className="absolute inset-y-0 right-0 rounded-l-[3px] bg-orange-500 dark:bg-orange-400" style={{ width: `${w}%` }} />}
              </span>
              <span className="relative border-l border-zinc-300 dark:border-zinc-700">
                {p.value > 0 && <span className={cn("absolute inset-y-0 left-0 rounded-r-[3px]", MARK)} style={{ width: `${w}%` }} />}
              </span>
            </span>
            <span className="text-right font-medium tabular-nums text-zinc-800 dark:text-zinc-200">{p.value > 0 ? `+${p.value}` : p.value}</span>
          </div>
        );
      })}
    </div>
  );
}

/** Thin ring meter (e.g. tagged share). */
export function Ring({ value, size = 40 }: { value: number; size?: number }) {
  const r = (size - 6) / 2;
  const c = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <circle cx={size / 2} cy={size / 2} r={r} className="fill-none stroke-indigo-100 dark:stroke-indigo-950" strokeWidth={5} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        className="fill-none stroke-indigo-600 dark:stroke-indigo-500"
        strokeWidth={5}
        strokeLinecap="round"
        strokeDasharray={`${(Math.max(0, Math.min(1, value)) * c).toFixed(2)} ${c.toFixed(2)}`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}

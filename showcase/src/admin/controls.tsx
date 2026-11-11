// Small form controls for the admin editor.
import type { ReactNode } from "react";

export function Field({ label, hint, original, children }: { label: string; hint?: string; original?: string | null; children: ReactNode }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">{label}</span>
        {original !== undefined && original !== null && (
          <span className="truncate text-[11px] text-zinc-400" title={`Claude: ${original}`}>
            Claude: {original || "(empty)"}
          </span>
        )}
      </div>
      {children}
      {hint && <p className="text-[11px] text-zinc-400">{hint}</p>}
    </div>
  );
}

export function Chips({ options, value, onChange, max }: { options: string[]; value: string[]; onChange: (v: string[]) => void; max?: number }) {
  const full = max !== undefined && value.length >= max;
  return (
    <div className="flex flex-wrap gap-1">
      {options.map((o) => {
        const on = value.includes(o);
        return (
          <button
            key={o}
            type="button"
            disabled={!on && full}
            onClick={() => onChange(on ? value.filter((x) => x !== o) : [...value, o])}
            className={`rounded-full border px-2.5 py-0.5 text-xs transition ${
              on ? "border-zinc-900 bg-zinc-900 text-white" : "border-zinc-300 text-zinc-600 hover:border-zinc-500"
            } disabled:cursor-not-allowed disabled:opacity-40`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

export function Segmented<T extends string | number>({
  options,
  value,
  onChange,
  labels,
}: {
  options: T[];
  value: T | undefined;
  onChange: (v: T) => void;
  labels?: Record<string, string>;
}) {
  return (
    <div className="inline-flex flex-wrap rounded-md border border-zinc-300 bg-white p-0.5">
      {options.map((o) => (
        <button
          key={String(o)}
          type="button"
          onClick={() => onChange(o)}
          className={`rounded px-2.5 py-1 text-xs ${value === o ? "bg-zinc-900 text-white" : "text-zinc-600 hover:bg-zinc-100"}`}
        >
          {labels?.[String(o)] ?? String(o)}
        </button>
      ))}
    </div>
  );
}

export function AxisSlider({ low, high, value, original, onChange }: { low: string; high: string; value?: number; original?: number; onChange: (v: number) => void }) {
  return (
    <div className="flex items-center gap-2 text-xs text-zinc-500">
      <span className="w-20 text-right">{low}</span>
      <div className="relative flex-1">
        <input
          type="range"
          min={1}
          max={5}
          step={1}
          value={value ?? 3}
          onChange={(e) => onChange(Number(e.target.value))}
          className={`w-full accent-zinc-900 ${value === undefined ? "opacity-40" : ""}`}
          aria-label={`${low} to ${high}`}
        />
        {original !== undefined && original !== value && (
          <span className="pointer-events-none absolute -top-1 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-amber-400" style={{ left: `${((original - 1) / 4) * 100}%` }} title={`Claude: ${original}`} />
        )}
      </div>
      <span className="w-24">{high}</span>
      <span className="w-4 text-right font-mono text-zinc-800">{value ?? "-"}</span>
    </div>
  );
}

export function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-zinc-700">
      <span className={`relative h-5 w-9 rounded-full transition ${checked ? "bg-zinc-900" : "bg-zinc-300"}`}>
        <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition ${checked ? "left-[18px]" : "left-0.5"}`} />
      </span>
      <input type="checkbox" className="sr-only" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      {label}
    </label>
  );
}

export function Badge({ children, tone = "zinc" }: { children: ReactNode; tone?: "zinc" | "amber" | "emerald" | "sky" | "red" }) {
  const c = {
    zinc: "bg-zinc-100 text-zinc-700",
    amber: "bg-amber-100 text-amber-800",
    emerald: "bg-emerald-100 text-emerald-800",
    sky: "bg-sky-100 text-sky-800",
    red: "bg-red-100 text-red-800",
  }[tone];
  return <span className={`rounded px-1.5 py-0.5 text-[11px] ${c}`}>{children}</span>;
}

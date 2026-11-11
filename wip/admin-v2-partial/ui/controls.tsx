// Admin design system: selection controls.
import { type ReactNode } from "react";
import { Check } from "lucide-react";
import { cn, focusRing, muted } from "./core";

export function SegmentedControl<T extends string | number>({
  value,
  options,
  onChange,
  size = "sm",
  className,
  ariaLabel,
}: {
  value: T;
  options: { value: T; label: ReactNode; icon?: ReactNode; title?: string }[];
  onChange: (v: T) => void;
  size?: "xs" | "sm";
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <div role="radiogroup" aria-label={ariaLabel} className={cn("inline-flex items-center rounded-lg bg-zinc-100 p-0.5 ring-1 ring-inset ring-zinc-200/60 dark:bg-zinc-800/80 dark:ring-zinc-700/50", className)}>
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={String(o.value)}
            type="button"
            role="radio"
            aria-checked={active}
            title={o.title}
            onClick={() => onChange(o.value)}
            className={cn(
              "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md font-medium transition-all duration-150",
              size === "xs" ? "h-6 px-2 text-[11px]" : "h-7 px-2.5 text-xs",
              active
                ? "bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-900/5 dark:bg-zinc-700 dark:text-white dark:ring-white/5"
                : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
              focusRing,
            )}
          >
            {o.icon}
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

export function Tabs<T extends string>({
  value,
  tabs,
  onChange,
  className,
}: {
  value: T;
  tabs: { value: T; label: ReactNode; count?: number; icon?: ReactNode }[];
  onChange: (v: T) => void;
  className?: string;
}) {
  return (
    <div role="tablist" className={cn("flex items-center gap-1 overflow-x-auto border-b border-zinc-200/80 dark:border-zinc-800", className)}>
      {tabs.map((t) => {
        const active = t.value === value;
        return (
          <button
            key={t.value}
            role="tab"
            type="button"
            aria-selected={active}
            onClick={() => onChange(t.value)}
            className={cn(
              "relative -mb-px inline-flex h-9 shrink-0 items-center gap-1.5 whitespace-nowrap border-b-2 px-2.5 text-[13px] font-medium transition-colors duration-150",
              active
                ? "border-zinc-900 text-zinc-900 dark:border-white dark:text-white"
                : "border-transparent text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200",
              focusRing,
            )}
          >
            {t.icon}
            {t.label}
            {typeof t.count === "number" && (
              <span className={cn("rounded px-1 text-[10px] tabular-nums", active ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400")}>
                {t.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export function Chip({ active, onClick, children, disabled, size = "sm", className, title }: { active?: boolean; onClick?: () => void; children: ReactNode; disabled?: boolean; size?: "xs" | "sm"; className?: string; title?: string }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      disabled={disabled}
      title={title}
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1 whitespace-nowrap rounded-full border font-medium transition-all duration-150 disabled:cursor-not-allowed disabled:opacity-35",
        size === "xs" ? "h-6 px-2 text-[11px]" : "h-7 px-2.5 text-xs",
        active
          ? "border-indigo-600 bg-indigo-600 text-white shadow-sm shadow-indigo-600/20 dark:border-indigo-500 dark:bg-indigo-500"
          : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-700/80 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-white",
        focusRing,
        className,
      )}
    >
      {active && <Check className="-ml-0.5 h-3 w-3" strokeWidth={2.5} />}
      {children}
    </button>
  );
}

export function ChipGroup({
  options,
  value,
  onChange,
  max,
  size = "sm",
  original,
}: {
  options: string[];
  value: string[];
  onChange: (v: string[]) => void;
  max?: number;
  size?: "xs" | "sm";
  /** Claude's original values: shown with a faint marker when they differ. */
  original?: string[];
}) {
  const full = max !== undefined && value.length >= max;
  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map((o) => {
        const on = value.includes(o);
        const was = original?.includes(o);
        return (
          <Chip
            key={o}
            size={size}
            active={on}
            disabled={!on && full}
            title={was !== undefined && was !== on ? (was ? "Claude had this selected" : "Not in Claude's tags") : undefined}
            className={cn(original && was && !on && "border-dashed border-amber-400/80 dark:border-amber-500/60")}
            onClick={() => onChange(on ? value.filter((x) => x !== o) : full ? value : [...value, o])}
          >
            {o}
          </Chip>
        );
      })}
    </div>
  );
}

/** 1-5 slider with low/high words, value bubble and an optional marker for Claude's original value. */
export function AxisSlider({ low, high, value, onChange, original, disabled }: { low: string; high: string; value: number | undefined; onChange: (v: number) => void; original?: number; disabled?: boolean }) {
  const v = value ?? 3;
  const pct = ((v - 1) / 4) * 100;
  return (
    <div className={cn("grid grid-cols-[84px_1fr_92px] items-center gap-3", disabled && "opacity-60")}>
      <span className={cn("truncate text-right text-xs", muted)}>{low}</span>
      <div className="relative h-6">
        <div className="absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-zinc-200 dark:bg-zinc-800" />
        <div className="absolute left-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-indigo-600/80 dark:bg-indigo-500/80" style={{ width: `${value ? pct : 0}%` }} />
        {[0, 25, 50, 75, 100].map((p) => (
          <span key={p} className="absolute top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 dark:bg-zinc-950/60" style={{ left: `${p}%` }} />
        ))}
        {original !== undefined && original !== value && (
          <span title={`Claude: ${original}`} className="absolute top-1/2 h-3.5 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400" style={{ left: `${((original - 1) / 4) * 100}%` }} />
        )}
        <input
          type="range"
          min={1}
          max={5}
          step={1}
          value={v}
          disabled={disabled}
          aria-label={`${low} to ${high}`}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        />
        <span
          className={cn(
            "pointer-events-none absolute top-1/2 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-[10px] font-semibold tabular-nums shadow-sm transition-[left] duration-150",
            value ? "border-indigo-600 bg-white text-indigo-700 dark:border-indigo-400 dark:bg-zinc-900 dark:text-indigo-300" : "border-zinc-300 bg-white text-zinc-400 dark:border-zinc-600 dark:bg-zinc-900",
          )}
          style={{ left: `${pct}%` }}
        >
          {value ?? "–"}
        </span>
      </div>
      <span className={cn("truncate text-xs", muted)}>{high}</span>
    </div>
  );
}

export function NumberPills({ value, onChange, options, labels }: { value: number | undefined; onChange: (v: number) => void; options: number[]; labels?: Record<number, string> }) {
  return (
    <div className="flex gap-1">
      {options.map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          className={cn(
            "h-8 min-w-[32px] rounded-lg border px-2 text-xs font-medium tabular-nums transition-colors duration-150",
            value === n
              ? "border-indigo-600 bg-indigo-600 text-white dark:border-indigo-500 dark:bg-indigo-500"
              : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 dark:border-zinc-700/80 dark:bg-zinc-900 dark:text-zinc-300",
            focusRing,
          )}
        >
          {labels?.[n] ?? n}
        </button>
      ))}
    </div>
  );
}

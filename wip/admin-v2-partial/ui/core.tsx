// Admin design system: primitives. Zinc neutrals, one indigo accent, semantic status colours.
import { forwardRef, type HTMLAttributes, type ButtonHTMLAttributes, type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export { cn };

export const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950";
export const surface = "bg-white dark:bg-zinc-900";
export const hairline = "border-zinc-200/80 dark:border-zinc-800";
export const muted = "text-zinc-500 dark:text-zinc-400";
export const subtle = "text-zinc-400 dark:text-zinc-500";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "subtle";
type ButtonSize = "xs" | "sm" | "md";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-indigo-600 text-white shadow-sm shadow-indigo-600/20 hover:bg-indigo-500 active:bg-indigo-700 disabled:bg-indigo-600/50",
  secondary:
    "border border-zinc-200 bg-white text-zinc-800 shadow-sm hover:bg-zinc-50 hover:border-zinc-300 dark:border-zinc-700/80 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800",
  ghost: "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/70 dark:hover:text-zinc-100",
  subtle: "bg-zinc-100 text-zinc-700 hover:bg-zinc-200/80 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700/80",
  danger: "border border-rose-200 bg-white text-rose-600 hover:bg-rose-50 dark:border-rose-500/30 dark:bg-transparent dark:text-rose-400 dark:hover:bg-rose-500/10",
};
const sizes: Record<ButtonSize, string> = {
  xs: "h-7 gap-1.5 rounded-md px-2.5 text-xs",
  sm: "h-8 gap-1.5 rounded-lg px-3 text-[13px]",
  md: "h-9 gap-2 rounded-lg px-3.5 text-sm",
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant; size?: ButtonSize; icon?: ReactNode; loading?: boolean; iconRight?: ReactNode };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "secondary", size = "sm", icon, iconRight, loading, className, children, disabled, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      disabled={disabled || loading}
      className={cn(
        "inline-flex shrink-0 select-none items-center justify-center whitespace-nowrap font-medium transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        sizes[size],
        focusRing,
        className,
      )}
      {...rest}
    >
      {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : icon}
      {children}
      {iconRight}
    </button>
  );
});

export const IconButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & { label: string; size?: "sm" | "md"; active?: boolean }>(
  function IconButton({ label, size = "sm", active, className, children, ...rest }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        aria-label={label}
        title={label}
        className={cn(
          "inline-flex shrink-0 items-center justify-center rounded-lg text-zinc-500 transition-colors duration-150 hover:bg-zinc-100 hover:text-zinc-900 disabled:opacity-40 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",
          size === "sm" ? "h-8 w-8" : "h-9 w-9",
          active && "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100",
          focusRing,
          className,
        )}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

export type Tone = "neutral" | "accent" | "ok" | "warn" | "danger" | "info";
const tones: Record<Tone, string> = {
  neutral: "bg-zinc-100 text-zinc-700 ring-zinc-200/70 dark:bg-zinc-800/80 dark:text-zinc-300 dark:ring-zinc-700/60",
  accent: "bg-indigo-50 text-indigo-700 ring-indigo-200/70 dark:bg-indigo-500/10 dark:text-indigo-300 dark:ring-indigo-500/25",
  ok: "bg-emerald-50 text-emerald-700 ring-emerald-200/70 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/25",
  warn: "bg-amber-50 text-amber-800 ring-amber-200/80 dark:bg-amber-500/10 dark:text-amber-300 dark:ring-amber-500/25",
  danger: "bg-rose-50 text-rose-700 ring-rose-200/70 dark:bg-rose-500/10 dark:text-rose-300 dark:ring-rose-500/25",
  info: "bg-sky-50 text-sky-700 ring-sky-200/70 dark:bg-sky-500/10 dark:text-sky-300 dark:ring-sky-500/25",
};
const dots: Record<Tone, string> = { neutral: "bg-zinc-400", accent: "bg-indigo-500", ok: "bg-emerald-500", warn: "bg-amber-500", danger: "bg-rose-500", info: "bg-sky-500" };

export function Badge({ tone = "neutral", dot, icon, className, children }: { tone?: Tone; dot?: boolean; icon?: ReactNode; className?: string; children: ReactNode }) {
  return (
    <span className={cn("inline-flex h-5 items-center gap-1 whitespace-nowrap rounded-md px-1.5 text-[11px] font-medium ring-1 ring-inset", tones[tone], className)}>
      {dot && <span className={cn("h-1.5 w-1.5 rounded-full", dots[tone])} />}
      {icon}
      {children}
    </span>
  );
}

export function StatusDot({ tone = "ok", pulse }: { tone?: Tone; pulse?: boolean }) {
  return (
    <span className="relative inline-flex h-2 w-2">
      {pulse && <span className={cn("absolute inline-flex h-full w-full animate-ping rounded-full opacity-50", dots[tone])} />}
      <span className={cn("relative inline-flex h-2 w-2 rounded-full", dots[tone])} />
    </span>
  );
}

export function Card({ className, children, as: As = "section", ...rest }: { className?: string; children: ReactNode; as?: "section" | "div" | "article" } & HTMLAttributes<HTMLElement>) {
  return (
    <As className={cn("rounded-xl border shadow-[0_1px_2px_rgba(16,24,40,0.04)]", surface, hairline, className)} {...rest}>
      {children}
    </As>
  );
}

export function CardHeader({ title, description, action, icon, className }: { title: ReactNode; description?: ReactNode; action?: ReactNode; icon?: ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-start justify-between gap-4 px-5 pt-4", className)}>
      <div className="min-w-0">
        <h3 className="flex items-center gap-2 text-[13px] font-semibold text-zinc-900 dark:text-zinc-100">
          {icon && <span className="text-zinc-400 dark:text-zinc-500">{icon}</span>}
          {title}
        </h3>
        {description && <p className={cn("mt-0.5 text-xs", muted)}>{description}</p>}
      </div>
      {action && <div className="flex shrink-0 items-center gap-1.5">{action}</div>}
    </div>
  );
}

export const inputBase =
  "w-full rounded-lg border border-zinc-200 bg-white text-[13px] text-zinc-900 shadow-sm shadow-zinc-950/[0.02] placeholder:text-zinc-400 transition-colors duration-150 hover:border-zinc-300 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 disabled:opacity-60 dark:border-zinc-700/80 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:hover:border-zinc-600 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/10";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & { icon?: ReactNode; suffix?: ReactNode }>(function Input(
  { icon, suffix, className, ...rest },
  ref,
) {
  return (
    <div className={cn("relative flex items-center", className)}>
      {icon && <span className="pointer-events-none absolute left-2.5 text-zinc-400 dark:text-zinc-500">{icon}</span>}
      <input ref={ref} className={cn(inputBase, "h-9", icon ? "pl-8" : "pl-3", suffix ? "pr-14" : "pr-3")} {...rest} />
      {suffix && <span className="absolute right-2">{suffix}</span>}
    </div>
  );
});

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn(inputBase, "min-h-[72px] px-3 py-2 leading-relaxed", props.className)} />;
}

export function Select({ className, children, ...rest }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className={cn("relative", className)}>
      <select
        {...rest}
        className={cn(inputBase, "h-9 appearance-none pl-3 pr-8")}
        style={{ backgroundImage: "none" }}
      >
        {children}
      </select>
      <svg className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="m4 6 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function Field({ label, hint, changed, children, className }: { label: ReactNode; hint?: ReactNode; changed?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <div className="flex items-baseline justify-between gap-3">
        <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300">{label}</label>
        {changed}
      </div>
      {children}
      {hint && <p className={cn("text-[11px] leading-snug", subtle)}>{hint}</p>}
    </div>
  );
}

export function Switch({ checked, onChange, label, description, disabled }: { checked: boolean; onChange: (v: boolean) => void; label?: ReactNode; description?: ReactNode; disabled?: boolean }) {
  return (
    <label className={cn("flex cursor-pointer items-start justify-between gap-4", disabled && "cursor-not-allowed opacity-60")}>
      {(label || description) && (
        <span className="min-w-0">
          {label && <span className="block text-[13px] font-medium text-zinc-800 dark:text-zinc-200">{label}</span>}
          {description && <span className={cn("block text-xs", muted)}>{description}</span>}
        </span>
      )}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={cn(
          "relative mt-0.5 inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors duration-150",
          checked ? "bg-indigo-600" : "bg-zinc-200 dark:bg-zinc-700",
          focusRing,
        )}
      >
        <span className={cn("inline-block h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-black/5 transition-transform duration-150", checked ? "translate-x-[18px]" : "translate-x-0.5")} />
      </button>
    </label>
  );
}

export function Kbd({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <kbd
      className={cn(
        "inline-flex h-5 min-w-[20px] items-center justify-center rounded border border-zinc-200 bg-zinc-50 px-1 font-sans text-[10px] font-medium text-zinc-500 shadow-[0_1px_0_rgba(0,0,0,0.04)] dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400",
        className,
      )}
    >
      {children}
    </kbd>
  );
}

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-md bg-zinc-100 dark:bg-zinc-800/80", className)} />;
}

export function EmptyState({ icon, title, description, action, className }: { icon: ReactNode; title: ReactNode; description?: ReactNode; action?: ReactNode; className?: string }) {
  return (
    <div className={cn("flex flex-col items-center justify-center px-6 py-12 text-center", className)}>
      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 text-zinc-500 shadow-sm dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-900/40 dark:text-zinc-400">
        {icon}
      </div>
      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{title}</p>
      {description && <p className={cn("mt-1 max-w-sm text-[13px] leading-relaxed", muted)}>{description}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

export function Tooltip({ content, children, side = "top", className }: { content: ReactNode; children: ReactNode; side?: "top" | "bottom" | "right"; className?: string }) {
  const pos = side === "top" ? "bottom-full left-1/2 mb-1.5 -translate-x-1/2" : side === "bottom" ? "top-full left-1/2 mt-1.5 -translate-x-1/2" : "left-full top-1/2 ml-2 -translate-y-1/2";
  return (
    <span className={cn("group/tt relative inline-flex", className)}>
      {children}
      <span
        role="tooltip"
        className={cn(
          "pointer-events-none absolute z-50 whitespace-nowrap rounded-md bg-zinc-900 px-2 py-1 text-[11px] font-medium text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover/tt:opacity-100 group-focus-within/tt:opacity-100 dark:bg-zinc-100 dark:text-zinc-900",
          pos,
        )}
      >
        {content}
      </span>
    </span>
  );
}

export function SectionTitle({ children, action, className }: { children: ReactNode; action?: ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-center justify-between gap-3", className)}>
      <h4 className={cn("text-[11px] font-semibold uppercase tracking-[0.06em]", subtle)}>{children}</h4>
      {action}
    </div>
  );
}

export function Divider({ className }: { className?: string }) {
  return <div className={cn("h-px bg-zinc-200/80 dark:bg-zinc-800", className)} />;
}

export function PageHeader({ title, description, actions, eyebrow }: { title: ReactNode; description?: ReactNode; actions?: ReactNode; eyebrow?: ReactNode }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0">
        {eyebrow && <div className={cn("mb-1.5 text-xs font-medium", muted)}>{eyebrow}</div>}
        <h1 className="text-[22px] font-semibold tracking-[-0.02em] text-zinc-950 sm:text-2xl dark:text-white">{title}</h1>
        {description && <p className={cn("mt-1 max-w-2xl text-[13px] leading-relaxed", muted)}>{description}</p>}
      </div>
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </div>
  );
}

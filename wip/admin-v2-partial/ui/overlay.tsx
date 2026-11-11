// Admin design system: popovers, menus, dialogs, sheets, toasts.
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { CheckCircle2, CircleAlert, Info, X } from "lucide-react";
import { cn, focusRing, IconButton, muted } from "./core";

function useOutside(ref: React.RefObject<HTMLElement>, open: boolean, close: () => void) {
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [ref, open, close]);
}

/** Anchored popover. `trigger` receives the toggle; content is rendered below it. */
export function Popover({
  trigger,
  children,
  align = "start",
  width = 280,
  className,
}: {
  trigger: (p: { open: boolean; toggle: () => void }) => ReactNode;
  children: (close: () => void) => ReactNode;
  align?: "start" | "end";
  width?: number;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setOpen(false), []);
  useOutside(ref, open, close);
  return (
    <div ref={ref} className="relative inline-flex">
      {trigger({ open, toggle: () => setOpen((o) => !o) })}
      {open && (
        <div
          style={{ width }}
          className={cn(
            "absolute top-full z-40 mt-1.5 origin-top rounded-xl border border-zinc-200/80 bg-white p-1.5 shadow-xl shadow-zinc-950/10 animate-in fade-in-0 zoom-in-95 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/40",
            align === "end" ? "right-0" : "left-0",
            className,
          )}
        >
          {children(close)}
        </div>
      )}
    </div>
  );
}

export function MenuItem({ icon, children, onClick, danger, shortcut }: { icon?: ReactNode; children: ReactNode; onClick: () => void; danger?: boolean; shortcut?: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-left text-[13px] transition-colors duration-100",
        danger ? "text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-500/10" : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800",
        focusRing,
      )}
    >
      {icon && <span className="text-zinc-400 dark:text-zinc-500">{icon}</span>}
      <span className="flex-1">{children}</span>
      {shortcut}
    </button>
  );
}

function useLockScroll(open: boolean) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);
}

/** Overlays render inside the admin root so the theme class applies. */
function portalTarget(): HTMLElement {
  return (document.getElementById("admin-portal") as HTMLElement) ?? document.body;
}

export function Dialog({ open, onClose, title, description, children, footer, size = "md" }: { open: boolean; onClose: () => void; title: ReactNode; description?: ReactNode; children?: ReactNode; footer?: ReactNode; size?: "sm" | "md" | "lg" }) {
  useLockScroll(open);
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, onClose]);
  if (!open) return null;
  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-start justify-center p-4 pt-[12vh]">
      <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-[2px] animate-in fade-in-0" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "relative w-full rounded-2xl border border-zinc-200/80 bg-white shadow-2xl shadow-zinc-950/20 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 dark:border-zinc-800 dark:bg-zinc-900",
          size === "sm" ? "max-w-md" : size === "md" ? "max-w-lg" : "max-w-2xl",
        )}
      >
        <div className="flex items-start justify-between gap-4 px-5 pt-5">
          <div>
            <h2 className="text-[15px] font-semibold text-zinc-900 dark:text-white">{title}</h2>
            {description && <p className={cn("mt-1 text-[13px]", muted)}>{description}</p>}
          </div>
          <IconButton label="Close" onClick={onClose} className="-mr-1.5 -mt-1">
            <X className="h-4 w-4" />
          </IconButton>
        </div>
        {children && <div className="px-5 py-4">{children}</div>}
        {footer && <div className="flex justify-end gap-2 rounded-b-2xl border-t border-zinc-100 bg-zinc-50/60 px-5 py-3 dark:border-zinc-800 dark:bg-zinc-900/60">{footer}</div>}
      </div>
    </div>,
    portalTarget(),
  );
}

export function Sheet({ open, onClose, side = "left", children, className }: { open: boolean; onClose: () => void; side?: "left" | "right"; children: ReactNode; className?: string }) {
  useLockScroll(open);
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, onClose]);
  if (!open) return null;
  return createPortal(
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-[2px] animate-in fade-in-0" onClick={onClose} />
      <div
        className={cn(
          "absolute inset-y-0 flex w-[min(320px,88vw)] flex-col border-zinc-200/80 bg-white shadow-2xl animate-in duration-200 dark:border-zinc-800 dark:bg-zinc-950",
          side === "left" ? "left-0 border-r slide-in-from-left" : "right-0 border-l slide-in-from-right",
          className,
        )}
      >
        {children}
      </div>
    </div>,
    portalTarget(),
  );
}

// ---------- toasts ----------
type Toast = { id: number; text: string; kind: "ok" | "error" | "info" };
const ToastCtx = createContext<(text: string, kind?: Toast["kind"]) => void>(() => {});

export function ToastProvider({ children }: { children: ReactNode }) {
  const [list, setList] = useState<Toast[]>([]);
  const push = useCallback((text: string, kind: Toast["kind"] = "ok") => {
    const id = Date.now() + Math.random();
    setList((l) => [...l.slice(-3), { id, text, kind }]);
    window.setTimeout(() => setList((l) => l.filter((t) => t.id !== id)), kind === "error" ? 7000 : 3200);
  }, []);
  return (
    <ToastCtx.Provider value={push}>
      {children}
      <div className="pointer-events-none fixed bottom-5 right-5 z-[70] flex w-[min(360px,calc(100vw-2.5rem))] flex-col gap-2">
        {list.map((t) => (
          <div
            key={t.id}
            role="status"
            className="pointer-events-auto flex items-start gap-3 rounded-xl border border-zinc-200/80 bg-white px-3.5 py-3 text-[13px] text-zinc-800 shadow-xl shadow-zinc-950/10 animate-in fade-in-0 slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
          >
            {t.kind === "error" ? (
              <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" />
            ) : t.kind === "info" ? (
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />
            ) : (
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
            )}
            <span className="leading-snug">{t.text}</span>
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  );
}

export const useToast = () => useContext(ToastCtx);

/** Copy text with a toast; falls back to a hidden textarea. */
export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    return ok;
  }
}

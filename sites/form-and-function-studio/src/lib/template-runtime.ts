// Runs converted HTML templates inside React: loads their external stylesheets/scripts once and executes the
// template's own JavaScript after the page has mounted (DOMContentLoaded/load listeners fire immediately).
// Window/document listeners and intervals the script adds are tracked and removed when the page unmounts,
// so switching between pages (e.g. /, /option-2) never stacks handlers.
import { useEffect, useRef } from "react";

const loaded = new Map<string, Promise<void>>();

function addStylesheet(href: string) {
  if (document.querySelector(`link[data-tpl-href="${CSS.escape(href)}"]`)) return;
  const l = document.createElement("link");
  l.rel = "stylesheet";
  l.href = href;
  l.dataset.tplHref = href;
  document.head.appendChild(l);
}

function addScript(src: string): Promise<void> {
  if (!loaded.has(src)) {
    loaded.set(src, new Promise((resolve) => {
      const s = document.createElement("script");
      s.src = src;
      s.async = false;
      s.onload = () => resolve();
      s.onerror = () => resolve();
      document.head.appendChild(s);
    }));
  }
  return loaded.get(src)!;
}

type Listener = [EventTarget, string, EventListenerOrEventListenerObject, boolean | AddEventListenerOptions | undefined];

function runTemplateScript(code: string): () => void {
  const added: Listener[] = [];
  const timers: number[] = [];
  const docAdd = document.addEventListener;
  const winAdd = window.addEventListener;
  const setInt = window.setInterval;
  const fire = (type: string) => type === "DOMContentLoaded" || type === "load";
  let depth = 0;
  let disposed = false;

  const install = () => {
    if (depth++ > 0) return;
    const wrap = (target: EventTarget, orig: typeof docAdd) =>
      function (this: unknown, type: string, fn: EventListenerOrEventListenerObject | null, opts?: boolean | AddEventListenerOptions) {
        if (!fn) return;
        if (fire(type)) { defer(fn, type, target); return; }
        added.push([target, type, fn, opts]);
        return orig.call(target, type, fn, opts);
      };
    document.addEventListener = wrap(document, docAdd) as typeof document.addEventListener;
    window.addEventListener = wrap(window, winAdd as typeof docAdd) as typeof window.addEventListener;
    window.setInterval = ((handler: TimerHandler, ms?: number, ...rest: unknown[]) => {
      const id = setInt(handler, ms, ...rest);
      timers.push(id);
      return id;
    }) as typeof window.setInterval;
  };
  const uninstall = () => {
    if (--depth > 0) return;
    document.addEventListener = docAdd;
    window.addEventListener = winAdd;
    window.setInterval = setInt;
  };
  const defer = (fn: EventListenerOrEventListenerObject, type: string, target: EventTarget) =>
    setTimeout(() => {
      if (disposed) return;
      install();
      try { typeof fn === "function" ? fn.call(target, new Event(type)) : fn.handleEvent(new Event(type)); }
      catch (e) { console.warn("[template] script error:", e); }
      finally { uninstall(); }
    }, 0);

  install();
  try {
    // eslint-disable-next-line no-new-func
    new Function(code).call(window);
  } catch (e) {
    console.warn("[template] script error:", e);
  } finally {
    uninstall();
  }
  return () => {
    disposed = true;
    added.forEach(([t, type, fn, opts]) => t.removeEventListener(type, fn, opts));
    timers.forEach((id) => clearInterval(id));
  };
}

export function useTemplateRuntime(links: string[], scripts: string[], code?: string) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    links.forEach(addStylesheet);
    let cleanup: (() => void) | undefined;
    let cancelled = false;
    Promise.all(scripts.map(addScript)).then(() => {
      if (!cancelled && code && code.trim()) cleanup = runTemplateScript(code);
    });
    return () => { cancelled = true; cleanup?.(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return ref;
}

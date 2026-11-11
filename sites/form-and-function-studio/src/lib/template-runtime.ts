// Runs converted HTML templates inside React: loads their external stylesheets/scripts once and executes the
// template's own JavaScript after the page has mounted (DOMContentLoaded/load listeners fire immediately).
import { useEffect, useRef } from "react";

const loaded = new Map<string, Promise<void>>();
const ran = new WeakSet<Element>();

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

function runTemplateScript(code: string) {
  const fire = (type: string) => type === "DOMContentLoaded" || type === "load";
  const docAdd = document.addEventListener.bind(document);
  const winAdd = window.addEventListener.bind(window);
  const call = (fn: EventListenerOrEventListenerObject | null, type: string, target: EventTarget) => {
    if (!fn) return;
    setTimeout(() => (typeof fn === "function" ? fn.call(target, new Event(type)) : fn.handleEvent(new Event(type))), 0);
  };
  document.addEventListener = ((type: string, fn: EventListenerOrEventListenerObject | null, opts?: boolean | AddEventListenerOptions) =>
    fire(type) ? call(fn, type, document) : docAdd(type, fn as EventListenerOrEventListenerObject, opts)) as typeof document.addEventListener;
  window.addEventListener = ((type: string, fn: EventListenerOrEventListenerObject | null, opts?: boolean | AddEventListenerOptions) =>
    fire(type) ? call(fn, type, window) : winAdd(type, fn as EventListenerOrEventListenerObject, opts)) as typeof window.addEventListener;
  try {
    // eslint-disable-next-line no-new-func
    new Function(code).call(window);
  } catch (e) {
    console.warn("[template] script error:", e);
  } finally {
    document.addEventListener = docAdd as typeof document.addEventListener;
    window.addEventListener = winAdd as typeof window.addEventListener;
  }
}

export function useTemplateRuntime(links: string[], scripts: string[], code?: string) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    links.forEach(addStylesheet);
    const el = ref.current;
    if (!el || ran.has(el)) return;
    ran.add(el);
    Promise.all(scripts.map(addScript)).then(() => { if (code && code.trim()) runTemplateScript(code); });
  }, []);
  return ref;
}

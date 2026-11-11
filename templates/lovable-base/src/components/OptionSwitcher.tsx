import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Floating "Designs" pill (bottom right) + full-screen picker to compare the options built for one brief.
 * Self-contained styling (inline + its own class names) so converted templates never restyle it.
 * Keys: 1-9 switch while open, Esc closes. Options other than the current page preload when the picker opens.
 */
export type SiteOption = {
  path: string;
  number: string;
  name: string;
  tagline: string;
  swatches: string[];
  preload?: () => Promise<unknown>;
};

const INK = "#0e1013";
const PAPER = "#f4f1ea";
const MONO = 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';
const SANS = 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';
const SERIF = '"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif';

function trapFocus(e: ReactKeyboardEvent<HTMLDivElement>) {
  if (e.key !== "Tab") return;
  const nodes = e.currentTarget.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
  const first = nodes[0], last = nodes[nodes.length - 1];
  if (!first || !last) return;
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

export function OptionSwitcher({ options, brand, kind = "homepage", accent = "#6ee7d2" }: {
  options: SiteOption[];
  brand: string;
  kind?: string;
  accent?: string;
}) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const panel = useRef<HTMLDivElement>(null);
  const clean = pathname.replace(/\/+$/, "") || "/";
  const current = options.find((o) => o.path === clean) ?? options[0];
  const count = String(options.length).padStart(2, "0");
  const words = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

  const choose = (o: SiteOption) => {
    setOpen(false);
    if (o.path !== current.path) { navigate(o.path); window.scrollTo({ top: 0 }); }
  };

  useEffect(() => {
    if (!open) return;
    options.forEach((o) => o.preload?.());
    const html = document.documentElement, prev = html.style.overflow;
    html.style.overflow = "hidden";
    setTimeout(() => panel.current?.querySelector<HTMLElement>('[aria-current="page"], a')?.focus(), 30);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.preventDefault(); setOpen(false); return; }
      const target = options[Number(e.key) - 1];
      if (target) { e.preventDefault(); choose(target); }
    };
    window.addEventListener("keydown", onKey);
    return () => { html.style.overflow = prev; window.removeEventListener("keydown", onKey); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (options.length < 2 || !current) return null;

  return (
    <>
      <style>{`
        .osw-pill{position:fixed;right:16px;bottom:16px;z-index:2147483000;display:flex;align-items:center;gap:12px;height:48px;padding:0 16px 0 6px;border-radius:999px;border:1px solid rgba(244,241,234,.14);background:${INK};color:${PAPER};font-family:${SANS};box-shadow:0 18px 44px -18px rgba(0,0,0,.6),0 2px 6px rgba(0,0,0,.18);cursor:pointer;transition:transform .15s ease,box-shadow .15s ease}
        .osw-pill:hover{transform:translateY(-2px);box-shadow:0 22px 50px -18px rgba(0,0,0,.65),0 2px 6px rgba(0,0,0,.2)}
        .osw-pill:active{transform:scale(.97)}
        .osw-pill:focus-visible,.osw-row:focus-visible,.osw-close:focus-visible{outline:2px solid ${accent};outline-offset:3px}
        .osw-dot{display:grid;place-items:center;width:36px;height:36px;border-radius:999px;background:${accent};color:${INK}}
        .osw-full{display:flex;flex-direction:column;align-items:flex-start;line-height:1}
        .osw-short{display:none;font:500 11px/1 ${MONO};letter-spacing:.12em;color:rgba(244,241,234,.8)}
        @media (max-width:640px){.osw-pill{right:12px;bottom:12px;height:44px;gap:8px;padding:0 12px 0 5px}.osw-dot{width:32px;height:32px}.osw-full{display:none}.osw-short{display:inline}}
        .osw-overlay{position:fixed;inset:0;z-index:2147483001;overflow-y:auto;overscroll-behavior:contain;background:${INK};color:${PAPER};font-family:${SANS};animation:osw-in .22s ease both}
        @keyframes osw-in{from{opacity:0;transform:scale(.985)}to{opacity:1;transform:none}}
        .osw-grid{position:absolute;inset:0;pointer-events:none;opacity:.35;background-image:linear-gradient(rgba(244,241,234,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(244,241,234,.05) 1px,transparent 1px);background-size:64px 64px;mask-image:linear-gradient(to bottom,#000,transparent 85%)}
        .osw-wrap{position:relative;max-width:1240px;min-height:100vh;margin:0 auto;padding:28px 20px 48px;display:flex;flex-direction:column}
        .osw-body{display:grid;gap:40px;margin-top:44px}
        @media (min-width:1024px){.osw-wrap{padding:40px 32px 56px}.osw-body{grid-template-columns:.9fr 1.4fr;gap:64px;margin-top:64px}.osw-side{position:sticky;top:40px;align-self:start}}
        .osw-row{position:relative;display:flex;align-items:center;gap:22px;width:100%;padding:22px 24px;border-radius:22px;border:1px solid rgba(244,241,234,.1);background:rgba(244,241,234,.03);color:inherit;text-decoration:none;transition:background .15s ease,border-color .15s ease}
        .osw-row:hover{border-color:rgba(244,241,234,.3);background:rgba(244,241,234,.06)}
        .osw-row[aria-current="page"]{border-color:${accent}99;background:${accent}1f}
        .osw-row:hover .osw-arrow{transform:translateX(4px);color:${PAPER}}
        @media (max-width:640px){.osw-row{gap:14px;padding:16px}.osw-swatches{display:none!important}}
        .osw-close{display:grid;place-items:center;width:44px;height:44px;border-radius:999px;border:1px solid rgba(244,241,234,.2);background:transparent;color:${PAPER};cursor:pointer;transition:background .15s}
        .osw-close:hover{background:rgba(244,241,234,.1)}
      `}</style>

      <button type="button" className="osw-pill" onClick={() => setOpen(true)}
        onPointerEnter={() => options.forEach((o) => o.preload?.())}
        aria-label={`Switch design. Current: ${current.name}, ${current.number} of ${count}`}>
        <span className="osw-dot" aria-hidden>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>
        </span>
        <span className="osw-short">{current.number}/{count}</span>
        <span className="osw-full">
          <span style={{ font: `500 9.5px/1 ${MONO}`, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(244,241,234,.5)" }}>Design {current.number} / {count}</span>
          <span style={{ marginTop: 5, fontSize: 13, fontWeight: 500 }}>{current.name}</span>
        </span>
      </button>

      {open && (
        <div className="osw-overlay" role="dialog" aria-modal="true" aria-labelledby="osw-title" onKeyDown={trapFocus} ref={panel}
          style={{ backgroundImage: `radial-gradient(60% 45% at 85% 0%, ${accent}55, transparent 70%)` }}>
          <div className="osw-grid" aria-hidden />
          <div className="osw-wrap">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
              <p style={{ margin: 0, font: `500 11px/1.4 ${MONO}`, letterSpacing: ".18em", textTransform: "uppercase", color: accent }}>{brand} · {kind} directions</p>
              <button type="button" className="osw-close" onClick={() => setOpen(false)} aria-label="Close design picker">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="osw-body">
              <div className="osw-side">
                <h2 id="osw-title" style={{ margin: 0, fontSize: "clamp(2.4rem,5vw,4.2rem)", lineHeight: 0.98, fontWeight: 500, letterSpacing: "-0.03em" }}>
                  {words[options.length - 1] ?? options.length} directions.{" "}
                  <span style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, color: accent }}>One {brand}.</span>
                </h2>
                <p style={{ margin: "20px 0 0", maxWidth: 380, fontSize: 16, lineHeight: 1.55, color: "rgba(244,241,234,.6)" }}>
                  Same brief, {options.length} art directions chosen for this {kind}. Each is its own page with its own link.
                </p>
                <p style={{ margin: "32px 0 0", font: `400 11px/1.4 ${MONO}`, color: "rgba(244,241,234,.4)" }}>Tip: press 1–{options.length} to switch, Esc to close</p>
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: "0 0 40px", display: "grid", gap: 12 }}>
                {options.map((o, i) => {
                  const isCurrent = o.path === current.path;
                  return (
                    <li key={o.path}>
                      <a href={o.path} className="osw-row" aria-current={isCurrent ? "page" : undefined}
                        onPointerEnter={() => o.preload?.()}
                        onClick={(e) => { if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return; e.preventDefault(); choose(o); }}>
                        <span style={{ width: 56, flexShrink: 0, fontFamily: SERIF, fontStyle: "italic", fontSize: 46, lineHeight: 1, color: accent }}>{i + 1}</span>
                        <span style={{ minWidth: 0, flex: 1 }}>
                          <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8 }}>
                            <span style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.01em" }}>{o.name}</span>
                            {isCurrent && (
                              <span style={{ display: "inline-flex", alignItems: "center", gap: 4, borderRadius: 999, background: accent, color: INK, padding: "2px 8px", font: `500 10px/1.4 ${MONO}` }}>
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg> Viewing
                              </span>
                            )}
                          </span>
                          <span style={{ display: "block", marginTop: 6, fontSize: 14, lineHeight: 1.5, color: "rgba(244,241,234,.62)" }}>{o.tagline}</span>
                        </span>
                        <span className="osw-swatches" aria-hidden style={{ display: "flex", alignItems: "center" }}>
                          {o.swatches.slice(0, 3).map((c, j) => (
                            <span key={j} style={{ width: 36, height: 36, marginLeft: j ? -8 : 0, borderRadius: 999, background: c, boxShadow: `0 0 0 2px ${INK}` }} />
                          ))}
                        </span>
                        <svg className="osw-arrow" aria-hidden width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: "rgba(244,241,234,.4)", transition: "transform .15s, color .15s" }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default OptionSwitcher;

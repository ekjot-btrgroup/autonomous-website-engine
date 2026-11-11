import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Frame } from "@/showcase/Frame";
import { getDesign, getShortlist } from "@/showcase/data";

function readPicks(slug: string): string[] {
  try {
    const raw = localStorage.getItem(`picks:${slug}`);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through to textarea fallback */
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

const briefText = (brief: Record<string, unknown> | undefined, key: string): string => {
  const v = brief?.[key];
  if (Array.isArray(v)) return v.join(", ");
  return typeof v === "string" ? v : "";
};

const Shortlist = () => {
  const { slug = "" } = useParams();
  const list = getShortlist(slug);
  const items = useMemo(() => [...(list?.items ?? [])].sort((a, b) => a.rank - b.rank), [list]);
  const max = Math.max(1, list?.picks ?? 3);
  const validIds = useMemo(() => new Set(items.map((i) => i.id)), [items]);

  const [picks, setPicks] = useState<string[]>(() => readPicks(slug).filter((id) => validIds.has(id)).slice(0, max));
  const [copied, setCopied] = useState<"idle" | "ok" | "fail">("idle");

  useEffect(() => {
    try {
      localStorage.setItem(`picks:${slug}`, JSON.stringify(picks));
    } catch {
      /* storage unavailable */
    }
  }, [slug, picks]);

  if (!list) {
    return (
      <div className="mx-auto max-w-3xl p-10 font-sans text-zinc-700">
        <Link to="/s" className="text-sm text-zinc-500 hover:underline">← Shortlists</Link>
        <p className="mt-6">No shortlist named <code className="font-mono">{slug}</code>.</p>
      </div>
    );
  }

  const ordered = items.filter((i) => picks.includes(i.id)).map((i) => i.id);
  const command = `Build site ${list.slug} with designs: ${ordered.join(", ")}`;
  const full = picks.length >= max;

  const toggle = (id: string) => {
    setCopied("idle");
    setPicks((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : prev.length >= max ? prev : [...prev, id]));
  };

  const industry = briefText(list.brief, "niche") || briefText(list.brief, "industry");
  const style = briefText(list.brief, "style");

  return (
    <div className="min-h-screen bg-zinc-50 pb-40 font-sans text-zinc-900">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <Link to="/s" className="text-sm text-zinc-500 hover:underline">← Shortlists</Link>
          <h1 className="mt-2 text-xl font-semibold">{list.company || list.slug}</h1>
          {(industry || style) && (
            <p className="text-sm text-zinc-600">
              {industry && <span>For: {industry}</span>}
              {industry && style && <span> · </span>}
              {style && <span>Style: {style}</span>}
            </p>
          )}
          <p className="mt-2 text-sm text-zinc-700">
            Pick {max} designs, then press Copy and paste into Claude.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-6 px-6 py-6">
        {items.length === 0 && <p className="text-sm text-zinc-500">This shortlist has no designs.</p>}
        {items.map((item) => {
          const meta = getDesign(item.id);
          const picked = picks.includes(item.id);
          return (
            <article
              key={item.id}
              className={`rounded-lg border bg-white p-4 transition-colors ${picked ? "border-zinc-900 ring-1 ring-zinc-900" : "border-zinc-200"}`}
            >
              <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                <div className="flex min-w-0 items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white">
                    {item.rank}
                  </span>
                  <div className="min-w-0">
                    <p className="font-medium">
                      <Link to={`/d/${encodeURIComponent(item.id)}`} className="hover:underline">
                        {meta?.name ?? item.id}
                      </Link>
                    </p>
                    <p className="font-mono text-xs text-zinc-500">{item.id}</p>
                    <p className="mt-1 text-xs text-zinc-600">
                      {item.category} · score {item.score}
                      {meta && meta.status !== "ok" && <span className="ml-2 rounded bg-amber-100 px-1.5 py-0.5 text-amber-800">{meta.status}</span>}
                      {!meta && <span className="ml-2 rounded bg-red-100 px-1.5 py-0.5 text-red-800">missing from library</span>}
                    </p>
                  </div>
                </div>
                <label
                  className={`flex cursor-pointer select-none items-center gap-2 rounded-md border px-3 py-2 text-sm ${
                    picked ? "border-zinc-900 bg-zinc-900 text-white" : "border-zinc-300"
                  } ${!picked && full ? "cursor-not-allowed opacity-40" : ""}`}
                >
                  <input type="checkbox" checked={picked} disabled={!picked && full} onChange={() => toggle(item.id)} />
                  Pick
                </label>
              </div>
              {item.reasons.length > 0 && (
                <ul className="mb-3 list-disc pl-5 text-sm text-zinc-700">
                  {item.reasons.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
              )}
              <div className="flex flex-col gap-3 lg:flex-row">
                <div className="min-w-0 flex-1">
                  <Frame id={item.id} width={1440} height={560} title={`${meta?.name ?? item.id} desktop`} />
                </div>
                <div className="w-full lg:w-[260px] lg:shrink-0">
                  <Frame id={item.id} width={390} height={560} title={`${meta?.name ?? item.id} mobile`} />
                </div>
              </div>
            </article>
          );
        })}
      </main>

      <div className="fixed inset-x-0 bottom-0 border-t border-zinc-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-3 sm:flex-row sm:items-center">
          <div className="shrink-0 text-sm">
            <span className="font-semibold">{picks.length} of {max} picked</span>
            {ordered.length > 0 && <span className="ml-2 font-mono text-xs text-zinc-500">{ordered.join(", ")}</span>}
          </div>
          <input
            readOnly
            value={command}
            onFocus={(e) => e.currentTarget.select()}
            className="min-w-0 flex-1 rounded-md border border-zinc-300 bg-zinc-50 px-3 py-2 font-mono text-xs"
            aria-label="Command to paste into Claude"
          />
          <button
            disabled={ordered.length === 0}
            onClick={async () => setCopied((await copyText(command)) ? "ok" : "fail")}
            className="shrink-0 rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
          >
            {copied === "ok" ? "Copied" : copied === "fail" ? "Copy failed, select text" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shortlist;

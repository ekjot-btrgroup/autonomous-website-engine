import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Frame } from "@/showcase/Frame";
import { categoryOf, getDesign, statusLabel } from "@/showcase/data";

const VIEWPORTS = [
  { label: "Desktop", width: 1440 },
  { label: "Tablet", width: 768 },
  { label: "Mobile", width: 390 },
] as const;

const DesignDetail = () => {
  const { id = "" } = useParams();
  const meta = getDesign(id);
  const [width, setWidth] = useState<number>(1440);

  if (!meta) {
    return (
      <div className="mx-auto max-w-3xl p-10 font-sans text-zinc-700">
        <Link to="/" className="text-sm text-zinc-500 hover:underline">← Library</Link>
        <p className="mt-6">Unknown design id: <code className="font-mono">{id}</code></p>
      </div>
    );
  }

  const tags = meta.tags;
  const chips = [...(tags?.style ?? []), ...(tags?.mood ?? []), ...(tags?.layout ?? []), ...(tags?.industries ?? [])];

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <Link to="/" className="text-sm text-zinc-500 hover:underline">← Library</Link>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-xl font-semibold">{meta.name}</h1>
              <p className="font-mono text-xs text-zinc-500">{meta.id}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded bg-zinc-100 px-2 py-1 text-zinc-700">{categoryOf(meta)}</span>
              <span
                className={`rounded px-2 py-1 ${meta.status === "ok" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}`}
              >
                {statusLabel[meta.status]}
              </span>
              <span className="rounded bg-zinc-100 px-2 py-1 text-zinc-700">{meta.source?.format}</span>
              {typeof tags?.quality === "number" && (
                <span className="rounded bg-zinc-100 px-2 py-1 text-zinc-700">quality {tags.quality}/5</span>
              )}
            </div>
          </div>
          {chips.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {chips.map((t, i) => (
                <span key={`${t}-${i}`} className="rounded border border-zinc-200 px-2 py-0.5 text-[11px] text-zinc-600">{t}</span>
              ))}
            </div>
          )}
          {tags?.note && <p className="mt-2 text-sm text-zinc-600">{tags.note}</p>}
          {meta.issues && meta.issues.length > 0 && (
            <ul className="mt-3 list-disc pl-5 text-sm text-amber-800">
              {meta.issues.map((issue, i) => <li key={i}>{issue}</li>)}
            </ul>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex overflow-hidden rounded-md border border-zinc-300 bg-white text-sm">
            {VIEWPORTS.map((v) => (
              <button
                key={v.width}
                onClick={() => setWidth(v.width)}
                className={`px-3 py-1.5 ${width === v.width ? "bg-zinc-900 text-white" : "hover:bg-zinc-100"}`}
              >
                {v.label} {v.width}
              </button>
            ))}
          </div>
          <a
            href={`/raw/${encodeURIComponent(meta.id)}`}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-700 underline-offset-2 hover:underline"
          >
            Open full page ↗
          </a>
        </div>
        <div className="mx-auto" style={{ maxWidth: width }}>
          <Frame key={width} id={meta.id} width={width} height="80vh" interactive title={meta.name} />
        </div>
      </main>
    </div>
  );
};

export default DesignDetail;

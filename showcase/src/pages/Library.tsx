import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Frame } from "@/showcase/Frame";
import { categories, categoryOf, designs, shortlists, statusLabel, tagsOf, type DesignStatus } from "@/showcase/data";

const PAGE_SIZE = 24;
const STATUSES: (DesignStatus | "all")[] = ["all", "ok", "needs_conversion", "needs_attention", "build_failed"];

const chip = (active: boolean) =>
  `rounded-full border px-3 py-1 text-xs transition-colors ${
    active ? "border-zinc-900 bg-zinc-900 text-white" : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-500"
  }`;

const Library = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState<DesignStatus | "all">("all");
  const [page, setPage] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return designs.filter((d) => {
      if (category !== "all" && categoryOf(d) !== category) return false;
      if (status !== "all" && d.status !== status) return false;
      if (!q) return true;
      const hay = [d.name, d.id, categoryOf(d), ...tagsOf(d), ...(d.tags?.media ?? []), ...(d.tags?.goals ?? []), d.tags?.typography ?? "", d.tags?.motion ?? "", d.tags?.scheme ?? "", d.tags?.note ?? ""]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [query, category, status]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pages - 1);
  const visible = filtered.slice(current * PAGE_SIZE, current * PAGE_SIZE + PAGE_SIZE);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <div>
            <h1 className="text-xl font-semibold">Design library</h1>
            <p className="text-sm text-zinc-500">
              {designs.length} design{designs.length === 1 ? "" : "s"} · {filtered.length} shown
            </p>
          </div>
          <Link to="/s" className="rounded-md border border-zinc-300 px-3 py-2 text-sm hover:bg-zinc-100">
            Shortlists ({shortlists.length})
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-6">
        <div className="mb-4 flex flex-col gap-3">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(0);
            }}
            placeholder="Search name, id or tags"
            className="w-full max-w-md rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-500"
          />
          <div className="flex flex-wrap gap-2">
            {["all", ...categories].map((c) => (
              <button key={c} className={chip(category === c)} onClick={() => { setCategory(c); setPage(0); }}>
                {c}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {STATUSES.map((s) => (
              <button key={s} className={chip(status === s)} onClick={() => { setStatus(s); setPage(0); }}>
                {s === "all" ? "any status" : statusLabel[s]}
              </button>
            ))}
          </div>
        </div>

        {designs.length === 0 ? (
          <p className="rounded-md border border-dashed border-zinc-300 bg-white p-10 text-center text-sm text-zinc-500">
            No designs yet. Add design folders to <code className="font-mono">incoming/</code> and run{" "}
            <code className="font-mono">npm run add</code>.
          </p>
        ) : filtered.length === 0 ? (
          <p className="p-10 text-center text-sm text-zinc-500">No designs match these filters.</p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((d) => (
              <Link
                key={d.id}
                to={`/d/${encodeURIComponent(d.id)}`}
                className="group overflow-hidden rounded-lg border border-zinc-200 bg-white p-3 transition-shadow hover:shadow-md"
              >
                <Frame id={d.id} width={1440} height={300} title={d.name} />
                <div className="mt-3 flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate font-medium group-hover:underline">{d.name}</p>
                    <p className="truncate font-mono text-[11px] text-zinc-500">{d.id}</p>
                  </div>
                  <span className="shrink-0 rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-700">{categoryOf(d)}</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {d.status !== "ok" && (
                    <span className="rounded bg-amber-100 px-2 py-0.5 text-[11px] text-amber-800">{statusLabel[d.status]}</span>
                  )}
                  {(d.tags?.style ?? []).slice(0, 4).map((t) => (
                    <span key={t} className="rounded border border-zinc-200 px-2 py-0.5 text-[11px] text-zinc-600">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        )}

        {pages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-3 text-sm">
            <button
              className="rounded-md border border-zinc-300 px-3 py-1.5 disabled:opacity-40"
              disabled={current === 0}
              onClick={() => setPage(current - 1)}
            >
              Previous
            </button>
            <span className="text-zinc-600">
              Page {current + 1} of {pages}
            </span>
            <button
              className="rounded-md border border-zinc-300 px-3 py-1.5 disabled:opacity-40"
              disabled={current >= pages - 1}
              onClick={() => setPage(current + 1)}
            >
              Next
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Library;

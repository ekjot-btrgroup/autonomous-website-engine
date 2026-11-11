import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Frame } from "@/showcase/Frame";
import { categoryOf, statusLabel, type DesignMeta } from "@/showcase/data";
import { AdminLayout, SetupCard } from "./AdminLayout";
import { Badge } from "./controls";
import { canWrite } from "./github";
import { saveOverride, useDesigns } from "./store";
import { useToast } from "./toast";
import { AXIS_KEYS, vocab } from "./vocab";

type View = "grid" | "list";
type Sort = "added" | "name" | "category" | "quality" | "updated";
const PAGE = { grid: 24, list: 100 };

function haystack(d: DesignMeta): string {
  const t = d.tags;
  return [
    d.name, d.id, categoryOf(d), ...(t?.also ?? []), ...(t?.layout ?? []), ...(t?.style ?? []), ...(t?.media ?? []),
    ...(t?.goals ?? []), ...(t?.origin ?? []), t?.typography, t?.motion, t?.scheme, t?.note,
  ].filter(Boolean).join(" ").toLowerCase();
}

function Library() {
  const all = useDesigns();
  const toast = useToast();
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const view: View = (params.get("view") as View) || (localStorage.getItem("admin:view") as View) || "grid";
  const setView = (v: View) => {
    localStorage.setItem("admin:view", v);
    const p = new URLSearchParams(params);
    p.set("view", v);
    setParams(p, { replace: true });
  };
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [status, setStatus] = useState("all");
  const [tagged, setTagged] = useState("all");
  const [vis, setVis] = useState("all");
  const [pin, setPin] = useState("all");
  const [sort, setSort] = useState<Sort>("added");
  const [page, setPage] = useState(0);
  const [sel, setSel] = useState<Set<string>>(new Set());
  const [busy, setBusy] = useState<string | null>(null);
  const writable = canWrite();

  const cats = useMemo(() => [...new Set(all.map(categoryOf))].sort(), [all]);
  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const list = all.filter((d) => {
      if (needle && !needle.split(/\s+/).every((w) => haystack(d).includes(w))) return false;
      if (cat !== "all" && categoryOf(d) !== cat) return false;
      if (status !== "all" && d.status !== status) return false;
      if (tagged === "yes" && !d.tags) return false;
      if (tagged === "no" && d.tags) return false;
      if (tagged === "edited" && !d.edited) return false;
      if (vis === "visible" && d.hidden) return false;
      if (vis === "hidden" && !d.hidden) return false;
      if (pin === "pinned" && !d.pinned) return false;
      return true;
    });
    const by: Record<Sort, (a: DesignMeta, b: DesignMeta) => number> = {
      added: (a, b) => (b.added_at ?? "").localeCompare(a.added_at ?? ""),
      name: (a, b) => a.name.localeCompare(b.name),
      category: (a, b) => categoryOf(a).localeCompare(categoryOf(b)) || a.name.localeCompare(b.name),
      quality: (a, b) => (b.tags?.quality ?? 0) - (a.tags?.quality ?? 0),
      updated: (a, b) => (b.updated_at ?? "").localeCompare(a.updated_at ?? ""),
    };
    return [...list].sort(by[sort]);
  }, [all, q, cat, status, tagged, vis, pin, sort]);

  useEffect(() => setPage(0), [q, cat, status, tagged, vis, pin, sort, view]);
  // Remember the filtered order for prev/next in the editor.
  useEffect(() => sessionStorage.setItem("admin:order", JSON.stringify(filtered.map((d) => d.id))), [filtered]);

  const size = PAGE[view];
  const pages = Math.max(1, Math.ceil(filtered.length / size));
  const shown = filtered.slice(page * size, page * size + size);
  const toggle = (id: string) => setSel((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const allOnPage = shown.length > 0 && shown.every((d) => sel.has(d.id));

  async function bulk(label: string, patch: Parameters<typeof saveOverride>[1]) {
    const targets = all.filter((d) => sel.has(d.id));
    let done = 0;
    const failed: string[] = [];
    for (const d of targets) {
      setBusy(`${label}: ${done}/${targets.length} saved`);
      try {
        const tagPatch = patch.tags ? { ...(d.tags ?? { category: categoryOf(d) }), ...patch.tags } : undefined;
        await saveOverride(d, { ...patch, ...(tagPatch ? { tags: tagPatch } : {}) });
        done++;
      } catch (e) {
        failed.push(`${d.id}: ${e instanceof Error ? e.message : e}`);
      }
    }
    setBusy(null);
    if (failed.length) toast(`${done}/${targets.length} saved. ${failed[0]}`, "error");
    else toast(`${label}: ${done} design${done === 1 ? "" : "s"} saved`);
    setSel(new Set());
  }

  const sel_ = "rounded-md border border-zinc-300 bg-white px-2 py-1.5 text-sm";
  return (
    <div className="space-y-4">
      {!writable && <SetupCard />}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold">Designs</h1>
          <p className="text-sm text-zinc-500">
            {all.length} total · {filtered.length} shown · {all.filter((d) => d.hidden).length} hidden · {all.filter((d) => d.edited).length} edited by you
          </p>
        </div>
        <div className="inline-flex rounded-md border border-zinc-300 bg-white p-0.5">
          {(["grid", "list"] as View[]).map((v) => (
            <button key={v} onClick={() => setView(v)} className={`rounded px-3 py-1 text-sm capitalize ${view === v ? "bg-zinc-900 text-white" : "text-zinc-600"}`}>
              {v}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name, id, tags, niche..." className="w-full max-w-xs rounded-md border border-zinc-300 bg-white px-3 py-1.5 text-sm" />
        <select value={cat} onChange={(e) => setCat(e.target.value)} className={sel_} aria-label="Category">
          <option value="all">All sections</option>
          {cats.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)} className={sel_} aria-label="Status">
          <option value="all">Any status</option>
          {Object.entries(statusLabel).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
        </select>
        <select value={tagged} onChange={(e) => setTagged(e.target.value)} className={sel_} aria-label="Tagged">
          <option value="all">Tagged or not</option>
          <option value="yes">Tagged</option>
          <option value="no">Untagged</option>
          <option value="edited">Edited by you</option>
        </select>
        <select value={vis} onChange={(e) => setVis(e.target.value)} className={sel_} aria-label="Visibility">
          <option value="all">Visible + hidden</option>
          <option value="visible">Visible</option>
          <option value="hidden">Hidden</option>
        </select>
        <select value={pin} onChange={(e) => setPin(e.target.value)} className={sel_} aria-label="Pinned">
          <option value="all">Pinned or not</option>
          <option value="pinned">Pinned</option>
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className={sel_} aria-label="Sort">
          <option value="added">Newest</option>
          <option value="name">Name</option>
          <option value="category">Section</option>
          <option value="quality">Quality</option>
          <option value="updated">Recently edited</option>
        </select>
      </div>

      {sel.size > 0 && (
        <div className="sticky top-14 z-20 flex flex-wrap items-center gap-2 rounded-lg border border-zinc-300 bg-white p-2 shadow-sm">
          <span className="px-2 text-sm font-medium">{sel.size} selected</span>
          {busy ? (
            <span className="text-sm text-zinc-500">{busy}</span>
          ) : !writable ? (
            <span className="text-sm text-amber-700">Connect GitHub in Settings to change designs.</span>
          ) : (
            <>
              <button className="rounded border px-2 py-1 text-sm hover:bg-zinc-100" onClick={() => bulk("Hide", { hidden: true })}>Hide</button>
              <button className="rounded border px-2 py-1 text-sm hover:bg-zinc-100" onClick={() => bulk("Unhide", { hidden: false })}>Unhide</button>
              <button className="rounded border px-2 py-1 text-sm hover:bg-zinc-100" onClick={() => bulk("Pin", { pinned: true })}>Pin</button>
              <button className="rounded border px-2 py-1 text-sm hover:bg-zinc-100" onClick={() => bulk("Unpin", { pinned: false })}>Unpin</button>
              <select className={sel_} value="" onChange={(e) => e.target.value && bulk(`Scheme ${e.target.value}`, { tags: { scheme: e.target.value } as never })} aria-label="Set scheme">
                <option value="">Set scheme...</option>
                {vocab.scheme.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <select className={sel_} value="" onChange={(e) => e.target.value && bulk(`Quality ${e.target.value}`, { tags: { quality: Number(e.target.value) } as never })} aria-label="Set quality">
                <option value="">Set quality...</option>
                {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
            </>
          )}
          <button className="ml-auto px-2 text-sm text-zinc-500 hover:underline" onClick={() => setSel(new Set())}>Clear</button>
        </div>
      )}

      {all.length === 0 ? (
        <p className="rounded-lg border border-dashed border-zinc-300 bg-white p-10 text-center text-sm text-zinc-500">
          No designs yet. Ask Claude to add designs; they appear here after the next showcase publish.
        </p>
      ) : filtered.length === 0 ? (
        <p className="p-10 text-center text-sm text-zinc-500">No designs match these filters.</p>
      ) : view === "grid" ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shown.map((d) => (
            <div key={d.id} className={`group relative overflow-hidden rounded-lg border bg-white ${sel.has(d.id) ? "border-zinc-900 ring-1 ring-zinc-900" : "border-zinc-200"}`}>
              <input type="checkbox" checked={sel.has(d.id)} onChange={() => toggle(d.id)} aria-label={`Select ${d.name}`} className="absolute left-2 top-2 z-10 h-4 w-4 accent-zinc-900" />
              <Link to={`/admin/d/${d.id}`} className="block">
                <div className={d.hidden ? "opacity-40" : ""}>
                  <Frame id={d.id} width={1440} height={200} className="rounded-none border-0 border-b" />
                </div>
                <div className="space-y-1 p-3">
                  <div className="flex items-start justify-between gap-2">
                    <p className="truncate text-sm font-medium">{d.name}</p>
                    <Badge>{categoryOf(d)}</Badge>
                  </div>
                  <p className="truncate font-mono text-[11px] text-zinc-400">{d.id}</p>
                  <div className="flex flex-wrap gap-1">
                    {d.status !== "ok" && <Badge tone="amber">{statusLabel[d.status]}</Badge>}
                    {!d.tags && <Badge tone="red">untagged</Badge>}
                    {d.hidden && <Badge>hidden</Badge>}
                    {d.pinned && <Badge tone="sky">pinned</Badge>}
                    {d.edited && <Badge tone="emerald">edited</Badge>}
                    {(d.tags?.style ?? []).slice(0, 2).map((s) => <Badge key={s}>{s}</Badge>)}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
          <table className="w-full min-w-[1100px] text-left text-xs">
            <thead className="border-b border-zinc-200 bg-zinc-50 text-[11px] uppercase tracking-wide text-zinc-500">
              <tr>
                <th className="w-8 px-3 py-2">
                  <input type="checkbox" checked={allOnPage} onChange={() => setSel((s) => { const n = new Set(s); shown.forEach((d) => (allOnPage ? n.delete(d.id) : n.add(d.id))); return n; })} aria-label="Select page" className="accent-zinc-900" />
                </th>
                <th className="px-2 py-2">Name</th>
                <th className="px-2 py-2">Section</th>
                <th className="px-2 py-2">Layout</th>
                <th className="px-2 py-2">Style</th>
                <th className="px-2 py-2" title={AXIS_KEYS.join(" / ")}>Feel</th>
                <th className="px-2 py-2">Motion</th>
                <th className="px-2 py-2">Scheme</th>
                <th className="px-2 py-2">Q</th>
                <th className="px-2 py-2">Niche</th>
                <th className="px-2 py-2">Status</th>
                <th className="px-2 py-2">Flags</th>
                <th className="px-2 py-2">Updated</th>
              </tr>
            </thead>
            <tbody>
              {shown.map((d) => (
                <tr key={d.id} onClick={() => navigate(`/admin/d/${d.id}`)} className={`cursor-pointer border-b border-zinc-100 hover:bg-zinc-50 ${d.hidden ? "text-zinc-400" : ""}`}>
                  <td className="px-3 py-2" onClick={(e) => e.stopPropagation()}>
                    <input type="checkbox" checked={sel.has(d.id)} onChange={() => toggle(d.id)} aria-label={`Select ${d.name}`} className="accent-zinc-900" />
                  </td>
                  <td className="px-2 py-2">
                    <div className="font-medium text-zinc-900">{d.name}</div>
                    <div className="font-mono text-[10px] text-zinc-400">{d.id}</div>
                  </td>
                  <td className="px-2 py-2">{categoryOf(d)}</td>
                  <td className="px-2 py-2">{(d.tags?.layout ?? []).join(", ")}</td>
                  <td className="px-2 py-2">{(d.tags?.style ?? []).join(", ")}</td>
                  <td className="px-2 py-2 font-mono tracking-wider" title={AXIS_KEYS.map((k) => `${k} ${d.tags?.[k] ?? "-"}`).join(", ")}>
                    {AXIS_KEYS.map((k) => d.tags?.[k] ?? "·").join("")}
                  </td>
                  <td className="px-2 py-2">{d.tags?.motion ?? ""}</td>
                  <td className="px-2 py-2">{d.tags?.scheme ?? ""}</td>
                  <td className="px-2 py-2">{d.tags?.quality ?? ""}</td>
                  <td className="max-w-[90px] truncate px-2 py-2">{(d.tags?.origin ?? []).join(", ")}</td>
                  <td className="px-2 py-2">{d.status === "ok" ? "ok" : <Badge tone="amber">{statusLabel[d.status]}</Badge>}</td>
                  <td className="px-2 py-2 space-x-1">
                    {!d.tags && <Badge tone="red">untagged</Badge>}
                    {d.hidden && <Badge>hidden</Badge>}
                    {d.pinned && <Badge tone="sky">pinned</Badge>}
                    {d.edited && <Badge tone="emerald">edited</Badge>}
                  </td>
                  <td className="px-2 py-2 text-zinc-400">{d.updated_at?.slice(0, 10) ?? ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {pages > 1 && (
        <div className="flex items-center justify-center gap-3 text-sm">
          <button disabled={page === 0} onClick={() => setPage((p) => p - 1)} className="rounded border px-3 py-1 disabled:opacity-40">Previous</button>
          <span className="text-zinc-500">Page {page + 1} of {pages}</span>
          <button disabled={page >= pages - 1} onClick={() => setPage((p) => p + 1)} className="rounded border px-3 py-1 disabled:opacity-40">Next</button>
        </div>
      )}
    </div>
  );
}

export default function AdminLibrary() {
  return (
    <AdminLayout wide>
      <Library />
    </AdminLayout>
  );
}

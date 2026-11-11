import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Frame } from "@/showcase/Frame";
import { allDesigns, categoryOf, statusLabel, type DesignTags } from "@/showcase/data";
import { AdminLayout, SetupCard } from "./AdminLayout";
import { AxisSlider, Badge, Chips, Field, Segmented, Toggle } from "./controls";
import { canWrite } from "./github";
import { addNote, fetchBodies, forget, listEvents, type Entry, type NoteEvent } from "./memory";
import { cleanTags, refreshOverride, resetOverride, saveOverride, useDesign } from "./store";
import { useToast } from "./toast";
import { AXIS_KEYS, axisWords, vocab, words } from "./vocab";

type Form = { name: string; tags: Partial<DesignTags>; hidden: boolean; pinned: boolean };
const LIMITS = { layout: 2, style: 3, media: 3, goals: 3, also: 3, origin: 2 };
const show = (v: unknown) => (Array.isArray(v) ? v.join(", ") : v === undefined || v === null ? "" : String(v));
const same = (a: unknown, b: unknown) => JSON.stringify(a ?? (Array.isArray(b) ? [] : undefined)) === JSON.stringify(b ?? (Array.isArray(a) ? [] : undefined));

function Notes({ id }: { id: string }) {
  const toast = useToast();
  const [notes, setNotes] = useState<(Entry & { json: NoteEvent })[] | null>(null);
  const [good, setGood] = useState("");
  const [bad, setBad] = useState("");
  const [rating, setRating] = useState<number | undefined>();
  const [text, setText] = useState("");
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    try {
      const notesAll = (await listEvents()).filter((e) => e.type === "note");
      // Admin notes carry the id in the file name; engine notes only inside the file.
      const named = notesAll.filter((e) => e.name.includes(`-note-${id}-`));
      const others = notesAll.filter((e) => !e.name.includes(`-note-${id}-`) && !/-note-[a-z0-9-]+-[0-9a-f]{4}\.json$/.test(e.name));
      const bodies = await fetchBodies<NoteEvent>([...named, ...others], 150);
      setNotes(bodies.filter((b) => b.json.design === id));
    } catch (e) {
      setNotes([]);
      toast(e instanceof Error ? e.message : String(e), "error");
    }
  }, [id, toast]);
  useEffect(() => { if (canWrite()) load(); }, [load]);

  if (!canWrite()) return <p className="text-sm text-zinc-500">Connect GitHub in Settings to see and add use-case notes.</p>;
  return (
    <div className="space-y-3">
      {notes === null ? (
        <p className="text-sm text-zinc-500">Loading notes...</p>
      ) : notes.length === 0 ? (
        <p className="text-sm text-zinc-500">No notes yet.</p>
      ) : (
        <ul className="divide-y divide-zinc-100 rounded-md border border-zinc-200 bg-white">
          {notes.map((n) => (
            <li key={n.path} className="flex items-start justify-between gap-3 p-3 text-sm">
              <div>
                {n.json.good?.length ? <p><span className="text-emerald-700">Good for:</span> {n.json.good.join(", ")}</p> : null}
                {n.json.bad?.length ? <p><span className="text-red-700">Not for:</span> {n.json.bad.join(", ")}</p> : null}
                {n.json.rating ? <p className="text-zinc-600">Rating {n.json.rating}/5</p> : null}
                {n.json.text ? <p className="text-zinc-500">{n.json.text}</p> : null}
                <p className="text-[11px] text-zinc-400">{n.json.at?.slice(0, 10)} · {n.json.source ?? "claude"}</p>
              </div>
              <button
                className="text-xs text-red-600 hover:underline"
                onClick={async () => {
                  try { await forget(n); setNotes((l) => (l ?? []).filter((x) => x.path !== n.path)); toast("Note removed"); }
                  catch (e) { toast(e instanceof Error ? e.message : String(e), "error"); }
                }}
              >
                Forget
              </button>
            </li>
          ))}
        </ul>
      )}
      <form
        className="grid gap-2 rounded-md border border-zinc-200 bg-white p-3 sm:grid-cols-2"
        onSubmit={async (e) => {
          e.preventDefault();
          const g = words(good), b = words(bad);
          if (!g.length && !b.length && !rating) return toast("Add 'good for', 'not for' or a rating", "error");
          setSaving(true);
          try {
            await addNote(id, g, b, rating, text.trim());
            setGood(""); setBad(""); setRating(undefined); setText("");
            toast("Note saved. Claude uses it from its next task.");
            load();
          } catch (err) { toast(err instanceof Error ? err.message : String(err), "error"); }
          setSaving(false);
        }}
      >
        <input value={good} onChange={(e) => setGood(e.target.value)} placeholder="Good for (e.g. bakeries, cafés)" className="rounded border border-zinc-300 px-2 py-1.5 text-sm" />
        <input value={bad} onChange={(e) => setBad(e.target.value)} placeholder="Not for (e.g. law firms)" className="rounded border border-zinc-300 px-2 py-1.5 text-sm" />
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Comment (optional)" className="rounded border border-zinc-300 px-2 py-1.5 text-sm sm:col-span-2" />
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-500">Rating</span>
          <Segmented options={[1, 2, 3, 4, 5]} value={rating} onChange={(v) => setRating(v === rating ? undefined : v)} />
        </div>
        <button disabled={saving} className="justify-self-end rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white disabled:opacity-50">
          {saving ? "Saving..." : "Add note"}
        </button>
      </form>
    </div>
  );
}

function Editor({ id }: { id: string }) {
  const d = useDesign(id);
  const toast = useToast();
  const navigate = useNavigate();
  const [width, setWidth] = useState<1440 | 768 | 390>(1440);
  const initial: Form | null = useMemo(
    () => (d ? { name: d.name, tags: cleanTags(d.tags ?? { category: categoryOf(d) }), hidden: !!d.hidden, pinned: !!d.pinned } : null),
    [d],
  );
  const [form, setForm] = useState<Form | null>(initial);
  const [saving, setSaving] = useState(false);
  const writable = canWrite();

  useEffect(() => setForm(initial), [initial]);
  useEffect(() => { if (writable) refreshOverride(id).catch(() => {}); }, [id, writable]);

  const dirty = !!form && !!initial && JSON.stringify(form) !== JSON.stringify(initial);
  const orig = d?.originalTags ?? null;

  const order: string[] = useMemo(() => {
    try { return JSON.parse(sessionStorage.getItem("admin:order") || "[]"); } catch { return []; }
  }, []);
  const ids = order.length ? order : allDesigns.map((x) => x.id);
  const pos = ids.indexOf(id);
  const prev = pos > 0 ? ids[pos - 1] : null;
  const next = pos >= 0 && pos < ids.length - 1 ? ids[pos + 1] : null;

  const save = useCallback(async () => {
    if (!d || !form || saving) return;
    if (!writable) return toast("Connect GitHub in Settings first", "error");
    setSaving(true);
    try {
      await saveOverride(d, { name: form.name !== d.name || d.edited ? form.name : undefined, tags: form.tags, hidden: form.hidden, pinned: form.pinned });
      toast("Saved to GitHub. Claude uses it from its next task.");
    } catch (e) { toast(e instanceof Error ? e.message : String(e), "error"); }
    setSaving(false);
  }, [d, form, saving, writable, toast]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "s") { e.preventDefault(); save(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [save]);

  if (!d || !form) {
    return <p className="text-sm text-zinc-600">Unknown design <code className="font-mono">{id}</code>. <Link to="/admin" className="underline">Back to library</Link></p>;
  }
  const t = form.tags;
  const set = (patch: Partial<DesignTags>) => setForm((f) => (f ? { ...f, tags: { ...f.tags, ...patch } } : f));
  const hint = (k: keyof DesignTags) => (d.edited && orig && !same(orig[k], t[k]) ? show(orig[k]) : undefined);

  return (
    <div className="space-y-4">
      {!writable && <SetupCard />}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Link to="/admin" className="text-sm text-zinc-500 hover:underline">← Library</Link>
          <button disabled={!prev} onClick={() => prev && navigate(`/admin/d/${prev}`)} className="rounded border px-2 py-0.5 text-sm disabled:opacity-30" aria-label="Previous design">‹</button>
          <button disabled={!next} onClick={() => next && navigate(`/admin/d/${next}`)} className="rounded border px-2 py-0.5 text-sm disabled:opacity-30" aria-label="Next design">›</button>
          <div>
            <h1 className="text-lg font-semibold leading-tight">{form.name}</h1>
            <p className="font-mono text-[11px] text-zinc-400">{d.id}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {d.status !== "ok" && <Badge tone="amber">{statusLabel[d.status]}</Badge>}
          {d.edited && <Badge tone="emerald">edited by you</Badge>}
          {dirty && <span className="text-xs text-amber-700">Unsaved changes</span>}
          {d.edited && (
            <button
              disabled={!writable || saving}
              onClick={async () => {
                if (!confirm("Reset this design to Claude's tags? Your edits, hidden and pinned settings are removed.")) return;
                setSaving(true);
                try { await resetOverride(d.id); toast("Reset to Claude's tags"); } catch (e) { toast(e instanceof Error ? e.message : String(e), "error"); }
                setSaving(false);
              }}
              className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm hover:bg-zinc-100 disabled:opacity-40"
            >
              Reset to Claude's tags
            </button>
          )}
          <button onClick={save} disabled={!dirty || saving || !writable} className="rounded-md bg-zinc-900 px-4 py-1.5 text-sm text-white disabled:opacity-40" title="Ctrl/Cmd + S">
            {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_420px]">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Segmented<1440 | 768 | 390> options={[1440, 768, 390]} value={width} onChange={(v) => setWidth(v)} labels={{ 1440: "Desktop", 768: "Tablet", 390: "Mobile" }} />
            <a href={`/raw/${d.id}`} target="_blank" rel="noreferrer" className="text-sm text-zinc-600 hover:underline">Open full page ↗</a>
          </div>
          <div className={width === 390 ? "mx-auto max-w-[390px]" : width === 768 ? "mx-auto max-w-[768px]" : ""}>
            <Frame key={width} id={d.id} width={width} height="70vh" interactive fit={false} />
          </div>
          {d.issues && d.issues.length > 0 && (
            <ul className="list-disc space-y-0.5 pl-5 text-xs text-amber-800">{d.issues.map((i) => <li key={i}>{i}</li>)}</ul>
          )}
          <section className="space-y-2 pt-4">
            <h2 className="text-sm font-semibold">Use-case memory</h2>
            <p className="text-xs text-zinc-500">Tell the engine where this design works well or badly. Notes boost or lower it only for matching briefs, are capped, and fade over about 6 months.</p>
            <Notes id={d.id} />
          </section>
        </div>

        <form className="space-y-4 rounded-lg border border-zinc-200 bg-white p-4" onSubmit={(e) => { e.preventDefault(); save(); }}>
          <Field label="Name">
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded border border-zinc-300 px-2 py-1.5 text-sm" />
          </Field>
          <Field label="Section type" original={hint("category")}>
            <select value={t.category ?? ""} onChange={(e) => set({ category: e.target.value })} className="w-full rounded border border-zinc-300 bg-white px-2 py-1.5 text-sm">
              {!t.category && <option value="">Choose...</option>}
              {vocab.category.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </Field>
          <Field label={`Can also serve as (max ${LIMITS.also})`} original={hint("also")}>
            <Chips options={vocab.category.filter((c) => c !== t.category)} value={t.also ?? []} onChange={(v) => set({ also: v })} max={LIMITS.also} />
          </Field>
          <Field label={`Layout (max ${LIMITS.layout})`} original={hint("layout")}>
            <Chips options={vocab.layout} value={t.layout ?? []} onChange={(v) => set({ layout: v })} max={LIMITS.layout} />
          </Field>
          <Field label={`Style (max ${LIMITS.style})`} original={hint("style")}>
            <Chips options={vocab.style} value={t.style ?? []} onChange={(v) => set({ style: v })} max={LIMITS.style} />
          </Field>
          <Field label="Feel" hint="Amber dot = Claude's value when you changed it.">
            <div className="space-y-1.5">
              {AXIS_KEYS.map((k) => {
                const w = axisWords(k);
                return <AxisSlider key={k} low={w.low} high={w.high} value={t[k]} original={d.edited ? orig?.[k] : undefined} onChange={(v) => set({ [k]: v } as Partial<DesignTags>)} />;
              })}
            </div>
          </Field>
          <Field label={`Media (max ${LIMITS.media})`} original={hint("media")}>
            <Chips options={vocab.media} value={t.media ?? []} onChange={(v) => set({ media: v })} max={LIMITS.media} />
          </Field>
          <Field label="Images needed" original={hint("image_need")}>
            <Segmented options={[0, 1, 2]} value={t.image_need} onChange={(v) => set({ image_need: v })} labels={{ 0: "none", 1: "optional", 2: "required" }} />
          </Field>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Typography" original={hint("typography")}>
              <Segmented options={vocab.typography} value={t.typography} onChange={(v) => set({ typography: v })} />
            </Field>
            <Field label="Motion" original={hint("motion")}>
              <Segmented options={vocab.motion} value={t.motion} onChange={(v) => set({ motion: v })} />
            </Field>
            <Field label="Scheme" original={hint("scheme")}>
              <Segmented options={vocab.scheme} value={t.scheme} onChange={(v) => set({ scheme: v })} />
            </Field>
            <Field label="Quality" original={hint("quality")}>
              <Segmented options={[1, 2, 3, 4, 5]} value={t.quality} onChange={(v) => set({ quality: v })} />
            </Field>
          </div>
          <Field label={`Goals (max ${LIMITS.goals})`} original={hint("goals")}>
            <Chips options={vocab.goals} value={t.goals ?? []} onChange={(v) => set({ goals: v })} max={LIMITS.goals} />
          </Field>
          <Field label={`Current niche (origin, max ${LIMITS.origin})`} hint="What the design is currently built for; a small ranking signal, style and feel matter more." original={hint("origin")}>
            <Chips options={vocab.niches} value={t.origin ?? []} onChange={(v) => set({ origin: v })} max={LIMITS.origin} />
          </Field>
          <Field label="Note (100 characters)" original={hint("note")}>
            <input value={t.note ?? ""} maxLength={100} onChange={(e) => set({ note: e.target.value })} className="w-full rounded border border-zinc-300 px-2 py-1.5 text-sm" />
          </Field>
          <div className="flex flex-wrap gap-6 border-t border-zinc-100 pt-3">
            <Toggle label="Hidden (never shortlisted)" checked={form.hidden} onChange={(v) => setForm({ ...form, hidden: v })} />
            <Toggle label="Pinned (shown first)" checked={form.pinned} onChange={(v) => setForm({ ...form, pinned: v })} />
          </div>
          <button type="submit" disabled={!dirty || saving || !writable} className="w-full rounded-md bg-zinc-900 py-2 text-sm text-white disabled:opacity-40">
            {saving ? "Saving..." : dirty ? "Save changes" : "No changes"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function AdminDesign() {
  const { id = "" } = useParams();
  return (
    <AdminLayout wide>
      <Editor key={id} id={id} />
    </AdminLayout>
  );
}

import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AdminLayout, SetupCard } from "./AdminLayout";
import { Chips, Field } from "./controls";
import { canWrite } from "./github";
import { addPref, fetchBodies, forget, listEvents, type Entry, type NoteEvent, type PrefEvent } from "./memory";
import { useToast } from "./toast";
import { vocab, words } from "./vocab";

const GROUPS: { key: keyof typeof vocab; label: string }[] = [
  { key: "style", label: "Style" },
  { key: "layout", label: "Layout" },
  { key: "typography", label: "Typography" },
  { key: "media", label: "Media" },
  { key: "motion", label: "Motion" },
  { key: "scheme", label: "Scheme" },
  { key: "category", label: "Section" },
];

function TermPicker({ value, onChange }: { value: string[]; onChange: (v: string[]) => void }) {
  return (
    <div className="space-y-2">
      {GROUPS.map((g) => {
        const opts = vocab[g.key] as string[];
        return (
          <div key={g.key} className="flex gap-2">
            <span className="w-20 shrink-0 pt-0.5 text-[11px] text-zinc-400">{g.label}</span>
            <Chips options={opts} value={value.filter((v) => opts.includes(v))} onChange={(v) => onChange([...value.filter((x) => !opts.includes(x)), ...v])} />
          </div>
        );
      })}
    </div>
  );
}

function Memory() {
  const toast = useToast();
  const [entries, setEntries] = useState<Entry[] | null>(null);
  const [prefs, setPrefs] = useState<(Entry & { json: PrefEvent })[]>([]);
  const [notes, setNotes] = useState<(Entry & { json: NoteEvent })[]>([]);
  const [ctx, setCtx] = useState("");
  const [prefer, setPrefer] = useState<string[]>([]);
  const [avoid, setAvoid] = useState<string[]>([]);
  const [text, setText] = useState("");
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    try {
      const list = await listEvents();
      setEntries(list);
      const [p, n] = await Promise.all([
        fetchBodies<PrefEvent>(list.filter((e) => e.type === "pref"), 200),
        fetchBodies<NoteEvent>(list.filter((e) => e.type === "note"), 200),
      ]);
      setPrefs(p);
      setNotes(n);
    } catch (e) {
      setEntries([]);
      toast(e instanceof Error ? e.message : String(e), "error");
    }
  }, [toast]);
  useEffect(() => { if (canWrite()) load(); }, [load]);

  if (!canWrite()) return <SetupCard />;
  const count = (t: string) => entries?.filter((e) => e.type === t).length ?? 0;
  const remove = async (e: Entry) => {
    try { await forget(e); toast("Removed"); load(); } catch (err) { toast(err instanceof Error ? err.message : String(err), "error"); }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-xl font-semibold">Memory</h1>
        <p className="text-sm text-zinc-500">What the engine has learned. Your entries win over Claude's guesses; every effect is capped and fades over about 6 months.</p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {[["Preferences", "pref"], ["Design notes", "note"], ["Shortlists shown", "shown"], ["Picks", "pick"], ["Sites built", "used"]].map(([label, t]) => (
          <div key={t} className="rounded-lg border border-zinc-200 bg-white p-3">
            <p className="text-2xl font-semibold">{entries === null ? "…" : count(t)}</p>
            <p className="text-xs text-zinc-500">{label}</p>
          </div>
        ))}
      </div>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold">Add a preference</h2>
        <form
          className="space-y-4 rounded-lg border border-zinc-200 bg-white p-4"
          onSubmit={async (e) => {
            e.preventDefault();
            if (!prefer.length && !avoid.length) return toast("Choose at least one trait to prefer or avoid", "error");
            setSaving(true);
            try {
              await addPref(words(ctx), prefer, avoid, text.trim());
              setCtx(""); setPrefer([]); setAvoid([]); setText("");
              toast("Preference saved. Claude uses it from its next task.");
              load();
            } catch (err) { toast(err instanceof Error ? err.message : String(err), "error"); }
            setSaving(false);
          }}
        >
          <Field label="For which briefs" hint="Words like 'luxury jewellery' or 'law firms'. Leave empty to apply to every brief.">
            <input value={ctx} onChange={(e) => setCtx(e.target.value)} placeholder="e.g. luxury, jewellery" className="w-full rounded border border-zinc-300 px-2 py-1.5 text-sm" />
          </Field>
          <div className="grid gap-6 lg:grid-cols-2">
            <Field label="Prefer"><TermPicker value={prefer} onChange={setPrefer} /></Field>
            <Field label="Avoid"><TermPicker value={avoid} onChange={setAvoid} /></Field>
          </div>
          <Field label="Comment (optional)">
            <input value={text} onChange={(e) => setText(e.target.value)} className="w-full rounded border border-zinc-300 px-2 py-1.5 text-sm" />
          </Field>
          <button disabled={saving} className="rounded-md bg-zinc-900 px-4 py-1.5 text-sm text-white disabled:opacity-50">{saving ? "Saving..." : "Save preference"}</button>
        </form>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold">Preferences ({prefs.length})</h2>
        {prefs.length === 0 ? <p className="text-sm text-zinc-500">{entries === null ? "Loading..." : "None yet."}</p> : (
          <ul className="divide-y divide-zinc-100 rounded-lg border border-zinc-200 bg-white">
            {prefs.map((p) => (
              <li key={p.path} className="flex items-start justify-between gap-4 p-3 text-sm">
                <div>
                  <p className="font-medium">{p.json.context?.length ? `For ${p.json.context.join(", ")}` : "All briefs"}</p>
                  {p.json.prefer?.length ? <p><span className="text-emerald-700">Prefer:</span> {p.json.prefer.join(", ")}</p> : null}
                  {p.json.avoid?.length ? <p><span className="text-red-700">Avoid:</span> {p.json.avoid.join(", ")}</p> : null}
                  {p.json.text ? <p className="text-zinc-500">{p.json.text}</p> : null}
                  <p className="text-[11px] text-zinc-400">{p.json.at?.slice(0, 10)} · {p.json.source ?? "claude"}</p>
                </div>
                <button onClick={() => remove(p)} className="text-xs text-red-600 hover:underline">Forget</button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold">Design notes ({notes.length})</h2>
        {notes.length === 0 ? <p className="text-sm text-zinc-500">{entries === null ? "Loading..." : "None yet. Add them from a design's page."}</p> : (
          <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-white">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-zinc-200 bg-zinc-50 text-[11px] uppercase text-zinc-500">
                <tr><th className="px-3 py-2">Design</th><th className="px-3 py-2">Good for</th><th className="px-3 py-2">Not for</th><th className="px-3 py-2">Rating</th><th className="px-3 py-2">Date</th><th /></tr>
              </thead>
              <tbody>
                {notes.map((n) => (
                  <tr key={n.path} className="border-b border-zinc-100">
                    <td className="px-3 py-2"><Link to={`/admin/d/${n.json.design}`} className="font-mono text-zinc-800 hover:underline">{n.json.design}</Link></td>
                    <td className="px-3 py-2">{(n.json.good ?? []).join(", ")}</td>
                    <td className="px-3 py-2">{(n.json.bad ?? []).join(", ")}</td>
                    <td className="px-3 py-2">{n.json.rating ?? ""}</td>
                    <td className="px-3 py-2 text-zinc-400">{n.json.at?.slice(0, 10)}</td>
                    <td className="px-3 py-2 text-right"><button onClick={() => remove(n)} className="text-red-600 hover:underline">Forget</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

export default function AdminMemory() {
  return (
    <AdminLayout>
      <Memory />
    </AdminLayout>
  );
}

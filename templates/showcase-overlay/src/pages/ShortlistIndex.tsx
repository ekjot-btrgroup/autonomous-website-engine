import { Link } from "react-router-dom";
import { shortlists } from "@/showcase/data";

const ShortlistIndex = () => (
  <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-5">
        <Link to="/" className="text-sm text-zinc-500 hover:underline">← Library</Link>
        <h1 className="mt-2 text-xl font-semibold">Shortlists</h1>
      </div>
    </header>
    <main className="mx-auto max-w-5xl px-6 py-6">
      {shortlists.length === 0 ? (
        <p className="rounded-md border border-dashed border-zinc-300 bg-white p-10 text-center text-sm text-zinc-500">
          No shortlists yet. Ask Claude for a shortlist from a brief.
        </p>
      ) : (
        <ul className="divide-y divide-zinc-200 overflow-hidden rounded-lg border border-zinc-200 bg-white">
          {shortlists.map((s) => (
            <li key={s.slug}>
              <Link to={`/s/${encodeURIComponent(s.slug)}`} className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-zinc-50">
                <div className="min-w-0">
                  <p className="truncate font-medium">{s.company || s.slug}</p>
                  <p className="truncate font-mono text-xs text-zinc-500">{s.slug}</p>
                </div>
                <div className="shrink-0 text-right text-xs text-zinc-500">
                  <p>{s.items?.length ?? 0} designs · pick {s.picks}</p>
                  <p>{s.created_at ? new Date(s.created_at).toLocaleDateString() : ""}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  </div>
);

export default ShortlistIndex;

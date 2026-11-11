// Memory events in the engine repo (memory/events/*.json). The admin adds/removes notes and preferences;
// shown/pick/used events are written by the engine and only counted here.
import { deleteFile, eventFileName, getFile, listDir, pool, putFile, type DirEntry } from "./github";

export const EVENTS_DIR = "memory/events";
export type EventType = "note" | "pref" | "shown" | "pick" | "used";
export type Entry = DirEntry & { type: EventType | "other"; at: string };
export type NoteEvent = { type: "note"; at: string; design: string; good?: string[]; bad?: string[]; rating?: number; text?: string; source?: string };
export type PrefEvent = { type: "pref"; at: string; context?: string[]; prefer?: string[]; avoid?: string[]; text?: string; source?: string };

const TYPE_RE = /Z-(note|pref|shown|pick|used)(?=[-.])/;

export function parseEntry(e: DirEntry): Entry {
  const m = e.name.match(TYPE_RE);
  const at = e.name.slice(0, 24).replace(/^(\d{4}-\d{2}-\d{2})T(\d{2})-(\d{2})-(\d{2})-(\d{3})Z.*/, "$1T$2:$3:$4.$5Z");
  return { ...e, type: (m?.[1] as EventType) ?? "other", at };
}

export async function listEvents(): Promise<Entry[]> {
  return (await listDir(EVENTS_DIR)).filter((e) => e.name.endsWith(".json")).map(parseEntry).sort((a, b) => b.name.localeCompare(a.name));
}

/** Fetch event bodies (newest first, capped) with limited concurrency. */
export async function fetchBodies<T>(entries: Entry[], cap = 200): Promise<(Entry & { json: T })[]> {
  const list = entries.slice(0, cap);
  const out = await pool(list, 6, async (e) => {
    const f = await getFile<T>(e.path).catch(() => null);
    return f ? { ...e, sha: f.sha, json: f.json } : null;
  });
  return out.filter(Boolean) as (Entry & { json: T })[];
}

export async function addNote(design: string, good: string[], bad: string[], rating: number | undefined, text: string) {
  const ev: NoteEvent = { type: "note", at: new Date().toISOString(), design, good, bad, ...(rating ? { rating } : {}), text, source: "admin" };
  await putFile(`${EVENTS_DIR}/${eventFileName("note", design)}`, ev, `admin: note on ${design}`);
  return ev;
}

export async function addPref(context: string[], prefer: string[], avoid: string[], text: string) {
  const ev: PrefEvent = { type: "pref", at: new Date().toISOString(), context, prefer, avoid, text, source: "admin" };
  await putFile(`${EVENTS_DIR}/${eventFileName("pref")}`, ev, `admin: preference${context.length ? ` for ${context.join(" ")}` : ""}`);
  return ev;
}

export async function forget(e: { path: string; sha: string; name: string }) {
  await deleteFile(e.path, e.sha, `admin: forget ${e.name}`);
}

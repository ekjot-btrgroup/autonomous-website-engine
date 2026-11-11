// Minimal GitHub REST client for the admin. Edits are commits to the ENGINE repo (no Lovable credits, no backend).
// The token lives only in this browser's localStorage.

const cfgModules = import.meta.glob("../showcase/admin-config.json", { eager: true, import: "default" }) as Record<
  string,
  { engine_repo?: string; branch?: string }
>;
const defaults = Object.values(cfgModules)[0] ?? {};

const K = { token: "admin:token", repo: "admin:repo", branch: "admin:branch" };
const read = (k: string) => {
  try {
    return localStorage.getItem(k) ?? "";
  } catch {
    return "";
  }
};

export type Settings = { token: string; repo: string; branch: string };

export function getSettings(): Settings {
  return {
    token: read(K.token),
    repo: read(K.repo) || defaults.engine_repo || "",
    branch: read(K.branch) || defaults.branch || "main",
  };
}

export function saveSettings(s: Partial<Settings>) {
  if (s.token !== undefined) localStorage.setItem(K.token, s.token.trim());
  if (s.repo !== undefined) localStorage.setItem(K.repo, s.repo.trim().replace(/^https:\/\/github\.com\//, "").replace(/\.git$/, ""));
  if (s.branch !== undefined) localStorage.setItem(K.branch, s.branch.trim() || "main");
  window.dispatchEvent(new Event("admin:settings"));
}

export function clearToken() {
  localStorage.removeItem(K.token);
  window.dispatchEvent(new Event("admin:settings"));
}

export const canWrite = () => {
  const s = getSettings();
  return !!s.token && /^[\w.-]+\/[\w.-]+$/.test(s.repo);
};

export class GitHubError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

function explain(status: number, body: string): string {
  if (status === 401) return "GitHub rejected the token. Paste it again in Settings (it may be expired or incomplete).";
  if (status === 403)
    return /rate limit/i.test(body)
      ? "GitHub rate limit reached. Wait a few minutes."
      : "The token cannot write to this repo. Give it Contents: Read and write for the engine repo.";
  if (status === 404) return "Not found. Check the repo name (owner/name), the branch, and that the token includes this repo.";
  if (status === 409 || status === 422) return "The file changed on GitHub at the same time. Try again.";
  return `GitHub error ${status}: ${body.slice(0, 160)}`;
}

const encPath = (p: string) => p.split("/").map(encodeURIComponent).join("/");

async function gh(path: string, init: RequestInit = {}, { allow404 = false } = {}): Promise<Response | null> {
  const s = getSettings();
  if (!s.repo) throw new GitHubError(0, "Set the engine repo in Settings first.");
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (s.token) headers.Authorization = `Bearer ${s.token}`;
  if (init.body) headers["Content-Type"] = "application/json";
  let res: Response;
  try {
    res = await fetch(`https://api.github.com/repos/${s.repo}${path}`, { ...init, headers: { ...headers, ...(init.headers as object) } });
  } catch {
    throw new GitHubError(0, "Could not reach GitHub. Check your connection.");
  }
  if (res.status === 404 && allow404) return null;
  if (!res.ok) throw new GitHubError(res.status, explain(res.status, await res.text().catch(() => "")));
  return res;
}

export function toBase64(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let bin = "";
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin);
}

export function fromBase64(b64: string): string {
  const bin = atob(b64.replace(/\s/g, ""));
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

export async function getFile<T = unknown>(path: string): Promise<{ json: T; sha: string } | null> {
  const { branch } = getSettings();
  const res = await gh(`/contents/${encPath(path)}?ref=${encodeURIComponent(branch)}`, { cache: "no-store" }, { allow404: true });
  if (!res) return null;
  const body = await res.json();
  return { json: JSON.parse(fromBase64(body.content ?? "")) as T, sha: body.sha };
}

export async function putFile(path: string, data: unknown, message: string, sha?: string, retried = false): Promise<string> {
  const { branch } = getSettings();
  const content = toBase64(JSON.stringify(data, null, 2) + "\n");
  try {
    const res = await gh(`/contents/${encPath(path)}`, {
      method: "PUT",
      body: JSON.stringify({ message, content, branch, ...(sha ? { sha } : {}) }),
    });
    const body = await res!.json();
    return body?.content?.sha ?? "";
  } catch (e) {
    if (!retried && e instanceof GitHubError && (e.status === 409 || e.status === 422)) {
      const fresh = await getFile(path);
      return putFile(path, data, message, fresh?.sha, true);
    }
    throw e;
  }
}

export async function deleteFile(path: string, sha: string, message: string): Promise<void> {
  const { branch } = getSettings();
  await gh(`/contents/${encPath(path)}`, { method: "DELETE", body: JSON.stringify({ message, sha, branch }) });
}

export type DirEntry = { name: string; path: string; sha: string };

// Note: the contents API lists at most 1000 entries per folder.
/**
 * Files directly inside a folder. Uses the git tree API (no 1,000-file cap like the contents API);
 * falls back to the contents API if the tree is truncated.
 */
export async function listDir(path: string): Promise<DirEntry[]> {
  const { branch } = getSettings();
  const prefix = path.replace(/\/+$/, "") + "/";
  const res = await gh(`/git/trees/${encodeURIComponent(branch)}?recursive=1`, { cache: "no-store" }, { allow404: true });
  if (res) {
    const body = await res.json();
    if (Array.isArray(body?.tree) && !body.truncated) {
      return body.tree
        .filter((x: { type: string; path: string }) => x.type === "blob" && x.path.startsWith(prefix) && !x.path.slice(prefix.length).includes("/"))
        .map((x: { path: string; sha: string }) => ({ name: x.path.slice(prefix.length), path: x.path, sha: x.sha }));
    }
  }
  const fallback = await gh(`/contents/${encPath(path)}?ref=${encodeURIComponent(branch)}`, { cache: "no-store" }, { allow404: true });
  if (!fallback) return [];
  const list = await fallback.json();
  return Array.isArray(list) ? list.filter((x) => x.type === "file").map((x) => ({ name: x.name, path: x.path, sha: x.sha })) : [];
}

export async function testConnection(): Promise<{ ok: boolean; message: string }> {
  const s = getSettings();
  if (!s.token) return { ok: false, message: "No token saved." };
  try {
    const res = await gh("");
    const repo = await res!.json();
    if (!repo?.permissions?.push) return { ok: false, message: `Connected to ${repo.full_name}, but the token is read-only. Give it Contents: Read and write.` };
    const br = await gh(`/branches/${encodeURIComponent(s.branch)}`, {}, { allow404: true });
    if (!br) return { ok: false, message: `Connected to ${repo.full_name}, but branch "${s.branch}" does not exist.` };
    return { ok: true, message: `Connected to ${repo.full_name} (${s.branch}) with write access.` };
  } catch (e) {
    return { ok: false, message: e instanceof Error ? e.message : String(e) };
  }
}

/** File name for a memory event, matching the engine: <ISO with :/. -> ->-<type>[-<design>]-<4 hex>.json */
export function eventFileName(type: string, design?: string): string {
  const iso = new Date().toISOString().replace(/[:.]/g, "-");
  const hex = Array.from(crypto.getRandomValues(new Uint8Array(2)), (b) => b.toString(16).padStart(2, "0")).join("");
  return `${iso}-${type}${design ? `-${design}` : ""}-${hex}.json`;
}

/** Run async jobs with limited concurrency. */
export async function pool<T, R>(items: T[], limit: number, fn: (t: T) => Promise<R>): Promise<R[]> {
  const out: R[] = new Array(items.length);
  let i = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (i < items.length) {
        const idx = i++;
        out[idx] = await fn(items[idx]);
      }
    }),
  );
  return out;
}

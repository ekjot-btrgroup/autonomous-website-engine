import { useState } from "react";
import { AdminLayout, useConnection } from "./AdminLayout";
import { Field } from "./controls";
import { clearToken, getSettings, saveSettings, testConnection } from "./github";
import { clearLocalCache } from "./store";
import { useToast } from "./toast";

function Settings() {
  const toast = useToast();
  const conn = useConnection();
  const s = getSettings();
  const [token, setToken] = useState(s.token);
  const [repo, setRepo] = useState(s.repo);
  const [branch, setBranch] = useState(s.branch);
  const [reveal, setReveal] = useState(false);
  const [testing, setTesting] = useState(false);

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-xl font-semibold">Settings</h1>
        <p className="text-sm text-zinc-500">
          The admin saves every change as a small commit in the engine's GitHub repo. No Lovable credits, no backend.
          Claude reads your changes at the start of its next task. The public showcase pages show them after the next showcase publish;
          this admin shows them straight away in this browser.
        </p>
      </div>
      <form
        className="space-y-4 rounded-lg border border-zinc-200 bg-white p-5"
        onSubmit={async (e) => {
          e.preventDefault();
          saveSettings({ token, repo, branch });
          setTesting(true);
          const r = await testConnection();
          setTesting(false);
          toast(r.message, r.ok ? "ok" : "error");
        }}
      >
        <Field label="GitHub token" hint="Fine-grained token with Contents: Read and write on the engine repo only. Stored only in this browser.">
          <div className="flex gap-2">
            <input type={reveal ? "text" : "password"} value={token} onChange={(e) => setToken(e.target.value)} autoComplete="off" placeholder="github_pat_..." className="w-full rounded border border-zinc-300 px-2 py-1.5 font-mono text-sm" />
            <button type="button" onClick={() => setReveal((r) => !r)} className="rounded border border-zinc-300 px-2 text-xs">{reveal ? "Hide" : "Show"}</button>
          </div>
        </Field>
        <Field label="Engine repo (owner/name)">
          <input value={repo} onChange={(e) => setRepo(e.target.value)} placeholder="your-org/autonomous-website-engine" className="w-full rounded border border-zinc-300 px-2 py-1.5 text-sm" />
        </Field>
        <Field label="Branch" hint="Normally main.">
          <input value={branch} onChange={(e) => setBranch(e.target.value)} className="w-full rounded border border-zinc-300 px-2 py-1.5 text-sm" />
        </Field>
        <div className="flex flex-wrap items-center gap-2">
          <button disabled={testing} className="rounded-md bg-zinc-900 px-4 py-1.5 text-sm text-white disabled:opacity-50">{testing ? "Testing..." : "Save and test"}</button>
          <button type="button" onClick={() => { clearToken(); setToken(""); toast("Token removed from this browser", "info"); }} className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm">Clear token</button>
          <button type="button" onClick={() => { clearLocalCache(); toast("Local edit cache cleared", "info"); }} className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm" title="Forget edits cached in this browser and use the published data">Clear local cache</button>
        </div>
        <p className={`text-sm ${conn.state === "ok" ? "text-emerald-700" : conn.state === "error" ? "text-red-700" : "text-zinc-500"}`}>Status: {conn.message}</p>
      </form>
      <div className="rounded-lg border border-zinc-200 bg-white p-5 text-sm text-zinc-600">
        <p className="font-medium text-zinc-800">How to create the token</p>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>GitHub, your picture, Settings, Developer settings.</li>
          <li>Personal access tokens, Fine-grained tokens, Generate new token.</li>
          <li>Repository access: Only select repositories, pick the engine repo.</li>
          <li>Permissions: Contents, Read and write. Generate and copy.</li>
          <li>Paste above, Save and test.</li>
        </ol>
        <p className="mt-3 text-xs text-zinc-500">Anyone with this browser profile can use the token. Use a private browser profile on shared computers, and set an expiry date on the token.</p>
      </div>
    </div>
  );
}

export default function AdminSettings() {
  return (
    <AdminLayout>
      <Settings />
    </AdminLayout>
  );
}

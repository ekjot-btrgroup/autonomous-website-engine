import { Suspense, type ReactNode } from "react";
import { useParams } from "react-router-dom";
import { ErrorBoundary } from "@/showcase/ErrorBoundary";
import { getDesign, loadDesign } from "@/showcase/data";

const Panel = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-[300px] items-center justify-center bg-zinc-100 p-8 text-center font-sans text-sm text-zinc-600">
    <div>{children}</div>
  </div>
);

const Raw = () => {
  const { id = "" } = useParams();
  const meta = getDesign(id);

  if (!meta) return <Panel>Unknown design id: <code className="font-mono">{id}</code></Panel>;

  if (meta.status === "needs_conversion") {
    return (
      <Panel>
        <p className="font-semibold text-zinc-800">Not converted yet: {meta.name}</p>
        <p className="mt-1">Source format: {meta.source?.format ?? "unknown"}. No preview is available until it is converted.</p>
      </Panel>
    );
  }

  const Design = loadDesign(id);
  if (!Design) return <Panel>No component file found for <code className="font-mono">{id}</code>.</Panel>;

  return (
    <ErrorBoundary label={meta.name}>
      <Suspense fallback={<Panel>Loading {meta.name}…</Panel>}>
        <Design />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Raw;

import { useEffect, useRef, useState } from "react";

type FrameProps = {
  id: string;
  /** Virtual viewport width the design renders at. */
  width?: 1440 | 768 | 390 | number;
  /** Visible height in CSS (px number or any CSS length such as "80vh"). */
  height?: number | string;
  /** Allow clicking/scrolling inside the preview. */
  interactive?: boolean;
  title?: string;
  className?: string;
  /** Shrink to the design's real height when it is shorter than `height` (numeric heights only). */
  fit?: boolean;
};

/**
 * Live preview of /raw/:id rendered at a virtual width and scaled down to fit.
 * The iframe is only mounted when the container is near the viewport.
 */
export function Frame({ id, width = 1440, height = 520, interactive = false, title, className = "", fit = true }: FrameProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [contentH, setContentH] = useState(0);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const r = entries[0].contentRect;
      setSize({ w: r.width, h: r.height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = boxRef.current;
    if (!el || visible) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible]);

  const scale = size.w > 0 ? Math.min(1, size.w / width) : 0;
  const virtualHeight = scale > 0 ? size.h / scale : 0;
  const canFit = fit && typeof height === "number";
  const boxHeight = canFit && contentH > 0 && scale > 0 ? Math.min(height as number, Math.max(60, contentH * scale)) : height;

  // Same-origin iframe: measure the rendered design a few times (animations, fonts, images).
  const measure = () => {
    const timers = [300, 1200, 3000].map((ms) =>
      window.setTimeout(() => {
        try {
          const doc = frameRef.current?.contentDocument;
          const h = doc?.getElementById("root")?.scrollHeight ?? 0;
          if (h > 0) setContentH((prev) => Math.max(prev, h));
        } catch {
          /* cross-origin or unloaded */
        }
      }, ms),
    );
    return () => timers.forEach(clearTimeout);
  };

  return (
    <div
      ref={boxRef}
      className={`relative w-full overflow-hidden rounded-md border border-zinc-200 bg-white ${className}`}
      style={{ height: typeof boxHeight === "number" ? `${boxHeight}px` : boxHeight }}
    >
      {visible && scale > 0 ? (
        <iframe
          ref={frameRef}
          onLoad={canFit ? measure : undefined}
          src={`/raw/${encodeURIComponent(id)}`}
          title={title ?? `Preview of ${id}`}
          loading="lazy"
          className="absolute left-0 top-0 origin-top-left border-0"
          style={{
            width: `${width}px`,
            height: `${canFit ? (height as number) / scale : virtualHeight}px`,
            transform: `scale(${scale})`,
            pointerEvents: interactive ? "auto" : "none",
          }}
        />
      ) : (
        <div className="flex h-full items-center justify-center text-xs text-zinc-400">Loading preview…</div>
      )}
    </div>
  );
}

export default Frame;

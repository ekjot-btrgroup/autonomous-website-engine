// Admin theme: light/dark applied to the admin root only (public design previews are unaffected).
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";
const ThemeCtx = createContext<{ theme: Theme; toggle: () => void; set: (t: Theme) => void }>({ theme: "light", toggle: () => {}, set: () => {} });
const KEY = "admin:theme";
const FONT_ID = "admin-inter-font";

function initial(): Theme {
  try {
    const v = localStorage.getItem(KEY);
    if (v === "light" || v === "dark") return v;
  } catch {
    /* ignore */
  }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeRoot({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(initial);
  useEffect(() => {
    if (!document.getElementById(FONT_ID)) {
      const pre = document.createElement("link");
      pre.rel = "preconnect";
      pre.href = "https://fonts.gstatic.com";
      pre.crossOrigin = "";
      const link = document.createElement("link");
      link.id = FONT_ID;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
      document.head.append(pre, link);
    }
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(KEY, theme);
    } catch {
      /* ignore */
    }
    const prev = document.body.style.backgroundColor;
    document.body.style.backgroundColor = theme === "dark" ? "#09090b" : "#fafafa";
    return () => {
      document.body.style.backgroundColor = prev;
    };
  }, [theme]);
  return (
    <ThemeCtx.Provider value={{ theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")), set: setTheme }}>
      <div
        className={`${theme === "dark" ? "dark " : ""}admin-root min-h-screen bg-zinc-50 text-zinc-900 antialiased [color-scheme:light] dark:bg-zinc-950 dark:text-zinc-100 dark:[color-scheme:dark]`}
        style={{ fontFamily: '"Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif', fontFeatureSettings: '"cv11", "ss01"' }}
      >
        {children}
        <div id="admin-portal" />
      </div>
    </ThemeCtx.Provider>
  );
}

export const useTheme = () => useContext(ThemeCtx);

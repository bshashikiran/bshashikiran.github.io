import { useEffect, useRef, useState } from "react";
import { PALETTES, DEFAULT_PALETTE_ID } from "../constants/palettes";
import { useViewMode } from "../context/ViewModeContext";

const STORAGE_KEY = "portfolio.palette";

function applyPalette(palette) {
  const root = document.documentElement;
  root.style.setProperty("--c-bg", palette.colors.bg);
  root.style.setProperty("--c-card", palette.colors.card);
  root.style.setProperty("--c-accent", palette.colors.accent);
}

export function getInitialPalette(mode = "recruiter") {
  const stored =
    typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;

  if (stored) {
    const found = PALETTES.find((p) => p.id === stored);
    if (found) return found;
  }

  const defaultId = mode === "dev" ? DEFAULT_PALETTE_ID : "tokyo-night";
  return (
    PALETTES.find((p) => p.id === defaultId) ||
    PALETTES.find((p) => p.id === DEFAULT_PALETTE_ID) ||
    PALETTES[0]
  );
}

function PaletteSwatches({ palette, size = "w-3 h-3" }) {
  return (
    <span className="flex items-center gap-1">
      <span
        aria-hidden
        className={`${size} rounded-full border border-gray-700`}
        style={{ background: palette.colors.bg }}
      />
      <span
        aria-hidden
        className={`${size} rounded-full border border-gray-700`}
        style={{ background: palette.colors.card }}
      />
      <span
        aria-hidden
        className={`${size} rounded-full border border-gray-700`}
        style={{ background: palette.colors.accent }}
      />
    </span>
  );
}

export default function PaletteSelector() {
  const { mode } = useViewMode();
  const [active, setActive] = useState(() => getInitialPalette(mode));
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // When mode toggles, adjust default palette if user hasn't chosen a custom one in localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const defaultId = mode === "dev" ? DEFAULT_PALETTE_ID : "tokyo-night";
      const target = PALETTES.find((p) => p.id === defaultId);
      if (target) {
        setActive(target);
      }
    }
  }, [mode]);

  useEffect(() => {
    applyPalette(active);
    localStorage.setItem(STORAGE_KEY, active.id);
  }, [active]);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const onSelect = (palette) => {
    setActive(palette);
    setOpen(false);
    window.gtag?.("event", "palette_change", { palette: palette.id });
  };

  return (
    <div
      ref={ref}
      className="absolute top-4 left-4 z-50 font-mono text-sm"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`theme: ${active.name}`}
        title={active.name}
        className="flex items-center gap-1 px-2 py-1.5 rounded-full border border-gray-800 bg-card hover:border-accent transition-colors shadow-lg"
      >
        <PaletteSwatches palette={active} size="w-2.5 h-2.5" />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute left-0 mt-2 min-w-[220px] bg-card border border-gray-800 rounded-md py-1 shadow-xl max-h-[70vh] overflow-y-auto"
        >
          {PALETTES.map((p) => {
            const isActive = p.id === active.id;
            return (
              <li key={p.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => onSelect(p)}
                  className={`w-full flex items-center justify-between gap-3 px-3 py-2 text-left transition-colors ${
                    isActive
                      ? "text-accent bg-bg/40"
                      : "text-gray-400 hover:text-accent hover:bg-bg/40"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-gray-600">{isActive ? ">" : " "}</span>
                    {p.name}
                  </span>
                  <PaletteSwatches palette={p} />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

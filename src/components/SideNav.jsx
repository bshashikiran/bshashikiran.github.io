import { useEffect, useRef, useState } from "react";
import { NAV } from "../constants/nav";

export default function SideNav() {
  const [active, setActive] = useState(NAV[0].id);
  const [open, setOpen] = useState(false);
  const closeTimer = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const offset = 120;

      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      if (scrollBottom >= docHeight - 4) {
        setActive(NAV[NAV.length - 1].id);
        return;
      }

      let current = NAV[0].id;

      for (const s of NAV) {
        const el = document.getElementById(s.id);
        if (!el) continue;

        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) {
          current = s.id;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onNavClick = (e, id) => {
    e.preventDefault();

    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });

    window.gtag?.("event", "nav_click", {
      section: id,
    });

    setOpen(false);
  };

  const onEnter = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const onLeave = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <nav
      aria-label="Section navigation"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:block"
    >
      <span
        aria-hidden
        className="absolute inset-y-0 -left-4 right-0"
      />

      <div
        className={`absolute right-full top-1/2 -translate-y-1/2 mr-3 transition-all duration-200 ${
          open
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        <ul className="bg-card border border-gray-800 rounded-lg py-2 min-w-[160px] shadow-xl">
          {NAV.map((s) => {
            const isActive = active === s.id;

            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={(e) => onNavClick(e, s.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`block px-4 py-2 font-mono text-sm transition-colors ${
                    isActive
                      ? "text-accent"
                      : "text-gray-400 hover:text-accent"
                  }`}
                >
                  <span className="text-gray-600 mr-2">$</span>
                  {s.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="relative flex flex-col items-center gap-6 py-3">
        <span
          aria-hidden
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gray-800"
        />

        {NAV.map((s) => {
          const isActive = active === s.id;

          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => onNavClick(e, s.id)}
              aria-label={s.label}
              aria-current={isActive ? "true" : undefined}
              className="relative flex items-center py-1"
            >
              <span
                className={`relative z-10 block w-1.5 h-1.5 rounded-full border transition-all duration-200
                  ${isActive
                    ? "bg-accent border-accent scale-150"
                    : "bg-bg border-gray-600 hover:border-accent hover:scale-150"
                  }`}
              />
            </a>
          );
        })}
      </div>
    </nav>
  );
}

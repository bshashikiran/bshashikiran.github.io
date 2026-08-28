import { useState, useEffect, useRef } from "react";
import { scrollToElement } from "../../utils/scroll";

const HR_NAV_ITEMS = [
  { id: "home", label: "Overview" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function HrNavbar() {
  const [active, setActive] = useState("home");
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const isScrollingToRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine active section
      const starts = HR_NAV_ITEMS.map((s) => {
        const el = document.getElementById(s.id);
        if (!el) return null;
        return el.getBoundingClientRect().top + currentScrollY - 140;
      });

      let activeIdx = 0;
      for (let i = 0; i < HR_NAV_ITEMS.length; i++) {
        if (starts[i] === null) continue;
        if (currentScrollY >= starts[i]) activeIdx = i;
      }
      setActive(HR_NAV_ITEMS[activeIdx].id);

      // Smart scroll direction detection (only update visibility when not auto-scrolling)
      if (!isScrollingToRef.current) {
        if (currentScrollY <= 60) {
          setVisible(true);
        } else if (currentScrollY > lastScrollY.current + 8) {
          setVisible(false);
        } else if (currentScrollY < lastScrollY.current - 8) {
          setVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setActive(id);
    setVisible(true);
    isScrollingToRef.current = true;

    // Clean positioning with proper breathing room under navbar
    scrollToElement(id, 20, () => {
      isScrollingToRef.current = false;
    });

    window.gtag?.("event", "nav_click", {
      section: id,
    });
  };

  return (
    <header
      className={`fixed top-4 inset-x-0 z-40 transition-all duration-300 ease-in-out pointer-events-none ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-center">
        {/* Floating pill navigation */}
        <nav className="pointer-events-auto flex items-center gap-1 bg-card/90 border border-gray-800/90 p-1.5 rounded-full backdrop-blur-md shadow-2xl shadow-black/40">
          {HR_NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollTo(e, item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? "bg-accent text-bg shadow-sm font-bold"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

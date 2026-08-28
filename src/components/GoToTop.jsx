import { useEffect, useState } from "react";
import { useViewMode } from "../context/ViewModeContext";
import { HiOutlineArrowUp } from "react-icons/hi";
import { smoothScrollTo } from "../utils/scroll";

export default function GoToTop() {
  const [visible, setVisible] = useState(false);
  const { mode } = useViewMode();
  const isDev = mode === "dev";

  useEffect(() => {
    const about = document.getElementById("about");

    const handleScroll = () => {
      if (!about) return;

      const aboutTop = about.offsetTop;
      const scrollY = window.scrollY;

      setVisible(scrollY >= aboutTop - 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    smoothScrollTo(0, 750);
  };

  return (
    <button
      onClick={scrollTop}
      aria-label="Back to top"
      title="Back to top"
      className={`fixed bottom-6 right-6 transition-all duration-300 z-40 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      } ${
        isDev
          ? "font-mono text-sm bg-card border border-gray-800 px-4 py-2 rounded shadow-lg hover:border-accent hover:text-accent"
          : "p-3 rounded-full bg-card/85 backdrop-blur-md border border-gray-800 text-accent hover:bg-accent hover:text-bg hover:border-accent shadow-xl hover:-translate-y-1"
      }`}
    >
      {isDev ? (
        <>
          <span className="text-accent mr-1">$</span>cd ~
        </>
      ) : (
        <HiOutlineArrowUp className="text-xl" />
      )}
    </button>
  );
}
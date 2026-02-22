import { useEffect, useState } from "react";

export default function GoToTop() {
  const [visible, setVisible] = useState(false);

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollTop}
      className={`fixed bottom-6 right-6 font-mono text-sm bg-card border border-gray-800 px-4 py-2 rounded shadow-lg
        transition-all duration-300
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
        hover:border-accent hover:text-accent`}
    >
      <span className="text-accent mr-1">$</span>cd ~
    </button>
  );
}
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "'Inter'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["'JetBrains Mono'", "Consolas", "monospace"],
      },
      colors: {
        bg: "var(--c-bg)",
        card: "var(--c-card)",
        accent: "var(--c-accent)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Consolas", "monospace"],
      },
      colors: {
        bg: "#0b0f14",
        card: "#111827",
        accent: "#00ff9f",
      },
    },
  },
  plugins: [],
};
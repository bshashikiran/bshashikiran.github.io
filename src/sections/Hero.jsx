import { motion } from "framer-motion";
import { SITE } from "../constants/site";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-3xl bg-card border border-gray-800 p-6 rounded-xl">

        <p className="text-accent text-sm">$ boot portfolio.sh</p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mt-4"
        >
          {SITE.name}
        </motion.h1>

        <p className="mt-4 text-gray-400">
          {SITE.role} — {SITE.tagline}
        </p>

        <div className="mt-6 text-sm text-accent space-y-1">
          {SITE.heroStatus.map((s, i) => (
            <p key={i}>✔ {s}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
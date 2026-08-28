import { motion } from "framer-motion";
import { SITE } from "../constants/site";
import { useViewMode } from "../context/ViewModeContext";
import { FaFileAlt, FaDownload, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineBriefcase, HiOutlineAcademicCap, HiOutlineClock } from "react-icons/hi";

export default function Hero() {
  const { mode } = useViewMode();
  const isDev = mode === "dev";

  const onOpenResumeClick = () => {
    window.gtag?.("event", "resume_open_click", {
      location: "hero_section",
    });
  };

  if (isDev) {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-3xl bg-card border border-gray-800 p-6 rounded-xl font-mono">
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
          <div className="mt-6 font-mono text-sm space-y-2">
            <a href="/resume" className="block hover:text-accent" onClick={onOpenResumeClick}>
              <span className="text-accent mr-1">$</span>cat resume.pdf
            </a>
          </div>
        </div>
      </section>
    );
  }

  // Modern, clean, HR-friendly Hero
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Subtle modern ambient background glow */}
      <div
        aria-hidden
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-accent/15 via-accent/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-semibold tracking-wide shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span>Available for Full-Time Opportunities</span>
          </div>

          {/* Heading & Title */}
          <div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-400">{SITE.name}</span>
            </h1>
            <p className="mt-4 text-xl sm:text-2xl font-semibold text-accent">
              {SITE.role} <span className="text-gray-600 font-normal">|</span> <span className="text-gray-300 font-normal">{SITE.tagline}</span>
            </p>
          </div>

          {/* Quick Snapshot Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-card/60 backdrop-blur-md border border-gray-800/80 hover:border-gray-700 transition">
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                <HiOutlineBriefcase className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Current Role</p>
                <p className="text-sm font-semibold text-gray-100 mt-0.5">SWE @ Magicbricks</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-card/60 backdrop-blur-md border border-gray-800/80 hover:border-gray-700 transition">
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                <HiOutlineClock className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Experience</p>
                <p className="text-sm font-semibold text-gray-100 mt-0.5">{SITE.heroStatus[1] || "2.10+ Years"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-card/60 backdrop-blur-md border border-gray-800/80 hover:border-gray-700 transition">
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                <HiOutlineAcademicCap className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Education</p>
                <p className="text-sm font-semibold text-gray-100 mt-0.5">NIT Nagpur ('23)</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons & Social Links */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-gray-800/80">
            <div className="flex items-center gap-3">
              <a
                href="/resume"
                onClick={onOpenResumeClick}
                className="flex items-center justify-center gap-2 bg-accent text-bg font-bold px-6 py-3 rounded-xl hover:opacity-95 transition-all duration-200 shadow-lg shadow-accent/20 hover:scale-[1.02] text-sm"
              >
                <FaFileAlt className="text-sm" /> View Resume
              </a>
              <a
                href="/resume.pdf"
                download="ShashiKiran_Resume.pdf"
                className="flex items-center justify-center gap-2 bg-card/80 hover:bg-card border border-gray-700 text-gray-200 font-medium px-5 py-3 rounded-xl hover:border-accent hover:text-accent transition-all duration-200 text-sm"
              >
                <FaDownload className="text-xs" /> Download PDF
              </a>
            </div>

            <div className="flex items-center gap-2.5 self-center sm:self-auto">
              <a
                href="https://linkedin.com/in/bshashikiran"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-card/80 border border-gray-800 text-gray-400 hover:text-accent hover:border-accent transition hover:-translate-y-0.5"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="https://github.com/bshashikiran"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-card/80 border border-gray-800 text-gray-400 hover:text-accent hover:border-accent transition hover:-translate-y-0.5"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://leetcode.com/u/bshashikiran"
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
                className="p-2.5 rounded-xl bg-card/80 border border-gray-800 text-gray-400 hover:text-accent hover:border-accent transition hover:-translate-y-0.5"
              >
                <SiLeetcode className="text-lg" />
              </a>
              <a
                href="mailto:bolleddulashashikiran@gmail.com"
                aria-label="Email"
                className="p-2.5 rounded-xl bg-card/80 border border-gray-800 text-gray-400 hover:text-accent hover:border-accent transition hover:-translate-y-0.5"
              >
                <FaEnvelope className="text-lg" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { SITE } from "../../constants/site";
import { FaFileAlt, FaDownload, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineBriefcase, HiOutlineAcademicCap, HiOutlineClock } from "react-icons/hi";

export default function HrHero() {
  const onOpenResumeClick = () => {
    window.gtag?.("event", "resume_open_click", {
      location: "hero_section_hr",
    });
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-6 overflow-hidden">
      {/* Soft elegant gradient ambient lighting */}
      <div
        aria-hidden
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-gradient-to-tr from-accent/15 via-accent/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
      />
      <div
        aria-hidden
        className="absolute -bottom-20 -left-20 w-[350px] h-[350px] bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-semibold tracking-wide shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span>Open to Engineering Opportunities</span>
          </div>

          {/* Main Title & Role */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.12]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-400">{SITE.name}</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-accent tracking-tight">
              {SITE.role}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300/90 font-normal max-w-2xl mx-auto leading-relaxed tracking-normal font-sans">
              Specialized in engineering high-throughput backend services, distributed data pipelines, and scalable microservices architectures.
            </p>
          </div>

          {/* Executive Metrics / Snapshot Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-4 text-left">
            <div className="p-5 rounded-2xl bg-card/60 backdrop-blur-md border border-gray-800/80 hover:border-gray-700 transition shadow-lg hover:-translate-y-0.5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <HiOutlineBriefcase className="text-2xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Current Organization</p>
                  <p className="text-base font-bold text-white mt-0.5">SWE @ Magicbricks</p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-card/60 backdrop-blur-md border border-gray-800/80 hover:border-gray-700 transition shadow-lg hover:-translate-y-0.5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <HiOutlineClock className="text-2xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Experience</p>
                  <p className="text-base font-bold text-white mt-0.5">{SITE.heroStatus[1] || "2.10+ Years"}</p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-card/60 backdrop-blur-md border border-gray-800/80 hover:border-gray-700 transition shadow-lg hover:-translate-y-0.5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <HiOutlineAcademicCap className="text-2xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Education</p>
                  <p className="text-base font-bold text-white mt-0.5">B.Tech, NIT Nagpur ('23)</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs and Social Links */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
              <a
                href="/resume"
                onClick={onOpenResumeClick}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-accent text-bg font-bold px-7 py-3.5 rounded-xl hover:opacity-95 transition-all duration-200 shadow-lg shadow-accent/20 hover:scale-[1.02] text-sm"
              >
                <FaFileAlt className="text-sm" />
                <span>View Full Resume</span>
              </a>
              <a
                href="/resume.pdf"
                download="ShashiKiran_Resume.pdf"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-card/80 hover:bg-card border border-gray-700 text-gray-200 font-semibold px-6 py-3.5 rounded-xl hover:border-accent hover:text-accent transition-all duration-200 text-sm"
              >
                <FaDownload className="text-xs" />
                <span>PDF Download</span>
              </a>
            </div>

            <div className="flex items-center gap-2.5 pt-2 sm:pt-0 sm:pl-4 sm:border-l sm:border-gray-800">
              <a
                href="https://linkedin.com/in/bshashikiran"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-xl bg-card/80 border border-gray-800 text-gray-400 hover:text-accent hover:border-accent transition hover:-translate-y-0.5 shadow-sm"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="https://github.com/bshashikiran"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-xl bg-card/80 border border-gray-800 text-gray-400 hover:text-accent hover:border-accent transition hover:-translate-y-0.5 shadow-sm"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://leetcode.com/u/bshashikiran"
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
                className="p-3 rounded-xl bg-card/80 border border-gray-800 text-gray-400 hover:text-accent hover:border-accent transition hover:-translate-y-0.5 shadow-sm"
              >
                <SiLeetcode className="text-lg" />
              </a>
              <a
                href="mailto:bolleddulashashikiran@gmail.com"
                aria-label="Email"
                className="p-3 rounded-xl bg-card/80 border border-gray-800 text-gray-400 hover:text-accent hover:border-accent transition hover:-translate-y-0.5 shadow-sm"
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

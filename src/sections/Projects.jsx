import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { PROJECTS } from "../constants/projects";
import { useViewMode } from "../context/ViewModeContext";
import { HiOutlineCheck } from "react-icons/hi";

export default function Projects() {
  const { mode } = useViewMode();
  const isDev = mode === "dev";

  return (
    <Container id="projects">
      <SectionTitle title="ls ./projects" hrTitle="Featured Projects" />

      {isDev ? (
        <div className="grid md:grid-cols-2 gap-6 font-mono">
          {PROJECTS.map((p) => (
            <div key={p.id} className="bg-card border border-gray-800 p-6 rounded-xl">
              <h3 className="text-lg text-accent">{p.name}</h3>
              <p className="text-gray-400 mt-2">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs border border-gray-700 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <ul className="mt-4 text-sm text-gray-400 space-y-1">
                {p.highlights.map((h, i) => (
                  <li key={i}>• {h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <div
              key={p.id}
              className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-card/60 backdrop-blur-md border border-gray-800/80 hover:border-accent/40 transition-all duration-300 shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/5"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-accent transition-colors duration-200">
                    {p.name}
                  </h3>
                </div>

                <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-bg/80 border border-gray-800 text-gray-300 group-hover:border-gray-700 transition shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800/70">
                <p className="text-xs font-bold uppercase tracking-wider text-accent mb-2.5">
                  Key Accomplishments
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  {p.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <HiOutlineCheck className="text-accent text-base shrink-0 mt-0.5" />
                      <span className="leading-snug">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
}

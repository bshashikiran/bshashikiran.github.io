import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { ABOUT } from "../constants/about";
import { useViewMode } from "../context/ViewModeContext";
import { HiOutlineCheckCircle } from "react-icons/hi";

export default function About() {
  const { mode } = useViewMode();
  const isDev = mode === "dev";

  return (
    <Container id="about">
      <SectionTitle title="system_profile" hrTitle="About Me" />

      {isDev ? (
        <ul className="text-gray-400 leading-7 space-y-2 font-mono">
          {ABOUT.points.map((p, i) => (
            <li key={i}>• {p}</li>
          ))}
        </ul>
      ) : (
        <div className="relative overflow-hidden rounded-2xl bg-card/60 backdrop-blur-md border border-gray-800/80 p-6 sm:p-8 hover:border-gray-700/80 transition-all duration-300 shadow-xl">
          <div className="flex items-center gap-2 text-accent text-xs font-bold mb-4 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>Professional Summary</span>
          </div>

          <div className="space-y-4">
            {ABOUT.points.map((p, i) => (
              <div key={i} className="flex items-start gap-3.5">
                <div className="mt-1 p-1 rounded-full bg-accent/10 text-accent shrink-0">
                  <HiOutlineCheckCircle className="text-lg" />
                </div>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
}

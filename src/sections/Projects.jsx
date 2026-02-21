import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { PROJECTS } from "../constants/projects";

export default function Projects() {
  return (
    <Container>
      <SectionTitle title="ls ./projects" />

      <div className="grid md:grid-cols-2 gap-6">
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
    </Container>
  );
}
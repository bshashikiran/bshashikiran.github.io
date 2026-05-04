import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { SKILLS } from "../constants/skills";

export default function Skills() {
  return (
    <Container>
      <SectionTitle title="tech_stack" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
        {SKILLS.map((group) => (
          <div key={group.category} className="min-w-0">
            <h3 className="text-accent mb-4 text-sm uppercase tracking-widest">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.items.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    style={{ "--brand": skill.color }}
                    className="group relative bg-card border border-gray-800 p-3 rounded-lg hover:border-accent hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <Icon
                      className="text-2xl text-gray-500 group-hover:text-[color:var(--brand)] transition-colors duration-200"
                      aria-label={skill.name}
                    />

                    <span
                      role="tooltip"
                      className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-mono whitespace-nowrap rounded border border-gray-800 bg-bg text-accent opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    >
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

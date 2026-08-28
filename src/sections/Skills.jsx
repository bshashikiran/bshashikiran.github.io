import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { SKILLS } from "../constants/skills";
import { useViewMode } from "../context/ViewModeContext";

export default function Skills() {
  const { mode } = useViewMode();
  const isDev = mode === "dev";

  return (
    <Container id="skills">
      <SectionTitle title="tech_stack" hrTitle="Technical Skills" />

      {isDev ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 font-mono">
          {SKILLS.map((group) => (
            <div key={group.category} className="min-w-0">
              <h3 className="text-accent mb-4 text-xs font-semibold uppercase tracking-widest">
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
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SKILLS.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl bg-card/60 backdrop-blur-md border border-gray-800/80 hover:border-gray-700/90 transition-all duration-300 shadow-lg"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-accent mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 bg-bg/70 hover:bg-bg border border-gray-800 hover:border-gray-600 px-3.5 py-2 rounded-xl text-sm font-medium text-gray-200 transition-all duration-200 shadow-sm hover:scale-[1.03]"
                    >
                      <Icon style={{ color: skill.color }} className="text-lg shrink-0" />
                      <span>{skill.name}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
}

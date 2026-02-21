import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { SKILLS } from "../constants/skills";

export default function Skills() {
  return (
    <Container>
      <SectionTitle title="tech_stack" />

      <div className="space-y-10">
        {SKILLS.map((group) => (
          <div key={group.category}>
            <h3 className="text-accent mb-4 text-sm uppercase tracking-widest">
              {group.category}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {group.items.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="bg-card border border-gray-800 p-4 rounded-lg flex items-center gap-3 hover:border-accent transition"
                  >
                    <Icon className="text-accent text-lg" />
                    <span>{skill.name}</span>
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
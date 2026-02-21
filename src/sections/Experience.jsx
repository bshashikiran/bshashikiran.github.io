import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { EXPERIENCE } from "../constants/experience";

export default function Experience() {
  return (
    <Container>
      <SectionTitle title="pwd" />

      {EXPERIENCE.map((exp) => (
        <div key={exp.company} className="space-y-3">
          <p className="text-accent">
            {exp.company} — {exp.role}
          </p>

          <p className="text-sm text-gray-500">{exp.period}</p>

          <ul className="text-gray-400 text-sm space-y-1">
            {exp.points.map((p, i) => (
              <li key={i}>• {p}</li>
            ))}
          </ul>
        </div>
      ))}
    </Container>
  );
}
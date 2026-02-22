import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { ABOUT } from "../constants/about";

export default function About() {
  return (
    <Container id="about">
      <SectionTitle title="system_profile" />

      <ul className="text-gray-400 leading-7 space-y-2">
        {ABOUT.points.map((p, i) => (
          <li key={i}>• {p}</li>
        ))}
      </ul>
    </Container>
  );
}
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { SITE } from "../constants/site";

export default function Contact() {
  return (
    <Container>
      <SectionTitle title="curl contact.me" />

      <div className="flex gap-4 flex-wrap">
        {SITE.social.map((s) => {
          const Icon = s.icon;

          return (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-gray-800 px-4 py-2 rounded hover:border-accent transition"
            >
              <Icon className="text-accent" />
              {s.name}
            </a>
          );
        })}
      </div>
    </Container>
  );
}
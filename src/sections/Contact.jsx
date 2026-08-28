import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { SITE } from "../constants/site";
import { useViewMode } from "../context/ViewModeContext";
import { HiOutlineMail, HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Contact() {
  const { mode } = useViewMode();
  const isDev = mode === "dev";

  return (
    <Container id="contact">
      <SectionTitle title="curl contact.me" hrTitle="Get In Touch" />

      {isDev ? (
        <div className="flex gap-4 flex-wrap font-mono">
          {SITE.social.map((s) => {
            const Icon = s.icon;

            return (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  window.gtag?.("event", s.gaLabel, {
                    platform: s.name.toLowerCase(),
                    url: s.url,
                  })
                }
                className="flex items-center gap-2 border border-gray-800 px-4 py-2 rounded hover:border-accent transition"
              >
                <Icon className="text-accent" />
                {s.name}
              </a>
            );
          })}
        </div>
      ) : (
        <div className="p-8 sm:p-10 rounded-2xl bg-card/60 backdrop-blur-md border border-gray-800/80 hover:border-gray-700/80 transition-all duration-300 shadow-xl">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Let's build something great together.
            </h3>
            <p className="text-gray-300 mt-2 text-base leading-relaxed">
              Whether you have an opportunity, a question, or just want to connect, my inbox is always open.
            </p>
          </div>

          <div className="flex flex-wrap gap-3.5 mt-8">
            <a
              href="mailto:bolleddulashashikiran@gmail.com"
              onClick={() =>
                window.gtag?.("event", "email_click", {
                  platform: "email",
                  url: "mailto:bolleddulashashikiran@gmail.com",
                })
              }
              className="inline-flex items-center gap-2.5 bg-accent text-bg font-bold px-6 py-3 rounded-xl hover:opacity-95 transition shadow-lg shadow-accent/20 hover:scale-[1.02] text-sm"
            >
              <HiOutlineMail className="text-lg" />
              Say Hello
              <HiOutlineArrowNarrowRight className="text-base" />
            </a>

            {SITE.social.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    window.gtag?.("event", s.gaLabel, {
                      platform: s.name.toLowerCase(),
                      url: s.url,
                    })
                  }
                  className="inline-flex items-center gap-2.5 bg-bg/80 border border-gray-800 hover:border-accent hover:text-accent px-5 py-3 rounded-xl text-sm font-semibold text-gray-200 transition-all duration-200 shadow-sm hover:-translate-y-0.5"
                >
                  <Icon className="text-accent text-lg" />
                  {s.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </Container>
  );
}

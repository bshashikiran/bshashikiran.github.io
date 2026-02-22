import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { useEffect } from "react";

export default function Resume() {

  useEffect(() => {
    window.gtag?.("event", "resume_view", {
      page: "resume",
    });
  }, []);

  const onResumeDownload = () => {
    window.gtag?.("event", "resume_download", {
      file: "resume.pdf",
    });
  }

  return (
    <Container>
      <SectionTitle title="cat resume.pdf" />

      <div className="mt-6 border border-gray-800 rounded overflow-hidden bg-black">
        <iframe
          src="/resume.pdf"
          title="Resume"
          className="w-full h-[85vh]"
        />
      </div>

      <div className="mt-4">
        <a
          href="/resume.pdf"
          download="ShashiKiran_Resume.pdf"
          onClick={onResumeDownload}
          className="font-mono text-sm border border-gray-800 px-4 py-2 rounded hover:border-accent hover:text-accent transition"
        >
          $ download resume.pdf
        </a>
      </div>
    </Container>
  );
}
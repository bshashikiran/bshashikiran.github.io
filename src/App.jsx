import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import GoToTop from "./components/GoToTop";

export default function App() {
  return (
    <div>
      <Hero />
      <GoToTop />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
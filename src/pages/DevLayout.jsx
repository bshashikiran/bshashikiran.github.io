import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import GoToTop from "../components/GoToTop";
import SideNav from "../components/SideNav";
import PaletteSelector from "../components/PaletteSelector";

export default function DevLayout() {
  return (
    <div className="font-mono antialiased">
      <PaletteSelector />
      <SideNav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <GoToTop />
    </div>
  );
}

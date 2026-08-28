import HrNavbar from "../components/hr/HrNavbar";
import HrHero from "../sections/hr/HrHero";
import HrAbout from "../sections/hr/HrAbout";
import HrSkills from "../sections/hr/HrSkills";
import HrExperience from "../sections/hr/HrExperience";
import HrProjects from "../sections/hr/HrProjects";
import HrContact from "../sections/hr/HrContact";
import GoToTop from "../components/GoToTop";

export default function HrLayout() {
  return (
    <div className="min-h-screen bg-bg text-gray-200 selection:bg-accent/20 selection:text-accent font-sans antialiased">
      <HrNavbar />
      <main>
        <HrHero />
        <HrAbout />
        <HrSkills />
        <HrExperience />
        <HrProjects />
        <HrContact />
      </main>
      <GoToTop />
    </div>
  );
}

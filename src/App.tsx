import { FloatingNav } from "./components/floating-nav";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { ExperienceSection } from "./components/experience-section";
import { TechnologiesSection } from "./components/technologies-section";
import { ProjectsSection } from "./components/projects-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { Toaster } from "sonner";
import { EducationSection } from "./components/education-section";

function App() {
  return (
    <>
      <Toaster richColors />
      <div className="min-h-screen bg-gradient-to-br from-[#082032] via-[#2C394B] to-[#334756]">
        <FloatingNav />
        <main className="relative">
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <ExperienceSection />
          <TechnologiesSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

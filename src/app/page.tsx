import { Navigation } from "@/components/sections/navigation";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { ParticleSystem } from "@/components/ui/particle-system";
import { CursorTrail } from "@/components/ui/cursor-trail";

export default function Home() {
  return (
    <CursorTrail>
      <main className="min-h-screen">
        <ParticleSystem particleCount={30} />
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </CursorTrail>
  );
}

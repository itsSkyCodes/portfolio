import { About } from "@/components/about";
import { AiSection } from "@/components/ai-section";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ImpactMetrics } from "@/components/impact-metrics";
import { JsonLd } from "@/components/json-ld";
import { Navbar } from "@/components/navbar";
import { Principles } from "@/components/principles";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main id="main">
        <Hero />
        <ImpactMetrics />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AiSection />
        <Principles />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

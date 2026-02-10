import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { ClientSolutions } from "@/components/ClientSolutions";
import { EngineeringLabs } from "@/components/EngineeringLabs";
import { Experience } from "@/components/Experience";
import { Achievements } from "@/components/Achievements";
import { ContentCreation } from "@/components/ContentCreation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <SkillsMarquee />
      <ClientSolutions />
      <EngineeringLabs />
      <Experience />
      <Achievements />
      <ContentCreation />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

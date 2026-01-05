"use client";

import Lenis from "lenis";
import { HeroSection } from "./_components/hero-section";
import { JourneyCards } from "./_components/journey-cards";
import { OverwhelmingSection } from "./_components/overwhelming-section";
import { CompaniesSection } from "./_components/companies-section";
import { WorkSection } from "./_components/work-section";
import { TechnologySection } from "./_components/technology-section";
import { FeaturesSection } from "./_components/features-section";
import { Footer } from "./_components/footer";
import { TestimonialsSection } from "./_components/testimonials";
import { FmailSection } from "./_components/family-section";

export default function Landing() {
  const lenis = new Lenis({
    autoRaf: true,
  });

  lenis.on("scroll", (e: Lenis): void => {
    console.log(e);
  });
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      <OverwhelmingSection />
      <JourneyCards />
      <CompaniesSection />
      <WorkSection />
      <TechnologySection />
      <FeaturesSection />
      <TestimonialsSection />
      <FmailSection />
      <Footer />
    </main>
  );
}

import { HeroSection } from "./_components/hero-section";
import { JourneySection } from "./_components/journey-section";
import { OverwhelmingSection } from "./_components/overwhelming-section";
import { CompaniesSection } from "./_components/companies-section";
import { WorkSection } from "./_components/work-section";
import { TechnologySection } from "./_components/technology-section";
import { FeaturesSection } from "./_components/features-section";
import { Footer } from "./_components/footer";
import { TestimonialsSection } from "./_components/testimonials";
// import { FamilySection } from "./_components/family-section";

export default function Landing() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      <OverwhelmingSection />
      <JourneySection />
      <CompaniesSection />
      <WorkSection />
      <TechnologySection />
      <FeaturesSection />
      <TestimonialsSection />
      {/* <FamilySection />*/}
      <Footer />
    </main>
  );
}

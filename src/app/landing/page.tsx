import { Navbar } from "./_components/navbar";
import { HeroSection } from "./_components/hero-section";
import Image from "next/image";
import { JourneyCards } from "./_components/journey-cards";
import { OverwhelmingSection } from "./_components/overwhelming-section";
import { CompaniesSection } from "./_components/companies-section";
import { WorkSection } from "./_components/work-section";

export default function Landing() {
  return (
    <main className="min-h-screen w-full">
      <section className="relative w-full bg-[url('/assets/images/background.svg')] bg-cover bg-no-repeat">
        <Image
          src="/assets/images/vector1.svg"
          width={218}
          height={218}
          className="absolute top-95"
          alt="vector 1"
        />
        <Image
          src="/assets/images/vector2.svg"
          width={160}
          height={160}
          className="absolute top-115 left-130"
          alt="vector 2"
        />
        <Image
          src="/assets/images/vector3.svg"
          width={218}
          height={218}
          className="absolute top-95 right-80"
          alt="vector 3"
        />
        <Image
          src="/assets/images/vector4.svg"
          width={160}
          height={160}
          className="absolute right-22"
          alt="vector 4"
        />
        <div>
          <Navbar />
          <HeroSection />
        </div>
      </section>
      <OverwhelmingSection />
      <JourneyCards />
      <CompaniesSection />
      <WorkSection />
    </main>
  );
}

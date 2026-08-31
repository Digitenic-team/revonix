import type { Metadata } from "next";
import { getAllCaseStudies } from "@/lib/case-studies";
import { cn } from "@/lib/utils";
import { Footer } from "../_components/footer";
import { Navbar } from "../_components/navbar";
import { CaseStudyCard } from "./_components/case-study-card";

export const metadata: Metadata = {
  title: "Case Studies — Revonix",
  description:
    "How we turn AI, automation, and custom software into systems teams actually use. Real problems, what we built, and what changed.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies — Revonix",
    description:
      "How we turn AI, automation, and custom software into systems teams actually use.",
    url: "/case-studies",
    type: "website",
  },
};

export default function CaseStudiesIndex() {
  const studies = getAllCaseStudies();

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navbar />

      <section className="mx-auto flex max-w-360 flex-col items-center gap-6 px-4 pt-32 pb-16 md:pt-44">
        <h1 className="font-neue bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,#010101_0%,#3558DA_100%)] bg-clip-text text-center text-[32px] leading-normal font-medium tracking-[-0.035rem] text-transparent sm:text-5xl md:text-[3.5rem]">
          Case{" "}
          <span className="font-neue text-primary leading-normal font-medium tracking-[-0.035rem]">
            studies
          </span>
        </h1>
        <p className="text-secondary max-w-2xl text-center text-base font-normal tracking-[-0.01125rem] sm:text-lg">
          The bottleneck we found, the system we built, and what actually
          changed once the team started using it.
        </p>
      </section>

      {/* Column count tracks the number of studies, so one or two don't render
          as a stranded card in an otherwise empty three-column row. */}
      <section
        className={cn(
          "mx-auto grid w-full max-w-360 grid-cols-1 gap-6 px-4 pb-28",
          studies.length >= 2 && "sm:grid-cols-2",
          studies.length >= 3 && "lg:grid-cols-3",
          studies.length === 1 && "max-w-md",
          studies.length === 2 && "max-w-3xl",
        )}
      >
        {studies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </section>

      <Footer />
    </main>
  );
}

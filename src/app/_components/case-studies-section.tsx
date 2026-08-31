import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getFeaturedCaseStudies } from "@/lib/case-studies";
import { cn } from "@/lib/utils";
import { CaseStudyCard } from "../case-studies/_components/case-study-card";

export function CaseStudiesSection() {
  const studies = getFeaturedCaseStudies(3);

  if (studies.length === 0) return null;

  return (
    <section
      id="case-studies"
      className="mx-auto mt-46 flex max-w-360 flex-col items-center gap-[4.38rem] self-stretch px-4"
    >
      <div className="flex flex-col items-center gap-4">
        <h2 className="font-neue bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,#010101_0%,#3558DA_100%)] bg-clip-text text-center text-[32px] leading-normal font-medium tracking-[-0.035rem] text-transparent sm:text-5xl md:text-[3.5rem]">
          Case{" "}
          <span className="font-neue text-primary leading-normal font-medium tracking-[-0.035rem]">
            studies
          </span>
        </h2>
        <p className="text-secondary max-w-2xl text-center text-base font-normal tracking-[-0.01125rem] sm:text-lg">
          The bottleneck we found, the system we built, and what actually
          changed once the team started using it.
        </p>
      </div>

      <div
        className={cn(
          "grid w-full grid-cols-1 gap-6",
          studies.length >= 2 && "sm:grid-cols-2",
          studies.length >= 3 && "lg:grid-cols-3",
          studies.length === 1 && "max-w-md",
          studies.length === 2 && "max-w-3xl",
        )}
      >
        {studies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>

      <Link
        href="/case-studies"
        className="text-secondary group flex items-center gap-2 text-base font-medium tracking-[-0.01rem]"
      >
        View all case studies
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </section>
  );
}

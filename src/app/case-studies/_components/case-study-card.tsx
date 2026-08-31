import Image from "next/image";
import Link from "next/link";
import type { CaseStudyMeta } from "@/lib/case-studies";

export function CaseStudyCard({ study }: { study: CaseStudyMeta }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-[#EEE] bg-white shadow-[0_4px_14px_0_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_12px_32px_0_rgba(53,88,218,0.12)]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5F7F9]">
        <Image
          src={study.heroImage}
          alt={study.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-[0.02em] text-[#8A8A8A] uppercase">
          <span>{study.industry}</span>
          <span aria-hidden="true">·</span>
          <span>{study.year}</span>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-neue text-secondary text-xl leading-normal font-medium tracking-[-0.01rem]">
            {study.title}
          </h3>
          <p className="text-base leading-[1.6] text-[#5B5B5B]">
            {study.summary}
          </p>
        </div>

        {study.metrics.length > 0 && (
          <dl className="mt-auto flex flex-wrap gap-x-8 gap-y-3 border-t border-[#EEE] pt-4">
            {study.metrics.slice(0, 2).map((metric) => (
              <div key={metric.label} className="flex flex-col">
                <dt className="sr-only">{metric.label}</dt>
                <dd className="font-neue text-primary text-2xl leading-none font-medium">
                  {metric.value}
                </dd>
                <span className="mt-1 text-xs text-[#8A8A8A]">
                  {metric.label}
                </span>
              </div>
            ))}
          </dl>
        )}
      </div>
    </Link>
  );
}

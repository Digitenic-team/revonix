import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StyledButton } from "@/components/styled-button";
import { getAllCaseStudies, getCaseStudy } from "@/lib/case-studies";
import { BOOKING_URL } from "@/lib/constants";
import { Footer } from "../../_components/footer";
import { Navbar } from "../../_components/navbar";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllCaseStudies().map((study) => ({ slug: study.slug }));
}

/** Every study is known at build time, so unknown slugs should 404 outright. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) return {};

  return {
    title: `${study.title} — Revonix Case Study`,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      title: `${study.title} — Revonix Case Study`,
      description: study.summary,
      url: `/case-studies/${study.slug}`,
      type: "article",
      images: [{ url: study.heroImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} — Revonix Case Study`,
      description: study.summary,
      images: [study.heroImage],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) notFound();

  const { default: Content } = await import(
    `../../../content/case-studies/${slug}.mdx`
  );

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navbar />

      <article className="mx-auto flex max-w-229.5 flex-col px-4 pt-28 md:pt-40">
        <Link
          href="/case-studies"
          className="mb-10 flex w-fit items-center gap-2 text-sm font-medium text-[#8A8A8A] transition-colors hover:text-[#010101]"
        >
          <ArrowLeft className="h-4 w-4" />
          All case studies
        </Link>

        <div className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-[0.02em] text-[#8A8A8A] uppercase">
          <span>{study.client}</span>
          <span aria-hidden="true">·</span>
          <span>{study.industry}</span>
          <span aria-hidden="true">·</span>
          <span>{study.year}</span>
        </div>

        <h1 className="font-neue text-secondary mt-4 text-[32px] leading-tight font-medium tracking-[-0.035rem] sm:text-5xl md:text-[3.5rem]">
          {study.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-[1.6] text-[#5B5B5B] md:text-xl">
          {study.subtitle}
        </p>

        <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-[1.75rem] border border-[#EEE] bg-[#F5F7F9]">
          <Image
            src={study.heroImage}
            alt={study.title}
            fill
            priority
            sizes="(min-width: 1024px) 917px, 100vw"
            className="object-cover"
          />
        </div>

        {study.metrics.length > 0 && (
          <dl className="mt-12 grid grid-cols-1 gap-6 rounded-[1.75rem] border border-[#EEE] bg-[#F5F7F9] p-8 sm:grid-cols-3">
            {study.metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col gap-2">
                <dd className="font-neue text-primary text-4xl leading-none font-medium tracking-[-0.02rem] md:text-[2.75rem]">
                  {metric.value}
                </dd>
                <dt className="text-sm text-[#5B5B5B]">{metric.label}</dt>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-16 flex flex-col gap-12 lg:flex-row lg:gap-16">
          <aside className="flex shrink-0 flex-col gap-8 lg:sticky lg:top-28 lg:w-56 lg:self-start">
            <div className="flex flex-col gap-3">
              <h2 className="text-xs font-medium tracking-[0.02em] text-[#8A8A8A] uppercase">
                Services
              </h2>
              <ul className="flex flex-col gap-1.5">
                {study.services.map((service) => (
                  <li
                    key={service}
                    className="text-secondary text-sm leading-[1.5]"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-xs font-medium tracking-[0.02em] text-[#8A8A8A] uppercase">
                Stack
              </h2>
              <ul className="flex flex-wrap gap-2">
                {study.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-[#EEE] px-3 py-1 text-xs text-[#5B5B5B]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="min-w-0 flex-1">
            <Content />
          </div>
        </div>

        {study.gallery.length > 0 && (
          <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {study.gallery.map((src) => (
              <div
                key={src}
                className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.5rem] border border-[#EEE] bg-[#F5F7F9]"
              >
                <Image
                  src={src}
                  alt={`${study.title} screenshot`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        <div className="mt-24 mb-28 flex flex-col items-center gap-6 rounded-[1.75rem] border border-[#EEE] bg-[#F5F7F9] px-6 py-14 text-center">
          <h2 className="font-neue text-secondary text-2xl leading-normal font-medium tracking-[-0.02rem] md:text-[2rem]">
            Got a bottleneck that looks like this?
          </h2>
          <p className="max-w-lg text-base text-[#5B5B5B]">
            Book a strategy call and we&apos;ll tell you honestly whether
            it&apos;s worth automating.
          </p>
          <StyledButton href={BOOKING_URL} className="py-6">
            Book a Strategy Call
          </StyledButton>
        </div>
      </article>

      <Footer />
    </main>
  );
}

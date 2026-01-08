"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { IconWrapper } from "@/components/icon-wrapper";
import { JarIcon, TerminalIcon, UsersIcon, ReloadIcon } from "./icons";

gsap.registerPlugin(ScrollTrigger);

interface Cards {
  icon: React.ComponentType<{ className?: string }>;
  heading: string;
  description: string;
}

const CARDS: Cards[] = [
  {
    icon: JarIcon,
    heading: "Listen to where your real bottleneck is",
    description:
      "Pay close attention to identify where your true bottleneck lies in the process. Understanding this will help you streamline operations effectively.",
  },
  {
    icon: TerminalIcon,
    heading: "Design the right solution — AI, low-code, or custom",
    description:
      "It's essential to design the right solution tailored to your needs, whether that involves leveraging AI technology, utilizing low-code platforms, or creating a custom-built application.",
  },
  {
    icon: UsersIcon,
    heading: "Build something your team uses immediately",
    description:
      "Focus on building a solution that your team can start using right away, ensuring immediate benefits and enhancing productivity from the get-go.",
  },
  {
    icon: ReloadIcon,
    heading: "Refine based on how people actually work",
    description:
      "Continuously refine your approach based on how people actually work, gathering feedback and making adjustments to better align with their needs and workflows.",
  },
];

export function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".work-card");

      // Reset
      cards.forEach((c) => c.classList.remove("is-active"));
      cards[0]?.classList.add("is-active");

      // Heading animation
      gsap.from(".work-heading", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Card activation on scroll (NO PIN)
      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top center+=100",
          end: "bottom center",
          onEnter: () => setActive(index),
          onEnterBack: () => setActive(index),
        });
      });

      function setActive(index: number) {
        cards.forEach((c) => c.classList.remove("is-active"));
        cards[index]?.classList.add("is-active");
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="mx-auto mt-30 flex max-w-360 flex-col items-center gap-[4.38rem] self-stretch"
    >
      <h1 className="work-heading font-neue bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,#010101_0%,#3558DA_100%)] bg-clip-text text-center text-4xl leading-normal font-medium tracking-[-0.035rem] text-transparent sm:text-5xl md:text-[3.5rem]">
        How we{" "}
        <span className="font-neue text-pirmary leading-normal font-medium tracking-[-0.035rem]">
          work
        </span>
      </h1>

      <div className="relative flex w-full max-w-229.5 flex-col flex-wrap items-start gap-10 px-4 lg:flex-nowrap">
        <Image
          src="/assets/images/main-vector-1.png"
          width={420}
          height={425}
          className="absolute -top-6 left-1 z-10 hidden xl:block"
          alt="main vector blue 1"
        />
        <Image
          src="/assets/images/main-vector-2.png"
          width={900}
          height={905}
          className="absolute top-3 right-[1.1rem] z-10 hidden xl:block"
          alt="main vector blue 1"
        />

        {CARDS.map((card: Cards, idx: number) => {
          const Icon = card.icon;

          return (
            <div
              key={card.heading}
              className={cn(
                "work-card flex max-w-md flex-col items-start justify-center gap-5 rounded-3xl p-8",
                idx === 1 || idx === 3 ? "self-end" : "self-start",
              )}
            >
              <div className="">
                <IconWrapper>
                  <Icon className="h-7 w-7" />
                </IconWrapper>
              </div>

              <h1 className="font-neue text-secondary text-2xl leading-normal font-medium tracking-[-0.0175rem] md:text-[1.75rem]">
                {card.heading}
              </h1>

              <p className="font-neue text-md text-secondary leading-normal font-normal tracking-[-0.01125rem] md:text-[1.125rem]">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

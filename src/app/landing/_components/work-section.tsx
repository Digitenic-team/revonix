"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { useRef, useEffect, useState } from "react";
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
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect((): (() => void) | undefined => {
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!sectionRef.current || cards.length === 0) return;

    cards.forEach((card: HTMLDivElement, index: number): void => {
      ScrollTrigger.create({
        trigger: card,
        start: "top center",
        end: "bottom center",

        onEnter: (): void => setActive(index),
        onEnterBack: (): void => setActive(index),
      });
    });

    function setActive(index: number): void {
      setActiveCardIndex(index);

      cards.forEach((c: HTMLDivElement, i: number): void => {
        gsap.to(c, {
          backgroundColor: i === index ? "#fff" : "#f5f7f9",
          borderColor:
            i === index ? "rgba(53,88,218,0.10)" : "rgb(235,235,235)",
          boxShadow: i === index ? "0 44px 44px rgba(55,90,217,0.09)" : "none",
          duration: 0.35,
          overwrite: "auto",
        });
      });
    }

    return (): void => ScrollTrigger.getAll().forEach((t): void => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-auto mt-30 flex max-w-360 flex-col items-center gap-[4.38rem] self-stretch"
    >
      <h1 className="font-neue bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,#010101_0%,#3558DA_100%)] bg-clip-text text-center text-4xl leading-normal font-medium tracking-[-0.035rem] text-transparent sm:text-5xl md:text-[3.5rem]">
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
              ref={(el: HTMLDivElement | null): void => {
                cardRefs.current[idx] = el;
              }}
              className={cn(
                activeCardIndex === idx
                  ? "border border-[rgba(53,88,218,0.10)] bg-white shadow-[0_275px_77px_rgba(55,90,217,0),0_176px_70px_rgba(55,90,217,0.01),0_99px_59px_rgba(55,90,217,0.05),0_44px_44px_rgba(55,90,217,0.09),0_11px_24px_rgba(55,90,217,0.10)]"
                  : "border-secondary-foreground bg-primary-foreground border",
                idx === 1 || idx === 3 ? "self-end" : "self-start",
                "flex max-w-md flex-col items-start justify-center gap-5 rounded-3xl p-8",
              )}
            >
              <div className="">
                <IconWrapper active={activeCardIndex === idx}>
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

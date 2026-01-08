"use client";

import { StyledButtonLight } from "@/components/styled-button-light";
import { useState, useRef, useLayoutEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { StyledButton } from "@/components/styled-button";
import { ScrollTrigger } from "gsap/all";
import { CardIconWrapper } from "@/components/card-icon-wrapper";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

interface Cards {
  icon: string;
  heading: string;
  description: string;
  icons: string[];
}

const CARDS: Cards[] = [
  {
    icon: "ai-book.png",
    heading: "AI & Intelligent Automation",
    description:
      "Decision systems, workflow automation, and AI agents embedded directly into your operations",
    icons: ["chatgpt.svg", "claude.svg", "vector-ai.svg"],
  },
  {
    icon: "code-icon.png",
    heading: "Low-Code Development",
    description:
      "Bubble.io and rapid prototyping to validate ideas fast—without technical debt.",
    icons: ["bubble.svg", "quick-base.svg", "group-icon.png"],
  },
  {
    icon: "custom-code.png",
    heading: "Custom Web & Mobile Apps",
    description:
      "Purpose-built applications that make your AI systems usable by your team and customers.",
    icons: ["danjo.svg", "aws.svg", "react.svg"],
  },
];

export function TechnologySection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useLayoutEffect(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!sectionRef.current || cards.length === 0) return;

    const section = sectionRef.current;

    // PIN the section while scrolling through cards
    ScrollTrigger.create({
      trigger: section,
      start: "center center",
      end: `+=${cards.length * 350}`,
      pin: true,
      pinSpacing: true,
      scrub: 0.5,
    });

    // create triggers for each card
    cards.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(index),
        onEnterBack: () => setActive(index),
      });
    });

    // Set first card as active by default
    setActive(0);

    function setActive(index: number) {
      setActiveCardIndex(index);
      cards.forEach((card, i) => {
        const isActive = i === index;

        gsap.to(card, {
          backgroundColor: isActive ? "#ffffff" : "rgba(255,255,255,0.1)",
          borderColor: isActive
            ? "rgba(53,88,218,0.10)"
            : "rgba(255,255,255,0.3)",
          boxShadow: isActive
            ? "0 44px 44px rgba(55,90,217,0.09)"
            : "0 11px 24px rgba(55,90,217,0.1)",
          duration: 0.35,
          overwrite: "auto",
        });

        // Update text color dynamically
        const heading = card.querySelector("h1");
        const desc = card.querySelector("p");

        if (heading) heading.style.color = isActive ? "#000000" : "#ffffff";
        if (desc) desc.style.color = isActive ? "rgba(0,0,0,0.6)" : "#ffffff";
      });
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-auto mt-30 flex w-full items-center justify-center lg:max-w-456"
    >
      <div className="relative mx-4 flex w-full flex-col items-center justify-between gap-30 rounded-[2.5rem] bg-[linear-gradient(180deg,rgba(1,1,1,1)_0%,#3558DA_100%)] bg-cover bg-center px-4 py-15 shadow-[0_51px_51px_rgba(54,89,218,0.09),0_13px_28px_rgba(54,89,218,0.1)] sm:p-[6.25rem_5rem] xl:flex-row xl:gap-50">
        <Image
          src="/assets/images/technology-background.png"
          alt="Background"
          fill
          className="absolute inset-0 object-cover mix-blend-color-burn"
          priority
        />
        <div className="mx-auto flex w-full flex-1 flex-col items-center gap-6 self-stretch lg:max-w-200 xl:mx-0 xl:max-w-130 xl:shrink-0 xl:items-start">
          <div className="flex flex-1 flex-col items-center gap-4 self-stretch text-center xl:items-start">
            <h1 className="text-4xl leading-normal font-medium tracking-[-0.035rem] text-white sm:text-5xl md:text-[3.5rem] xl:text-left">
              Technology that quietly does the work for your team
            </h1>
            <p className="text-base leading-normal font-normal tracking-[-0.01125rem] text-white sm:text-lg md:text-[1.125rem]">
              Systems that replace manual work and actually get used.
            </p>
          </div>
          <div>
            <StyledButtonLight className="relative py-6 text-sm">
              Book a Strategy Call
            </StyledButtonLight>
          </div>
        </div>

        <div className="relative flex w-full flex-col items-center gap-5 xl:max-w-148.75 xl:shrink-0 xl:items-start">
          <Image
            src="/assets/images/top-vector-1.png"
            width={50}
            height={100}
            className="absolute -top-16 -left-10 hidden lg:block"
            alt="Top Vector"
          />
          <Image
            src="/assets/images/bottom-vector-2.png"
            width={2}
            height={745}
            className="absolute -bottom-8 -left-[1.8rem] hidden lg:block"
            alt="Bottom Vector"
          />
          {CARDS.map((card: Cards, idx: number) => (
            <div
              key={card.icon}
              ref={(el) => {
                if (el) cardRefs.current[idx] = el;
              }}
              className={cn(
                idx === 1
                  ? "bg-white"
                  : "bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] shadow-[0_11px_24px_rgba(55,90,217,0.1)]",
                "flex w-full flex-col items-start justify-center gap-8 self-stretch rounded-3xl border border-white p-6 shadow-[0_11px_24px_rgba(55,90,217,0.1)] lg:max-w-200 xl:w-148",
              )}
            >
              <div className="flex flex-col items-start gap-4 self-stretch">
                <div className="flex items-center gap-3">
                  <Image
                    src={`/assets/images/${card.icon}`}
                    width={32}
                    height={32}
                    alt="main icon"
                  />
                  <h1
                    className={cn(
                      idx === 1 ? "text-black" : "text-white",
                      "text-xl leading-normal font-medium tracking-[-0.0175rem] md:text-[1.75rem]",
                    )}
                  >
                    {card.heading}
                  </h1>
                </div>
                <p
                  className={cn(
                    idx === 1 ? "text-black opacity-60" : "text-white",
                    "text-sm leading-normal font-normal tracking-[-0.01125rem] md:w-[24rem] md:text-[1.125rem]",
                  )}
                >
                  {card.description}
                </p>
              </div>
              <div className="flex w-full flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {card.icons.map((icon: string) => (
                    <CardIconWrapper
                      key={icon}
                      src={icon}
                      alt={icon}
                      active={activeCardIndex === idx}
                      size={32}
                    />
                  ))}
                </div>

                {idx === 1 && (
                  <StyledButton className="px-10 py-5.5">
                    Learn More
                  </StyledButton>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

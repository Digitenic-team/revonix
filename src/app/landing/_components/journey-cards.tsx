"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

interface CardData {
  heading: string;
  subHeading: string;
  desc: string;
}

const CARDS_DATA: CardData[] = [
  {
    heading: "EXPLORE AI",
    subHeading: "Find the right starting point",
    desc: "Get set up with simple tools and understand how AI can actually help your business.",
  },
  {
    heading: "BLUEPRINT AI",
    subHeading: "Design systems that scale",
    desc: "Create a clear plan to apply AI across key processes and teams.",
  },
  {
    heading: "IMPLEMENT AI",
    subHeading: "Automate real workflows",
    desc: "Build custom automations and AI systems that fit how your business works.",
  },
];

export function JourneyCards() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".journey-card");

      gsap.set(cards, { willChange: "transform, opacity" });

      gsap.from(".journey-heading", {
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

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center",
          end: `+=${cards.length * 300}`,
          pin: true,
          scrub: true,
        },
      });

      cards.forEach((card, i) => {
        tl.to(
          card,
          {
            onStart: () => {
              cards.forEach((c) => c.classList.remove("is-active"));
              card.classList.add("is-active");
            },
            onReverseComplete: () => {
              cards.forEach((c) => c.classList.remove("is-active"));
              cards[Math.max(i - 1, 0)]?.classList.add("is-active");
            },
            duration: 1,
          },
          i,
        );
      });

      cards[0]?.classList.add("is-active");
    },
    { scope: sectionRef },
  );
  return (
    <section
      ref={sectionRef}
      className="relative mx-auto mt-30 flex max-w-360 flex-col items-center gap-[4.38rem] self-stretch px-4"
    >
      {/* Heading */}
      <h1 className="journey-heading bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,_#010101_0%,_#3558DA_100%)] bg-clip-text text-center text-4xl font-medium tracking-[-0.035rem] text-transparent sm:text-5xl md:text-[3.5rem]">
        Where are you in the{" "}
        <span className="text-primary font-medium tracking-[-0.035rem]">
          AI journey?
        </span>
      </h1>

      {/* Cards container */}
      <div className="relative flex w-full flex-wrap justify-center gap-6 lg:flex-nowrap lg:justify-start lg:gap-5">
        {/* Decorative images — ONLY xl+ */}
        <Image
          src="/assets/images/card-vector-1.svg"
          width={500}
          height={161}
          alt="Card Vector 1"
          className="absolute -top-4 -left-14.5 z-10 hidden xl:block"
        />
        <Image
          src="/assets/images/card-vector-2.svg"
          width={1476}
          height={316}
          alt="Card Vector 2"
          className="absolute -top-4 right-[0.56rem] z-10 hidden xl:block"
        />

        {/*
          I will add them later

        <Image
          src="/assets/images/journey-sm-vector-1.svg"
          width={160}
          height={161}
          alt="Card Vector 1"
          className="absolute top-3 right-4 z-10 block xl:hidden"
        />
        <Image
          src="/assets/images/journey-sm-vector-2.svg"
          width={320}
          height={319}
          alt="Card Vector 2"
          className="absolute top-2.5 right-4 z-10 block xl:hidden"
        />
        */}

        {CARDS_DATA.map((card: CardData, idx: number) => (
          <div
            key={card.desc}
            className={cn(
              "journey-card flex max-h-70 w-full flex-col gap-2.5 rounded-3xl border p-6 transition-all duration-300 md:max-h-90 md:w-[48%]",
              "bg-primary-foreground border-secondary-foreground",
              "is-active:bg-white is-active:border-primary is-active:shadow-[0_44px_44px_rgba(55,90,217,0.09)]",
              idx === 1 ? "lg:mt-25" : "",
            )}
          >
            <div className="h-70 space-y-[0.62rem] self-stretch">
              <h2 className="text-secondary text-[16px] uppercase opacity-60">
                {card.heading}
              </h2>
              <h3 className="text-secondary text-[1.75rem] font-medium tracking-[-0.0175rem]">
                {card.subHeading}
              </h3>
            </div>

            <p className="text-secondary text-[1.125rem] opacity-60">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

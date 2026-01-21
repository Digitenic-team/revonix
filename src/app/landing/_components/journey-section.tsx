"use client";

import { cn } from "@/lib/utils";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

type CardData = {
  heading: string;
  subHeading: string;
  desc: string;
};

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

export function JourneySection() {
  const sectionRef = useRef<HTMLElement>(null);

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    (): void => {
      const cards = gsap.utils.toArray<HTMLElement>(".journey-card");
      const path = document.querySelector("#journey-path") as SVGPathElement;

      if (!path || !sectionRef.current) return;

      const length = path.getTotalLength();

      // IMPORTANT: always hard-reset first
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      const ftl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 50%",
          scrub: true,
        },
      });

      ftl
        .fromTo(
          ".journey-heading",
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
        )
        .fromTo(
          cards,
          {
            scale: 0.8,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3",
        );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center",
          end: `+=${cards.length * 300}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
        },
      });

      // SVG draw animation
      tl.to(
        path,
        {
          strokeDashoffset: 0,
          ease: "none",
          duration: cards.length,
        },
        0,
      );

      // Card activation logic
      cards.forEach((_: HTMLElement, i: number): void => {
        tl.to(
          {},
          {
            duration: 1,
            onUpdate: (): void => {
              const progress = tl.progress() * cards.length;
              const activeIndex = Math.min(
                cards.length - 1,
                Math.floor(progress),
              );

              cards.forEach((c: HTMLElement): void =>
                c.classList.remove("is-active"),
              );
              cards[activeIndex]?.classList.add("is-active");
            },
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
      className="relative mx-auto mt-46 flex max-w-360 flex-col items-center gap-[4.38rem] self-stretch px-4"
    >
      {/* Heading */}
      <h1 className="journey-heading bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,_#010101_0%,_#3558DA_100%)] bg-clip-text text-center text-[32px] font-medium tracking-[-0.035rem] text-transparent sm:text-5xl md:text-[3.5rem]">
        Where are you in the{" "}
        <span className="text-primary font-medium tracking-[-0.035rem]">
          AI journey?
        </span>
      </h1>

      {/* Cards container */}
      <div className="relative flex w-full flex-wrap justify-center gap-6 lg:flex-nowrap lg:justify-start lg:gap-5">
        {/* Decorative images */}
        <svg
          width="1376"
          height="318"
          viewBox="0 0 1376 318"
          fill="none"
          aria-hidden="true"
          className="absolute -top-5 -left-3 z-10 hidden xl:block"
        >
          <g>
            <path
              id="journey-path"
              d="M0 0.75H384.542C407.041 0.75 418.29 0.75 426.176 6.47949C428.723 8.32988 430.962 10.5696 432.813 13.1164C438.542 21.0024 438.542 32.2516 438.542 54.75V210.67C438.542 219.552 438.542 223.992 439.767 228.147C440.173 229.523 440.677 230.868 441.275 232.171C443.081 236.108 445.999 239.456 451.835 246.151L497.077 298.058C504.126 306.145 507.651 310.189 512.16 312.725C513.649 313.563 515.208 314.271 516.818 314.844C521.693 316.577 527.057 316.577 537.785 316.577H813.202C832.336 316.577 841.902 316.577 849.192 312.028C851.562 310.549 853.714 308.746 855.586 306.671C861.341 300.291 863.017 290.872 866.368 272.034L881.599 186.407C884.95 167.569 886.626 158.15 892.381 151.77C894.253 149.695 896.405 147.892 898.775 146.413C906.065 141.864 915.631 141.864 934.765 141.864H1233.91C1247.43 141.864 1254.2 141.864 1259.56 144.005C1267.19 147.054 1273.24 153.102 1276.29 160.734C1278.43 166.093 1278.43 172.856 1278.43 186.382C1278.43 199.908 1278.43 206.671 1280.57 212.03C1283.62 219.663 1289.66 225.71 1297.3 228.759C1302.66 230.9 1309.42 230.9 1322.94 230.9H1375.86"
              stroke="url(#paint0_linear_1_9)"
              strokeWidth="1.5"
            />
            <path
              d="M0 0.75H384.542C407.041 0.75 418.29 0.75 426.176 6.47949C428.723 8.32988 430.962 10.5696 432.813 13.1164C438.542 21.0024 438.542 32.2516 438.542 54.75V210.67C438.542 219.552 438.542 223.992 439.767 228.147C440.173 229.523 440.677 230.868 441.275 232.171C443.081 236.108 445.999 239.456 451.835 246.151L497.077 298.058C504.126 306.145 507.651 310.189 512.16 312.725C513.649 313.563 515.208 314.271 516.818 314.844C521.693 316.577 527.057 316.577 537.785 316.577H813.202C832.336 316.577 841.902 316.577 849.192 312.028C851.562 310.549 853.714 308.746 855.586 306.671C861.341 300.291 863.017 290.872 866.368 272.034L881.599 186.407C884.95 167.569 886.626 158.15 892.381 151.77C894.253 149.695 896.405 147.892 898.775 146.413C906.065 141.864 915.631 141.864 934.765 141.864H1233.91C1247.43 141.864 1254.2 141.864 1259.56 144.005C1267.19 147.054 1273.24 153.102 1276.29 160.734C1278.43 166.093 1278.43 172.856 1278.43 186.382C1278.43 199.908 1278.43 206.671 1280.57 212.03C1283.62 219.663 1289.66 225.71 1297.3 228.759C1302.66 230.9 1309.42 230.9 1322.94 230.9H1375.86"
              stroke="url(#paint1_linear_1_9)"
              strokeWidth="1.5"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1_9"
              x1="687.931"
              y1="0.75"
              x2="687.931"
              y2="316.577"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#576CBC" />
              <stop offset="1" stopColor="#3558DA" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1_9"
              x1="0"
              y1="158.663"
              x2="1375.86"
              y2="158.663"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="0.129884" stopColor="white" stopOpacity="0" />
              <stop offset="0.886587" stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_1_9"
              x1="687.931"
              y1="0"
              x2="687.931"
              y2="315.827"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#576CBC" />
              <stop offset="0.501613" stopColor="#3558DA" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_1_9"
              x1="427.542"
              y1="80.3016"
              x2="0"
              y2="80.3016"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.644798" stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>

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

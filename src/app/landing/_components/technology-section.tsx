"use client";

import { StyledButtonLight } from "@/components/styled-button-light";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ScrollTrigger } from "gsap/all";
import { CardIconWrapper } from "@/components/card-icon-wrapper";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface Cards {
  icon: string;
  heading: string;
  description: string;
  icons: string[];
}

const CARDS: Cards[] = [
  {
    icon: "ai-book.svg",
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
    icon: "custom-code.svg",
    heading: "Custom Web & Mobile Apps",
    description:
      "Purpose-built applications that make your AI systems usable by your team and customers.",
    icons: ["danjo.svg", "aws.svg", "react.svg"],
  },
];

export function TechnologySection() {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const cards = cardRefs.current.filter(Boolean);
      if (!cards.length) return;

      const clipRect =
        section.querySelector<SVGRectElement>("#clip0_10_7 rect");
      const linePath = section.querySelector<SVGPathElement>("#tech-line");

      if (!clipRect || !linePath) return;

      const CLIP_START_Y = 44.001;
      const CLIP_HEIGHT = 375;
      const lineLength = linePath.getTotalLength();
      let lastIndex = -1;

      // Initial state
      gsap.set(clipRect, {
        attr: { height: 0, y: CLIP_START_Y },
      });
      gsap.set(linePath, {
        strokeDasharray: lineLength,
        strokeDashoffset: lineLength,
      });

      ScrollTrigger.create({
        trigger: section,
        start: "center center",
        end: `+=${cards.length * 350}`,
        pin: true,
        scrub: true,
        anticipatePin: 1,

        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.min(
            cards.length - 1,
            Math.floor(progress * cards.length),
          );

          if (index !== lastIndex) {
            setActiveCardIndex(index);
            lastIndex = index;
          }

          gsap.to(clipRect, {
            attr: { height: CLIP_HEIGHT * progress },
            ease: "none",
            overwrite: true,
          });

          gsap.to(linePath, {
            strokeDashoffset: lineLength * (1 - progress),
            ease: "none",
            overwrite: true,
          });
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="services"
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
        <div className="mx-auto flex w-full flex-1 flex-col gap-6 self-stretch px-6 lg:max-w-200 lg:px-0 xl:mx-0 xl:max-w-130 xl:shrink-0 xl:items-start">
          <div className="flex flex-1 flex-col gap-4 self-stretch xl:items-start">
            <h1 className="text-[32px] font-medium tracking-[-0.035rem] text-white sm:text-5xl md:text-[3.5rem] lg:leading-16 xl:text-left">
              Technology that quietly does the work for your team
            </h1>
            <p className="text-[16px] leading-normal font-normal tracking-[-0.01125rem] text-white sm:text-lg md:text-[1.125rem]">
              Systems that replace manual work and actually get used.
            </p>
          </div>
          <div>
            <StyledButtonLight className="relative py-6">
              Book a Strategy Call
            </StyledButtonLight>
          </div>
        </div>

        <div className="relative flex w-full flex-col items-center gap-5 xl:max-w-148.75 xl:shrink-0 xl:items-start">
          <svg
            width="27"
            height="800"
            viewBox="0 0 27 745"
            fill="none"
            className="absolute -top-20 -left-6"
            aria-hidden="true"
          >
            <g clipPath="url(#clip0_10_7)">
              <path
                id="tech-path"
                d="M0.750032 417.501C0.750032 417.915 1.08582 418.251 1.50003 418.251C1.91425 418.251 2.25003 417.915 2.25003 417.501H1.50003H0.750032ZM1.50002 45.001H0.750015L0.750032 417.501H1.50003H2.25003L2.25002 45.001H1.50002ZM1.5 44.001L0.75 44.001L0.750005 161.498H1.50001H2.25001L2.25 44.001L1.5 44.001ZM1.50001 161.498H0.750005C0.750005 165.374 0.749564 168.32 0.917126 170.677C1.08519 173.041 1.42502 174.87 2.13383 176.504L2.82186 176.205L3.5099 175.907C2.89685 174.494 2.57575 172.855 2.41335 170.571C2.25045 168.28 2.25001 165.396 2.25001 161.498H1.50001ZM25.839 185.837V185.087C21.9416 185.087 19.0576 185.087 16.7662 184.924C14.4818 184.761 12.8435 184.44 11.4305 183.827L11.132 184.515L10.8334 185.203C12.4672 185.912 14.2957 186.252 16.6598 186.42C19.0168 186.588 21.963 186.587 25.839 186.587V185.837ZM2.82186 176.205L2.13383 176.504C3.82515 180.402 6.93501 183.512 10.8334 185.203L11.132 184.515L11.4305 183.827C7.88113 182.287 5.04976 179.456 3.5099 175.907L2.82186 176.205ZM1.5 44.001L0.75 44.001L0.750012 323.498H1.50001H2.25001L2.25 44.001L1.5 44.001ZM1.50001 323.498H0.750012C0.750012 327.374 0.749571 330.32 0.917133 332.677C1.0852 335.041 1.42503 336.87 2.13383 338.504L2.82187 338.205L3.50991 337.907C2.89685 336.494 2.57575 334.855 2.41336 332.571C2.25045 330.28 2.25001 327.396 2.25001 323.498H1.50001ZM25.839 347.837V347.087C21.9416 347.087 19.0576 347.087 16.7662 346.924C14.4819 346.761 12.8435 346.44 11.4305 345.827L11.132 346.515L10.8335 347.203C12.4672 347.912 14.2957 348.252 16.6598 348.42C19.0168 348.588 21.963 348.587 25.839 348.587V347.837ZM2.82187 338.205L2.13383 338.504C3.82516 342.402 6.93501 345.512 10.8335 347.203L11.132 346.515L11.4305 345.827C7.88113 344.287 5.04977 341.456 3.50991 337.907L2.82187 338.205Z"
                fill="url(#paint0_linear_10_7)"
              />
            </g>
            <path
              id="tech-line"
              opacity="0.4"
              d="M1.75 0.000976562L0.75 745.001"
              stroke="url(#paint1_linear_10_7)"
              strokeWidth="1.5"
            />
            <defs>
              <linearGradient
                id="paint0_linear_10_7"
                x1="13.6695"
                y1="44.001"
                x2="13.6695"
                y2="347.837"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_10_7"
                x1="37880.3"
                y1="0.000976617"
                x2="37880.3"
                y2="745.001"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="0.5" stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <clipPath id="clip0_10_7">
                <rect
                  width="26"
                  height="375"
                  fill="white"
                  transform="translate(0.75 44.001)"
                />
              </clipPath>
            </defs>
          </svg>
          {CARDS.map((card: Cards, idx: number) => (
            <div
              key={card.icon}
              ref={(el) => {
                if (el) cardRefs.current[idx] = el;
              }}
              className={cn(
                "flex w-full flex-col gap-8 rounded-3xl border p-6 transition-all duration-300 lg:max-w-200 xl:w-148",
                activeCardIndex === idx
                  ? "border-[rgba(53,88,218,0.2)] bg-white shadow-[0_44px_44px_rgba(55,90,217,0.09)]"
                  : "border-white bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] shadow-[0_11px_24px_rgba(55,90,217,0.1)]",
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
                      idx === activeCardIndex ? "text-black" : "text-white",
                      "text-[20px] leading-normal font-medium tracking-[-0.0175rem] md:text-[1.75rem]",
                    )}
                  >
                    {card.heading}
                  </h1>
                </div>
                <p
                  className={cn(
                    idx === activeCardIndex
                      ? "text-black opacity-60"
                      : "text-white",
                    "text-[16px] leading-normal font-normal tracking-[-0.01125rem] md:w-[24rem] md:text-[1.125rem]",
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

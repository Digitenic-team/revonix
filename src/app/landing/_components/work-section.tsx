"use client";

import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { IconWrapper } from "@/components/icon-wrapper";
import { JarIcon, TerminalIcon, UsersIcon, ReloadIcon } from "./icons";

type Cards = {
  icon: React.ComponentType<{ className?: string }>;
  heading: string;
  description: string;
};

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

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".work-card");
      const path =
        sectionRef.current?.querySelector<SVGPathElement>("#work-path");

      if (!path || !sectionRef.current) return;

      const length = path.getTotalLength();

      // Set SVG path initial styles
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: `bottom +=${cards.length * 300}`,
          scrub: true,
        },
      });

      tl.fromTo(
        ".work-heading",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
      );

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center",
        end: () => {
          const lastCard = cards[cards.length - 1];
          return `bottom ${lastCard.offsetHeight}px`;
        },
        scrub: true,
        onUpdate: (self) => {
          gsap.set(path, {
            strokeDashoffset: length * self.progress,
          });
        },
      });

      // Animate each card’s active state
      cards.forEach((card: HTMLElement) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            cards.forEach((c) => c.classList.remove("is-active"));
            card.classList.add("is-active");
          },
          onEnterBack: () => {
            cards.forEach((c) => c.classList.remove("is-active"));
            card.classList.add("is-active");
          },
        });
      });

      cards[0]?.classList.add("is-active");
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="process"
      className="mx-auto mt-38 flex max-w-360 flex-col items-center gap-[4.38rem] self-stretch"
    >
      <h1 className="work-heading font-neue bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,#010101_0%,#3558DA_100%)] bg-clip-text text-center text-[32px] leading-normal font-medium tracking-[-0.035rem] text-transparent sm:text-5xl md:text-[3.5rem]">
        How we{" "}
        <span className="font-neue text-primary leading-normal font-medium tracking-[-0.035rem]">
          work
        </span>
      </h1>

      <div className="relative flex w-full max-w-229.5 flex-col flex-wrap items-start gap-10 px-4 lg:flex-nowrap">
        <svg
          width="907"
          height="1477"
          viewBox="0 0 907 1477"
          fill="none"
          className="absolute -top-5 z-10 hidden md:block"
          aria-hidden="true"
        >
          <g>
            <path
              id="work-path"
              d="M905.857 1476.61V1149.72C905.857 1137 905.857 1130.65 903.514 1125.07C902.743 1123.24 901.791 1121.48 900.673 1119.84C897.275 1114.83 891.944 1111.37 881.282 1104.44L781.968 1039.9C776.05 1036.05 773.091 1034.13 769.824 1032.95C768.739 1032.56 767.633 1032.23 766.51 1031.97C763.129 1031.18 759.6 1031.18 752.543 1031.18H490.82C468.322 1031.18 457.073 1031.18 449.187 1025.45C446.64 1023.6 444.4 1021.36 442.55 1018.81C436.82 1010.92 436.82 999.675 436.82 977.177V866.266C436.82 850.099 436.82 842.016 433.317 835.417C432.171 833.259 430.766 831.249 429.132 829.432C424.138 823.876 416.546 821.1 401.363 815.549L261.779 764.517C216.7 748.036 194.161 739.796 193.255 731.1C192.983 728.493 193.449 725.861 194.6 723.505C198.437 715.649 222.435 715.649 270.431 715.649H343.026C347.814 715.649 350.209 715.649 352.556 716.023C353.337 716.148 354.112 716.303 354.881 716.489C357.191 717.047 359.4 717.969 363.82 719.813L426.78 746.084C431.226 747.939 433.449 748.866 435.773 749.426C436.546 749.612 437.327 749.767 438.112 749.891C440.474 750.264 442.882 750.259 447.7 750.248L847.658 749.319C870.109 749.267 881.335 749.241 889.2 743.51C891.741 741.658 893.975 739.42 895.82 736.875C901.533 728.996 901.533 717.77 901.533 695.319V467.84C901.533 449.243 901.533 439.945 897.174 432.768C895.755 430.432 894.024 428.3 892.028 426.433C885.895 420.697 876.794 418.793 858.591 414.984L631.327 367.437C628.898 366.928 627.684 366.674 626.455 366.522C626.046 366.471 625.635 366.428 625.224 366.394C623.99 366.292 622.75 366.292 620.268 366.292H479.706C457.208 366.292 445.959 366.292 438.073 360.563C435.526 358.712 433.286 356.473 431.436 353.926C425.706 346.04 425.706 334.791 425.706 312.292V54.75C425.706 32.2516 425.706 21.0024 419.977 13.1164C418.126 10.5696 415.887 8.32988 413.34 6.47949C405.454 0.75 394.205 0.75 371.706 0.75H0"
              stroke="url(#paint0_linear_2_17)"
              strokeWidth="1.5"
            />
            <path
              d="M905.857 1476.61V1149.72C905.857 1137 905.857 1130.65 903.514 1125.07C902.743 1123.24 901.791 1121.48 900.673 1119.84C897.275 1114.83 891.944 1111.37 881.282 1104.44L781.968 1039.9C776.05 1036.05 773.091 1034.13 769.824 1032.95C768.739 1032.56 767.633 1032.23 766.51 1031.97C763.129 1031.18 759.6 1031.18 752.543 1031.18H490.82C468.322 1031.18 457.073 1031.18 449.187 1025.45C446.64 1023.6 444.4 1021.36 442.55 1018.81C436.82 1010.92 436.82 999.675 436.82 977.177V866.266C436.82 850.099 436.82 842.016 433.317 835.417C432.171 833.259 430.766 831.249 429.132 829.432C424.138 823.876 416.546 821.1 401.363 815.549L261.779 764.517C216.7 748.036 194.161 739.796 193.255 731.1C192.983 728.493 193.449 725.861 194.6 723.505C198.437 715.649 222.435 715.649 270.431 715.649H343.026C347.814 715.649 350.209 715.649 352.556 716.023C353.337 716.148 354.112 716.303 354.881 716.489C357.191 717.047 359.4 717.969 363.82 719.813L426.78 746.084C431.226 747.939 433.449 748.866 435.773 749.426C436.546 749.612 437.327 749.767 438.112 749.891C440.474 750.264 442.882 750.259 447.7 750.248L847.658 749.319C870.109 749.267 881.335 749.241 889.2 743.51C891.741 741.658 893.975 739.42 895.82 736.875C901.533 728.996 901.533 717.77 901.533 695.319V467.84C901.533 449.243 901.533 439.945 897.174 432.768C895.755 430.432 894.024 428.3 892.028 426.433C885.895 420.697 876.794 418.793 858.591 414.984L631.327 367.437C628.898 366.928 627.684 366.674 626.455 366.522C626.046 366.471 625.635 366.428 625.224 366.394C623.99 366.292 622.75 366.292 620.268 366.292H479.706C457.208 366.292 445.959 366.292 438.073 360.563C435.526 358.712 433.286 356.473 431.436 353.926C425.706 346.04 425.706 334.791 425.706 312.292V54.75C425.706 32.2516 425.706 21.0024 419.977 13.1164C418.126 10.5696 415.887 8.32988 413.34 6.47949C405.454 0.75 394.205 0.75 371.706 0.75H0"
              stroke="url(#paint1_linear_2_17)"
              strokeWidth="1.5"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_2_17"
              x1="395.706"
              y1="668.681"
              x2="711.533"
              y2="668.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#576CBC" />
              <stop offset="1" stopColor="#3558DA" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2_17"
              x1="553.62"
              y1="-19.25"
              x2="553.62"
              y2="1356.61"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="0.129884" stopColor="white" stopOpacity="0" />
              <stop offset="0.886587" stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_2_17"
              x1="0.50002"
              y1="459.725"
              x2="778.658"
              y2="459.725"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#576CBC" />
              <stop offset="0.501613" stopColor="#3558DA" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_2_17"
              x1="0.49999"
              y1="101"
              x2="390.47"
              y2="323.943"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="0.355202" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_2_17">
              <rect
                width="429"
                height="332"
                fill="white"
                transform="translate(-1 -0.5)"
              />
            </clipPath>
          </defs>
        </svg>

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

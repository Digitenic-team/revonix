"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { StyledCircle } from "@/components/styled-circle";
import gsap from "gsap";

interface Icons {
  url: string;
  class: string;
  textTop: string;
  textBottom: string;
}

const ICONS: Icons[] = [
  {
    url: "/assets/images/flag.png",
    class:
      "top-2 left-2 sm:-top-6 sm:-left-14 md:-left-18 lg:-top-10 lg:-left-35 xl:-left-50 text-right",
    textTop: "No clear",
    textBottom: "starting point",
  },
  {
    url: "/assets/images/timer.png",
    class:
      "top-2 right-2 sm:-top-6 sm:-right-15 md:-right-18 lg:-top-10 lg:-right-30 xl:-right-40",
    textTop: "No time to",
    textBottom: "experiment",
  },
  {
    url: "/assets/images/workflow.png",
    class:
      "bottom-2 left-2 sm:-bottom-4 sm:-left-20 md:-left-24 lg:-bottom-8 lg:-left-38 xl:-left-56 text-right",
    textTop: "Too many tools,",
    textBottom: "no direction",
  },
  {
    url: "/assets/images/automation.png",
    class:
      "bottom-2 right-2 sm:-bottom-4 sm:-right-26 md:-right-30 lg:-bottom-6 lg:-right-40 xl:-right-65",
    textTop: "Automations that",
    textBottom: "never ship or break",
  },
];

export function OverwhelmingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<HTMLDivElement[]>([]);
  const innerTextRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect((): (() => void) => {
    const ctx = gsap.context((): void => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(headingRef.current, { y: 20, opacity: 0, duration: 0.6 })
        .from(
          mainContainerRef.current,
          { scale: 0.94, opacity: 0, duration: 0.65 },
          "-=0.3",
        )
        .from(
          iconRefs.current,
          { opacity: 0, scale: 0.85, duration: 0.45, stagger: 0.1 },
          "-=0.4",
        )
        .from(
          innerTextRef.current,
          { y: 8, opacity: 0, duration: 0.5 },
          "-=0.3",
        );
    }, sectionRef);

    return (): void => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-auto mt-30 flex max-w-360 flex-col items-center gap-[4.38rem]"
    >
      {/* Heading */}
      <h1
        ref={headingRef}
        className="bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,_#010101_0%,_#3558DA_100%)] bg-clip-text text-center text-[2rem] font-medium tracking-[-0.025rem] text-transparent sm:text-[2.25rem] lg:text-[2.5rem]"
      >
        AI can be <span className="text-primary">overwhelming</span>
      </h1>

      {/* Concentric shapes container */}
      <div className="flex w-full items-center justify-center md:h-92.25">
        <div
          ref={mainContainerRef}
          className="border-primary relative flex h-56 w-[80%] items-center justify-center rounded-full border-[6.521px] bg-[linear-gradient(180deg,rgba(87,108,188,0.05)_0%,rgba(53,88,218,0.05)_100%)] shadow-[0_0_0_1.63px_#FFF] sm:w-[65%] lg:w-[60%] lg:max-w-[45.59913rem] xl:h-[19.21994rem] xl:w-[95%]"
        >
          {/* Icons */}
          {ICONS.map((icon, idx) => (
            <div
              key={icon.url}
              ref={(el: HTMLDivElement | null): void => {
                if (el) iconRefs.current[idx] = el;
              }}
              className={`absolute z-20 flex items-center gap-4 ${
                idx === 1 || idx === 3 ? "flex-row-reverse" : ""
              } ${icon.class}`}
            >
              {/* Text hidden below sm */}
              <h2 className="text-secondary hidden text-sm leading-tight font-medium tracking-[-0.01675rem] sm:block md:text-base lg:text-xl lg:leading-[1.63025rem] xl:text-[1.67325rem]">
                {icon.textTop}
                <br />
                {icon.textBottom}
              </h2>

              <StyledCircle className="h-20 w-20 lg:h-25 lg:w-25">
                <Image
                  src={icon.url}
                  alt=""
                  width={28}
                  height={28}
                  className="lg:h-10 lg:w-10 xl:h-15 xl:w-15"
                />
              </StyledCircle>
            </div>
          ))}

          {/* Inner rings */}
          <div className="border-primary flex h-42 w-[88%] items-center justify-center rounded-[50.89463rem] border-[6.521px] bg-[linear-gradient(180deg,rgba(87,108,188,0.20)_0%,rgba(53,88,218,0.20)_100%)] shadow-[0_0_0_1.63px_#FFF] sm:w-[78%] lg:w-[90%] xl:h-[16.49113rem] xl:w-[41.87806rem]">
            <div className="border-primary flex h-30 w-[76%] items-center justify-center rounded-full border-[6.521px] bg-[linear-gradient(180deg,rgba(87,108,188,0.40)_0%,rgba(53,88,218,0.40)_100%)] shadow-[0_0_0_1.63px_#FFF] sm:w-[82%] md:rounded-[50.89463rem] xl:h-[13.7645rem] xl:w-[37.91075rem]">
              <div className="flex h-22 w-[80%] items-center justify-center rounded-full border-[3.261px] border-[#FFF] bg-[linear-gradient(180deg,#576CBC_0%,#3558DA_100%)] p-3 sm:w-[80%] md:rounded-[50.89463rem] md:p-0 lg:w-[90%] xl:h-[11.44325rem] xl:w-[34.49913rem]">
                <h2
                  ref={innerTextRef}
                  className="text-center text-base font-medium tracking-[-0.02956rem] text-white sm:text-lg md:text-xl lg:text-3xl xl:text-[2.95481rem]"
                >
                  We cut through that.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

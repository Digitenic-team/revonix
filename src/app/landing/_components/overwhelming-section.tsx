"use client";

import { useRef } from "react";
import Image from "next/image";
import { StyledCircle } from "@/components/styled-circle";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

type Icons = {
  url: string;
  class: string;
  textTop: string;
  textBottom: string;
};

const ICONS: Icons[] = [
  {
    url: "/assets/images/flag.png",
    class:
      "top-2 left-2 sm:-top-6 sm:-left-12 md:-left-14 lg:-top-10 lg:-left-35 xl:-left-30 xl:-top-7 text-right",
    textTop: "No clear",
    textBottom: "starting point",
  },
  {
    url: "/assets/images/timer.png",
    class:
      "top-2 right-2 sm:-top-6 sm:-right-13 md:-right-14 lg:-top-10 lg:-right-30 xl:-right-26 xl:-top-7",
    textTop: "No time to",
    textBottom: "experiment",
  },
  {
    url: "/assets/images/workflow.png",
    class:
      "bottom-2 left-2 sm:-bottom-8 sm:-left-10 md:-left-16 lg:-bottom-8 lg:-left-38 xl:-left-35 text-right xl:-bottom-7",
    textTop: "Too many tools,",
    textBottom: "no direction",
  },
  {
    url: "/assets/images/automation.png",
    class:
      "bottom-2 right-2 sm:-bottom-8 sm:-right-14 md:-right-16 lg:-bottom-6 lg:-right-40 xl:-right-45 xl:-bottom-5",
    textTop: "Automations that",
    textBottom: "never ship or break",
  },
];

export function OverwhelmingSection() {
  const sectionRef = useRef<HTMLElement>(null);

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    (): void => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 50%",
          scrub: true,
        },
      });

      tl.fromTo(
        ".over-heading",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
        },
      )
        .fromTo(
          ".over-container",
          {
            scale: 0.8,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.55,
          },
          "-=0.35",
        )
        .fromTo(
          ".over-icon",
          {
            opacity: 0,
            scale: 0.8,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.45,
            stagger: 0.1,
          },
          "-=0.4",
        )
        .fromTo(
          ".over-inner-text",
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
          },
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="mx-auto mt-30 flex max-w-360 flex-col items-center gap-[4.38rem] px-4"
    >
      {/* Heading */}
      <h1 className="over-heading bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,_#010101_0%,_#3558DA_100%)] bg-clip-text text-center text-[2rem] font-medium tracking-[-0.025rem] text-transparent sm:text-[2.25rem] lg:text-[2.5rem]">
        AI can be <span className="text-primary">overwhelming</span>
      </h1>

      {/* Concentric shapes container */}
      <div className="flex w-full items-center justify-center md:h-92.25">
        <div className="over-container border-primary relative flex h-160 w-full items-center justify-center rounded-full border-[6.521px] bg-[linear-gradient(180deg,rgba(87,108,188,0.05)_0%,rgba(53,88,218,0.05)_100%)] shadow-[0_0_0_1.63px_#FFF] sm:h-60 sm:w-[85%] lg:h-80 lg:w-[60%] lg:max-w-[45.59913rem] xl:h-72 xl:w-full">
          {/* Icons */}
          {ICONS.map((icon: Icons, idx: number) => (
            <div
              key={icon.url}
              className={`over-icon absolute z-20 flex items-center gap-4 ${
                idx === 1 || idx === 3 ? "flex-row-reverse" : ""
              } ${icon.class}`}
            >
              <StyledCircle className="flex gap-5 px-8 py-6">
                <Image
                  src={icon.url}
                  alt=""
                  width={40}
                  height={40}
                  className=""
                />
                <h2 className="text-secondary hidden text-sm leading-tight font-medium tracking-[-0.01675rem] md:text-base lg:text-xl lg:leading-[1.63025rem] xl:text-xl [@media(min-width:490px)]:block">
                  {icon.textTop}
                  <br />
                  {icon.textBottom}
                </h2>
              </StyledCircle>
            </div>
          ))}

          {/* Inner rings */}
          <div className="border-primary flex h-[90%] w-[90%] items-center justify-center rounded-[50.89463rem] border-[6.521px] bg-[linear-gradient(180deg,rgba(87,108,188,0.20)_0%,rgba(53,88,218,0.20)_100%)] shadow-[0_0_0_1.63px_#FFF] sm:h-[86%] sm:w-[92%] lg:h-[88%] lg:w-[92%] xl:h-[90%] xl:w-[95%]">
            <div className="border-primary flex h-[88%] w-[88%] items-center justify-center rounded-full border-[6.521px] bg-[linear-gradient(180deg,rgba(87,108,188,0.40)_0%,rgba(53,88,218,0.40)_100%)] shadow-[0_0_0_1.63px_#FFF] sm:h-[82%] sm:w-[90%] lg:h-[86%] lg:w-[90%] xl:h-[80%] xl:w-[95%]">
              <div className="flex h-[90%] w-[85%] items-center justify-center rounded-full border-[3.261px] border-[#FFF] bg-[linear-gradient(180deg,#576CBC_0%,#3558DA_100%)] p-3 sm:h-[80%] sm:w-[90%] md:rounded-[50.89463rem] md:p-0 lg:h-[85%] lg:w-[80%] xl:h-[80%] xl:w-[94%]">
                <h2 className="over-inner-text text-center text-[38px] font-medium tracking-[-0.02956rem] text-white xl:text-[2.95481rem]">
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

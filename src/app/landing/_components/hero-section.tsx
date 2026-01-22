"use client";

import { useRef } from "react";
import { StyledButton } from "@/components/styled-button";
import Image from "next/image";
import { Navbar } from "./navbar";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(
    (): (() => void) => {
      const mm = gsap.matchMedia();

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        ".hero-heading",
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
      )
        .fromTo(
          ".hero-text",
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
          },
          "-=0.4",
        )
        .fromTo(
          ".hero-button",
          {
            scale: 0.7,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.45,
          },
          "-=0.35",
        );

      mm.add("(min-width: 1024px)", (): void => {
        gsap.to(".hero-card", {
          x: (i: number): number => 80 + i * 40,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      return (): void => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-220 w-full overflow-x-visible bg-[url('/assets/images/background.svg')] bg-cover bg-center bg-no-repeat"
    >
      <Image
        src="/assets/images/vector1.svg"
        width={218}
        height={218}
        className="pointer-events-none absolute top-80 hidden xl:block"
        alt=""
      />
      <Image
        src="/assets/images/vector2.svg"
        width={160}
        height={160}
        className="pointer-events-none absolute top-96 left-120 hidden xl:block"
        alt=""
      />
      <Image
        src="/assets/images/vector3.svg"
        width={218}
        height={218}
        className="pointer-events-none absolute top-75 right-65 hidden xl:block"
        alt=""
      />
      <Image
        src="/assets/images/vector4.svg"
        width={160}
        height={160}
        className="pointer-events-none absolute top-0 right-38 hidden xl:block"
        alt=""
      />

      {/* Navbar */}
      <Navbar />

      <div className="flex min-h-screen flex-col items-center gap-18 self-stretch pt-60">
        <div className="mx-auto flex max-w-360 flex-col items-center gap-10 px-4">
          <div className="flex flex-col items-center gap-4 px-5 md:px-0">
            <h1 className="hero-heading gsap-init justify-between bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,_#010101_0%,_#3558DA_100%)] bg-clip-text text-center text-[32px] leading-9 font-medium text-transparent sm:text-5xl sm:leading-16 md:text-[3.625rem]">
              Your competitor isn’t smarter —
              <br />
              Their team just has AI doing the work.
            </h1>

            <p className="hero-text gsap-init text-secondary text-center text-base font-normal tracking-[-0.01125rem] sm:text-lg md:text-[1.125rem]">
              We help teams cut through AI noise and turn automation into real,
              working systems.
            </p>
          </div>

          <div className="hero-button gsap-init">
            <StyledButton className="py-6">Book a Strategy Call</StyledButton>
          </div>
        </div>
      </div>
    </section>
  );
}

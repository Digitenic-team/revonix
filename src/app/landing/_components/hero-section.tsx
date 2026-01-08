"use client";

import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { StyledButton } from "@/components/styled-button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Navbar } from "./navbar";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

interface IMAGE {
  src: string;
  alt: string;
}

const IMAGES: IMAGE[] = [
  { src: "/assets/images/phone-image.png", alt: "Phone UI" },
  { src: "/assets/images/dashboard-image.png", alt: "Dashboard UI" },
  {
    src: "/assets/images/sound-collection-image.png",
    alt: "Sound Collection",
  },
  { src: "/assets/images/mobile-design-image.png", alt: "Mobile UI" },
];

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const [windowObj, setWindowOjb] = useState<Window | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect((): (() => void) => {
    const ctx = gsap.context((): void => {
      gsap.set(cardsRef.current, {
        opacity: 0,
        y: 24,
        x: 0,
      });

      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      intro
        .from(headingRef.current, {
          y: 28,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          textRef.current,
          {
            y: 18,
            opacity: 0,
            duration: 0.55,
          },
          "-=0.35",
        )
        .from(
          buttonRef.current,
          {
            scale: 0.95,
            opacity: 0,
            duration: 0.45,
          },
          "-=0.3",
        )
        .to(
          cardsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
          },
          "-=0.2",
        );

      cardsRef.current.forEach((card: HTMLDivElement, index: number): void => {
        gsap.to(card, {
          x: 80 + index * 40,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return (): void => ctx.revert();
  }, []);

  useEffect((): void => {
    setWindowOjb(window);
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[url('/assets/images/background.svg')] bg-cover bg-no-repeat"
    >
      {windowObj && windowObj.innerWidth > 990 && (
        <>
          <Image
            src="/assets/images/vector1.svg"
            width={218}
            height={218}
            className="absolute top-95"
            alt="vector 1"
          />
          <Image
            src="/assets/images/vector2.svg"
            width={160}
            height={160}
            className="absolute top-115 left-130"
            alt="vector 2"
          />
          <Image
            src="/assets/images/vector3.svg"
            width={218}
            height={218}
            className="absolute top-95 right-80"
            alt="vector 3"
          />
          <Image
            src="/assets/images/vector4.svg"
            width={160}
            height={160}
            className="absolute right-22"
            alt="vector 4"
          />
        </>
      )}
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-col items-center gap-18 self-stretch pt-18">
        <motion.div
          className="mx-auto flex max-w-360 flex-col items-center gap-10 px-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          <div className="flex flex-col items-center gap-4 px-5 md:px-0">
            <h1
              className="justify-between bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,_#010101_0%,_#3558DA_100%)] bg-clip-text text-center text-4xl font-medium text-transparent sm:text-5xl md:text-[3.625rem]"
              ref={headingRef}
            >
              Your competitor isn’t smarter —
              <br />
              Their team just has AI doing the work.
            </h1>

            <p
              className="text-md text-secondary text-center font-normal tracking-[-0.01125rem] sm:text-lg md:text-[1.125rem]"
              ref={textRef}
            >
              We help teams cut through AI noise and turn automation into real,
              working systems.
            </p>
          </div>

          <div ref={buttonRef}>
            <StyledButton className="py-6">Book a Strategy Call</StyledButton>
          </div>
        </motion.div>

        <section className="flex w-full flex-col flex-wrap items-center justify-center gap-5 overflow-hidden sm:flex-row md:items-start lg:flex-nowrap lg:justify-between lg:gap-5">
          {IMAGES.map((img: IMAGE, index: number) => {
            return (
              <motion.div
                key={img.alt}
                ref={(el: HTMLDivElement | null): void => {
                  if (el) cardsRef.current[index] = el;
                }}
                className={cn(
                  "relative h-60 sm:h-80 md:h-115",
                  index === 0 || index === IMAGES.length - 1
                    ? "md:100 w-65 sm:w-85.5 lg:w-81.5"
                    : "md:100 w-65 sm:w-85.5 lg:w-162.5",
                )}
              >
                <motion.div
                  className={cn(
                    index === 0
                      ? "rounded-4xl lg:rounded-l-none"
                      : index === IMAGES.length - 1
                        ? "rounded-4xl lg:rounded-r-none"
                        : "rounded-4xl",
                    "border-secondary-foreground relative h-full w-full overflow-hidden border",
                  )}
                  whileHover={{ boxShadow: "0 22px 50px rgba(53,88,218,0.18)" }}
                  transition={{ duration: 0.35 }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(270deg,rgba(53,88,218,0)_42.94%,#3558DA_49.26%)] mix-blend-hue" />
                </motion.div>
              </motion.div>
            );
          })}
        </section>
      </div>
    </section>
  );
}

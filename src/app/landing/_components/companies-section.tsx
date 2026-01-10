"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const IMAGES: string[] = [
  "com-1.png",
  "com-2.png",
  "com-3.png",
  "com-4.png",
  "com-5.png",
  "com-6.png",
  "com-7.png",
  "com-8.png",
  "com-9.png",
  "com-10.png",
];

export function CompaniesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    (): void => {
      const logos = gsap.utils.toArray<HTMLElement>(".company-card");

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.to(".companies-heading", {
        y: 0,
        opacity: 1,
        duration: 0.8,
      }).to(
        logos,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: {
            each: 0.06,
            from: "center",
          },
        },
        "-=0.3",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="mx-auto mt-30 flex max-w-360 flex-col items-center gap-[4.38rem] self-stretch px-4"
    >
      {/* Heading */}
      <h1 className="companies-heading gsap-init bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,_#010101_0%,_#3558DA_100%)] bg-clip-text text-center text-[32px] leading-snug font-medium tracking-[-0.02rem] text-transparent sm:text-5xl md:text-[3.5rem]">
        We don’t just work together
        <br />
        —we{" "}
        <span className="text-primary leading-snug font-medium tracking-[-0.02rem]">
          grow{" "}
        </span>
        together.
      </h1>

      {/* Company logos */}
      <div className="flex max-w-208 flex-wrap items-start justify-center gap-3 sm:gap-4 md:gap-5">
        {IMAGES.map((url: string) => (
          <div
            key={url}
            className="company-card gsap-init border-secondary-foreground bg-primary-foreground flex h-28 w-28 flex-col items-center justify-center gap-2.5 rounded-3xl border p-4 sm:h-32 sm:w-32 sm:p-5 md:h-37 md:w-37 md:p-6"
          >
            <div className="flex h-full w-full items-center justify-center">
              <Image
                src={`/assets/images/${url}`}
                alt="company logo"
                width={1000}
                height={1000}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

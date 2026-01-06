"use client";

import { useEffect, useState } from "react";
import { StyledButton } from "@/components/styled-button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Navbar } from "./navbar";

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

export function HeroSection() {
  const [windowObj, setWindowOjb] = useState<Window | null>(null);

  useEffect((): void => {
    setWindowOjb(window);
  }, []);
  return (
    <section className="relative w-full bg-[url('/assets/images/background.svg')] bg-cover bg-no-repeat">
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
        <div className="mx-auto flex max-w-360 flex-col items-center gap-10 px-4">
          <div className="flex flex-col items-center gap-4 px-5 md:px-0">
            <h1 className="justify-between bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,_#010101_0%,_#3558DA_100%)] bg-clip-text text-center text-4xl font-medium text-transparent sm:text-5xl md:text-[3.625rem]">
              Your competitor isn’t smarter —
              <br />
              Their team just has AI doing the work.
            </h1>

            <p className="text-md text-secondary text-center font-normal tracking-[-0.01125rem] sm:text-lg md:text-[1.125rem]">
              We help teams cut through AI noise and turn automation into real,
              working systems.
            </p>
          </div>

          <StyledButton className="py-6">Book a Strategy Call</StyledButton>
        </div>

        <section className="flex w-full flex-col flex-wrap items-center justify-center gap-5 overflow-hidden sm:flex-row md:items-start lg:flex-nowrap lg:justify-between lg:gap-5">
          {IMAGES.map((img: IMAGE, index: number) => {
            return (
              <div
                key={img.alt}
                className={cn(
                  "relative h-60 sm:h-80 md:h-115",
                  index === 0 || index === IMAGES.length - 1
                    ? "md:100 w-65 sm:w-85.5 lg:w-81.5"
                    : "md:100 w-65 sm:w-85.5 lg:w-162.5",
                )}
              >
                <div
                  className={cn(
                    index === 0
                      ? "rounded-4xl lg:rounded-l-none"
                      : index === IMAGES.length - 1
                        ? "rounded-4xl lg:rounded-r-none"
                        : "rounded-4xl",
                    "border-secondary-foreground relative h-full w-full overflow-hidden border",
                  )}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(270deg,rgba(53,88,218,0)_42.94%,#3558DA_49.26%)] mix-blend-hue" />
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
}

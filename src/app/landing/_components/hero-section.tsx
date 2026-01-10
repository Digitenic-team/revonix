"use client";

import { useRef } from "react";
import { StyledButton } from "@/components/styled-button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Navbar } from "./navbar";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

type IMAGE = {
  src: string;
  alt: string;
};

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
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    (): (() => void) => {
      const mm = gsap.matchMedia();

      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      intro
        .to(".hero-heading", {
          y: 0,
          opacity: 1,
          duration: 0.8,
        })
        .to(
          ".hero-text",
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
          },
          "-=0.4",
        )
        .to(
          ".hero-button",
          {
            scale: 1,
            opacity: 1,
            duration: 0.45,
          },
          "-=0.35",
        )
        .to(
          ".hero-card",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
          },
          "-=0.25",
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
            invalidateOnRefresh: true,
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
      className="relative w-full bg-[url('/assets/images/background.svg')] bg-cover bg-center bg-no-repeat"
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

      <div className="flex flex-col items-center gap-18 self-stretch pt-18">
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

        <section className="hidden w-full flex-col flex-wrap justify-center gap-5 overflow-hidden sm:flex-row md:items-start lg:flex lg:flex-nowrap lg:items-center lg:justify-between lg:gap-5">
          {IMAGES.map((img: IMAGE, index: number) => {
            return (
              <div
                key={img.alt}
                className={cn(
                  "hero-card gsap-init relative h-60 sm:h-80 md:h-115",
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

        {/* MOBILE / TABLET ONLY – Swiper */}
        <section className="block w-full overflow-hidden lg:hidden">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={1.15}
            centeredSlides={true}
            spaceBetween={16}
            grabCursor={true}
            slidesOffsetBefore={16}
            slidesOffsetAfter={16}
            className="w-full"
          >
            {IMAGES.map((img: IMAGE, index: number) => (
              <SwiperSlide
                key={img.alt}
                className={cn(
                  index === 0 || index === IMAGES.length - 1
                    ? "w-65 sm:w-85.5"
                    : "w-65 sm:w-85.5",
                )}
              >
                <div className="relative h-60 sm:h-120">
                  <div className="border-secondary-foreground relative h-full w-full overflow-hidden rounded-4xl border">
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
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </section>
  );
}

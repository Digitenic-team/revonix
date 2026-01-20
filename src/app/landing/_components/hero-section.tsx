"use client";

import { useRef } from "react";
import { StyledButton } from "@/components/styled-button";
import Image from "next/image";
import { Navbar } from "./navbar";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { projects } from "@/data/projects";
import { ProjectModalDialog } from "@/app/projects/_components/project-modal-dialog";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const swiperContainerRef = useRef<HTMLElement>(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(
    (): (() => void) => {
      const mm = gsap.matchMedia();

      // Set initial state immediately to prevent flicker
      gsap.set(".hero-card", {
        opacity: 0,
        y: 30,
      });

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
      });

      tl.fromTo(
        ".hero-heading",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
        },
      )
        .fromTo(
          ".hero-text",
          {
            y: 25,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          "-=0.3",
        )
        .fromTo(
          ".hero-button",
          {
            scale: 0.9,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
          },
          "-=0.3",
        )
        .to(
          ".hero-card",
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: "power2.out",
          },
          "-=0.2",
        );

      // Parallax animation - target the swiper container wrapper to avoid conflicts
      mm.add("(min-width: 1024px)", (): void => {
        if (swiperContainerRef.current) {
          gsap.to(swiperContainerRef.current, {
            y: -80,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      });

      // For mobile/tablet, subtle parallax on container
      mm.add("(max-width: 1023px)", (): void => {
        if (swiperContainerRef.current) {
          gsap.to(swiperContainerRef.current, {
            y: -40,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      });

      return (): void => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-visible bg-[url('/assets/images/background.svg')] bg-cover bg-center bg-no-repeat"
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

        {/* Swiper for all screen sizes */}
        <section
          ref={swiperContainerRef}
          className="hero-swiper-container w-full overflow-hidden"
        >
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={16}
            grabCursor={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
              },
              800: {
                slidesPerView: 2,
                spaceBetween: 24,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 20,
                centeredSlides: true,
              },
            }}
            className="w-full overflow-visible"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.slug} className="active:cursor-grab">
                <div className="relative h-60 w-full sm:h-80 md:h-115 lg:h-115">
                  <ProjectModalDialog
                    project={project}
                    className="hero-card relative h-full w-full cursor-pointer overflow-hidden rounded-4xl opacity-0"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </section>
  );
}

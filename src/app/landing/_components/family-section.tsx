"use client";

import { StyledButton } from "@/components/styled-button";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { ScrollTrigger } from "gsap/all";

type Card = {
  image: string;
  heading: string;
  role: string;
  description: string;
};

const CARDS: Card[] = [
  {
    image: "/assets/images/person1.png",
    heading: "João",
    role: "The Builder",
    description: "Obsessed with systems that work. Thinks three steps ahead.",
  },
  {
    image: "/assets/images/person2.png",
    heading: "Marcus",
    role: "The Infrastructure Guy",
    description: "Makes sure everything scales without breaking.",
  },
  {
    image: "/assets/images/person3.png",
    heading: "Sarah",
    role: "The AI Whisperer",
    description: "Turns chaos into automation. Focused on results, not hype.",
  },
  {
    image: "/assets/images/person4.png",
    heading: "Lena",
    role: "The Human One",
    description: "Translates complexity into simplicity and keeps users first.",
  },
  {
    image: "/assets/images/person1.png",
    heading: "João",
    role: "The Builder Guy",
    description: "Obsessed with systems that work. Thinks three steps ahead.",
  },
];

export function FamilySection() {
  const sectionRef = useRef<HTMLElement>(null);

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const cards = gsap.utils.toArray<HTMLElement>(".family-card");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom: 20%",
        },
      });

      tl.fromTo(
        ".family-heading",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      )
        .fromTo(
          ".family-subheading",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.5",
        )
        .fromTo(
          ".family-button",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.4",
        )
        .fromTo(
          cards,
          { y: 30, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.15,
          },
          "-=0.3",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="mt-30 flex w-full flex-col gap-[4.38rem]"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <h1 className="family-heading font-neue bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,#010101_0%,#3558DA_100%)] bg-clip-text text-center text-4xl font-medium text-transparent sm:text-5xl md:text-[3.5rem]">
            Meet the <span className="text-primary">Family</span>
          </h1>
          <p className="family-subheading text-secondary text-center text-[1.125rem]">
            We’re not a typical agency. We’re a small group of people who
            genuinely care about solving real problems.
          </p>
        </div>
        <div className="family-button">
          <StyledButton className="py-6">Join our Team</StyledButton>
        </div>
      </div>

      {/* Swiper Cards */}

      <div className="w-full overflow-x-hidden px-4">
        <Swiper
          spaceBetween={30}
          freeMode
          grabCursor
          breakpoints={{
            0: {
              slidesPerView: 1.1,
            },
            640: {
              slidesPerView: 2.1,
            },
            1024: {
              slidesPerView: 3.1,
            },
            1280: {
              slidesPerView: 4.5,
            },
          }}
        >
          {CARDS.map((card: Card) => (
            <SwiperSlide key={card.role}>
              <div className="family-card flex flex-col gap-5">
                {/* Image (natural height preserved) */}
                <Image
                  src={card.image}
                  width={400}
                  height={432}
                  className="border-secondary-foreground rounded-3xl border"
                  alt={card.heading}
                />

                {/* Name & Role */}
                <div className="flex flex-col gap-1.5">
                  <h1 className="font-neue text-xl font-medium sm:text-2xl">
                    {card.heading}
                  </h1>
                  <h3 className="text-xs uppercase opacity-60 sm:text-sm">
                    {card.role}
                  </h3>
                </div>

                {/* Description */}
                <p className="max-w-60 text-sm sm:text-base">
                  {card.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

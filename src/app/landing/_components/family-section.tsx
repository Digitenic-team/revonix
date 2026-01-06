"use client";

import { StyledButton } from "@/components/styled-button";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

interface Card {
  image: string;
  heading: string;
  role: string;
  description: string;
}

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
    role: "The Builder",
    description: "Obsessed with systems that work. Thinks three steps ahead.",
  },
];

export function FamilySection() {
  return (
    <section className="mt-30 flex w-full flex-col gap-[4.38rem]">
      {/* Header */}
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-neue bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,#010101_0%,#3558DA_100%)] bg-clip-text text-center text-4xl font-medium text-transparent sm:text-5xl md:text-[3.5rem]">
            Meet the <span className="text-primary">Family</span>
          </h1>
          <p className="text-secondary text-center text-[1.125rem]">
            We’re not a typical agency. We’re a small group of people who
            genuinely care about solving real problems.
          </p>
        </div>
        <StyledButton className="py-6">Join our Team</StyledButton>
      </div>

      {/* Swiper Cards */}
      <div className="w-full px-4 sm:px-8 lg:ps-60">
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
            <SwiperSlide key={card.heading}>
              <div className="flex flex-col gap-5">
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
                <p className="max-w-[15rem] text-sm sm:text-base">
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

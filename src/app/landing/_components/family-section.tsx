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
            Meet the <span className="text-[#3558DA]">Family</span>
          </h1>
          <p className="text-center text-[1.125rem] text-[#010101]">
            We’re not a typical agency. We’re a small group of people who
            genuinely care about solving real problems.
          </p>
        </div>
        <StyledButton className="py-6">Join our Team</StyledButton>
      </div>

      {/* Swiper Cards */}
      <div className="w-full ps-60">
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          freeMode={true}
          grabCursor={true}
        >
          {CARDS.map((card: Card) => (
            <SwiperSlide
              key={card.heading}
              style={{ width: "calc((100% - 30px * 4) / 4.5)" }}
            >
              <div className="flex flex-col gap-5">
                <Image
                  src={card.image}
                  width={400}
                  height={432}
                  className="rounded-3xl border border-[#EEE]"
                  alt={card.heading}
                />
                <div className="flex flex-col gap-1.5">
                  <h1 className="font-neue text-2xl font-medium">
                    {card.heading}
                  </h1>
                  <h3 className="text-sm uppercase opacity-60">{card.role}</h3>
                </div>
                <p className="w-60 text-[1rem]">{card.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

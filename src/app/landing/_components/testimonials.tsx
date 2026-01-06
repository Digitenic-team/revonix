"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "@/lib/utils";

interface Card {
  text: string;
  imageUrl: string;
  name: string;
  position: string;
}

interface Testimonial {
  text: string;
  name: string;
  role: string;
}

const CARDS: Card[] = [
  {
    text: '"I am truly impressed with their remarkable efficiency in communication. They consistently demonstrate a quick response time, ensuring that all inquiries are addressed promptly and thoroughly."',
    imageUrl: "founder-1.png",
    name: "Ryan Lee",
    position: "FOUNDER",
  },
  {
    text: '"The individual demonstrated outstanding communication skills and maintained a proactive attitude that consistently went above and beyond expectations."',
    imageUrl: "founder-2.png",
    name: "Ryan Lee",
    position: "FOUNDER",
  },
  {
    text: '"The remarkable ability of their team to not only anticipate potential challenges but also to provide innovative and effective solutions is truly commendable and sets them apart in their field."',
    imageUrl: "founder-3.png",
    name: "Evelyn Hayes",
    position: "FOUNDER",
  },
];

const testimonials: Testimonial[] = [
  {
    text: "They move with impressive speed and are incredibly easy to collaborate with.",
    name: "Navid Nathoo",
    role: "Founder",
  },
  {
    text: "Their attention to detail and commitment to quality exceeded our expectations.",
    name: "Sarah Johnson",
    role: "CEO",
  },
  {
    text: "Working with this team was seamless from start to finish.",
    name: "Michael Lee",
    role: "Product Manager",
  },
];

export function TestimonialsSection() {
  return (
    <section className="mx-auto mt-30 flex max-w-360 flex-col items-center gap-[4.38rem] self-stretch px-4">
      <h1 className="bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,_#010101_0%,_#3558DA_100%)] bg-clip-text text-center text-4xl font-medium tracking-[-0.035rem] text-transparent sm:text-5xl md:text-[3.5rem]">
        Don’t take our{" "}
        <span className="text-primary font-medium tracking-[-0.035rem]">
          word for it
        </span>
      </h1>

      <Swiper className="w-full" loop spaceBetween={24}>
        {testimonials.map((item) => (
          <SwiperSlide key={item.role}>
            <div className="flex min-h-110 self-stretch">
              {/* Left Image */}
              <div className="relative flex-1">
                <Image
                  src="/assets/images/slider1.png"
                  fill
                  alt="Slider Image"
                  className="rounded-3xl object-cover"
                />
              </div>

              {/* Right Content */}
              <div className="flex flex-1 flex-col justify-between self-stretch rounded-3xl bg-white p-12">
                <Image
                  src="/assets/images/quotes.png"
                  width={21}
                  height={18}
                  alt="Quotes Image"
                />

                <h1 className="bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,_#010101_0%,_#3558DA_100%)] bg-clip-text text-[2.25rem] leading-normal font-medium tracking-[-0.0225rem] text-transparent">
                  {item.text}
                </h1>

                <div className="flex items-center gap-3.75 self-stretch">
                  <Image
                    src="/assets/images/profile1.png"
                    width={48}
                    height={48}
                    alt="Profile Image"
                  />

                  <div className="flex flex-1 flex-col">
                    <h3 className="text-secondary text-[1.25rem] font-medium tracking-[-0.0125rem]">
                      {item.name}
                    </h3>
                    <p className="text-secondary text-[0.875rem] font-normal uppercase opacity-60">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <section className="slef-stretch flex flex-wrap items-start gap-5">
        {CARDS.map((card: Card) => (
          <div
            key={card.text}
            className={cn(
              "bg-primary-foreground flex min-h-90 flex-1 flex-col items-start justify-between rounded-4xl p-6 sm:min-w-80",
            )}
          >
            <p className="text-secondary font-medium tracking-[-0.01375rem] md:text-[1.375rem]">
              {card.text}
            </p>

            <div className="flex items-center gap-3.75 self-stretch">
              <Image
                src={`/assets/images/${card.imageUrl}`}
                width={48}
                height={48}
                alt="founder images"
              />
              <div className="align-start flex flex-1 flex-col gap-1">
                <h1 className="text-secondary font-medium tracking-[-0.0125rem] sm:text-[1.25rem]">
                  {card.name}
                </h1>
                <h3 className="text-secondary text-[0.875rem] font-normal uppercase opacity-60">
                  {card.position}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}

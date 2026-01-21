"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { ScrollTrigger } from "gsap/all";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Card = {
  text: string;
  imageUrl: string;
  name: string;
  position: string;
};

type Testimonial = {
  text: string;
  name: string;
  role: string;
};

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
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const totalSlides = testimonials.length;

  const sectionRef = useRef<HTMLElement>(null);
  const founderCardsRef = useRef<HTMLElement>(null);
  const founderCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy(); // destroy old navigation
      swiperInstance.navigation.init(); // re-init
      swiperInstance.navigation.update(); // update Swiper
    }
  }, [swiperInstance]);

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const swiperSlides = gsap.utils.toArray<HTMLElement>(
        ".testimonial-slide-content",
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animate heading
      tl.fromTo(
        ".testimonial-heading",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      );

      // Animate Swiper slides (all together, staggered a bit)
      if (swiperSlides.length) {
        tl.fromTo(
          swiperSlides,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.15,
          },
          "-=0.4",
        );
      }

      // animate on hover
      const founderCards = gsap.utils.toArray<HTMLElement>(".founder-card");
      founderCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -5,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            duration: 0.3,
            ease: "power3.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: "0 0 0 rgba(0,0,0,0)",
            duration: 0.3,
            ease: "power3.out",
          });
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="mx-auto mt-46 flex max-w-360 flex-col items-center gap-[4.38rem] self-stretch px-4"
    >
      <h1 className="testimonial-heading bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,_#010101_0%,_#3558DA_100%)] bg-clip-text text-center text-4xl font-medium tracking-[-0.035rem] text-transparent sm:text-5xl md:text-[3.5rem]">
        Don’t take our{" "}
        <span className="text-primary font-medium tracking-[-0.035rem]">
          word for it
        </span>
      </h1>

      <div className="relative w-full">
        <div className="mt-8 flex items-center gap-4">
          <button
            type="button"
            ref={prevRef}
            className="hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-200 hover:scale-110 hover:bg-white md:flex"
          >
            <ArrowLeft />
          </button>
          <Swiper
            className="relative w-full"
            loop
            onSwiper={setSwiperInstance}
            spaceBetween={24}
            onSlideChange={(swiper): void => {
              setActiveIndex(swiper.realIndex);
            }}
            modules={[Navigation]}
          >
            {testimonials.map((item: Testimonial) => (
              <SwiperSlide key={item.role}>
                <div className="testimonial-slide-content flex min-h-112 w-full cursor-pointer flex-col gap-4 active:cursor-grab md:h-auto md:flex-row md:gap-0">
                  {/* Left Image */}
                  <div className="relative min-h-100 w-full lg:h-auto lg:flex-1">
                    <Image
                      src="/assets/images/slider1.png"
                      fill
                      alt="Slider Image"
                      className="rounded-2xl object-cover lg:rounded-3xl"
                      priority
                    />
                  </div>

                  {/* Right Content */}
                  <div className="flex w-full flex-col justify-between rounded-2xl bg-white p-6 sm:p-8 lg:flex-1 lg:rounded-3xl lg:p-12">
                    {/* Quote Icon */}
                    <Image
                      src="/assets/images/quotes.png"
                      width={21}
                      height={18}
                      alt="Quotes Image"
                    />

                    {/* Text */}
                    <h1 className="my-4 bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,_#010101_0%,_#3558DA_100%)] bg-clip-text text-lg leading-normal font-medium tracking-[-0.0225rem] text-transparent sm:text-xl md:text-2xl lg:text-[2.25rem]">
                      {item.text}
                    </h1>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <Image
                        src="/assets/images/profile1.png"
                        width={48}
                        height={48}
                        alt="Profile Image"
                      />

                      <div className="flex flex-col">
                        <h3 className="text-secondary text-base font-medium sm:text-lg">
                          {item.name}
                        </h3>
                        <p className="text-secondary text-xs uppercase opacity-60 sm:text-sm">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            type="button"
            ref={nextRef}
            className="hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-200 hover:scale-110 hover:bg-white md:flex"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className="flex w-full items-center gap-4">
        {/* Progress line */}
        <div className="bg-primary-foreground relative h-0.5 flex-1 overflow-hidden rounded-full">
          <div
            className="bg-primary absolute top-0 left-0 h-full transition-all duration-300 ease-out"
            style={{
              width: `${((activeIndex + 1) / totalSlides) * 100}%`,
            }}
          />
        </div>

        {/* Counter */}
        <div className="text-secondary flex items-center gap-1 text-sm tracking-widest">
          <span>{String(activeIndex + 1).padStart(2, "0")}</span>
          <span className="opacity-40">/</span>
          <span className="opacity-40">
            {String(totalSlides).padStart(2, "0")}
          </span>
        </div>
      </div>

      <section
        ref={founderCardsRef}
        className="flex flex-col flex-wrap items-start gap-5 self-stretch sm:flex-row"
      >
        {CARDS.map((card: Card, idx: number) => (
          <div
            key={card.text}
            ref={(el: HTMLDivElement | null): void => {
              if (el) founderCardRefs.current[idx] = el;
            }}
            className={cn(
              "founder-card bg-primary-foreground flex min-h-90 flex-1 flex-col items-start justify-between rounded-4xl p-6 sm:min-w-80",
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

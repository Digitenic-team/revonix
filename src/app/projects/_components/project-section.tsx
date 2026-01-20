"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function ProjectSection({ title, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={ref}
      className="relative mx-auto mt-30 flex max-w-360 flex-col items-center gap-[4.38rem] self-stretch px-4"
    >
      <h2 className="bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,_#010101_0%,_#3558DA_100%)] bg-clip-text text-center text-[32px] font-medium tracking-[-0.035rem] text-transparent sm:text-5xl md:text-[3.5rem]">
        {title}
      </h2>

      <div className="w-full max-w-4xl">
        <div className="text-secondary text-[1.125rem] leading-relaxed font-normal tracking-[-0.01125rem]">
          {children}
        </div>
      </div>
    </section>
  );
}

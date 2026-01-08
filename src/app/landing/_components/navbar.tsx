"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { StyledButton } from "@/components/styled-button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const LINKS: string[] = ["Services", "Projects", "Process", "Reviews"];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.set([".nav-logo", ".nav-link", ".nav-button"], {
          opacity: 0,
          y: -12,
          willChange: "transform, opacity",
        });

        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from(navRef.current, {
            y: -28,
            opacity: 0,
            duration: 0.6,
          })
          .to(".nav-logo", {
            opacity: 1,
            y: 0,
            duration: 0.35,
          })
          .to(
            ".nav-link",
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              stagger: 0.08,
            },
            "-=0.15",
          )
          .to(
            ".nav-button",
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
            },
            "-=0.1",
          );
      });

      return () => mm.revert();
    },
    { scope: navRef },
  );

  return (
    <section className="relative mx-auto flex max-w-360 items-center justify-center gap-8 px-6 pt-2.5">
      <nav
        ref={navRef}
        className="border-secondary-foreground flex w-full items-center justify-between gap-6 rounded-full border-b bg-white px-4 py-3 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] md:w-auto"
      >
        {/* Logo */}
        <Image
          src="/assets/images/revonix-logo.png"
          width={124}
          height={26}
          className="nav-logo cursor-pointer"
          priority
          alt="Revonix Logo"
        />

        {/* Links - desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link: string) => (
            <Link
              key={link}
              href="#"
              className="text-secondary nav-link text-base font-medium tracking-[-0.01rem]"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Button - desktop */}
        <div className="nav-button hidden md:block">
          <StyledButton className="py-6">Get Started</StyledButton>
        </div>

        {/* Hamburger menu - mobile */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 focus:outline-none"
          >
            {/* Hamburger / Cross */}
            <span
              className={`block h-0.5 w-6 transform bg-black transition duration-300 ${
                isOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transform bg-black transition duration-300 ${
                isOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>
    </section>
  );
}

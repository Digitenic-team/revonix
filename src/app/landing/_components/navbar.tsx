"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { StyledButton } from "@/components/styled-button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type NavLink = {
  title: string;
  link: string;
};

const LINKS: NavLink[] = [
  {
    title: "Services",
    link: "#services",
  },
  {
    title: "Process",
    link: "#process",
  },
  {
    title: "Reviews",
    link: "#reviews",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);

  useGSAP(
    (): (() => void) => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", (): void => {
        gsap
          .timeline({
            defaults: {
              ease: "power3.out",
              duration: 0.35,
            },
          })
          .to(navRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.6,
          })
          .to(".nav-logo", { opacity: 1, y: 0 }, "-=0.3")
          .to(".nav-link", { opacity: 1, y: 0, stagger: 0.08 }, "-=0.25")
          .to(".nav-button", { opacity: 1, y: 0 }, "-=0.2");
      });

      return () => mm.revert();
    },
    { scope: navRef },
  );

  return (
    <section className="relative mx-auto flex max-w-360 items-center justify-center gap-8 px-6 pt-2.5">
      <nav
        ref={navRef}
        className="border-secondary-foreground gsap-init flex w-full items-center justify-between gap-6 rounded-full border-b bg-white p-3 pl-6 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] md:w-auto"
      >
        {/* Hamburger - mobile */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={(): void => setIsOpen(!isOpen)}
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`block h-0.5 w-6 bg-black transition ${
                isOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition ${
                isOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Logo */}
        <Image
          src="/assets/images/revonix-logo.png"
          width={124}
          height={26}
          priority
          alt="Revonix Logo"
          className="nav-logo gsap-init ml-auto cursor-pointer md:block [@media(min-width:400px)]:ml-0"
        />

        {/* Links - desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link: NavLink) => (
            <Link
              key={link.link}
              href={link.link}
              className="nav-link gsap-init text-secondary text-base font-medium tracking-[-0.01rem]"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Button */}
        <div className="nav-button gsap-init hidden md:block [@media(min-width:400px)]:block">
          <StyledButton className="py-6">Get Started</StyledButton>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 z-50 w-full rounded-b-3xl border border-[#EEE] bg-white p-6 shadow-lg md:hidden">
          {LINKS.map((link: NavLink) => (
            <Link
              key={link.title}
              href={link.link}
              className="block w-full py-2 text-center text-base font-medium text-[#010101]"
              onClick={(): void => setIsOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          <StyledButton className="mt-4 w-full py-3">Get Started</StyledButton>
        </div>
      )}
    </section>
  );
}

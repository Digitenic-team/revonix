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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navRef = useRef<HTMLElement>(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(
    (): void => {
      const mm = gsap.matchMedia();
      const q = gsap.utils.selector(navRef);

      // MOBILE
      mm.add("(max-width: 767px)", (): void => {
        const tl = gsap.timeline({
          defaults: {
            duration: 0.8,
            ease: "power3.out",
          },
        });

        tl.fromTo(
          navRef.current,
          {
            y: -80,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
          },
        )
          .from(
            q(".nav-logo"),
            {
              y: 12,
              opacity: 0,
            },
            "-=0.15",
          )
          .from(
            q(".nav-button"),
            {
              y: 12,
              opacity: 0,
            },
            "-=0.25",
          );
      });

      // DESKTOP
      mm.add("(min-width: 768px)", (): void => {
        const tl = gsap.timeline({
          defaults: {
            ease: "power3.out",
            duration: 0.8,
          },
        });

        tl.fromTo(
          navRef.current,
          {
            y: -80,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
          },
        )
          .from(
            q(".nav-logo"),
            {
              y: 12,
              opacity: 0,
            },
            "-=0.2",
          )
          .from(
            q(".nav-link"),
            {
              y: 12,
              opacity: 0,
              stagger: 0.08,
            },
            "-=0.25",
          )
          .from(
            q(".nav-button"),
            {
              y: 12,
              opacity: 0,
            },
            "-=0.25",
          );
      });
    },
    { scope: navRef },
  );

  return (
    <section className="relative mx-auto flex max-w-360 items-center justify-center gap-8 px-6 pt-2.5">
      <nav
        ref={navRef}
        className="border-secondary-foreground gsap-init flex w-full items-center justify-between gap-6 rounded-full border-b bg-white p-3 pl-6 opacity-100 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] md:w-auto"
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
        <Link href="/landing">
          <Image
            src="/assets/images/revonix-logo.png"
            width={90}
            height={26}
            priority
            alt="Revonix Logo"
            className="nav-logo ml-auto cursor-pointer md:block [@media(min-width:400px)]:ml-0"
          />
        </Link>

        {/* Links - desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link: NavLink) => (
            <Link
              key={link.link}
              href={link.link}
              className="nav-link text-secondary text-base font-medium tracking-[-0.01rem]"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Button */}
        <div className="nav-button hidden md:block [@media(min-width:400px)]:block">
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

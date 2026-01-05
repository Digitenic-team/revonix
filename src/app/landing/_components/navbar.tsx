"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { StyledButton } from "@/components/styled-button";

const LINKS: string[] = ["Services", "Projects", "Process", "Reviews"];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative mx-auto flex max-w-360 items-center justify-center gap-8 px-6 pt-2.5">
      <nav className="border-secondary-foreground flex w-full items-center justify-between gap-6 rounded-full border-b bg-white px-4 py-3 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] md:w-auto">
        {/* Logo */}
        <Image
          src="/assets/images/revonix-logo.png"
          width={124}
          height={26}
          className="cursor-pointer"
          alt="Revonix Logo"
        />

        {/* Links - desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link}
              href="/#"
              className="text-secondary text-base font-medium tracking-[-0.01rem]"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Button - desktop */}
        <div className="hidden md:block">
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

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="border-secondary-foreground absolute top-full left-0 z-50 w-full rounded-b-3xl border bg-white p-6 shadow-lg md:hidden">
          {LINKS.map((link) => (
            <Link
              key={link}
              href="/#"
              className="text-secondary block w-full py-2 text-center text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </Link>
          ))}
          <StyledButton className="mt-4 w-full py-3">Get Started</StyledButton>
        </div>
      )}
    </section>
  );
}

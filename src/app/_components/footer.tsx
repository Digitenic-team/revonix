"use client";

import { BOOKING_URL } from "@/lib/constants";
import { StyledButton } from "@/components/styled-button";
import { StyledButtonLight } from "@/components/styled-button-light";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

type FooterLink = {
  label: string;
  /** Omit to render as plain text — used for entries with no destination yet. */
  href?: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const footerSections: FooterSection[] = [
  {
    title: "Services",
    links: [
      { label: "AI & Intelligent Automation", href: "/#services" },
      { label: "Low-Code Development", href: "/#services" },
      { label: "Custom Web & Mobile Apps", href: "/#services" },
      { label: "Workflow Automation", href: "/#services" },
      { label: "AI Agents & Decision Systems", href: "/#services" },
    ],
  },
  {
    title: "Company",
    links: [{ label: "Case Studies", href: "/case-studies" }],
  },
  {
    title: "Contact",
    links: [{ label: "hello@revonix.ai", href: "mailto:hello@revonix.ai" }],
  },
];

export function Footer() {
  const heroRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLElement>(null);

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 85%",
          scrub: true,
        },
      });

      if (heroRef.current) {
        tl.from(heroRef.current, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      }

      if (linksRef.current) {
        const linkBlocks = linksRef.current.querySelectorAll(
          "div.flex-col > h2, div.flex-col > p, .footer-link",
        );
        gsap.from(linkBlocks, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: linksRef.current,
            start: "top 90%",
          },
        });
      }
    },
    { scope: heroRef },
  );

  return (
    <footer className="mx-auto mt-46 flex max-w-360 flex-col items-start gap-[4.38rem] self-stretch overflow-hidden px-4">
      <section
        ref={heroRef}
        className="relative flex items-center justify-center gap-25 self-stretch overflow-hidden rounded-[1.875rem] bg-[linear-gradient(180deg,#010101_3.79%,#3558DA_100%)] p-20 shadow-[0_51px_51px_0_rgba(54,89,218,0.09),0_13px_28px_0_rgba(54,89,218,0.10)]"
      >
        <Image
          src="/assets/images/footer-background.png"
          alt="Background"
          fill
          className="absolute inset-0 object-cover mix-blend-color-burn"
          priority
        />

        <Image
          src="/assets/images/footer-line-1.png"
          width={100}
          height={100}
          className="absolute bottom-10 left-41"
          alt="Footer line"
        />

        <Image
          src="/assets/images/footer-line-2.png"
          width={105}
          height={105}
          className="absolute top-0 right-120"
          alt="Footer line"
        />

        <div className="flex flex-1 flex-col items-center justify-center gap-8 self-stretch">
          <div className="flex flex-col items-center gap-4 self-stretch">
            <h1 className="max-w-156 text-center text-4xl leading-18 font-medium tracking-[-0.035rem] text-white sm:text-5xl md:text-[3.5rem]">
              Let’s Simplify Your Work With Technology
            </h1>

            <p className="max-w-115 text-center font-normal tracking-[-0.01125rem] text-white sm:text-[1.125rem]">
              If your operations feel slow, manual, or fragmented—let’s talk
              about what’s actually possible.
            </p>
          </div>
          <StyledButtonLight
            href={BOOKING_URL}
            className="relative py-6 text-sm"
          >
            Book a Strategy Call
          </StyledButtonLight>
        </div>
      </section>
      <section
        ref={linksRef}
        className="flex flex-col items-start gap-15.5 self-stretch pb-5"
      >
        {/* Top Section */}
        <div className="flex flex-col flex-wrap items-start justify-between gap-12 self-stretch py-4 md:items-start lg:flex-row">
          {/* Left Side */}
          <div className="flex flex-col items-start gap-4 md:gap-12.5">
            <Link href="/">
              <Image
                src="/assets/images/footer-logo.png"
                width={180}
                height={38}
                alt="Footer logo"
              />
            </Link>
            <div className="flex flex-col items-start gap-4">
              <p className="text-secondary max-w-sm font-normal tracking-[-0.0125rem] opacity-60 sm:text-[1.25rem]">
                We help teams cut through AI noise and turn automation into
                real, working systems.
              </p>
              <StyledButton href={BOOKING_URL} className="py-6">
                Get Started
              </StyledButton>
            </div>
          </div>

          {/* Right Side - Footer Links */}
          <div className="mt-6 flex flex-col items-start gap-18 sm:mt-0 sm:flex-row sm:items-start">
            {footerSections.map((section: FooterSection) => (
              <div
                key={section.title}
                className="flex flex-col items-start gap-2.5"
              >
                <h2 className="text-secondary text-center text-[1.125rem] font-medium tracking-[-0.01125rem]">
                  {section.title}
                </h2>
                {section.links.map((link: FooterLink) =>
                  link.href ? (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="footer-link text-secondary text-center text-[1rem] font-normal tracking-[-0.01rem] opacity-60 transition-opacity hover:opacity-100"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <p
                      key={link.label}
                      className="text-secondary text-center text-[1rem] font-normal tracking-[-0.01rem] opacity-60"
                    >
                      {link.label}
                    </p>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col items-start gap-2.5 self-stretch border-t-2 border-gray-200 pt-4">
          <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-secondary text-center text-sm font-normal tracking-[-0.01rem] opacity-60 sm:text-[1rem]">
              © Revonix 2025. All rights reserved.
            </p>
            {/* Hidden until these pages exist — restore once they have destinations.
            <div className="flex items-center gap-8">
              <p className="text-secondary text-center text-sm font-normal tracking-[-0.01rem] opacity-60 sm:text-[1rem]">
                Privacy Policy
              </p>
              <p className="text-secondary text-center text-sm font-normal tracking-[-0.01rem] opacity-60 sm:text-[1rem]">
                Terms of Service
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </footer>
  );
}

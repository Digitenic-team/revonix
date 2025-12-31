import Image from "next/image";
import Link from "next/link";
import { StyledButton } from "@/components/styled-button";

const LINKS: string[] = ["Services", "Projects", "Process", "Reviews"];

export function Navbar() {
  return (
    <section className="mx-auto flex max-w-360 items-center justify-center gap-8 px-25 pt-2.5">
      <nav className="flex items-center gap-13 rounded-[624.9375rem] border-b border-[#EEE] bg-white py-3 pr-3 pl-6 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
        <Image
          src="/assets/images/revonix-logo.png"
          width={124}
          height={26}
          className="cursor-pointer"
          alt="Revonix Logo"
        />

        <div className="flex items-center gap-8">
          {LINKS.map((link: string) => (
            <Link
              key={link}
              href="/#"
              className="text-center text-base font-medium tracking-[-0.01rem] text-[#010101]"
            >
              {link}
            </Link>
          ))}
        </div>

        <StyledButton className="py-6">Get Started</StyledButton>
      </nav>
    </section>
  );
}

import { StyledButtonLight } from "@/components/styled-button-light";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { StyledButton } from "@/components/styled-button";

interface Cards {
  icon: string;
  heading: string;
  description: string;
  icons: string[];
}

const CARDS: Cards[] = [
  {
    icon: "ai-book.png",
    heading: "AI & Intelligent Automation",
    description:
      "Decision systems, workflow automation, and AI agents embedded directly into your operations",
    icons: ["openai-icon.png", "claude-icon.png", "vectorai-icon.png"],
  },
  {
    icon: "code-icon.png",
    heading: "Low-Code Development",
    description:
      "Bubble.io and rapid prototyping to validate ideas fast—without technical debt.",
    icons: ["bubble-icon.png", "quickbase-icon.png", "group-icon.png"],
  },
  {
    icon: "custom-code.png",
    heading: "Custom Web & Mobile Apps",
    description:
      "Purpose-built applications that make your AI systems usable by your team and customers.",
    icons: ["danjo.png", "aws.png", "react.png"],
  },
];

export function TechnologySection() {
  return (
    <section className="mx-auto mt-30 flex max-w-456 items-center justify-center">
      <div className="relative mx-4 flex w-full flex-col items-center justify-between gap-30 rounded-[2.5rem] bg-[linear-gradient(180deg,rgba(1,1,1,1)_0%,#3558DA_100%)] bg-cover bg-center p-[6.25rem_5rem] shadow-[0_51px_51px_rgba(54,89,218,0.09),0_13px_28px_rgba(54,89,218,0.1)] xl:flex-row xl:gap-50">
        <Image
          src="/assets/images/technology-background.png"
          alt="Background"
          fill
          className="absolute inset-0 object-cover mix-blend-color-burn"
          priority
        />
        <div className="mx-auto flex max-w-200 flex-1 flex-col items-center gap-6 self-stretch xl:mx-0 xl:max-w-130 xl:shrink-0 xl:items-start">
          <div className="flex flex-1 flex-col items-center gap-4 self-stretch text-center xl:items-start">
            <h1 className="text-[3.5rem] leading-normal font-medium tracking-[-0.035rem] text-white xl:text-left">
              Technology that quietly does the work for your team
            </h1>
            <p className="text-[1.125rem] leading-normal font-normal tracking-[-0.01125rem] text-white">
              Systems that replace manual work and actually get used.
            </p>
          </div>
          <StyledButtonLight className="py-6">
            Book a Strategy Call
          </StyledButtonLight>
        </div>

        <div className="relative flex w-full flex-col items-center gap-5 xl:max-w-148.75 xl:shrink-0 xl:items-start">
          <Image
            src="/assets/images/top-vector-1.png"
            width={50}
            height={100}
            className="absolute -top-16 -left-10"
            alt="Top Vector"
          />
          <Image
            src="/assets/images/bottom-vector-2.png"
            width={2}
            height={745}
            className="absolute -bottom-8 -left-[1.8rem]"
            alt="Bottom Vector"
          />
          {CARDS.map((card: Cards, idx: number) => (
            <div
              key={card.icon}
              className={cn(
                idx === 1
                  ? "bg-white"
                  : "bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] shadow-[0_11px_24px_rgba(55,90,217,0.1)]",
                "flex max-w-200 flex-col items-start justify-center gap-8 self-stretch rounded-3xl border border-white p-6 shadow-[0_11px_24px_rgba(55,90,217,0.1)] xl:w-148",
              )}
            >
              <div className="flex flex-col items-start gap-4 self-stretch">
                <div className="flex items-center gap-3">
                  <Image
                    src={`/assets/images/${card.icon}`}
                    width={32}
                    height={32}
                    alt="main icon"
                  />
                  <h1
                    className={cn(
                      idx === 1 ? "text-black" : "text-white",
                      "text-[1.75rem] leading-normal font-medium tracking-[-0.0175rem]",
                    )}
                  >
                    {card.heading}
                  </h1>
                </div>
                <p
                  className={cn(
                    idx === 1 ? "text-black opacity-60" : "text-white",
                    "w-[24rem] text-[1.125rem] leading-normal font-normal tracking-[-0.01125rem]",
                  )}
                >
                  {card.description}
                </p>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-4">
                  {card.icons.map((icon: string) => (
                    <Image
                      key={icon}
                      src={`/assets/images/${icon}`}
                      width={32}
                      height={32}
                      alt="icons"
                    />
                  ))}
                </div>

                {idx === 1 && (
                  <StyledButton className="px-10 py-5.5">
                    Learn More
                  </StyledButton>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

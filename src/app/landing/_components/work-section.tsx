import Image from "next/image";
import { cn } from "@/lib/utils";

interface Cards {
  icon: string;
  heading: string;
  description: string;
}

const CARDS: Cards[] = [
  {
    icon: "jar-icon.png",
    heading: "Listen to where your real bottleneck is",
    description:
      "Pay close attention to identify where your true bottleneck lies in the process. Understanding this will help you streamline operations effectively.",
  },
  {
    icon: "terminal-icon.png",
    heading: "Design the right solution — AI, low-code, or custom",
    description:
      "It's essential to design the right solution tailored to your needs, whether that involves leveraging AI technology, utilizing low-code platforms, or creating a custom-built application.",
  },
  {
    icon: "users-icon.png",
    heading: "Build something your team uses immediately",
    description:
      "Focus on building a solution that your team can start using right away, ensuring immediate benefits and enhancing productivity from the get-go.",
  },
  {
    icon: "reload-icon.png",
    heading: "Refine based on how people actually work",
    description:
      "Continuously refine your approach based on how people actually work, gathering feedback and making adjustments to better align with their needs and workflows.",
  },
];

export function WorkSection() {
  return (
    <section className="mx-auto mt-30 flex max-w-360 flex-col items-center gap-[4.38rem] self-stretch">
      <h1 className="font-neue bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,#010101_0%,#3558DA_100%)] bg-clip-text text-center text-4xl leading-normal font-medium tracking-[-0.035rem] text-transparent sm:text-5xl md:text-[3.5rem]">
        How we{" "}
        <span className="font-neue text-pirmary leading-normal font-medium tracking-[-0.035rem]">
          work
        </span>
      </h1>

      <div className="relative flex w-full max-w-229.5 flex-col flex-wrap items-start gap-10 px-4 lg:flex-nowrap">
        <Image
          src="/assets/images/main-vector-1.png"
          width={520}
          height={426}
          className="absolute -top-10 -left-22 hidden xl:block"
          alt="main vector blue 1"
        />
        <Image
          src="/assets/images/main-vector-2.png"
          width={1000}
          height={500}
          className="absolute top-3 right-[2.5] hidden xl:block"
          alt="main vector blue 1"
        />

        {CARDS.map((card: Cards, idx: number) => (
          <div
            key={card.icon}
            className={cn(
              idx === 0
                ? "border border-[rgba(53,88,218,0.10)] bg-white shadow-[0_275px_77px_rgba(55,90,217,0),0_176px_70px_rgba(55,90,217,0.01),0_99px_59px_rgba(55,90,217,0.05),0_44px_44px_rgba(55,90,217,0.09),0_11px_24px_rgba(55,90,217,0.10)]"
                : "border-secondary-foreground bg-primary-foreground border",
              idx === 1 || idx === 3 ? "self-end" : "self-start",
              "flex max-w-md flex-col items-start justify-center gap-5 rounded-3xl p-8",
            )}
          >
            <div
              className={cn(
                idx === 0
                  ? "bg-primary"
                  : "border-[1.182px] border-black bg-white",
                "flex aspect-square h-13 w-13 items-center justify-center rounded-[0.88638rem] p-[0.72125rem_0.75rem_0.77875rem_0.75rem]",
              )}
            >
              <Image
                src={`/assets/images/${card.icon}`}
                width={28}
                height={28}
                alt="icons"
              />
            </div>

            <h1 className="font-neue text-secondary text-2xl leading-normal font-medium tracking-[-0.0175rem] md:text-[1.75rem]">
              {card.heading}
            </h1>

            <p className="font-neue text-md text-secondary leading-normal font-normal tracking-[-0.01125rem] md:text-[1.125rem]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

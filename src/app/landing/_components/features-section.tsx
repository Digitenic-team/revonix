import { cn } from "@/lib/utils";
import Image from "next/image";

interface Card {
  heading: string;
  description: string;
}

const CARDS: Card[] = [
  {
    heading: "Uncompromised speed",
    description: "We move fast without cutting corners.",
  },
  {
    heading: "We feel like your team",
    description: "We anticipate needs and act as a partner.",
  },
  {
    heading: "Effective communication",
    description: "Clear updates. No delays. No confusion.",
  },
  {
    heading: "We deliver on time",
    description: "93% of projects delivered on time and on budget.",
  },
];

export function FeaturesSection() {
  return (
    <section className="mx-auto mt-30 flex max-w-360 flex-col items-center gap-[4.38rem] self-stretch px-4">
      <h1 className="bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,_#010101_0%,_#3558DA_100%)] bg-clip-text text-center text-4xl font-medium tracking-[-0.035rem] text-transparent sm:text-5xl md:text-[3.5rem]">
        Why teams choose{" "}
        <span className="text-primary font-medium tracking-[-0.035rem]">
          Revonix
        </span>
      </h1>

      <div className="flex flex-wrap items-center gap-5 self-stretch">
        {CARDS.map((card: Card, idx: number) => (
          <div
            key={card.heading}
            className={cn(
              idx === 0
                ? "border-secondary-foreground border border-dashed bg-white shadow-[0_11px_24px_0_rgba(55,90,217,0.10)]"
                : "bg-primary-foreground",
              "relative flex min-w-74 flex-1 flex-col items-start gap-6.5 rounded-4xl p-6",
            )}
          >
            {idx === 0 && (
              <Image
                src="/assets/images/card-side-vector.png"
                width={85}
                height={89}
                className="absolute top-0 right-0"
                alt="Side Border Image"
              />
            )}
            <h1 className="text-secondary text-[1rem] leading-5.75 font-normal uppercase opacity-60">
              {card.heading}
            </h1>

            <h3 className="text-secondary text-[1.375rem] font-medium tracking-[-0.01375re] text-ellipsis">
              {card.description}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

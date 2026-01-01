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
    <section className="mx-auto mt-30 flex max-w-360 flex-col items-center gap-[4.38rem] self-stretch">
      <h1 className="bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,_#010101_0%,_#3558DA_100%)] bg-clip-text text-center text-[3.5rem] font-medium tracking-[-0.035rem] text-transparent">
        Why teams choose{" "}
        <span className="text-[3.5rem] font-medium tracking-[-0.035rem] text-[#3558DA]">
          Revonix
        </span>
      </h1>

      <div className="flex items-center gap-5 self-stretch">
        {CARDS.map((card: Card, idx: number) => (
          <div
            key={card.heading}
            className={cn(
              idx === 0
                ? "border border-dashed border-[#EEE] bg-white shadow-[0_11px_24px_0_rgba(55,90,217,0.10)]"
                : "bg-[#F5F7F9]",
              "relative flex flex-1 flex-col items-start gap-6.5 rounded-4xl p-6",
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
            <h1 className="text-[1rem] leading-5.75 font-normal text-[#010101] uppercase opacity-60">
              {card.heading}
            </h1>

            <h3 className="text-[1.375rem] font-medium tracking-[-0.01375re] text-[#010101]">
              {card.description}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";
import Image from "next/image";

interface CardData {
  heading: string;
  subHeading: string;
  desc: string;
}

const CARDS_DATA: CardData[] = [
  {
    heading: "EXPLORE AI",
    subHeading: "Find the right starting point",
    desc: "Get set up with simple tools and understand how AI can actually help your business.",
  },
  {
    heading: "BLUEPRINT AI",
    subHeading: "Design systems that scale",
    desc: "Create a clear plan to apply AI across key processes and teams.",
  },
  {
    heading: "IMPLEMENT AI",
    subHeading: "Automate real workflows",
    desc: "Build custom automations and AI systems that fit how your business works.",
  },
];

export function JourneyCards() {
  return (
    <section className="mx-auto mt-30 flex max-w-360 flex-col items-center gap-[4.38rem] self-stretch">
      <h1 className="bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,_#010101_0%,_#3558DA_100%)] bg-clip-text text-center text-[3.5rem] leading-[normal] font-medium tracking-[-0.035rem] text-transparent">
        Where are you in the AI journey?
      </h1>

      <div className="relative flex items-start gap-5 self-stretch">
        <Image
          src="/assets/images/card-vector1.png"
          width={500}
          height={161}
          alt="Card Vetor 1"
          className="absolute -top-4 -left-12"
        />
        <Image
          src="/assets/images/card-vector2.png"
          width={1476}
          height={316}
          alt="Card Vector 2"
          className="absolute -top-4 right-[0.56rem] z-10"
        />

        {CARDS_DATA.map((card: CardData, idx: number) => (
          <div
            key={card.desc}
            className={cn(
              idx === 0
                ? "flex flex-1 flex-col items-start justify-center gap-2.5 rounded-3xl border border-[#EEEEEE] bg-white p-6 shadow-[0_275px_77px_0_rgba(55,90,217,0),0_176px_70px_0_rgba(55,90,217,0.01),0_99px_59px_0_rgba(55,90,217,0.05),0_44px_44px_0_rgba(55,90,217,0.09),0_11px_24px_0_rgba(55,90,217,0.1)]"
                : "flex flex-1 flex-col items-start justify-center gap-2.5 rounded-3xl border border-[#EEEEEE] bg-[#F5F7F9] p-6",
              idx === 1 ? "mt-25" : "mt-0",
            )}
          >
            <div className="h-70 space-y-[0.62rem] self-stretch">
              <h2 className="text-[1rem] leading-5.75 font-normal text-[#010101] uppercase opacity-60">
                {card.heading}
              </h2>
              <h3 className="text-[1.75rem] leading-[normal] font-medium tracking-[-0.0175rem] text-[#010101]">
                {card.subHeading}
              </h3>
            </div>

            <p
              className={cn(
                idx !== 0 ? "opacity-60" : "opacity-100",
                `text-[1.125rem] leading-[normal] font-normal tracking-[-0.01125rem] text-[#010101]`,
              )}
            >
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

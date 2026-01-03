import Image from "next/image";
import { cn } from "@/lib/utils";

interface Card {
  text: string;
  imageUrl: string;
  name: string;
  position: string;
}

const CARDS: Card[] = [
  {
    text: '"I am truly impressed with their remarkable efficiency in communication. They consistently demonstrate a quick response time, ensuring that all inquiries are addressed promptly and thoroughly."',
    imageUrl: "founder-1.png",
    name: "Ryan Lee",
    position: "FOUNDER",
  },
  {
    text: '"The individual demonstrated outstanding communication skills and maintained a proactive attitude that consistently went above and beyond expectations."',
    imageUrl: "founder-2.png",
    name: "Ryan Lee",
    position: "FOUNDER",
  },
  {
    text: '"The remarkable ability of their team to not only anticipate potential challenges but also to provide innovative and effective solutions is truly commendable and sets them apart in their field."',
    imageUrl: "founder-3.png",
    name: "Evelyn Hayes",
    position: "FOUNDER",
  },
];

export function TestimonialsSection() {
  return (
    <section className="mx-auto mt-30 flex max-w-360 flex-col items-center gap-[4.38rem] self-stretch px-4">
      <h1 className="bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,_#010101_0%,_#3558DA_100%)] bg-clip-text text-center text-4xl font-medium tracking-[-0.035rem] text-transparent sm:text-5xl md:text-[3.5rem]">
        Don’t take our{" "}
        <span className="font-medium tracking-[-0.035rem] text-[#3558DA]">
          word for it
        </span>
      </h1>

      <section className="slef-stretch flex flex-wrap items-start gap-5">
        {CARDS.map((card: Card) => (
          <div
            key={card.text}
            className={cn(
              "flex min-h-70 flex-1 flex-col items-start justify-between rounded-4xl bg-[#F5F7F9] p-6 sm:min-w-80",
            )}
          >
            <p className="font-medium tracking-[-0.01375rem] text-[#010101] md:text-[1.375rem]">
              {card.text}
            </p>

            <div className="flex items-center gap-3.75 self-stretch">
              <Image
                src={`/assets/images/${card.imageUrl}`}
                width={48}
                height={48}
                alt="founder images"
              />
              <div className="align-start flex flex-1 flex-col gap-1">
                <h1 className="font-medium tracking-[-0.0125rem] text-[#010101] sm:text-[1.25rem]">
                  {card.name}
                </h1>
                <h3 className="text-[0.875rem] font-normal text-[#010101] uppercase opacity-60">
                  {card.position}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}

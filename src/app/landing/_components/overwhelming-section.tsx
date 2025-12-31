import Image from "next/image";
import { StyledCircle } from "@/components/styled-circle";

interface Icons {
  url: string;
  class: string;
  textTop: string;
  textBottom: string;
}

const ICONS: Icons[] = [
  {
    url: "/assets/images/flag.png",
    class: "-top-10 -left-50 text-right",
    textTop: "No clear",
    textBottom: "starting point",
  },
  {
    url: "/assets/images/timer.png",
    class: "-top-10 -right-40",
    textTop: "No time to",
    textBottom: "experiment",
  },
  {
    url: "/assets/images/workflow.png",
    class: "-bottom-8 -left-56 text-right",
    textTop: "Too many tools, ",
    textBottom: "no direction",
  },
  {
    url: "/assets/images/automation.png",
    class: "-bottom-6 -right-65",
    textTop: "Automations that ",
    textBottom: "never ship or break",
  },
];

export function OverwhelmingSection() {
  return (
    <section className="mx-auto mt-30 flex max-w-360 flex-col items-center gap-[4.38rem]">
      {/* Heading */}
      <h1 className="bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,_#010101_0%,_#3558DA_100%)] bg-clip-text text-center text-[2.5rem] leading-[normal] font-medium tracking-[-0.025rem] text-transparent">
        AI can be{" "}
        <span className="text-[2.5rem] leading-[normal] font-medium tracking-[-0.025rem] text-[#3558DA]">
          overwhelming
        </span>
      </h1>

      {/* Concentric shapes container */}
      <div className="flex h-92.25 w-full items-center justify-center">
        <div className="relative flex h-[19.21994rem] w-[45.59913rem] items-center justify-center rounded-[50.89463rem] border-[6.521px] border-[#576CBC] bg-[linear-gradient(180deg,rgba(87,108,188,0.05)_0%,rgba(53,88,218,0.05)_100%)] shadow-[0_0_0_1.63px_#FFF]">
          {/* Icons Circles */}
          {ICONS.map((icon: Icons, idx: number) => (
            <div
              key={icon.url}
              className={`${icon.class} absolute flex ${idx === 1 || idx === 3 ? "flex-row-reverse" : "flex-row"} items-center gap-5`}
            >
              <h2 className="text-[1.67325rem] leading-[1.63025rem] font-medium tracking-[-0.01675rem] text-[#010101]">
                {icon.textTop}
                <br />
                {icon.textBottom}
              </h2>

              <StyledCircle>
                <Image
                  src={icon.url}
                  alt="My Image"
                  width={60}
                  height={60}
                  className="aspect-square shrink-0"
                />
              </StyledCircle>
            </div>
          ))}

          <div className="flex h-[16.49113rem] w-[41.87806rem] items-center justify-center rounded-[50.89463rem] border-[6.521px] border-[#576CBC] bg-[linear-gradient(180deg,rgba(87,108,188,0.20)_0%,rgba(53,88,218,0.20)_100%)] shadow-[0_0_0_1.63px_#FFF]">
            <div className="flex h-[13.7645rem] w-[37.91075rem] items-center justify-center rounded-[50.89463rem] border-[6.521px] border-[#576CBC] bg-[linear-gradient(180deg,rgba(87,108,188,0.40)_0%,rgba(53,88,218,0.40)_100%)] shadow-[0_0_0_1.63px_#FFF]">
              <div className="flex h-[11.44325rem] w-[34.49913rem] items-center justify-center rounded-[50.89463rem] border-[3.261px] border-[#FFF] bg-[linear-gradient(180deg,#576CBC_0%,#3558DA_100%)]">
                <h2 className="text-center text-[2.95481rem] leading-[normal] font-medium tracking-[-0.02956rem] text-white">
                  We cut through that.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

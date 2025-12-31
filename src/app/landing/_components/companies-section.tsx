import Image from "next/image";

const IMAGES: string[] = [""];

export function CompaniesSection() {
  return (
    <section className="mx-auto mt-30 flex max-w-360 flex-col items-center gap-[4.38rem] self-stretch">
      <h1 className="bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,_#010101_0%,_#3558DA_100%)] bg-clip-text text-center text-[3.5rem] leading-normal font-medium tracking-[-0.035rem] text-transparent">
        We don’t just work together
        <br />
        —we{" "}
        <span className="text-[3.5rem] leading-normal font-medium tracking-[-0.035rem] text-[#3558DA]">
          grow{" "}
        </span>
        together.
      </h1>

      <div className="flex flex-col items-start gap-5">
        {IMAGES.map((url: string) => (
          <div
            key={url}
            className="realtive flex h-37 w-37 shrink-0 flex-col items-start justify-center gap-2.5 rounded-3xl border border-[#EEE] bg-[#F5F7F9] p-6"
          >
            <Image
              src={url}
              fill
              className="object-contain"
              alt="companies logo"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";

const IMAGES: string[] = [
  "com-1.png",
  "com-2.png",
  "com-3.png",
  "com-4.png",
  "com-5.png",
  "com-6.png",
  "com-7.png",
  "com-8.png",
  "com-9.png",
  "com-10.png",
];

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

      <div className="flex max-w-208 flex-wrap items-start justify-center gap-5">
        {IMAGES.map((url: string) => (
          <div
            key={url}
            className="flex h-[9.25rem] w-[9.25rem] flex-col items-center justify-center gap-2.5 rounded-[1rem] border border-[#EEE] bg-[#F5F7F9] p-6"
          >
            <div className="flex h-full w-full items-center justify-center">
              <Image
                src={`/assets/images/${url}`}
                alt="company logo"
                width={1000}
                height={1000}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

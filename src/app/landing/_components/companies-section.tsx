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
    <section className="mx-auto mt-30 flex max-w-360 flex-col items-center gap-[4.38rem] self-stretch px-4">
      {/* Heading */}
      <h1 className="bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,_#010101_0%,_#3558DA_100%)] bg-clip-text text-center text-4xl leading-snug font-medium tracking-[-0.02rem] text-transparent sm:text-5xl md:text-[3.5rem]">
        We don’t just work together
        <br />
        —we{" "}
        <span className="leading-snug font-medium tracking-[-0.02rem] text-[#3558DA]">
          grow{" "}
        </span>
        together.
      </h1>

      {/* Company logos */}
      <div className="flex max-w-208 flex-wrap items-start justify-center gap-3 sm:gap-4 md:gap-5">
        {IMAGES.map((url: string) => (
          <div
            key={url}
            className="flex h-28 w-28 flex-col items-center justify-center gap-2.5 rounded-3xl border border-[#EEE] bg-[#F5F7F9] p-4 sm:h-32 sm:w-32 sm:p-5 md:h-37 md:w-37 md:p-6"
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

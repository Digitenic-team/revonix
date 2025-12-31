import { StyledButton } from "@/components/styled-button";
import Image from "next/image";

interface IMAGE {
  src: string;
  alt: string;
}

const IMAGES: IMAGE[] = [
  { src: "/assets/images/phone-image-new.png", alt: "Phone UI" },
  { src: "/assets/images/dashboard-image.png", alt: "Dashboard UI" },
  {
    src: "/assets/images/sound-collection-image.png",
    alt: "Sound Collection",
  },
  { src: "/assets/images/mobile-design-image.png", alt: "Mobile UI" },
];

export function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-18 self-stretch pt-18">
      <div className="mx-auto flex max-w-360 flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <h1 className="justify-between bg-[radial-gradient(117.71%_63.41%_at_38.85%_66.79%,_#010101_0%,_#3558DA_100%)] bg-clip-text text-center text-[3.625rem] font-medium text-transparent">
            Your competitor isn’t smarter —
            <br />
            Their team just has AI doing the work.
          </h1>

          <p className="text-center text-[1.125rem] font-normal tracking-[-0.01125rem] text-[#010101]">
            We help teams cut through AI noise and turn automation into real,
            working systems.
          </p>
        </div>

        <StyledButton className="py-6">Book a Strategy Call</StyledButton>
      </div>

      <section className="flex w-full items-start gap-4 overflow-hidden">
        {IMAGES.map((img: IMAGE, index: number) => (
          <div
            key={img.alt}
            className={`relative aspect-[469.61/351.46] flex-1 ${index !== 0 && index !== IMAGES.length - 1 ? "mx-2" : ""} `}
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-[#EEE]">
              {/* Image */}
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority
                className="object-cover"
              />

              {/* Gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(270deg,rgba(53,88,218,0)_42.94%,#3558DA_49.26%)] mix-blend-hue" />
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}

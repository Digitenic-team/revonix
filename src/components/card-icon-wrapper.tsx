"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface CardIconWrapperProps {
  src: string;
  alt: string;
  active?: boolean;
  size?: number;
}

export function CardIconWrapper({
  src,
  alt,
  active = false,
  size = 32,
}: CardIconWrapperProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full transition-all duration-300",
        active ? "opacity-100" : "opacity-60",
      )}
      style={{
        width: size,
        height: size,
      }}
    >
      <Image
        src={`/assets/images/${src}`}
        width={size}
        height={size}
        alt={alt}
        className={cn(
          "transition-colors duration-300",
          active ? "filter-none" : "brightness-0 invert filter",
        )}
      />
    </div>
  );
}

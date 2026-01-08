import { cn } from "@/lib/utils";

interface IconWrapperProps {
  active: boolean;
  className?: string;
  children: React.ReactNode;
}

export function IconWrapper({
  active = false,
  className,
  children,
}: IconWrapperProps) {
  return (
    <div
      className={cn(
        "flex h-13 w-13 items-center justify-center rounded-[0.88638rem] transition-colors duration-300",
        active
          ? "bg-primary text-white"
          : "border border-black bg-white text-black",
        className,
      )}
    >
      {children}
    </div>
  );
}

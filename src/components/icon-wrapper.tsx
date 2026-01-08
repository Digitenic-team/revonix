import { cn } from "@/lib/utils";

interface IconWrapperProps {
  className?: string;
  children: React.ReactNode;
}

export function IconWrapper({ className, children }: IconWrapperProps) {
  return (
    <div
      className={cn(
        "icon-wrapper flex h-13 w-13 items-center justify-center rounded-[0.88638rem]",
        "transition-colors duration-300",
        className,
      )}
    >
      {children}
    </div>
  );
}

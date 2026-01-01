import { Button } from "./ui/button";

export function StyledButtonLight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button
      type="button"
      className={`flex cursor-pointer items-center justify-center gap-2 rounded-[3.125rem] border border-black bg-white px-8 py-3.5 text-center text-base leading-[0.01rem] font-medium tracking-[-0.01rem] text-black shadow-[0_4px_14px_0_rgba(0,0,0,0.05),0_2px_0_0_rgba(0,0,0,0.5)_inset,0_1px_0_0_rgba(255,255,255,0.1)] ${className}`}
    >
      {children}
    </Button>
  );
}

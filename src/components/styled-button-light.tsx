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
      className={`shadow-[0_4px_14px_0_rgba(255,255,255,0.05), 0_2px_0_0_rgba(53,88,218,0.5)_inset, 0_1px_0_0_rgba(255,255,255,0.1)] flex cursor-pointer items-center justify-center gap-2 rounded-[3.125rem] border border-white bg-white px-8 py-3.5 text-center text-base leading-[0.01rem] font-medium tracking-[-0.01rem] text-black transition-all duration-300 hover:bg-black hover:text-white ${className} sm:text-base`}
    >
      {children}
    </Button>
  );
}

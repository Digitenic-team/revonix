import { Button } from "./ui/button";

export function StyledButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button
      type="button"
      className={`flex cursor-pointer! items-center justify-center gap-2 rounded-[3.125rem] border border-black bg-linear-to-b bg-[linear-gradient(177deg,#2E2E2E_2.33%,#181818_110.19%)] from-[#2E2E2E] to-[#181818] px-8 py-3.5 text-center leading-[0.01rem] font-medium tracking-[-0.01rem] text-white shadow-[0_4px_14px_0_rgba(0,0,0,0.05),0_2px_0_0_rgba(255,255,255,0.5)_inset,0_1px_0_0_rgba(0,0,0,0.1)] sm:text-base ${className}`}
    >
      {children}
    </Button>
  );
}

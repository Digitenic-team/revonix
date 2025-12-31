export function StyledCircle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex h-[7.8805rem] w-[7.8805rem] items-center justify-center rounded-[6.03rem] border border-[rgba(0,0,0,0.04)] bg-white shadow-[39.126px_48.908px_17.118px_0_rgba(0,0,0,0),25.269px_30.975px_16.303px_0_rgba(0,0,0,0.01),13.857px_17.118px_13.857px_0_rgba(0,0,0,0.05),6.521px_8.151px_9.782px_0_rgba(0,0,0,0.09),1.63px_1.63px_5.706px_0_rgba(0,0,0,0.1)] ${className}`}
    >
      {children}
    </div>
  );
}

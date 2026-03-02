interface StepBoxProps {
  title: string;
  children: React.ReactNode;
}

export function StepBox({ title, children }: StepBoxProps) {
  return (
    <div className="relative mx-4 px-4 py-8 border-[5px] border-cream-border mb-8">
      <span className="absolute inline-block -top-[27px] -left-[3px] px-[9px] h-[25px] lg:h-[30px] leading-[25px] lg:leading-[30px] text-[20px] lg:text-[25px] bg-cream-border text-dark-box font-bold rounded-t-[5px]">
        {title}
      </span>
      {children}
    </div>
  );
}

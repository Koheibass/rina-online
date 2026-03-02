interface StepBoxProps {
  title: string;
  children: React.ReactNode;
}

export function StepBox({ title, children }: StepBoxProps) {
  return (
    <div className="relative mx-2 lg:mx-4 px-3 lg:px-4 py-6 lg:py-8 border-[3px] lg:border-[5px] border-cream-border mb-8">
      <span className="absolute inline-block -top-[22px] lg:-top-[27px] -left-[2px] lg:-left-[3px] px-2 lg:px-[9px] h-[22px] lg:h-[30px] leading-[22px] lg:leading-[30px] text-[16px] lg:text-[25px] bg-cream-border text-dark-box font-bold rounded-t-[3px] lg:rounded-t-[5px]">
        {title}
      </span>
      {children}
    </div>
  );
}

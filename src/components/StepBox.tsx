interface StepBoxProps {
  title: string;
  children: React.ReactNode;
}

export function StepBox({ title, children }: StepBoxProps) {
  return (
    <div className="bg-white rounded-2xl shadow-card px-5 lg:px-8 py-6 lg:py-8 mb-8">
      <span className="inline-block px-4 py-1 text-[14px] lg:text-[18px] bg-cream-border text-dark-box font-bold rounded-full mb-4">
        {title}
      </span>
      {children}
    </div>
  );
}

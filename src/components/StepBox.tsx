interface StepBoxProps {
  title: string;
  stepNumber?: number;
  children: React.ReactNode;
}

export function StepBox({ title, stepNumber, children }: StepBoxProps) {
  return (
    <div className="bg-white rounded-2xl shadow-card px-5 lg:px-8 py-6 lg:py-8 mb-6 border border-cream-border">
      <div className="flex items-center gap-3 mb-4">
        {stepNumber && (
          <span className="inline-flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 gradient-coral text-white font-bold rounded-full text-sm lg:text-base shrink-0">
            {stepNumber}
          </span>
        )}
        <span className="text-[15px] lg:text-[18px] text-text-heading font-bold">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

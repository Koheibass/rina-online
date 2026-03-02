interface SectionTitleProps {
  title: string;
  subtitle: string;
  id?: string;
}

export function SectionTitle({ title, subtitle, id }: SectionTitleProps) {
  return (
    <h2
      id={id}
      className="text-xl lg:text-[28px] font-bold text-center text-brown my-12 lg:my-20 scroll-mt-20"
    >
      <div>{title}</div>
      <div className="section-title-divider">{subtitle}</div>
    </h2>
  );
}

export function SectionSubtitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <h3 className="text-center text-brown my-4">
      <div className="text-lg lg:text-xl font-bold">{title}</div>
      <div className="section-subtitle">{subtitle}</div>
    </h3>
  );
}

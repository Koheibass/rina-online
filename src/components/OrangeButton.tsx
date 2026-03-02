import Link from "next/link";

interface OrangeButtonProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export function OrangeButton({
  href,
  children,
  external = false,
}: OrangeButtonProps) {
  const classes =
    "inline-block text-dark-button bg-gold-button border-b-[5px] border-gold-button-border px-4 lg:px-16 py-1 lg:py-2.5 shadow-md rounded-sm font-bold text-center no-underline transition-all hover:text-white hover:bg-gold-button-hover hover:border-gold-button-hover-border";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

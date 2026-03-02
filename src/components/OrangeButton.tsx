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
    "inline-block text-dark-button bg-gold-button px-6 lg:px-16 py-2 lg:py-3 rounded-full shadow-button font-bold text-center no-underline transition-all duration-300 hover:text-white hover:bg-gold-button-hover hover:shadow-md hover:scale-[1.03]";

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

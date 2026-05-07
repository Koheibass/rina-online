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
    "inline-block text-white gradient-coral px-8 lg:px-16 py-3 lg:py-4 rounded-full shadow-button font-bold text-center no-underline transition-all duration-300 hover:shadow-lg hover:scale-105";

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

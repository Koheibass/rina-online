import Link from "next/link";

export function HeaderSimple() {
  return (
    <nav className="sticky top-0 z-10 w-full bg-cream-header shadow-soft">
      <div className="flex items-center h-14 lg:h-16">
        <Link
          href="/"
          className="font-heading text-brown text-2xl pl-1 lg:pl-4 no-underline font-black tracking-wide"
        >
          おといのちオンライン
        </Link>
      </div>
    </nav>
  );
}

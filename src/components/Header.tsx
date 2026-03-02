import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <nav className="sticky top-0 z-10 w-full bg-cream-header">
      <div className="flex items-center h-12">
        <div className="flex-1">
          <Link
            href="/"
            className="font-heading text-brown text-xl lg:text-2xl pl-1 lg:pl-4 no-underline font-black tracking-wide"
          >
            おといのちオンライン
          </Link>
        </div>
        <div className="flex items-center justify-end">
          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-brown text-[18px] font-bold no-underline pr-3 hover:text-brown-light transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          {/* Mobile hamburger */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

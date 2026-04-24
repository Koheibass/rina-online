import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <nav className="sticky top-0 z-20 w-full bg-white/95 backdrop-blur-sm shadow-soft">
      <div className="flex items-center h-14 lg:h-16 max-w-6xl mx-auto px-4">
        <div className="flex-1">
          <Link
            href="/"
            className="font-heading text-primary text-xl lg:text-2xl no-underline font-black tracking-wide"
          >
            おといのちオンライン
          </Link>
        </div>
        <div className="flex items-center justify-end">
          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-text-main text-[15px] font-bold no-underline px-3 py-2 rounded-lg hover:bg-pink-bg hover:text-primary transition-all duration-200"
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

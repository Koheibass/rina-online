"use client";

import { useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-6 h-5 mr-4 flex flex-col justify-between"
        aria-label="メニュー"
      >
        <span
          className={`block w-full h-0.5 bg-brown-light transition-all duration-300 origin-center ${
            isOpen ? "translate-y-[9px] rotate-45" : ""
          }`}
        />
        <span
          className={`block w-full h-0.5 bg-brown-light transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-full h-0.5 bg-brown-light transition-all duration-300 origin-center ${
            isOpen ? "-translate-y-[9px] -rotate-45" : ""
          }`}
        />
      </button>

      {/* Slide menu */}
      <ul
        className={`fixed top-12 right-0 w-full bg-white/90 transition-transform duration-300 z-50 list-none p-0 m-0 shadow-md ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-center text-brown-light font-bold py-4 no-underline hover:bg-cream-footer transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

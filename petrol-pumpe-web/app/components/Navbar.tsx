'use client';
import Image from "next/image";
import { JSX, useState } from "react";

const NAV_ITEMS: string[] = [
  "About Us",
  "Features",
  "Download",
  "Pricing",
  "Reviews",
  "Contact",
];

export default function Navbar(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="absolute top-0 left-0 w-full z-20">
      <div className="mx-auto px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between text-white">
          <div className="flex items-center gap-2 font-semibold">
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <li
                key={item}
                className="cursor-pointer px-5 hover:text-white/80 transition"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Nav */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col gap-4 mt-2 bg-[#143f73] rounded-lg shadow-lg p-4 text-white text-base font-medium">
            {NAV_ITEMS.map((item) => (
              <li
                key={item}
                className="cursor-pointer py-2 px-3 rounded hover:bg-white/10 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

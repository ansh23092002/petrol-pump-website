"use client";
import Image from "next/image";
import { Grid2x2 } from "lucide-react";
import { JSX, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

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

  // ✅ Animate list items when menu opens
  useGSAP(() => {
    if (menuOpen) {
      gsap.fromTo(
        "#listdesk li",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: "power3.out" }
      );

      
    }
  }, [menuOpen]);

  return (
    <nav className="absolute top-0 left-0 w-full z-20">
      <div className="mx-auto px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between text-white">
          
          {/* Logo */}
          <Image src="/logo.png" alt="Logo" width={52} height={52} />

          {/* Menu Button */}
          <div className=" flex  items-center rounded-full backdrop-blur  cursor-pointer hover:bg-white/10 p-2">
          {menuOpen && (
            <ul
        
            className="hidden md:flex gap-4 text-sm font-medium p-2 rounded-2xl "
            >
              {NAV_ITEMS.map((item) => (
                <li
                  key={item}
                  className="cursor-pointer px-5 py-2 rounded-lg hover:text-white hover:scale-105 transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
          <div
            className="flex gap-2 p-2 rounded-full backdrop-blur border border-white/20 cursor-pointer hover:bg-white/10"
            onClick={() => setMenuOpen((open) => !open)}
            >
            <Grid2x2 size={20} />
            <h1 className="text-sm">Menu</h1>

              </div>
          
          </div>

        </div>
      </div>
    </nav>
  );
}

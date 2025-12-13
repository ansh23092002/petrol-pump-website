"use client";
import Image from "next/image";
import Link from "next/link";
import { JSX, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "About Us", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Download", href: "https://play.google.com/store/apps/developer?id=Inext+Software+Solutions&hl=en_IN" },
  { name: "Pricing", href: "#pricing" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar(): JSX.Element {
  const navbarRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate logo from left
    tl.fromTo(
      ".navbar-logo",
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    // Animate menu items from right with stagger
    .fromTo(
      "#listdesk li",
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
      "-=0.4"
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    
    // Check if it's an external URL
    if (href.startsWith('http')) {
      window.open(href, '_blank');
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      ref={navbarRef} 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex h-16 md:h-20 items-center justify-between text-white">
          
          {/* Logo */}
          <Link href="/" className="navbar-logo">
            <Image 
              src="/logo.png" 
              alt="FuelTrack Logo" 
              width={48} 
              height={48} 
              className="hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Desktop Menu */}
          <ul
            id="listdesk"
            className="hidden md:flex gap-6 text-sm font-medium"
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10">
            <ul className="flex flex-col py-4">
              {NAV_ITEMS.map((item, index) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="w-full text-left px-6 py-3 text-white hover:bg-white/10 transition-colors duration-200 border-b border-white/5 last:border-b-0"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

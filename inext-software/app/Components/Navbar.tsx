"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollY = useRef(0);
    const navbarRef = useRef(null);

    // Hide navbar on scroll down, show on scroll up
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
        lastScrollY.current = currentScrollY;
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Animate show/hide smoothly with GSAP on scroll
    useEffect(() => {
      const el = navbarRef.current;
      if (!el) return;
      const height = el.getBoundingClientRect().height || 100;
      if (showNavbar) {
        gsap.to(el, { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" });
      } else {
        gsap.to(el, { y: -height - 10, opacity: 0, duration: 0.45, ease: "power3.in" });
      }
    }, [showNavbar]);
  const [isOpen, setIsOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);

  const pathname = usePathname?.() || "";

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Consulting", href: "/consulting" },
    { name: "Industries", href: "/industries" },
    { name: "Products", href: "/products" },
    { name: "Insights", href: "/insights" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <nav ref={navbarRef} className={`fixed top-0 left-0 right-0 bg-[#020B1D] z-50 overflow-visible`}>
      {/* Side fillers for curved corners - Show on laptop and up */}
      <div className="hidden lg:block absolute left-0 top-0 h-[36px] md:h-[80px] w-[4px] xl:w-[80px] 2xl:w-[185px] bg-[#020B1D] rounded-tr-4xl z-50"></div>
      <div className="hidden lg:block absolute right-0 top-0 h-[36px] md:h-[80px] w-[4px] xl:w-[80px] 2xl:w-[185px] bg-[#020B1D] rounded-tl-4xl z-50"></div>
        <div className="relative">
      {/* 🔹 LITTLE TOP STRETCH - Show on laptop and up */}
      <div className="hidden lg:block absolute -top-3 left-1/2 -translate-x-1/2 w-[105%] h-10 bg-blue-50 rounded-t-3xl -z-50" />

      {/* 🔹 MAIN NAVBAR */}
      <div className="relative container mx-auto px-3 sm:px-6 lg:px-8 bg-blue-50 lg:rounded-b-4xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="relative w-16 h-16 md:w-30 md:h-20 cursor-pointer hover:scale-110 transition-transform flex-shrink-0">
            <Image
              src="/INSLogo11.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-6 2xl:gap-8 text-sm xl:text-base">
            {navLinks.map((link) => (
              link.name === "Insights" ? (
                <div key={link.name} className="relative group">
                  <button
                    onMouseEnter={() => setInsightsOpen(true)}
                    onClick={() => setInsightsOpen((prev) => !prev)}
                    className={`${(isActive('/insights') || isActive('/corporate-activity')) ? 'text-[#0B4EA2] font-semibold' : 'text-gray-800 hover:text-blue-600'} transition-colors font-medium flex items-center gap-1`}
                  >
                    {link.name}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {insightsOpen && (
                    <div
                      onMouseEnter={() => setInsightsOpen(true)}
                      onClick={() => setInsightsOpen(true)}
                      onMouseLeave={() => setInsightsOpen(false)}
                      className="absolute  top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                    >
                      <Link
                        href="/insights"
                        onClick={() => setInsightsOpen(false)}
                        className={`${isActive('/insights') ? 'block px-4 py-2 text-[#0B4EA2]' : 'block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600'} transition-colors`}
                      >
                        All Insights
                      </Link>
                      <Link
                        href="/corporate-activity"
                        onClick={() => setInsightsOpen(false)}
                        className={`${isActive('/corporate-activity') ? 'block px-4 py-2 text-[#0B4EA2]' : 'block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600'} transition-colors`}
                      >
                        Corporate Activity
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.name} href={link.href} className={`${isActive(link.href) ? 'text-[#0B4EA2] font-semibold' : 'text-gray-800 hover:text-blue-600'} transition-colors font-medium`}>
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Desktop CTA */}
          <Link href="#contact" className="hidden lg:block px-4 xl:px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm xl:text-base font-semibold transition-all hover:scale-105 flex-shrink-0">
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-800 p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-300 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navLinks.map((link) => (
              link.name === "Insights" ? (
                <div key={link.name}>
                  <button
                    onClick={() => setInsightsOpen(!insightsOpen)}
                    className={`w-full text-left py-3 ${isActive('/insights') || isActive('/corporate-activity') ? 'text-[#0B4EA2] font-semibold' : 'text-gray-700 hover:text-blue-600'} font-medium flex items-center justify-between`}
                  >
                    {link.name}
                    <svg className={`w-4 h-4 transition-transform ${insightsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {insightsOpen && (
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/insights"
                        onClick={() => {
                          setInsightsOpen(false);
                          setIsOpen(false);
                        }}
                        className={`${isActive('/insights') ? 'block py-2 text-[#0B4EA2]' : 'block py-2 text-gray-600 hover:text-blue-600'} font-normal text-sm`}
                      >
                        All Insights
                      </Link>
                      <Link
                        href="/corporate-activity"
                        onClick={() => {
                          setInsightsOpen(false);
                          setIsOpen(false);
                        }}
                        className={`${isActive('/corporate-activity') ? 'block py-2 text-[#0B4EA2]' : 'block py-2 text-gray-600 hover:text-blue-600'} font-normal text-sm`}
                      >
                        Corporate Activity
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className={`${isActive(link.href) ? 'block py-3 text-[#0B4EA2] font-semibold' : 'block py-3 text-gray-700 hover:text-blue-600'} font-medium`}>
                  {link.name}
                </Link>
              )
            ))}

            <Link href="#contact" onClick={() => setIsOpen(false)} className="block mt-4 mx-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-center transition-colors">
              Get Started
            </Link>
          </div>
        )}
      </div>
    </div>
    </nav>
  );
}
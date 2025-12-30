"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

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

    // Initial entrance animation (uses actual navbar height for smoothness)
    useEffect(() => {
      const el = navbarRef.current;
      if (!el) return;
      const height = el.getBoundingClientRect().height || 100;
      gsap.fromTo(
        el,
        { y: -height, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, ease: "power1.out" }
      );
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
    <nav ref={navbarRef} className={`fixed top-0 left-0 right-0 bg-[#020B1D] z-50`}>
      {/* Side fillers for curved corners */}
      <div className="absolute left-0 top-0 h-[80px] w-[185px] bg-[#020B1D]  rounded-tr-4xl z-50 "></div>
      <div className="absolute right-0 top-0 h-[80px] w-[185px] bg-[#020B1D]   rounded-tl-4xl z[-100]"></div>
        <div className="relative">
      {/* 🔹 LITTLE TOP STRETCH */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[105%] h-10 bg-blue-50 rounded-t-3xl -z-50" />

      {/* 🔹 MAIN NAVBAR */}
      <div className="relative container mx-auto px-3 sm:px-8 bg-blue-50 rounded-b-4xl">
        <div className="flex items-center justify-between h-20 ">
          {/* Logo */}
          <Link href="/" className="relative w-20 h-20 cursor-pointer hover:scale-110 transition-transform">
            <Image
              src="/INSLogo11.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.name === "Insights" ? (
                <div key={link.name} className="relative group">
                  <button
                    onMouseEnter={() => setInsightsOpen(true)}
                    onClick={() => setInsightsOpen((prev) => !prev)}
                   
                    className="text-gray-800 hover:text-blue-600 transition-colors font-medium flex items-center gap-1"
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
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                    >
                      <Link
                        href="/insights"
                        onClick={() => setInsightsOpen(false)}
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        All Insights
                      </Link>
                      <Link
                        href="/corporate-activity"
                        onClick={() => setInsightsOpen(false)}
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        Corporate Activity
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.name} href={link.href} className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Desktop CTA */}
          <Link href="#contact" className="hidden lg:block px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all hover:scale-105">
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-black p-2"
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
          <div className="lg:hidden py-4 border-t border-gray-300">
            {navLinks.map((link) => (
              link.name === "Insights" ? (
                <div key={link.name}>
                  <button
                    onClick={() => setInsightsOpen(!insightsOpen)}
                    className="w-full text-left py-3 text-gray-700 hover:text-blue-600 font-medium flex items-center justify-between"
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
                        className="block py-2 text-gray-600 hover:text-blue-600 font-normal text-sm"
                      >
                        All Insights
                      </Link>
                      <Link
                        href="/corporate-activity"
                        onClick={() => {
                          setInsightsOpen(false);
                          setIsOpen(false);
                        }}
                        className="block py-2 text-gray-600 hover:text-blue-600 font-normal text-sm"
                      >
                        Corporate Activity
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block py-3 text-gray-700 hover:text-blue-600 font-medium">
                  {link.name}
                </Link>
              )
            ))}

            <Link href="#contact" onClick={() => setIsOpen(false)} className="block mt-4 px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-center">
              Get Started
            </Link>
          </div>
        )}
      </div>
    </div>
    </nav>
  );
}
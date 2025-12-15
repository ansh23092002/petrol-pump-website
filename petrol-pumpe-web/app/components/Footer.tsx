"use client";
import { JSX, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function Footer(): JSX.Element {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible && sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll(".footer-animate"),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.7, ease: "power3.out" }
      );
    }
  }, [visible]);

  return (
    <footer ref={sectionRef} className="relative  bg-gray-100">
      {/* Text watermark */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {/* Desktop / large screens: original horizontal watermark */}
        <span className="hidden md:block select-none text-8xl md:text-[10rem] lg:text-[12rem] font-extrabold text-[#3755AE] opacity-6 transform -translate-y-6">
          FuelTrack
        </span>

        {/* Mobile: vertical text */}
        <span
          className="block md:hidden select-none text-5xl sm:text-6xl font-extrabold text-[#3755AE] opacity-6"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          FuelTrack
        </span>
      </div>

      {/* Centered Card */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <div className=" ">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="px-8 lg:px-14 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
                {/* Brand */}
                <div className="footer-animate">
                  <h3 className="text-base font-semibold text-slate-900 mb-3">
                    Fuel Track
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    The complete Petrol Pump management <br />
                    solution for Android.
                  </p>
                </div>

                {/* Product */}
                <div className="footer-animate">
                  <h4 className="font-semibold text-slate-900 mb-3">Product</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="hover:text-slate-900 cursor-pointer">
                      Features
                    </li>
                    <li className="hover:text-slate-900 cursor-pointer">
                      Pricing
                    </li>
                    <li className="hover:text-slate-900 cursor-pointer">
                      Download
                    </li>
                  </ul>
                </div>

                {/* Support */}
                <div className="footer-animate">
                  <h4 className="font-semibold text-slate-900 mb-3">
                    Resources
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="hover:text-slate-900 cursor-pointer">
                      Documentation
                    </li>
                    <li className="hover:text-slate-900 cursor-pointer">
                      Tutorials
                    </li>
                    <li className="hover:text-slate-900 cursor-pointer">
                      Support
                    </li>
                  </ul>
                </div>

                {/* Company */}
                <div className="footer-animate">
                  <h4 className="font-semibold text-slate-900 mb-3">Company</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="hover:text-slate-900 cursor-pointer">
                      About Us
                    </li>
                    <li className="hover:text-slate-900 cursor-pointer transition">
                      <Link href="/privacy">Privacy Policy</Link>
                    </li>
                    <li className="hover:text-slate-900 cursor-pointer transition">
                      <Link href="/terms">Terms of Service</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom small strip */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="bg-transparent px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} Inext Software Solutions. All Rights
              Reserved.
            </p>
            <div className="flex gap-5">
              <Link
                href="/terms"
                className="hover:text-slate-900 cursor-pointer transition"
              >
                Terms of Agreement
              </Link>
              <Link
                href="/privacy"
                className="hover:text-slate-900 cursor-pointer transition"
              >
                Privacy Policy
              </Link>
              <Link
                href="/refund"
                className="hover:text-slate-900 cursor-pointer transition"
              >
                Refund Policy
              </Link>
              <Link
                href="/faqs"
                className="hover:text-slate-900 cursor-pointer transition"
              >
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

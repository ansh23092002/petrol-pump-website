'use client';
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
        sectionRef.current.querySelectorAll('.footer-animate'),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.7, ease: 'power3.out' }
      );
    }
  }, [visible]);

  return (
    <footer ref={sectionRef}>
      {/* TOP FOOTER (light background - first image style) */}
      <div className="bg-[#fff8ef] border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
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
              <h4 className="font-semibold text-slate-900 mb-3">
                Product
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li className="hover:text-slate-900 cursor-pointer">Features</li>
                <li className="hover:text-slate-900 cursor-pointer">Pricing</li>
                <li className="hover:text-slate-900 cursor-pointer">Download</li>
              </ul>
            </div>
            {/* Support */}
            <div className="footer-animate">
              <h4 className="font-semibold text-slate-900 mb-3">
                Support
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li className="hover:text-slate-900 cursor-pointer">Help Center</li>
                <li className="hover:text-slate-900 cursor-pointer">Contact Us</li>
                <li className="hover:text-slate-900 cursor-pointer">Documentation</li>
              </ul>
            </div>
            {/* Company */}
            <div className="footer-animate">
              <h4 className="font-semibold text-slate-900 mb-3">
                Company
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li className="hover:text-slate-900 cursor-pointer">About Us</li>
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
      {/* BOTTOM FOOTER (dark strip - second image style) */}
      <div className="bg-[#fff8ef]">
        <hr className="border-slate-200" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5">
          <div className="footer-animate flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              © {new Date().getFullYear()} Inext Software Solutions. All Rights Reserved.
            </p>
            <div className="flex gap-5">
              <Link href="/terms" className="hover:text-slate-900 cursor-pointer transition">
                Terms of Agreement
              </Link>
              <Link href="/privacy" className="hover:text-slate-900 cursor-pointer transition">
                Privacy Policy
              </Link>
              <Link href="/refund" className="hover:text-slate-900 cursor-pointer transition">
                Refund Policy
              </Link>
              <Link href="/faqs" className="hover:text-slate-900 cursor-pointer transition">
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

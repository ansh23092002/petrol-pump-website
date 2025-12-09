'use client';
import { JSX, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";


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
                <li className="hover:text-slate-900 cursor-pointer">Privacy Policy</li>
                <li className="hover:text-slate-900 cursor-pointer">Terms of Service</li>
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
              © {new Date().getFullYear()} FuelTrack App. All Rights Reserved.
            </p>
            <div className="flex gap-5">
              <span className="hover:text-white cursor-pointer">
                Terms of Agreement
              </span>
              <span className="hover:text-white cursor-pointer">
                Privacy Policy
              </span>
              <span className="hover:text-white cursor-pointer">
                Refund Policy
              </span>
              <span className="hover:text-white cursor-pointer">
                FAQs
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

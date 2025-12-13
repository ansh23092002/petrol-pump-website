'use client';
import { JSX, useEffect, useRef } from "react";
import { useState } from "react";
import PhoneMockup from "./components/PhoneMockup";
import Image from "next/image";
import { gsap } from "gsap";

export default function HeroSection(): JSX.Element {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible && sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.hero-animate'),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.7, ease: 'power3.out' }
      );
    }
  }, [visible]);

  return (
   <section
  className="relative min-h-screen overflow-hidden bg-[#02090f] pt-20"
  ref={sectionRef}
>
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-20 scale-105 blur-sm"
    style={{ backgroundImage: "url('/herobg.jpg')" }}
  />

  {/* Soft Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/10 to-transparent" />

  <div className="relative z-10 flex min-h-screen items-center">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="hero-animate text-white px-2 sm:px-6 py-6 lg:py-10">
          <div className="text-center lg:text-left max-w-3xl">

            {/* Title (same color) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Simplify Pump Operations 
            from Nozzle to Reading
            </h1>

            {/* Subtext (same color) */}
            <p className="mt-6 text-white/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              A smart digital system for supervisors and employees to manage 
              daily fuel operations effortlessly.
            </p>

            {/* CTA Button */}
            <a
              href="https://play.google.com/store/apps/developer?id=Inext+Software+Solutions&hl=en_IN"
              target="newtab"
              className="mt-10 inline-flex items-center justify-center lg:justify-start hover:scale-[1.06] active:scale-95 transition-all"
            >
              <Image
                src="/appstore.png"
                alt="Download on the App Store"
                width={190}
                height={60}
                className="cursor-pointer drop-shadow-2xl"
              />
            </a>

            {/* Trust Badge (same color) */}
            <p className="mt-8 text-xs tracking-[0.25em] text-white/60">
              TRUSTED BY MODERN FUEL STATIONS
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT (Phone) */}
        <div className="hero-animate flex justify-center lg:justify-end mt-10 lg:mt-0">
          <div className="scale-105 hover:scale-110 transition-transform duration-700 drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]">
            <PhoneMockup />
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


  );
}

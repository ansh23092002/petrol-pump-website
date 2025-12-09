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
    <section className="relative min-h-screen overflow-hidden bg-[#8fcafa6e] pt-16" ref={sectionRef}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url('/herobg.jpg')" }}
      />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="hero-animate text-white text-center lg:text-left px-2 sm:px-8 py-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Simplify Pump Operations <br />
                from Nozzle to Reading
              </h1>

              <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-white/90 text-sm md:text-base">
                A smart digital system for supervisors and employees to manage
                daily fuel operations effortlessly.
              </p>

              <a href="https://play.google.com/store/apps/developer?id=Inext+Software+Solutions&hl=en_IN" target="newtab" className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <Image
                  src="/appstore.png"
                  alt="Download on the App Store"
                  width={160}
                  height={48}
                  className="cursor-pointer"
                />
              </a>

              <p className="mt-6 text-xs text-white/70">
                TRUSTED BY MODERN FUEL STATIONS
              </p>
            </div>

            {/* Right Content */}
            <div className="hero-animate flex justify-center lg:justify-end mt-10 lg:mt-0">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

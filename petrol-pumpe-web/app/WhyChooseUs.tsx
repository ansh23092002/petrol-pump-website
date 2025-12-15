"use client";
import { JSX, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Magnet from "./components/ui/Magnet";

const FEATURES = [
  "Real-time fuel inventory tracking",
  "Automated sales reporting",
  "Multi-pump management",
  "Cloud backup & sync",
  "Staff management tools",
];

export default function WhyChooseUs(): JSX.Element {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftPhoneRef = useRef<HTMLDivElement>(null);
  const rightPhoneRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Section Visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
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

  // Animations
  useEffect(() => {
    if (!visible || !sectionRef.current) return;

    // Fade + Lift Animation for Text
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".why-animate"),
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out" }
    );

    // PHONE LEFT - card pop from left
    gsap.fromTo(
      leftPhoneRef.current,
      { x: -120, y: 60, opacity: 0, rotate: -8, scale: 0.9 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        rotate: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      }
    );

    // PHONE RIGHT - card pop from right
    gsap.fromTo(
      rightPhoneRef.current,
      { x: 120, y: 80, opacity: 0, rotate: 8, scale: 0.9 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        rotate: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
      }
    );
  }, [visible]);

  return (
    <section id="whychooseus" className="bg-slate-50 py-20" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Top Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Manage Your Petrol Pump Station
          </h2>
          <p className="mt-3 text-slate-600 text-base md:text-lg">
            Everything on your fingertips
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="why-animate">
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Download Our <br /> App Today
            </h3>
            
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
              Stay in control of your petrol pump anytime, anywhere. Track
              sales, monitor shifts, manage credit customers, and access
              real-time reports — all from your phone.
            </p>

            <h4 className="text-2xl font-bold text-slate-900 mb-4">
              Why Choose Us?
            </h4>
            <ul className="space-y-4 mb-8">
              {FEATURES.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-slate-700 text-sm md:text-base"
                >
                  <CheckCircle2 size={22} className="text-[#3755AE] mt-0.5 " />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Store Button */}
            <div className="flex items-center">
              <a
                href="https://play.google.com/store/apps/developer?id=Inext+Software+Solutions&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-[1.05] active:scale-95"
              >
                <Image
                  src="/appstore.png"
                  alt="Download on Google Play"
                  width={180}
                  height={54}
                  className="drop-shadow-md cursor-pointer"
                />
              </a>
            </div>
          </div>

          {/* RIGHT PHONE MOCKUPS with CARD EFFECT */}
          <div className="relative flex justify-center lg:justify-end gap-6">

            {/* LEFT PHONE CARD */}
            <div
              ref={leftPhoneRef}
          
            >
              <Image
                src="/shiftassinemockup.svg"
                alt="Fuel Records App"
                width={260}
                height={520}
                className="rounded-2xl"
                priority
              />
            </div>

            {/* RIGHT PHONE CARD */}
            <div
              ref={rightPhoneRef}
   
            >
              <Image
                src="/shiftassinemockup2.svg"
                alt="Testing Records App"
                width={260}
                height={520}
                className="rounded-2xl"
                priority
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

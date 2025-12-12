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

export default function Footer(): JSX.Element {
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
    <section className="bg-[#fff8ef] py-20" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="why-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Why Choose Us?
            </h2>
            <ul className="space-y-5">
              {FEATURES.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-slate-700 text-sm md:text-base"
                >
                  <CheckCircle2 size={22} className="text-blue-600 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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

      {/* CTA BUTTON */}
      <div className="why-animate flex justify-center mt-10">
        <Magnet disabled={false} magnetStrength={5} padding={1000}>
          <a
            href="https://play.google.com/store/apps/developer?id=Inext+Software+Solutions&hl=en_IN"
            className="inline-flex items-center gap-2 px-6 py-2 bg-orange-500 hover:bg-orange-400 text-white text-base font-semibold rounded-full shadow transition duration-150"
          >
            Download the app
          </a>
        </Magnet>
      </div>
    </section>
  );
}

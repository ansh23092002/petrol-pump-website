'use client';
import { JSX, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const FEATURES: string[] = [
  "Real-time fuel inventory tracking",
  "Automated sales reporting",
  "Multi-pump management",
  "Cloud backup & sync",
  "Staff management tools",
];

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
        sectionRef.current.querySelectorAll('.why-animate'),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.7, ease: 'power3.out' }
      );
    }
  }, [visible]);

  return (
    <section className="bg-[#fff8ef] py-20" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
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
                  <CheckCircle2
                    size={22}
                    className="text-blue-600 mt-0.5"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Right Mobile Mockups */}
          <div className="why-animate relative flex justify-center lg:justify-end">
            {/* Left phone */}
            <div className="relative z-10">
              <Image
                src="/shiftassinemockup.svg"
                alt="Fuel Records Mobile App"
                width={260}
                height={520}
                priority
              />
            </div>
            {/* Right phone */}
            <div className="relative -ml-10 mt-10">
              <Image
                src="/shiftassinemockup2.svg"
                alt="Testing Records Mobile App"
                width={260}
                height={520}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="why-animate flex justify-center mt-10">
        <a
          href="#download"
          className="inline-flex items-center gap-2 px-6 py-2 bg-orange-500 hover:bg-orange-400 text-white text-base font-semibold rounded-full shadow transition duration-150"
        >
          Download
        </a>
      </div>
    </section>
  );
}

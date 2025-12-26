"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function NotFoundPage() {
  const notFoundSection = useRef<HTMLDivElement>(null);
  const notFoundText = useRef<HTMLParagraphElement>(null);
  const notFoundSub = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!notFoundSection.current || !notFoundText.current) return;
    const letters = notFoundText.current.querySelectorAll("span");
    gsap.set(letters, {
      opacity: 0,
      x: (i) => (i % 2 === 0 ? -window.innerWidth : window.innerWidth),
    });
    const tl = gsap.timeline();
    tl.to(letters, {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.06,
    })
      .fromTo(
        notFoundText.current,
        { letterSpacing: "0.8em" },
        {
          letterSpacing: "0.2em",
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .fromTo(
        notFoundSub.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.2"
      );
  }, []);

  return (
    <main className="min-h-screen bg-black text-[#f0e7db] flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-xs text-[#cdc1b0]/30"
            style={{
              top: `${(i % 4) * 25}%`,
              left: `${(i % 2) * 50}%`,
            }}
          >
            NOT FOUND
          </span>
        ))}
      </div>
      <section ref={notFoundSection} className="z-10 text-center py-24">
        <p ref={notFoundText} className="text-[40px] sm:text-[48px] tracking-[0.6em] font-medium">
          {"NOT FOUND".split("").map((char, i) => (
            <span key={i} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </p>
        <div className="relative w-full flex justify-center items-center mt-8">
          <span className="text-[180px] sm:text-[260px] md:text-[320px] font-bold text-[#23201c] absolute left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-60">
            404
          </span>
        </div>
        <p ref={notFoundSub} className="mt-12 text-lg max-w-2xl mx-auto text-[#cdc1b0]">
          YOU DIDN'T DESTROY ANY INJECTION MOULDS, BUT IT LOOKS LIKE YOU'RE LOST. DON'T WORRY. YOU CAN HEAD OVER TO THE <Link href="/" className="underline underline-offset-4 text-[#f0e7db]">HOMEPAGE</Link> OR TO THE <Link href="/services" className="underline underline-offset-4 text-[#f0e7db]">SERVICES</Link> PAGE IF YOU HAVEN'T HAD ENOUGH. A LAB TO EXPERIMENT IN, FOR SURE.
        </p>
      </section>
    </main>
  );
}

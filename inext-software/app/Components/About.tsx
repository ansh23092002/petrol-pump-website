"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

/* ================= CONTENT ================= */

const industries = [
  {
    title: "HEALTHCARE",
    desc:
      "We build secure, scalable digital solutions for hospitals, clinics, and health startups. From patient management systems to telemedicine platforms, we simplify care delivery. Our technology helps healthcare providers focus more on patients, less on processes.",
  },
  {
    title: "REALESTATE",
    desc:
      "We create digital platforms that simplify property management and customer engagement. From listing portals to CRM and analytics tools, we enhance decision-making. Our solutions help real estate businesses grow faster in a competitive market.",
  },
  {
    title: "AUTOMOBILE",
    desc:
      "We help automotive businesses accelerate innovation with smart digital systems. From dealership management to vehicle tracking and data analytics, we power efficiency. Our solutions drive better operations, customer experience, and future-ready mobility.",
  },
  {
    title: "MANUFACTURING",
    desc:
      "We enable manufacturers to optimize operations through intelligent digital solutions. From production tracking to inventory and ERP integrations, we streamline workflows. Our technology improves efficiency, visibility, and long-term scalability.",
  },
  {
    title: "EDUCATION",
    desc:
      "We design smart digital solutions for schools, institutes, and EdTech platforms. From learning management systems to student portals, we enhance learning experiences. Our technology supports scalable, accessible, and future-ready education.",
  },
];

/* ================= MAIN SECTION ================= */

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // section border radius animation (unchanged)
    gsap.fromTo(
      sectionRef.current,
      { borderRadius: "49% 51% 0% 0% / 38% 38% 0% 0%" },
      {
        borderRadius: "0% 0% 0% 0% / 0% 0% 0% 0%",
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "top 20%",
          scrub: true,
        },
      }
    );

    // cards reveal animation (unchanged)
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden text-white "
      style={{
        borderRadius: "49% 51% 0% 0% / 38% 38% 0% 0%",
      }}
    >
      {/* ================= BACKGROUND (SAME) ================= */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#020617]" />
        <Image
          src="/aboutbg.png"
          alt="Office background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-semibold mb-4">
            Why Businesses Choose{" "}
            <span className="text-blue-400">Inext Software Solutions</span>
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            We build high-performance, secure, and scalable web applications
            using modern frontend technologies teams trust.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {industries.map((item) => (
            <IndustryCard
              key={item.title}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function IndustryCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  const arrowRef = useRef<HTMLSpanElement>(null);

  const moveArrow = () => {
    if (!arrowRef.current) return;
    gsap.to(arrowRef.current, {
      x: 12,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const resetArrow = () => {
    if (!arrowRef.current) return;
    gsap.to(arrowRef.current, {
      x: 0,
      duration: 0.25,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      onMouseEnter={moveArrow}
      onMouseLeave={resetArrow}
      className="
        rounded-xl
        border border-white/15
        bg-[#0b1224]
        p-6
      "
    >
      <h3 className="text-blue-400 font-semibold tracking-wide uppercase">
        {title}
      </h3>

      <p className="mt-4 text-sm text-gray-300 leading-relaxed">
        {desc}
      </p>

      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400">
        EXPLORE
        <span ref={arrowRef} className="inline-block">
          →
        </span>
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".dive-section");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          scale: 0.88,
          y: 150,
          filter: "blur(40px)",
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 35%",
            scrub: true,
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <main className="w-full overflow-hidden bg-black">
      <ImageSection
        image="/about/section1.jpg"
        title="Who We Are"
        subtitle="Designing immersive digital experiences"
      />

      <ImageSection
        image="/about/section2.jpg"
        title="What We Build"
        subtitle="Modern products with depth & clarity"
      />

      <ImageSection
        image="/about/section3.jpg"
        title="Why It Matters"
        subtitle="Because experience is everything"
      />
    </main>
  );
}

/* ---------- IMAGE SECTION COMPONENT ---------- */

function ImageSection({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="dive-section relative h-screen w-full flex items-center justify-center">
      
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

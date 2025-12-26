// app/components/AboutSection.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import LogoLoop from "./ui/LogoLoop";
import { LogoLoopComponent } from "./logoloop";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      {
        borderRadius: "49% 51% 0% 0% / 38% 38% 0% 0%",
      },
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
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden text-black"
        style={{
          borderRadius: "49% 51% 0% 0% / 38% 38% 0% 0%",
        }}
    >
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Solid base color */}
        <div className="absolute inset-0 bg-[#020617]" />

        {/* Background image */}
        <Image
          src="/aboutbg.png"
          alt="Office background"
          fill
          priority
          className="object-cover"
        />

        {/* Optional overlay */}
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

        {/* <LogoLoopComponent /> */}
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0">
          <Card>
            <StatCircle value="92%" />
            <h3 className="mt-4 font-medium">Real Business Impact</h3>
            <p className="text-xs text-gray-300 mt-2">
              Faster delivery, reduced cost, and scalable solutions.
            </p>
          </Card>

          <Card>
            <FakeGraph />
            <h3 className="mt-4 font-medium">Modern Frontend Stack</h3>
            <p className="text-xs text-gray-300 mt-2">
              Next.js, React, Tailwind CSS.
            </p>
          </Card>

          <Card>
            <FakeGraph small />
            <h3 className="mt-4 font-medium">Actionable Insights</h3>
            <p className="text-xs text-gray-300 mt-2">
              Dashboards that drive decisions.
            </p>
          </Card>

          <Card className="md:col-span-2">
            <ChatMock />
            <h3 className="mt-4 font-medium">Always-On Support</h3>
            <p className="text-xs text-gray-300 mt-2">
              Continuous collaboration and improvement.
            </p>
          </Card>

          <Card>
            <IntegrationMock />
            <h3 className="mt-4 font-medium">Seamless Integrations</h3>
            <p className="text-xs text-gray-300 mt-2">
              APIs, CRMs, dashboards.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ================= UI BLOCKS ================= */

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white/5 border border-white/10 rounded-xl p-5
      backdrop-blur-xl transition hover:border-blue-500/40 ${className}`}
    >
      {children}
    </div>
  );
}

function StatCircle({ value }: { value: string }) {
  return (
    <div className="w-24 h-24 rounded-full border-4 border-blue-500/40 flex items-center justify-center text-xl font-semibold text-blue-300">
      {value}
    </div>
  );
}

function FakeGraph({ small }: { small?: boolean }) {
  return (
    <div
      className={`w-full ${
        small ? "h-20" : "h-28"
      } rounded-lg bg-gradient-to-r from-blue-500/40 to-blue-400/10`}
    />
  );
}

function ChatMock() {
  return (
    <div className="h-32 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center text-xs text-gray-300">
      “How can we help you today?”
    </div>
  );
}

function IntegrationMock() {
  return (
    <div className="h-28 rounded-lg bg-black/40 border border-white/10 grid place-items-center text-blue-300 text-sm">
      API · Dashboard · CRM
    </div>
  );
}

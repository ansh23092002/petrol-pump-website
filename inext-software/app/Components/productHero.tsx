"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B4EA2] via-[#0A3F85] to-[#020617]">
      {/* ===== SAASKIT STYLE CURVE ===== */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[740px]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="
            M0,224
            C120,200 240,160 360,154
            C480,149 600,181 720,192
            C840,203 960,192 1080,170
            C1200,149 1320,117 1440,106
            L1440,320
            L0,320
            Z
          "
        />
      </svg>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-56 text-center text-white">
        {/* Logo */}


        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Building Digital Products for
          <br />
          <span className="text-[#FFD23F] font-bold">
            Growth-Driven Businesses
          </span>
        </h1>

        {/* Sub text */}
        <p className="mt-6 max-w-2xl mx-auto text-sm text-white/80">
          iNext Software Solutions delivers secure, scalable and high-performance
          web & mobile applications for startups, enterprises and agencies.
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-full bg-[#FFD23F] px-6 py-3 text-sm font-semibold text-[#020617] hover:bg-[#ffcf2a] transition">
            Get Started
          </button>

          <button className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
            View Work
          </button>
        </div>

        {/* ===== MAIN MOCKUP ===== */}
        <div className="relative mt-24 flex justify-center">
          <div className="relative w-[420px] sm:w-[620px] md:w-[700px]">
            <Image
              src="/dashboard-preview.png"
              alt="Dashboard preview"
              width={1400}
              height={900}
              className="rounded-2xl shadow-2xl"
            />

            {/* Floating UI cards */}
            <FloatingCard
              src="/solar.jpg"
              className="-left-78 -top-50"
            />
            <FloatingCard
              src="/fueltrack.png"
              className="-right-78 -top-50"
              size="medium"
            />
            <FloatingCard
              src="/mobile.png"
              className="-right-78 bottom-19 "
            />
            <FloatingCard
              src="/itrack.png"
              className="-left-78 bottom-23 shadow-lg bg-[#0B4EA2] "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Floating Card Component ===== */
type FloatingCardProps = {
  src: string;
  className: string;
  size?: 'small' | 'medium';
};

function FloatingCard({ src, className, size }: FloatingCardProps) {
  let cardSize = 'w-44';
  let imgSize = { width: 400, height: 300 };
  let imgClass = 'rounded-lg';
  if (size === 'small') {
    cardSize = 'w-12 h-12 min-w-12 min-h-12';
    imgSize = { width: 48, height: 48 };
    imgClass = 'rounded-lg w-12 h-12 min-w-12 min-h-12';
  } else if (size === 'medium') {
    cardSize = 'w-20 h-20 min-w-20 min-h-20';
    imgSize = { width: 80, height: 80 };
    imgClass = 'rounded-lg w-40 h-30 min-w-20 min-h-20';
  }
  return (
    <div
      className={`absolute hidden md:block rounded-xl ${className} ${cardSize}`}
    >
      <Image
        src={src}
        alt="UI preview"
        width={imgSize.width}
        height={imgSize.height}
        className={imgClass}
      />
    </div>
  );
}

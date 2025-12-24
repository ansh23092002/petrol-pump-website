"use client";

import Image from "next/image";

export default function PreFooterHero() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative h-[400px] sm:h-[480px] md:h-[560px] lg:h-[640px]">
        <Image
          src="/footerbg.png"
          alt="Inext background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Bottom dark gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        {/* Optional top glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/40 via-transparent to-transparent mix-blend-screen opacity-70" />

        {/* BIG INEXT + reflection */}
        <div className="absolute inset-x-0 bottom-48 sm:bottom-44 md:bottom-44 lg:bottom-48 flex justify-center px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="relative inline-block leading-none">
            {/* Main text */}
            <h1
              className="
                text-[60px] xs:text-[80px] sm:text-[110px] md:text-[170px] lg:text-[210px]
                font-extrabold uppercase leading-none
                tracking-[0.12em] sm:tracking-[0.14em] md:tracking-[0.16em]
                text-transparent bg-clip-text
                bg-gradient-to-t from-white via-white to-white/40
                drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] md:drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)]
                text-center
              "
            >
              INEXT
            </h1>

            {/* Bottom reflection */}
            <h1
              aria-hidden="true"
              className="
                pointer-events-none
                absolute inset-x-0 top-full mt-1 sm:mt-2 md:mt-4 lg:mt-42
                text-[60px] xs:text-[80px] sm:text-[110px] md:text-[170px] lg:text-[210px]
                font-extrabold uppercase leading-none
                tracking-[0.12em] sm:tracking-[0.14em] md:tracking-[0.16em]
                text-transparent bg-clip-text
                bg-gradient-to-t from-white/90 via-white/20 to-transparent
                opacity-50 sm:opacity-60
                origin-top
                scale-y-[-1]
                [filter:blur(0.5px)] sm:[filter:blur(1px)]
                [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.9),transparent)]
                [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.9),transparent)]
                text-center
              "
            >
              INEXT
            </h1>
              {/* Tagline */}
            {/* <p
              className="
                mt-4
                text-[10px] sm:text-xs
                tracking-[0.35em]
                text-white/80 absolute 
              "
            >
            (INEXT SOFTWARE SOLUTIONS)
            </p> */}
          </div>
        </div>

        {/* Bottom content bar */}
        <div className="absolute inset-x-0 bottom-0 px-4 sm:px-6 md:px-12 lg:px-24 pb-4 sm:pb-6 md:pb-8 pt-3 sm:pt-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
            <div>
              <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                Build modern web products with confidence
              </p>
              <p className="text-emerald-400 text-xs sm:text-sm md:text-base mt-1 sm:mt-2">
                Next.js • React • Tailwind CSS
              </p>
            </div>

            <a
              href="/contact"
              className="
                inline-flex items-center gap-2
                rounded-lg px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3
                bg-emerald-400 text-black text-xs sm:text-sm md:text-base font-medium
               
                hover:bg-emerald-300
                transition
                whitespace-nowrap
              "
            >
              Get in touch
              <span className="text-base sm:text-lg">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
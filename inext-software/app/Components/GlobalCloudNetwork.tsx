"use client";

import React from "react";
import dynamic from "next/dynamic";

// same as your code
const World = dynamic(() => import("./ui/gloab").then((m) => m.World), {
  ssr: false,
});

type Arc = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export default function GlobalNetworkSection() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const sampleArcs: Arc[] = [
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 19.076,
      endLng: 72.8777,
      arcAlt: 0.2,
      color: "#3b82f6",
    },
    {
      order: 2,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 12.9716,
      endLng: 77.5946,
      arcAlt: 0.25,
      color: "#6366f1",
    },
    {
      order: 3,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 13.0827,
      endLng: 80.2707,
      arcAlt: 0.3,
      color: "#06b6d4",
    },
    {
      order: 4,
      startLat: 19.076,
      startLng: 72.8777,
      endLat: 22.5726,
      endLng: 88.3639,
      arcAlt: 0.3,
      color: "#3b82f6",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-black">
            One global cloud network{" "}
            <span className="text-[#ff7a00]">unlike any other</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-700 max-w-3xl mx-auto">
            Only iNext offers an intelligent, global cloud network built from
            the ground up for security, speed, and reliability.
          </p>
        </div>

        {/* Stats row (Cloudflare style) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <Stat
            number="60+"
            lines={["cloud services available", "globally"]}
            accent="orange"
          />
          <Stat
            number="234B"
            lines={["cyber threats blocked", "each day"]}
            highlight
          />
          <Stat
            number="20%"
            lines={["of all websites are", "protected by iNext"]}
            highlight
          />
          <Stat
            number="330+"
            lines={["cities in 125+ countries,", "including mainland India"]}
            accent="orange"
          />
        </div>

        {/* Globe area */}
        <div className="relative mt-8 h-[340px] sm:h-[420px] md:h-[520px] overflow-hidden">
          {/* Fade like screenshot */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent z-20" />

          {/* Make globe sit lower like half-globe */}
          <div className="absolute inset-x-0 -bottom-28 sm:-bottom-32 md:-bottom-40 z-10">
            <div className="mx-auto w-full max-w-6xl">
              {/* This wrapper keeps your World full width */}
              <div className="relative w-full h-[520px] md:h-[640px]">
                <World data={sampleArcs} globeConfig={globeConfig} />
              </div>
            </div>
          </div>

          {/* Optional faint network overlay (lines) */}
          <NetworkOverlay />
        </div>
      </div>
    </section>
  );
}

function Stat({
  number,
  lines,
  highlight,
  accent,
}: {
  number: string;
  lines: [string, string];
  highlight?: boolean;
  accent?: "orange";
}) {
  return (
    <div className="relative pl-6">
      {/* vertical orange line + dot */}
      <span className="absolute left-0 top-2 h-[140px] w-[2px] bg-[#ff7a00]/70" />
      <span className="absolute -left-[5px] top-1 h-3 w-3 rounded-full bg-[#ff7a00]" />

      <div
        className={[
          "text-4xl font-semibold leading-none",
          accent === "orange" ? "text-[#ff7a00]" : "text-[#ff7a00]",
        ].join(" ")}
      >
        {highlight ? (
          <span className="bg-[#2f62ff] text-white px-2 py-1">{number}</span>
        ) : (
          number
        )}
      </div>

      <div className="mt-4 text-sm font-medium text-black">
        {highlight ? (
          <div className="inline-block">
            <div className="bg-[#2f62ff] text-white px-2 py-1 inline-block">
              {lines[0]}
            </div>
            <br />
            <div className="bg-[#2f62ff] text-white px-2 py-1 inline-block mt-1">
              {lines[1]}
            </div>
          </div>
        ) : (
          <div>
            <div>{lines[0]}</div>
            <div>{lines[1]}</div>
          </div>
        )}
      </div>
    </div>
  );
}

function NetworkOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[5] opacity-40">
      <svg viewBox="0 0 1200 520" className="w-full h-full">
        {/* soft orange web */}
        <g stroke="rgba(255,122,0,0.35)" strokeWidth="1">
          {Array.from({ length: 10 }).map((_, i) => {
            const y = 80 + i * 35;
            return <line key={`h-${i}`} x1="0" y1={y} x2="1200" y2={y} />;
          })}
          {Array.from({ length: 14 }).map((_, i) => {
            const x = 60 + i * 80;
            return <line key={`v-${i}`} x1={x} y1="0" x2={x} y2="520" />;
          })}
        </g>
      </svg>
    </div>
  );
}
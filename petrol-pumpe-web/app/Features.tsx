'use client';

import MagicBento from "@/app/components/ui/MagicBento";

export default function FeaturesModern() {
  return (
    <section className="py-12 md:py-24 bg-[#638eeb]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-white font-semibold text-sm mb-2">FUELTRACK FEATURES</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Manage Pumps, Shifts & Sales —<br />Accurate. Fast. Reliable.
          </h2>
          <p className="text-white/90 mt-4 max-w-3xl mx-auto">
            Assign nozzles, record opening & closing readings, generate instant shift reports, and get AI-driven insights to reduce fuel loss and improve profitability.
          </p>
        </div>

        <div className="bg-white backdrop-blur-sm p-1 md:p-1 rounded-4xl">
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="55, 85, 174"
          />
        </div>
      </div>
    </section>
  );
}

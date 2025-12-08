import { JSX } from "react";
import PhoneMockup from "./components/PhoneMockup";

export default function HeroSection(): JSX.Element {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#8fcafa6e] pt-16" >

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url('/herobg.jpg')" }}
      />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

            {/* Left Content */}
            <div className="text-white text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Simplify Pump Operations <br />
                from Nozzle to Reading
              </h1>

              <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-white/90 text-sm md:text-base">
                A smart digital system for supervisors and employees
                to manage daily fuel operations effortlessly.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <img
                  src="/app-store.png"
                  alt="App Store"
                  className="h-12 w-auto max-w-40 cursor-pointer"
                />
                <img
                  src="/play-store.png"
                  alt="Play Store"
                  className="h-12 w-auto max-w-40 cursor-pointer"
                />
              </div>

              <p className="mt-6 text-xs text-white/70">
                TRUSTED BY MODERN FUEL STATIONS
              </p>
            </div>

            {/* Right Content */}
            <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
              <PhoneMockup />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

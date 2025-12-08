import Image from "next/image";
import { JSX } from "react";
import StatsBar from "./components/StatsBar";

export default function AboutPage(): JSX.Element {
  return (
    <main className="bg-[#fff8ef] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">

        {/* Section label */}
        <p className="text-sm font-semibold text-orange-500 mb-4">
          About Us
        </p>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
          Now Manage Your Petrol <br /> Pump Smartly
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl mx-auto text-slate-600 text-sm md:text-base leading-relaxed">
          The complete solution for fuel station management. Track inventory,
          monitor sales, manage staff, and grow your business all from one
          powerful dashboard.
        </p>

        {/* Dashboard Preview */}
        <div className="mt-16">
          <div className="relative mx-auto max-w-5xl rounded-3xl bg-white p-6 shadow-xl">
            <Image
              src="/dashboard-preview.jpg"
              alt="Fuel Station Dashboard"
              width={1200}
              height={700}
              className="rounded-2xl"
              priority
            />
          </div>
        </div>

      </div>
        <StatsBar />
    </main>
  );
}

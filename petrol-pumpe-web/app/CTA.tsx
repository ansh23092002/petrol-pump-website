import { Smartphone } from "lucide-react";
import { JSX } from "react";
export default function CTASection(): JSX.Element {
  return (
    <section className="bg-[#143f73] py-20">
      <div className="mx-auto max-w-5xl px-6 text-center text-white">

        {/* Icon */}
        <div className="mb-4 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-orange-400 text-orange-400">
            <Smartphone size={24} />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold">
          Ready to Transform Your Fuel Business?
        </h2>

        {/* Sub text */}
        <p className="mt-3 text-sm text-white/80 max-w-xl mx-auto">
          Join thousands of petrol pump owners who trust FuelTrack for their
          daily operations.
        </p>

        {/* CTA Button */}
        <div className="mt-8 flex justify-center">
          <button className="flex items-center gap-2 rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition">
            <span className="inline-flex items-center justify-center rounded-full bg-white/20 p-1">
              <Smartphone size={18} />
            </span>
            Contact Us
          </button>
        </div>

        {/* Footer text */}
        <p className="mt-6 text-xs text-white/70">
          Available on Google Play Store • Free to Download
        </p>
      </div>
    </section>
  );
}

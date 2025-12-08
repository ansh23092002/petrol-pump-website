import { JSX } from "react";
export default function Footer(): JSX.Element {
  return (
    <footer>
      {/* TOP FOOTER (light background - first image style) */}
      <div className="bg-[#fff8ef] border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

            {/* Brand */}
            <div>
              <h3 className="text-base font-semibold text-slate-900 mb-3">
                Fuel Track
              </h3>
              <p className="text-slate-600 leading-relaxed">
                The complete Petrol Pump management <br />
                solution for Android.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">
                Product
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li className="hover:text-slate-900 cursor-pointer">Features</li>
                <li className="hover:text-slate-900 cursor-pointer">Pricing</li>
                <li className="hover:text-slate-900 cursor-pointer">Download</li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">
                Support
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li className="hover:text-slate-900 cursor-pointer">Help Center</li>
                <li className="hover:text-slate-900 cursor-pointer">Contact Us</li>
                <li className="hover:text-slate-900 cursor-pointer">Documentation</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">
                Company
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li className="hover:text-slate-900 cursor-pointer">About Us</li>
                <li className="hover:text-slate-900 cursor-pointer">Privacy Policy</li>
                <li className="hover:text-slate-900 cursor-pointer">Terms of Service</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER (dark strip - second image style) */}
      <div className="bg-[#fff8ef]">
        <hr className="border-slate-200" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">

            <p>
              © {new Date().getFullYear()} FuelTrack App. All Rights Reserved.
            </p>

            <div className="flex gap-5">
              <span className="hover:text-white cursor-pointer">
                Terms of Agreement
              </span>
              <span className="hover:text-white cursor-pointer">
                Privacy Policy
              </span>
              <span className="hover:text-white cursor-pointer">
                Refund Policy
              </span>
              <span className="hover:text-white cursor-pointer">
                FAQs
              </span>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

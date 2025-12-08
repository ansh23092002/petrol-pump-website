import Image from "next/image";
import { JSX } from "react";

export default function DownloadApp(): JSX.Element {
  return (
    <section className="bg-[#fff8ef] py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Top label */}
        <div className="text-center mb-5">
          

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Manage Your Petrol Pump Station
          </h2>

          <p className="mt-2 text-sm text-black ">
            Everything on your Finger Tips
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Download Our <br /> App
            </h3>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-lg">
              Stay in control of your petrol pump anytime, anywhere. Track
              sales, monitor shifts, manage credit customers, and access
              real-time reports all from your phone. Download the app now and
              simplify your fuel station operations.
            </p>

            {/* Store buttons */}
            <div className="mt-8 flex gap-4">
              <img
                src="/app-store.png"
                alt="App Store"
                className="h-12 cursor-pointer"
              />
              <img
                src="/play-store.png"
                alt="Google Play"
                className="h-12 cursor-pointer"
              />
            </div>
          </div>

          {/* Right Mobile Mockup */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/iMockup.svg"
              alt="Mobile App Mockup"
              width={300}
              height={600}
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}

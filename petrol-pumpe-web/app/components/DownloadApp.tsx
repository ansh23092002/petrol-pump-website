import Image from "next/image";
import { JSX } from "react";

export default function DownloadApp(): JSX.Element {
  return (
    <section className="py-20 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Top Label */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Manage Your Petrol Pump Station
          </h2>

          <p className="mt-3 text-slate-600 text-base md:text-lg">
            Everything on your fingertips
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Download Our <br /> App Today
            </h3>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl">
              Stay in control of your petrol pump anytime, anywhere. Track
              sales, monitor shifts, manage credit customers, and access
              real-time reports — all from your phone.  
              <br /><br />
              Download the app now and simplify your entire fuel station operations.
            </p>

            {/* Store Button */}
            <div className="mt-10 flex items-center">
              <a
                href="https://play.google.com/store/apps/developer?id=Inext+Software+Solutions&hl=en_IN"
                target="newtab"
                className="transition-transform hover:scale-[1.05] active:scale-95"
              >
                <Image
                  src="/appstore.png"
                  alt="Download on Google Play"
                  width={180}
                  height={54}
                  className="drop-shadow-md cursor-pointer"
                />
              </a>
            </div>
          </div>

          {/* RIGHT PHONE MOCKUP */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="">
              <Image
                src="/mockups/iMockup.svg"
                alt="Mobile Mockup"
                width={300}
                height={600}
                priority
                className="rounded-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

'use client';
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {

    useGSAP(() => {
        gsap.fromTo(".loading", { opacity: 1 }, { opacity: 0, duration: 1, delay: 0.5, pointerEvents: "none" });
        gsap.fromTo('.left', { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 1 });
        gsap.fromTo('.right', { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 1 });
        gsap.fromTo('.logo', { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 1 });
        gsap.fromTo('.get', { y: -100, opacity: 0,  }, { y: 0, opacity: 1, duration: 1, delay: 1 });
        gsap.fromTo('.content', { y: -100, opacity: 0,  }, { y: 0, opacity: 1, duration: 1, delay: 1 });
    }, );

  return (
    <section className="">
      <div className=" relative">
      
        {/* Styled yellow bar */}
        <div className="relative  shadow-lg px-6  overflow-hidden items-center  min-h-screen flex justify-between bg-[#b8b8b8]">

          <div className=" left -rotate-90  p-4 bg-sky-50  rounded-2xl shadow-lg opacity-60 ">
            <h1 className="text-blue-950">fuel pump</h1>       
          </div>
          <div className=" content flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3755AE] mb-4">
              Streamline Your Tailoring Business
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto">
              Manage orders, track progress, and communicate with clients—all
              from one intuitive app. The ultimate order management solution for
              tailors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-[#2c447d]  text-white rounded-full text-lg font-semibold hover:bg-[#2c447d] transition">
                Explore the App
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-sky-50 transition">
                Plans and Pricing
              </button>
            </div>

          </div>

            <div className="right rotate-90 bg-sky-50 p-4 rounded-2xl shadow-lg opacity-60">
              <h1 className="text-blue-950">fuel pump</h1>
            </div>
         
        </div>
        {/* logo  */}
        <div className=" logo absolute z-10 top-0 left-2 flex justify-center items-center ">
        <Image src="/logo.png" alt="TailorMate Logo" width={60} height={60} className="m-4"/>
        </div>
        <div className="get  absolute z-10 top-0 right-10  m-4 shadow-lg ">
            <h2 className="   text-gray-900  bg-blue-50  p-2 px-6  rounded-4xl " > Get in Touch</h2>
        </div>
        <div
          className=" left-0 right-0 bottom-0 transform rotate-180 "
          style={{ lineHeight: 0 }}
        >
          <svg
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-28"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C120,100 240,0 360,40 C480,80 600,0 720,40 C840,80 960,0 1080,40 C1200,80 1320,0 1440,40 L1440,120 L0,120 Z"
              fill="#f59e0b"
            />
          </svg>
        </div>
      </div>
      <div className="loading absolute h-screen w-screen object-cover z-200 inset-0 ">
         <Image src="/Frame 28.png" alt="TailorMate Logo" fill  className=" object-cover "/>
      </div>
    </section>
  );
}

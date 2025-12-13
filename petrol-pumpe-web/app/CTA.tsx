"use client";
import { Smartphone } from "lucide-react";
import { JSX, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Download, ArrowRight } from "lucide-react";
import Magnet from "./components/ui/Magnet";

export default function CTA(): JSX.Element {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible && sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll(".cta-animate"),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.7, ease: "power3.out" }
      );
    }
  }, [visible]);

  return (
    <section ref={sectionRef} className="cta-animate relative -mt-32 z-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Combined linear dark center + radial vignette to match design */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(55,85,174,0.96) 0%, rgba(55,85,174,0.92) 48%, rgba(255,255,255,0.98) 100%), radial-gradient(600px 360px at 50% 30%, rgba(55,85,174,0.22), rgba(0,0,0,0) 60%)",
            }}
          />
          <div className="relative p-12 md:p-16 lg:p-24 flex flex-col items-center justify-center min-h-[420px] text-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none ">
            {/* <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            /> */}
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-8 z-10">
            {/* Glowing Orbs */}
           
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-6">
                <span className="inline-flex items-center gap-2 bg-[#3755AE] text-white text-sm font-medium px-3 py-1 rounded-full backdrop-blur-sm shadow-sm drop-shadow-sm">
                  <Smartphone className="text-white" size={18} />
                  Available on Android
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
                Ready to transform your data?
              </h3>
              <p className="text-white/95 drop-shadow-sm max-w-2xl mb-8 text-sm md:text-base">
                Join thousands of data-driven professionals who are creating
                beautiful visualizations in minutes.
              </p>

              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="px-6 py-3 bg-white text-slate-900 rounded-3xl font-semibold shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  Start for free
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

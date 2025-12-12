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
    <div className="why-animate  relative">
      {/* Full-width background */}
      <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 h-full z-0">
        <div className="w-full h-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />
      </div>
      <div className="relative  mx-auto z-10">
        {/* CTA Card */}
        <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16 flex items-center justify-center min-h-[420px]">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none ">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-8 z-10">
            {/* Glowing Orbs */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-orange-500/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl" />

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Smartphone className="text-orange-400" size={24} />
                <span className="text-orange-400 font-medium">
                  Available on Android
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                Ready to Transform Your Business?
              </h3>
              <p className="text-slate-400 text-base md:text-lg max-w-lg mb-6">
                Download the app now and start managing your fuel station like a
                pro. Free setup, no hidden charges.
              </p>
              <Magnet disabled={false} magnetStrength={5} padding={100}>
                <a
                  href="https://play.google.com/store/apps/developer?id=Inext+Software+Solutions&hl=en_IN"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-blue-900 via-blue-990 to-blue-900 text-white text-lg font-bold rounded-full shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  {/* Button Shine Effect */}
                  <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                  <Download size={22} className="relative z-10" />
                  <span className="relative z-10">Download Free App</span>
                  <ArrowRight
                    size={20}
                    className="relative z-10 group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </Magnet>
              <div className="flex items-center gap-2 text-white text-sm mt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full bg-white border-2 border-slate-800 flex items-center justify-center text-[8px] text-black  font-bold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <span>Join 50,000+ happy users</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

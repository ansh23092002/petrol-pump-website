'use client';
import { JSX, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ClipboardList, Users, BarChart3 } from "lucide-react";

const FEATURES = [
  {
    id: "01",
    title: "Assign & Track Tasks",
    desc: "Supervisors assign nozzles and record opening readings instantly.",
    icon: <ClipboardList size={24} />,
    bgImage: "/cardservice/assignedShift.jpeg",
  },
  {
    id: "02",
    title: "Employee Updates",
    desc: "Employees complete their shift and enter closing readings on time.",
    icon: <Users size={24} />,
    bgImage: "/cardservice/closingReading.png",
  },
  {
    id: "03",
    title: "Instant Reports",
    desc: "Automatic summaries for each nozzle, shift, and employee.",
    icon: <BarChart3 size={24} />,
    bgImage: "/cardservice/assignedShift.jpeg",
  },
  {
    id: "04",
    title: "Smart Scheduling",
    desc: "Plan shifts and avoid manual errors completely.",
    icon: <ClipboardList size={24} />,
    bgImage: "/cardservice/closingReading.png",
  },
  {
    id: "05",
    title: "Secure Cloud Backup",
    desc: "Your data stays protected & accessible anytime.",
    icon: <Users size={24} />,
    bgImage: "/cardservice/assignedShift.jpeg",
  },
  {
    id: "06",
    title: "AI Insights",
    desc: "Daily insights to reduce fuel loss & improve accuracy.",
    icon: <BarChart3 size={24} />,
    bgImage: "/cardservice/closingReading.png",
  },
];

export default function FeaturesModern(): JSX.Element {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Intersection reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // GSAP animation
  useEffect(() => {
    if (visible) {
      gsap.fromTo(
        ".feature-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.12,
        }
      );
    }
  }, [visible]);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* SMALL LABEL */}
        <p className="text-center text-orange-600 font-semibold text-sm mb-2">
          PREMIUM FEATURES
        </p>

        {/* TITLE */}
        <h2 className="text-center text-3xl md:text-5xl font-bold text-slate-900 mb-14 leading-tight">
          Tools Built for Efficient  
          <br /> Fuel Station Management
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="
                feature-card relative rounded-xl overflow-hidden shadow-md
                bg-white border border-slate-200

                hover:shadow-xl hover:-translate-y-2
                transition-all duration-300
              "
            >
              {/* Background Image */}
              <div
                className="
                  absolute inset-0 bg-cover bg-center 
                  opacity-60 group-hover:opacity-80
                  transition-opacity duration-300
                "
                style={{ backgroundImage: `url(${f.bgImage})` }}
              />

              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* CONTENT */}
              <div className="relative z-10 p-8">
                
                {/* Icon */}
                <div className="
                  bg-white/90 rounded-xl h-12 w-12 flex items-center justify-center 
                  shadow-sm text-slate-900 mb-5
                ">
                  {f.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {f.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/90 leading-relaxed">
                  {f.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

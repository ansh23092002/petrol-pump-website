'use client'
import { JSX, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type StatItem = {
  value: string;
  label: string;
};

const STATS: StatItem[] = [
  { value: "500+", label: "Active Stations" },
  { value: "₹2Cr+", label: "Daily Transactions" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.0/5", label: "Customer Rating" },
];

function parseValue(value: string) {
  const number = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");
  return { number, suffix };
}

export default function StatsBar(): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(
    STATS.map(() => 0)
  );

  // 👀 Check visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // 🔢 Animate numbers
  useEffect(() => {
    if (!visible) return;

    STATS.forEach((stat, index) => {
      const { number } = parseValue(stat.value);
      let start = 0;
      const step = number / 40;

      const interval = setInterval(() => {
        start += step;
        if (start >= number) {
          start = number;
          clearInterval(interval);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });
      }, 30);
    });
  }, [visible]);

  // GSAP animation for stat cards
  useEffect(() => {
    if (visible && ref.current) {
      gsap.fromTo(
        ref.current.querySelectorAll('.stat-card'),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.7, ease: 'power3.out' }
      );
    }
  }, [visible]);

  return (
    <section className="  bg-white rounded-4xl max-w-[1200px] mx-auto px-6 lg:px-10" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 rounded-xl p-6">
          {STATS.map((item, index) => {
            const { suffix } = parseValue(item.value);
            return (
              <div
                key={index}
                className="stat-card flex flex-col items-center text-center "
                style={{ willChange: 'transform, opacity' }}
              >
                <p className="text-2xl md:text-3xl font-bold text-[#3755AE]">
                  {counts[index].toFixed(
                    item.value.includes(".") ? 1 : 0
                  )}
                  {suffix}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

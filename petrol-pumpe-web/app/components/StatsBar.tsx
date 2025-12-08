import { JSX } from "react";
type StatItem = {
  value: string;
  label: string;
};

const STATS: StatItem[] = [
  { value: "500+", label: "Active Stations" },
  { value: "₹2Cr+", label: "Daily Transactions" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9/5", label: "Customer Rating" },
];

export default function StatsBar(): JSX.Element {
  return (
    <section className=" py-10">
      <div className="mx-auto  px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 rounded-xl   p-6 ">
          {STATS.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-emerald-600">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

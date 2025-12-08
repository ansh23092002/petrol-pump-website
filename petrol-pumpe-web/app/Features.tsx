import { JSX } from "react";
import {
  ClipboardList,
  Users,
  BarChart3,
} from "lucide-react";

type Feature = {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  bg: string;
  accent: string;
};

const FEATURES: Feature[] = [
  {
    id: "01",
    title: "Assign & Track Tasks",
    description:
      "Supervisors assign nozzles and record opening readings instantly.",
    icon: <ClipboardList size={26} />,
    bg: "bg-[#fdf3e8]",
    accent: "from-orange-200/40",
  },
  {
    id: "02",
    title: "Employee Updates",
    description:
      "Employees complete their shift and enter closing readings.",
    icon: <Users size={26} />,
    bg: "bg-[#f3ecfb] border border-blue-500",
    accent: "from-indigo-200/40",
  },
  {
    id: "03",
    title: "Instant Reports",
    description:
      "Automatic summaries for each nozzle, shift, and employee.",
    icon: <BarChart3 size={26} />,
    bg: "bg-[#edf1f9]",
    accent: "from-sky-200/40",
  },
  {
    id: "04",
    title: "Assign & Track Tasks",
    description:
      "Supervisors assign nozzles and record opening readings instantly.",
    icon: <ClipboardList size={26} />,
    bg: "bg-[#eef7e9]",
    accent: "from-emerald-200/40",
  },
  {
    id: "05",
    title: "Employee Updates",
    description:
      "Employees complete their shift and enter closing readings.",
    icon: <Users size={26} />,
    bg: "bg-[#eef2fb]",
    accent: "from-blue-200/40",
  },
  {
    id: "06",
    title: "Instant Reports",
    description:
      "Automatic summaries for each nozzle, shift, and employee.",
    icon: <BarChart3 size={26} />,
    bg: "bg-[#fdeff2]",
    accent: "from-pink-200/40",
  },
];

export default function FeaturesPage(): JSX.Element {
  return (
    <main className="bg-[#fff8ef] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">

        {/* Section label */}
        <p className="text-sm font-semibold text-orange-500 mb-4">
          App Features
        </p>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-14">
          Powerful Features to Run Your <br className="hidden md:block" />
          Fuel Station Efficiently
        </h1>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {FEATURES.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-xl p-6 shadow-sm ${item.bg}`}
            >
              {/* Soft curved background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.accent} to-transparent pointer-events-none`}
              />

              {/* Number badge */}
              <span className="absolute top-4 left-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border bg-white text-sm font-semibold text-slate-700">
                {item.id}
              </span>

              {/* Icon */}
              <div className="relative z-10 mt-10 mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-white shadow text-slate-900">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="relative z-10 text-lg font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>

              <p className="relative z-10 text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}

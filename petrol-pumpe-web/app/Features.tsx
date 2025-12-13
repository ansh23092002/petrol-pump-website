'use client';

import Image from "next/image";

const features = [
  {
    title: "Assign & Track Tasks",
    desc: "Supervisors assign nozzles and record opening readings instantly.",
    img: "/mockups/feature1.png", // Replace with a fuel station relevant image
    bg: "bg-violet-100",
  },
  {
    title: "Employee Updates",
    desc: "Employees complete their shift and enter closing readings on time.",
    img: "/mockups/feature2.png", // Replace with a fuel station relevant image
    bg: "bg-pink-100",
  },
  {
    title: "Instant Reports",
    desc: "Automatic summaries for each nozzle, shift, and employee.",
    img: "/mockups/feature3.png", // Replace with a fuel station relevant image
    bg: "bg-yellow-100",
  },
  {
    title: "Smart Scheduling",
    desc: "Plan shifts and avoid manual errors completely.",
    img: "/mockups/feature4.png", // Replace with a fuel station relevant image
    bg: "bg-lime-100",
  },
  {
    title: "Secure Cloud Backup",
    desc: "Your data stays protected & accessible anytime.",
    img: "/mockups/feature5.png", // Replace with a fuel station relevant image
    bg: "bg-orange-100",
    colSpan: 2,
  },
  {
    title: "AI Insights",
    desc: "Daily insights to reduce fuel loss & improve accuracy.",
    img: "/mockups/feature6.png", // Replace with a fuel station relevant image
    bg: "bg-slate-100",
  },
];

export default function FeaturesModern() {
  return (
    <section className=" md:py-20 bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8 bg-white py-12 rounded-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:grid-cols-3 lg:gap-8">
          {/* Top Row */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <FeatureCard {...features[0]} />
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <FeatureCard {...features[1]} />
          </div>
          {/* Middle Row */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col gap-6">
            <div className="flex flex-row gap-6">
              <div className="flex-1">
                <FeatureCard {...features[2]} />
              </div>
              <div className="flex-1">
                <FeatureCard {...features[3]} />
              </div>
            </div>
          </div>
          {/* Bottom Row */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <FeatureCard {...features[4]} />
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <FeatureCard {...features[5]} />
          </div>
        </div>
      </div>
    </section>
  );
}

type FeatureCardProps = {
  title: string;
  desc: string;
  img: string;
  bg: string;
  colSpan?: number;
};

function FeatureCard({ title, desc, img, bg, colSpan }: FeatureCardProps) {
  return (
    <div
      className={`rounded-3xl p-6 md:p-8 flex flex-col h-full shadow-sm ${bg} ${colSpan ? `md:col-span-${colSpan}` : ""}`}
    >
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-xl md:text-2xl text-slate-900 mb-2">{title}</h3>
          <p className="text-slate-700 text-base mb-4">{desc}</p>
        </div>
        <div className="flex justify-end items-end">
          <div className="relative w-28 h-28 md:w-32 md:h-32">
            {/* Replace with actual illustration or icon */}
            <Image
              src={img}
              alt={title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 112px, 128px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

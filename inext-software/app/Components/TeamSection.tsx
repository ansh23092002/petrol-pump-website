// app/components/TeamSection.tsx
"use client";

import Image from "next/image";

const roles = [
  {
    id: 1,
    label: "Software Developers",
    role: "Building robust solutions",
    image: "/team/dev.png",
    blobShape: "30% 70% 70% 30% / 51% 34% 66% 49%",
    blobColor: "from-blue-100 to-indigo-100",
  },
  {
    id: 2,
    label: "QA Engineers",
    role: "Ensuring quality delivery",
    image: "/team/qa-1.png",
    blobShape: "60% 40% 30% 70% / 40% 60% 40% 60%",
    blobColor: "from-emerald-100 to-teal-100",
  },
  {
    id: 3,
    label: "Project Managers",
    role: "Leading with precision",
    image: "/team/pm-1.png",
    blobShape: "40% 60% 60% 40% / 70% 30% 70% 30%",
    blobColor: "from-purple-100 to-violet-100",
  },
  {
    id: 4,
    label: "Software Developers",
    role: "Crafting digital experiences",
    image: "/team/dev.png",
    blobShape: "70% 30% 50% 50% / 30% 70% 40% 60%",
    blobColor: "from-orange-100 to-amber-100",
  },
  {
    id: 5,
    label: "QA Engineers",
    role: "Perfecting every detail",
    image: "/team/qa-1.png",
    blobShape: "50% 50% 30% 70% / 60% 40% 70% 30%",
    blobColor: "from-rose-100 to-pink-100",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white min-h-screen py-16 sm:py-20 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-sm font-medium text-blue-700">Our Expert Team</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
          Meet the Minds Behind
          <span className="block mt-2  text-black">
            the Magic
          </span>
        </h2>
        
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
          A passionate team of designers, developers, and strategists committed to 
          building impactful digital solutions that drive your business forward.
        </p>

        {/* Avatars grid - responsive */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          {/* Mobile: 2 columns, Tablet: 3 columns, Desktop: 5 columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
            {roles.map((role) => {
              return (
                <div
                  key={role.id}
                  className="flex flex-col items-center group"
                >
                  {/* Avatar wrapper */}
                  <div className="relative flex items-center justify-center">
                    {/* Background blob with gradient */}
                    <div 
                      className={`h-16 w-20 sm:h-20 sm:w-28 md:h-24 md:w-32 lg:h-28 lg:w-36 bg-gradient-to-br ${role.blobColor} shadow-sm `}
                      style={{ borderRadius: role.blobShape }}
                    />
                    
                    {/* Image positioned to overflow */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-44 lg:w-44  group-hover:scale-105 transition-all duration-300">
                      <Image
                        src={role.image}
                        alt={role.label}
                        fill
                        className="object-cover object-top rounded-full drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Label & Role */}
                  <div className="mt-6 sm:mt-8 space-y-1">
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-slate-800">
                      {role.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 hidden sm:block">
                      {role.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 sm:mt-16 lg:mt-20">
          <button
            type="button"
            className="group inline-flex items-center gap-3 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold  shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300"
          >
            Join Our Team
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          
          <p className="mt-4 text-sm text-slate-500">
            We&apos;re always looking for talented individuals
          </p>
        </div>
      </div>
    </section>
  );
}
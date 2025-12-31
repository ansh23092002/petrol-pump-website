"use client";

import Image from "next/image";
import CircularText from "../Components/ui/CircularText";

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-[#0B4EA2] via-[#0A3F85] pb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 pt-24">
  
  {/* ================= LEFT CONTENT (TEXT SAME) ================= */}
  <div className="flex-1 text-white">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
      Build Scalable Software <br /> That Powers Your Business
    </h1>

    <p className="mb-8 text-lg opacity-90 max-w-xl">
      We design, develop, and deploy high-quality digital solutions —
      from web and mobile applications to cloud, AI, and enterprise
      software.
    </p>

    <button className="bg-white text-red-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
      Start Your Project
    </button>

    <div className="mt-8 flex items-center gap-2">
      <span className="inline-block w-8 h-8 rounded-full bg-white flex items-center justify-center">
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="#2b7a7a"
          strokeWidth="2"
        >
          <path d="M5 12l5-5 5 5" />
        </svg>
      </span>
      <span className="text-sm opacity-90">
        Secure • Scalable • Performance-Driven
      </span>
    </div>
  </div>

  {/* ================= RIGHT IMAGE (IMAGE-TYPE UI) ================= */}
  <div className="flex-1 flex justify-center relative mt-16 md:mt-0">
    <div className="relative w-[360px] h-[430px]">

      {/* Organic Blob Background with Image inside */}
      <div
        className="absolute inset-0 flex items-center justify-center "
        style={{
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
      >
        <Image
          src="/software-team.png"
          alt="Software Team"
          width={800}
          height={900}
          priority
          className="object-contain max-w-full max-h-full rounded-[40%_30%_60%_40%/90%_30%_70%_40%]"
          
        />
      </div>

      {/* Circular Rotating Text */}
      <div className="absolute right-100 -bottom-10 flex items-center justify-center ">
        <div className="relative flex items-center justify-center">
          <CircularText
            text="SOFTWARE*TEAM*EXPERTS*"
            onHover="speedUp"
            spinDuration={20}
            className="text-black/80 text-[12px] md:text-[30px] lg:text-[40px]"
          />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 27L27 11" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
              <path d="M15 11H27V23" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
            </svg>
          </span>
        </div>
      </div>

      {/* Badge */}
      <span className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow">
        Software Experts
      </span>
    </div>
  </div>

</div>


        {/* CURVE */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          height="80"
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
        >
          <path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="#fff" />
        </svg>
      </section>

      {/* ================= SERVICES LIST ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <ServiceColumn
            title="Custom Cloud Solutions"
            items={[
              "Web Application Development",
              "Mobile App Development",
              "SaaS Platform Development",
              "E-Commerce Solutions",
              "Business Software & ERP Development",
              "Agile DevOps Management",
            ]}
          />

          <ServiceColumn
            title="Innovate & Accelerate Solutions"
            items={[
              "Applied Artificial Intelligence",
              "Applied Machine Learning",
              "Blockchain Development",
              "Internet of Things (IoT)",
              "Chatbot Integration & Automation",
            ]}
          />

          <ServiceColumn
            title="Software Development & Consultancy"
            items={[
              "Prototype Development",
              "UI / UX Design & Engineering",
              "MVP Development",
              "Technology Consulting & Architecture",
            ]}
          />
        </div>
      </section>

      {/* ================= CORE SERVICE CARDS ================= */}
      <section className="relative bg-white pb-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Custom Software Development"
            desc="Tailored software solutions built to match your business goals."
            primary
          />

          <ServiceCard
            title="Web & Mobile Applications"
            desc="Modern, responsive, and high-performance applications for all platforms."
          />

          <ServiceCard
            title="Enterprise & Cloud Solutions"
            desc="Secure, scalable enterprise systems powered by cloud technologies."
          />
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="relative py-24 bg-white">
        <div className="absolute inset-0">
          <Image
            src="/image.png"
            alt="Technology Background"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            How We Deliver Software
          </h2>
          <p className="mt-6 text-lg text-gray-700">
            Understand requirements, design scalable architecture, develop with
            precision, and deliver with confidence.
          </p>
        </div>
      </section>
    </main>
  );
}

/* ================= HELPERS ================= */

function ServiceColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-[#0B4EA2] mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-700">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ServiceCard({
  title,
  desc,
  primary,
}: {
  title: string;
  desc: string;
  primary?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col rounded-[2.5rem] p-8 pr-16 shadow-lg  ${primary ? "bg-[#0B4EA2] text-white" : "bg-white border-2 border-[#0B4EA2]" }`}    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-6">{desc}</p>

      {/* LEARN MORE – no overlap */}
      <button
        className="absolute -right-6 top-1/2 -translate-y-1/2
    bg-black text-white px-3 py-2 rounded-full
    font-semibold -rotate-90 z-10 shadow-lg"
      >
        LEARN MORE
      </button>
    </div>
  );
}

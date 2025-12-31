"use client";

import Image from "next/image";

export default function IndustriesPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#0B4EA2] via-[#0A3F85] to-[#020617] pb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 pt-24">
  
          {/* LEFT CONTENT */}
          <div className="flex-1 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Industry-Specific Solutions <br /> That Drive Real Results
            </h1>

            <p className="mb-8 text-lg opacity-90 max-w-xl">
              We deliver tailored software solutions across healthcare, finance, retail, education, and more — built to meet your industry's unique challenges and compliance requirements.
            </p>

            <button className="bg-white text-red-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
              Explore Solutions
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
                Compliant • Scalable • Industry-Leading
              </span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center relative mt-16 md:mt-0">
            <div className="relative w-[360px] h-[430px]">
              {/* Organic Blob Background with Image inside */}
              <div
                className="absolute inset-0 flex items-center justify-center overflow-hidden "
              
              >
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                  alt="Industries"
                  width={800}
                  height={900}
                  priority
                  className="object-cover max-w-full max-h-full"
                />
              </div>

              {/* Badge */}
              <span className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow">
                Industry Experts
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

      {/* INDUSTRIES LIST */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <IndustryColumn
            title="Healthcare & Medical"
            items={[
              "Electronic Health Records (EHR)",
              "Telemedicine Platforms",
              "Patient Management Systems",
              "Healthcare Analytics",
              "Medical Imaging Solutions",
              "HIPAA-Compliant Software",
            ]}
          />

          <IndustryColumn
            title="Finance & Banking"
            items={[
              "Digital Banking Platforms",
              "Payment Processing Systems",
              "Wealth Management Tools",
              "Fraud Detection & Security",
              "Blockchain & Cryptocurrency",
            ]}
          />

          <IndustryColumn
            title="Retail & E-Commerce"
            items={[
              "Online Store Development",
              "Inventory Management",
              "Point of Sale (POS) Systems",
              "Customer Relationship Management",
            ]}
          />
        </div>
      </section>

      {/* CORE INDUSTRY CARDS */}
      <section className="relative bg-white pb-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <IndustryCard
            title="Healthcare Solutions"
            desc="HIPAA-compliant platforms for hospitals, clinics, and telemedicine."
            primary
          />

          <IndustryCard
            title="FinTech & Banking"
            desc="Secure, scalable solutions for financial institutions and startups."
          />

          <IndustryCard
            title="Retail & E-Commerce"
            desc="Modern platforms that drive sales and enhance customer experience."
          />
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="relative py-24 bg-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Technology Background"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Industry-Tailored Expertise
          </h2>
          <p className="mt-6 text-lg text-gray-700">
            Deep domain knowledge across healthcare, finance, retail, education, and more. We understand compliance, security, and scalability requirements for your industry.
          </p>
        </div>
      </section>
    </main>
  );
}

/* HELPERS */

function IndustryColumn({ title, items }: { title: string; items: string[] }) {
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

function IndustryCard({
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
      className={`relative flex flex-col rounded-[2.5rem] p-8 pr-16 shadow-lg ${
        primary ? "bg-[#0B4EA2] text-white" : "bg-white border-2 border-[#0B4EA2]"
      }`}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-6">{desc}</p>

      {/* LEARN MORE */}
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

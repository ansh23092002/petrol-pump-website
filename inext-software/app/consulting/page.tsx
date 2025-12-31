"use client";

import Image from "next/image";

export default function ConsultingPage() {
  return (
    <main className="bg-[#F7F5F2] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative w-full h-[420px] md:h-[480px] flex items-center justify-center bg-[#181818]">
        <Image src="/consulting-hero.jpg" alt="Consulting Hero" fill className="object-cover opacity-60" />
        <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Unlock Your Potential<br />with Professional Consulting
          </h1>
          <p className="text-lg text-white/80 mb-6">
            We help businesses and individuals achieve clarity, confidence, and measurable growth. Our expert consulting services are designed to guide you through challenges, empower your decisions, and deliver lasting results.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-[#FFD600] text-black font-semibold px-6 py-2 rounded-full shadow hover:bg-yellow-300 transition">Start Now</button>
            <button className="bg-white text-black font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition">Contact Us</button>
          </div>
        </div>
      </section>

      {/* ABOUT/ MISSION SECTION */}
      <section className="max-w-5xl mx-auto mt-12 bg-white rounded-2xl shadow p-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-bold italic">Our mission</span> is to empower organizations and individuals to reach their highest potential. We deliver tailored strategies, actionable insights, and hands-on support for sustainable success.
            </p>
            <div className="flex gap-2 mt-4">
              <span className="w-3 h-3 rounded-full bg-[#FFD600] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#181818] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#E0E0E0] inline-block" />
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src="/consulting-profile.jpg" alt="Consulting Profile" width={220} height={220} className="rounded-xl object-cover" />
          </div>
        </div>
     
      </section>

      {/* EMPOWERING GROWTH SECTION */}
      <section className="max-w-6xl mx-auto mt-16">
        <div className="relative h-[320px] md:h-[400px] rounded-2xl overflow-hidden">
          <Image src="/consulting-growth.jpg" alt="Empowering Growth" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center max-w-2xl">
              Transform your business with expert guidance and proven solutions.
            </h2>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Client Success Stories</h3>
          <p className="text-gray-700 mb-4">“The consulting team helped us clarify our vision and implement strategies that delivered real growth. Their expertise and support made all the difference.”</p>
          <div className="flex items-center gap-4 mt-4">
            <Image src="/client-profile.jpg" alt="Client" width={56} height={56} className="rounded-full object-cover" />
            <div>
              <span className="font-semibold text-gray-800">Alex Morgan</span><br />
              <span className="text-xs text-gray-500">COO, GrowthWorks</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Strategic Solutions</h3>
          <div className="flex flex-col items-center">
            <Image src="/consulting-coaching.jpg" alt="Consulting Coaching" width={120} height={120} className="rounded-xl object-cover mb-4" />
            <span className="text-xs text-gray-500 mb-2">December 31, 2025</span>
            <span className="font-semibold text-gray-800">Business Strategy & Growth</span>
            <button className="mt-3 bg-[#FFD600] text-black px-4 py-1 rounded-full font-semibold">Learn More</button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-5xl mx-auto mt-16 mb-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find quick, clear answers to common questions</h2>
        <div className="bg-white rounded-2xl shadow p-8">
          <ul className="space-y-4">
            <li className="border-b pb-4">
              <details>
                <summary className="font-semibold cursor-pointer">What consulting services do you provide?</summary>
                <p className="mt-2 text-gray-700">We offer business strategy, digital transformation, leadership coaching, and operational improvement services.</p>
              </details>
            </li>
            <li className="border-b pb-4">
              <details>
                <summary className="font-semibold cursor-pointer">How do you customize solutions for clients?</summary>
                <p className="mt-2 text-gray-700">Our team works closely with you to understand your goals and challenges, then designs tailored strategies for your unique needs.</p>
              </details>
            </li>
            <li className="border-b pb-4">
              <details>
                <summary className="font-semibold cursor-pointer">What is the process to get started?</summary>
                <p className="mt-2 text-gray-700">Contact us to schedule a free consultation. We'll assess your needs and recommend the best approach for your business.</p>
              </details>
            </li>
            <li>
              <details>
                <summary className="font-semibold cursor-pointer">Do you work with startups and enterprises?</summary>
                <p className="mt-2 text-gray-700">Yes, we support organizations of all sizes, from startups to large enterprises, across various industries.</p>
              </details>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}


  const approach = [
    {
      step: "01",
      title: "Discovery",
      description: "We start by understanding your business, challenges, and goals through detailed analysis.",
    },
    {
      step: "02",
      title: "Strategy",
      description: "Develop a comprehensive strategy aligned with your objectives and industry best practices.",
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the plan with our expert team, ensuring smooth deployment and minimal disruption.",
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuously monitor, measure, and optimize to ensure maximum value and ROI.",
    },
  ];

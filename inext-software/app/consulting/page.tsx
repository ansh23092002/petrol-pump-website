'use client';

import Link from "next/link";
import Navbar from "../Components/Navbar";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export default function ConsultingPage() {
  const cardsRef = useRef(null);
  const approachRef = useRef(null);

  useLayoutEffect(() => {
    const cards = cardsRef.current?.querySelectorAll(".consulting-card");
    if (cards) {
      gsap.set(cards, { y: 60, opacity: 0, force3D: true });
      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        force3D: true,
      });
    }

    const approachCards = approachRef.current?.querySelectorAll(".approach-card");
    if (approachCards) {
      gsap.set(approachCards, { scale: 0.8, opacity: 0, force3D: true });
      gsap.to(approachCards, {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: "back.out(1.5)",
        force3D: true,
        delay: 0.4,
      });
    }
  }, []);

  const consultingAreas = [
    {
      title: "Digital Transformation",
      description: "Navigate your digital journey with strategic roadmaps and implementation support",
      details: [
        "Technology Assessment",
        "Digital Strategy Planning",
        "Implementation Roadmap",
        "Change Management",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Technology Advisory",
      description: "Expert guidance on technology selection, architecture, and best practices",
      details: [
        "Technology Stack Selection",
        "Architecture Design",
        "Security Consulting",
        "Performance Optimization",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Business Process",
      description: "Optimize operations through automation and process re-engineering",
      details: [
        "Process Analysis",
        "Workflow Automation",
        "System Integration",
        "Efficiency Improvement",
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Data & Analytics",
      description: "Turn data into actionable insights with advanced analytics solutions",
      details: [
        "Data Strategy",
        "Analytics Implementation",
        "Business Intelligence",
        "Data Governance",
      ],
      gradient: "from-green-500 to-teal-500",
    },
  ];

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

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="fixed inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoNHY0aC00ek00NCAzNGg0djRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 text-sm font-semibold mb-6 border border-purple-500/30">
              💼 Strategic Consulting
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Strategic Technology
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Consulting
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Partner with us to navigate complexity, accelerate innovation, and achieve measurable business outcomes through expert technology guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105 flex items-center gap-2"
              >
                Schedule a Consultation
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#expertise"
                className="px-10 py-4 bg-white/10 backdrop-blur-sm rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-all"
              >
                View Expertise
              </Link>
            </div>
          </div>
        </section>

        {/* Consulting Areas */}
        <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Our Consulting <span className="text-blue-400">Expertise</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Comprehensive consulting services across all aspects of technology and business
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" ref={cardsRef}>
              {consultingAreas.map((area, index) => (
                <div
                  key={index}
                  className="consulting-card group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${area.gradient} opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-opacity`} />
                  <div className="relative">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{area.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{area.description}</p>
                    <ul className="space-y-3">
                      {area.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm group/item hover:text-white transition-colors">
                          <span className={`mr-3 w-2 h-2 rounded-full bg-gradient-to-r ${area.gradient} flex-shrink-0 group-hover/item:scale-150 transition-transform`} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <div className={`mt-6 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${area.gradient} rounded-full`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-purple-400">Approach</span>
              </h2>
              <p className="text-gray-400 text-lg">
                A proven methodology that delivers results
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" ref={approachRef}>
              {approach.map((item, index) => (
                <div key={index} className="approach-card relative group text-center">
                  <div className="text-7xl font-bold text-white/10 mb-4 group-hover:text-white/20 transition-colors">{item.step}</div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  {index < approach.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent opacity-50" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 animate-pulse" />
            <div className="relative bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-pink-600/90 backdrop-blur-sm rounded-3xl p-12 sm:p-16 text-center border border-white/20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Let's Build Your Future Together
              </h2>
              <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Our consultants are ready to help you tackle your most complex challenges and drive transformational change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group px-10 py-4 bg-white rounded-xl text-blue-600 font-bold hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-2"
                >
                  Start Consulting
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="px-10 py-4 bg-white/10 backdrop-blur-sm rounded-xl text-white font-bold border border-white/30 hover:bg-white/20 transition-all"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

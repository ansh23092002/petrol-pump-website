'use client';

import Link from "next/link";
import Navbar from "../Components/Navbar";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export default function IndustriesPage() {
  const cardsRef = useRef(null);
  const statsRef = useRef(null);

  useLayoutEffect(() => {
    const cards = cardsRef.current?.querySelectorAll(".industry-card");
    if (cards) {
      gsap.set(cards, { y: 70, opacity: 0, force3D: true });
      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        force3D: true,
      });
    }

    const stats = statsRef.current?.querySelectorAll(".stat-card");
    if (stats) {
      gsap.set(stats, { scale: 0.5, opacity: 0, force3D: true });
      gsap.to(stats, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "elastic.out(1, 0.5)",
        force3D: true,
        delay: 0.3,
      });
    }
  }, []);

  const industries = [
    {
      name: "Healthcare",
      icon: "🏥",
      description: "HIPAA-compliant solutions for hospitals, clinics, and telemedicine platforms",
      solutions: [
        "Electronic Health Records (EHR)",
        "Telemedicine Platforms",
        "Patient Management Systems",
        "Healthcare Analytics",
        "Medical Imaging Solutions",
      ],
      color: "from-green-400 to-emerald-600",
    },
    {
      name: "Finance & Banking",
      icon: "💰",
      description: "Secure fintech solutions for banks, payment processors, and financial institutions",
      solutions: [
        "Digital Banking Platforms",
        "Payment Gateway Integration",
        "Fraud Detection Systems",
        "Investment Management Tools",
        "Regulatory Compliance Solutions",
      ],
      color: "from-blue-400 to-indigo-600",
    },
    {
      name: "E-Commerce & Retail",
      icon: "🛒",
      description: "Scalable e-commerce platforms and retail management systems",
      solutions: [
        "Online Marketplace Development",
        "Inventory Management",
        "POS Systems",
        "Customer Analytics",
        "Omnichannel Solutions",
      ],
      color: "from-purple-400 to-pink-600",
    },
    {
      name: "Education",
      icon: "🎓",
      description: "EdTech solutions for schools, universities, and online learning platforms",
      solutions: [
        "Learning Management Systems (LMS)",
        "Virtual Classrooms",
        "Student Information Systems",
        "Online Assessment Tools",
        "Educational Content Platforms",
      ],
      color: "from-orange-400 to-red-600",
    },
    {
      name: "Logistics & Transportation",
      icon: "🚚",
      description: "Fleet management and supply chain optimization solutions",
      solutions: [
        "Fleet Tracking Systems",
        "Route Optimization",
        "Warehouse Management",
        "Supply Chain Analytics",
        "Last-Mile Delivery Solutions",
      ],
      color: "from-cyan-400 to-blue-600",
    },
    {
      name: "Real Estate",
      icon: "🏢",
      description: "Property management and real estate marketplace platforms",
      solutions: [
        "Property Listing Platforms",
        "CRM for Real Estate",
        "Virtual Property Tours",
        "Lease Management Systems",
        "Real Estate Analytics",
      ],
      color: "from-teal-400 to-green-600",
    },
    {
      name: "Manufacturing",
      icon: "🏭",
      description: "Industrial IoT and smart factory solutions",
      solutions: [
        "Production Management Systems",
        "Quality Control Software",
        "IoT Sensor Integration",
        "Predictive Maintenance",
        "Supply Chain Optimization",
      ],
      color: "from-gray-400 to-gray-600",
    },
    {
      name: "Media & Entertainment",
      icon: "🎬",
      description: "Content management and streaming platforms",
      solutions: [
        "Video Streaming Platforms",
        "Content Management Systems",
        "Digital Rights Management",
        "Social Media Integration",
        "Analytics & Monetization",
      ],
      color: "from-red-400 to-rose-600",
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
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute top-20 left-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.2s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-semibold mb-6 border border-cyan-500/30">
              🏭 Industry Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Industries We
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Transform
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Delivering specialized software solutions tailored to the unique challenges and opportunities of your industry
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={cardsRef}>
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="industry-card group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className="text-7xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{industry.icon}</div>
                    
                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{industry.name}</h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed">{industry.description}</p>
                    
                    {/* Solutions List */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">Our Solutions:</h4>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start text-gray-300 text-sm group/item hover:text-white transition-colors">
                            <span className={`mr-2 mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${industry.color} flex-shrink-0 group-hover/item:scale-150 transition-transform`} />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Hover Effect Line */}
                    <div className={`mt-6 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${industry.color} rounded-full`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8" ref={statsRef}>
              {[
                { value: "8+", label: "Industries" },
                { value: "150+", label: "Projects" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div key={index} className="stat-card text-center group">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
                  <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
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
                Don't See Your Industry?
              </h2>
              <p className="text-white/90 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                We work across many more sectors. Let's discuss your specific industry needs and create custom solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group px-10 py-4 rounded-xl bg-white text-blue-600 font-bold hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-2"
                >
                  Contact Us
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="px-10 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-bold border border-white/30 hover:bg-white/20 transition-all"
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

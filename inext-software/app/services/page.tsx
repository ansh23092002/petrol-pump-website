'use client';

import Image from "next/image";
import Link from "next/link";
import Navbar from "../Components/Navbar";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { FaCloud, FaRocket, FaLaptopCode, FaSyncAlt, FaPlug, FaCheckCircle, FaTools, FaChevronRight, FaArrowRight } from "react-icons/fa";

const serviceGroups = [
  {
    heading: "Custom Cloud Solutions",
    description:
      "Scalable, secure, and high-performance digital solutions tailored to your business needs.",
    icon: FaCloud,
    services: [
      "Web Application Development",
      "Mobile App Development",
      "SAAS Development",
      "Ecommerce Development",
      "Business Software & ERP Development",
      "Agile DevOps Management",
    ],
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
  },
  {
    heading: "Innovate & Accelerate Solutions",
    description:
      "Advanced technologies to automate, innovate, and accelerate business growth.",
    icon: FaRocket,
    services: [
      "Applied Artificial Intelligence",
      "Applied Machine Learning",
      "Blockchain Development",
      "Internet of Things (IoT)",
      "Chatbot Integration & Development",
    ],
    gradient: "from-purple-500 via-pink-500 to-rose-500",
  },
  {
    heading: "Software Development & Consultancy",
    description:
      "From idea to execution — complete product engineering and strategic consulting.",
    icon: FaLaptopCode,
    services: [
      "Prototype Development",
      "UI/UX Development",
      "MVP Development",
      "Software Development & Consultancy",
    ],
    gradient: "from-orange-500 via-red-500 to-pink-500",
  },
];

const additionalServices = [
  {
    title: "Digital Transformation",
    description: "Modernize your business with cutting-edge digital solutions",
    icon: FaSyncAlt,
  },
  {
    title: "API Development & Integration",
    description: "Seamless connectivity between systems and platforms",
    icon: FaPlug,
  },
  {
    title: "Quality Assurance & Testing",
    description: "Comprehensive testing for flawless user experiences",
    icon: FaCheckCircle,
  },
  {
    title: "Maintenance & Support",
    description: "24/7 support to keep your systems running smoothly",
    icon: FaTools,
  },
];

export default function ServicesPage() {
  const cardsRef = useRef(null);
  const additionalRef = useRef(null);

  useLayoutEffect(() => {
    const cards = document.querySelectorAll('.service-card');
    const additionalCards = document.querySelectorAll('.additional-card');

    gsap.set(cards, { y: 60, opacity: 0 });
    gsap.set(additionalCards, { scale: 0.8, opacity: 0 });

    gsap.to(cards, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.2,
      force3D: true,
    });

    gsap.to(additionalCards, {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.7)',
      delay: 0.5,
      force3D: true,
    });
  }, []);

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                Enterprise-Grade Solutions
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Professional Software Solutions
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  That Drive Innovation
                </span>
              </h1>
              
              <p className="text-gray-400 text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
                Transform your business with cutting-edge technology solutions designed to scale, 
                perform, and deliver measurable results for enterprises worldwide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#services"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Start Your Project
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#services"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Our Core <span className="text-blue-400">Services</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Comprehensive solutions to power your digital transformation
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" ref={cardsRef}>
              {serviceGroups.map((group, idx) => {
                const IconComponent = group.icon;
                return (
                  <div
                    key={idx}
                    className="service-card group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${group.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${group.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                    
                    <div className="relative">
                      <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                        {group.heading}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {group.description}
                      </p>
                      <ul className="space-y-3">
                        {group.services.map((service, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-300 text-sm group/item hover:text-white transition-colors"
                          >
                            <FaChevronRight className="mt-1 w-3 h-3 text-blue-400 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                      <div className={`mt-6 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${group.gradient} rounded-full`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Additional <span className="text-purple-400">Services</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Complete support for your entire development lifecycle
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" ref={additionalRef}>
              {additionalServices.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={idx}
                    className="additional-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 text-center hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <IconComponent className="w-7 h-7 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "500+", label: "Projects Delivered" },
                { value: "200+", label: "Happy Clients" },
                { value: "50+", label: "Team Members" },
                { value: "99%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
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
                Have an Idea? Let's Build It Together
              </h2>
              <p className="text-white/90 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                From startups to enterprises, we help businesses turn ideas into
                scalable digital products that drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group px-10 py-4 rounded-xl bg-white text-blue-600 font-bold hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-2"
                >
                  Get in Touch
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/products"
                  className="px-10 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-bold border border-white/30 hover:bg-white/20 transition-all"
                >
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

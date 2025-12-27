"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";


// Testimonial data for iNext Software clients
const testimonials = [
  {
    name: "Rajesh Kumar",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "iNext Software delivered our project on time with exceptional quality. Their team understood our requirements perfectly and created a solution that exceeded our expectations!",
    date: "Dec 10, 2024",
  },
  {
    name: "Priya Sharma",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Working with iNext was a great experience. They developed our mobile app with cutting-edge technology and provided excellent support throughout the project.",
    date: "Nov 25, 2024",
  },
  {
    name: "Amit Verma",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "The team at iNext is highly professional and responsive. Our website looks amazing and performs flawlessly. Highly recommended!",
    date: "Dec 5, 2024",
  },
  {
    name: "Neha Patel",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "iNext Software transformed our business with their innovative software solutions. Their expertise in development and dedication to client satisfaction is unmatched.",
    date: "Nov 20, 2024",
  },
  {
    name: "Vikram Singh",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "Outstanding service from iNext! They built a robust e-commerce platform for us that handles thousands of transactions seamlessly. Great work!",
    date: "Dec 1, 2024",
  },
  {
    name: "Anita Desai",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "iNext Software's team is incredibly talented. They developed a custom CRM for our company that has improved our productivity significantly. Excellent job!",
    date: "Nov 15, 2024",
  },
];

export default function Testimonial() {
  // Refs for scroll containers
  const upRef = useRef<HTMLDivElement>(null);
  const downRef = useRef<HTMLDivElement>(null);
  const upInnerRef = useRef<HTMLDivElement>(null);
  const downInnerRef = useRef<HTMLDivElement>(null);

  // GSAP infinite scroll animation for both columns
  useEffect(() => {
    const up = upRef.current;
    const upInner = upInnerRef.current;
    const down = downRef.current;
    const downInner = downInnerRef.current;
    
    // Ensure all refs are available
    if (!up || !upInner || !down || !downInner) return;

    // Animate left column scrolling upward
    let upTween = gsap.to(up, {
      scrollTop: upInner.scrollHeight / 2,
      duration: 12,
      ease: "none",
      repeat: -1,
      modifiers: {
        scrollTop: (value) => {
          const max = upInner.scrollHeight / 2;
          return parseFloat(value) >= max ? 0 : value;
        },
      },
    });

    // Set initial position and animate right column scrolling downward
    down.scrollTop = downInner.scrollHeight / 2;
    let downTween = gsap.to(down, {
      scrollTop: 0,
      duration: 12,
      ease: "none",
      repeat: -1,
      modifiers: {
        scrollTop: (value) => {
          const max = downInner.scrollHeight / 2;
          return parseFloat(value) <= 0 ? max : value;
        },
      },
    });

    // Cleanup animations on unmount
    return () => {
      upTween.kill();
      downTween.kill();
    };
  }, []);

  // Split testimonials into two columns (even/odd indices)
  const leftTestimonials = testimonials.filter((_, i) => i % 2 === 0);
  const rightTestimonials = testimonials.filter((_, i) => i % 2 === 1);

  // Duplicate testimonials for seamless infinite scroll
  const doubleLeft = [...leftTestimonials, ...leftTestimonials];
  const doubleRight = [...rightTestimonials, ...rightTestimonials];

  return (
    <section id="testimonials" className="w-full bg-black text-white py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-row">
        {/* Section Navigation (visible only on large screens) */}
        <div className="hidden lg:block">
    
        </div>
        
        {/* Main Content Container */}
        <div className="flex-1">
          <div className="px-4 sm:px-6 md:px-8 flex flex-col md:flex-row gap-8 md:gap-12">
            
            {/* Left Side: Heading and Description */}
            <div className="md:w-1/2 flex flex-col justify-center mb-8 md:mb-0">
              <span className="text-xs sm:text-sm text-gray-400 mb-2">Client Testimonials</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                What Our<br />Clients Say
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-md">
                We take pride in delivering exceptional software solutions. Here's what our satisfied clients have to say about working with iNext Software.
              </p>
             
            </div>
            
            {/* Right Side: Two auto-scrolling columns */}
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              
              {/* Left Column - Scrolls Up */}
              <div ref={upRef} className="overflow-hidden h-56 xs:h-64 sm:h-80 md:h-96 flex flex-col gap-3 sm:gap-4 scrollbar-hide">
                                    <div ref={upInnerRef} className="flex flex-col gap-4">
                                        {doubleLeft.map((t, idx) => (
                                            <div key={idx} className="bg-[#18181b] rounded-lg p-4 flex flex-col shadow-md min-h-[120px] sm:min-h-[140px]">
                                                <div className="flex items-center mb-2">
                                                    <img src={t.avatar} alt={t.name} className="w-8 h-8 rounded-full mr-2 border border-gray-700" />
                                                    <span className="font-semibold text-sm text-white/90">{t.name}</span>
                                                </div>
                                                <p className="text-gray-200 text-sm mb-2 flex-1">{t.text}</p>
                                                <span className="text-xs text-gray-500 mt-auto">{t.date}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Scroll down column */}
                                <div ref={downRef} className="overflow-hidden h-64 sm:h-80 md:h-96 flex flex-col gap-4 scrollbar-hide">
                                    <div ref={downInnerRef} className="flex flex-col gap-4">
                                        {doubleRight.map((t, idx) => (
                                            <div key={idx} className="bg-[#18181b] rounded-lg p-4 flex flex-col shadow-md min-h-[120px] sm:min-h-[140px]">
                                                <div className="flex items-center mb-2">
                                                    <img src={t.avatar} alt={t.name} className="w-8 h-8 rounded-full mr-2 border border-gray-700" />
                                                    <span className="font-semibold text-sm text-white/90">{t.name}</span>
                                                </div>
                                                <p className="text-gray-200 text-sm mb-2 flex-1">{t.text}</p>
                                                <span className="text-xs text-gray-500 mt-auto">{t.date}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
    }

'use client';
import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Navbar from "../Components/Navbar";
import Link from "next/link";
import gsap from "gsap";

export default function CorporateActivityPage() {
  const sections = [
    {
      title: "Employee Engagement Initiatives",
      description: "We believe happy and engaged employees drive success, and that's why we focus on creating meaningful opportunities to enhance their personal and professional lives.",
      image: "https://inextsoftware.in/assets/images/Employee-engagement.jpeg",
      items: [
        {
          title: "Team-Building Activities",
          description: "Regular outdoor adventures like trekking, sports tournaments, and off-site retreats to strengthen interpersonal bonds.",
          image: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg"
        },
        {
          title: "Skill Development Programs",
          description: "Comprehensive training sessions tailored to emerging trends in IT, such as cloud computing, AI, and DevOps.",
          image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg"
        },
        {
          title: "Wellness Programs",
          description: "Monthly wellness drives, including yoga sessions, guided meditation classes, and mental health seminars.",
          image: "https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg"
        },
        {
          title: "Recognition and Rewards",
          description: "Celebrating high-performing individuals and teams through awards like \"Employee of the Month\" or \"Innovation of the Year.\"",
          image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
        }
      ]
    },
    {
      title: "Industry Engagement",
      description: "We are deeply invested in the growth and innovation of the IT industry. Our engagement with the broader tech ecosystem helps us stay ahead of the curve and foster collaboration.",
      image: "https://inextsoftware.in/assets/images/CSR-1.jpeg",
      items: [
        {
          title: "Workshops and Seminars",
          description: "Hosting educational seminars on emerging technologies like blockchain, cybersecurity, and IoT to share expertise.",
          image: "https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg"
        },
        {
          title: "Tech Partnerships",
          description: "Collaborating with leading tech organizations like cloud service providers, SaaS platforms, and analytics companies to deliver cutting-edge solutions.",
          image: "https://images.pexels.com/photos/3184634/pexels-photo-3184634.jpeg"
        },
        {
          title: "Educational Outreach",
          description: "Conducting tech bootcamps and hackathons in partnership with universities to nurture the next generation of talent.",
          image: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg"
        }
      ]
    },
    {
      title: "Corporate Social Responsibility (CSR)",
      description: "Giving back to society is a cornerstone of Inext Software Solutions' values. We strive to create a positive and lasting impact in the communities where we operate.",
      image: "https://img.freepik.com/premium-vector/india-festival-celebrate-holiday-day-country-traditional-style-dance-include-refined-experimental-fusion-classical-folk-western-forms-flat-cartoon-vector-illustration_87771-6477.jpg",
      items: [
        {
          title: "Community Development Programs",
          description: "Organizing digital literacy workshops for underserved communities to help them gain skills needed in the modern world.",
          image: "https://images.pexels.com/photos/3800033/pexels-photo-3800033.jpeg"
        },
        {
          title: "Environmental Sustainability",
          description: "Conducting regular tree-planting drives, waste reduction campaigns, and energy-saving initiatives.",
          image: "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg"
        },
        {
          title: "Supporting Social Causes",
          description: "Contributing to disaster relief efforts by providing funds, resources, and volunteer support in times of need.",
          image: "https://images.pexels.com/photos/3952619/pexels-photo-3952619.jpeg"
        }
      ]
    },
    {
      title: "Cultural Celebrations",
      description: "We embrace diversity and celebrate the unique cultural identities of our employees to foster an inclusive and vibrant workplace.",
      image: "https://www.potential.com/wp-content/uploads/2022/12/Blog-Innovation.png",
      items: [
        {
          title: "Festival Celebrations",
          description: "Hosting grand celebrations for festivals like Diwali, Christmas, and Eid with decorations, cultural performances, and team lunches.",
          image: "https://images.pexels.com/photos/3375917/pexels-photo-3375917.jpeg"
        },
        {
          title: "Cultural Exchange Days",
          description: "Encouraging employees to share their customs, stories, and cuisines during designated cultural appreciation events.",
          image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg"
        },
        {
          title: "Foundation Day 2025",
          description: "An annual gala with award ceremonies, entertainment programs, and interactive games for employees and their families.",
          link: "/foundation-day",
          image: "https://images.pexels.com/photos/3772517/pexels-photo-3772517.jpeg"
        }
      ]
    },
    {
      title: "Innovation Programs",
      description: "Innovation lies at the core of Inext Software Solutions' operations. We foster creativity and forward-thinking across all levels of the company.",
      image: "https://ncs4.usm.edu/wp-content/uploads/2022/04/Ind-Eng-Webinar-NO-DATE-1024x469.png",
      items: [
        {
          title: "Idea Incubation Program",
          description: "Dedicated time for employees to work on innovative ideas, with the company providing mentorship and funding for promising projects.",
          image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
        },
        {
          title: "Technology Labs",
          description: "Hands-on spaces equipped with state-of-the-art tools and software where employees can explore and experiment with emerging technologies.",
          image: "https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg"
        },
        {
          title: "Continuous Improvement Initiatives",
          description: "Soliciting regular feedback from employees and clients to identify opportunities for enhancement in processes and services.",
          image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg"
        }
      ]
    }
  ];

  const cardsRef = useRef(null);

  useLayoutEffect(() => {
    const cards = cardsRef.current?.querySelectorAll(".activity-card");
    if (!cards) return;
    
    gsap.set(cards, { y: 30, opacity: 0, force3D: true });
    gsap.to(cards, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.out",
      force3D: true
    });
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0B4EA2] via-[#0A3F85] pb-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 pt-24">

            {/* LEFT: Text */}
            <div className="flex-1 text-white mb-12 md:mb-0">
              <div className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-6">
                ✨ Our Initiatives
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Corporate <span className="text-[#FFD600]">Activity</span>
              </h1>
              <p className="mb-8 text-lg opacity-90 max-w-xl">
                Discover how we create meaningful opportunities, foster innovation, and give back to our communities through various corporate initiatives.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-white text-[#0B4EA2] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">Get Involved</a>
                <a href="#" className="border border-white/30 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition">Learn More</a>
              </div>
            </div>

            {/* RIGHT: Organic blob image */}
            <div className="flex-1 flex justify-center md:justify-end relative">
              <div className="relative w-[320px] h-[380px] md:w-[420px] md:h-[480px]">
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
                >
                  <Image
                    src='/corporate.png'
                    alt="Corporate Activity"
                    fill
                    className="object-cover "
                  />
                </div>

               
              </div>
            </div>

          </div>

          {/* Decorative curve */}
          <svg className="absolute bottom-0 left-0 w-full" height="80" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
            <path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="#fff" />
          </svg>
        </section>

        {/* Sections */}
        {sections.map((section, sectionIdx) => (
          <section key={sectionIdx} className={`py-16 px-4 sm:px-6 lg:px-8 ${sectionIdx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="mx-auto max-w-6xl">
              <div className="grid lg:grid-cols-3 gap-12 items-start mb-12">
                <div className="lg:col-span-2">
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-4">
                    {String(sectionIdx + 1).padStart(2, '0')}
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-5 leading-tight">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                    {section.description}
                  </p>
                  
                  {/* Cards Grid */}
                  <div className="grid md:grid-cols-2 gap-6" ref={cardsRef}>
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="activity-card group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                        {/* Card Image */}
                        {item.image && (
                          <div className="relative h-48 w-full overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        )}
                        {/* Card Content */}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-5 leading-relaxed line-clamp-3">
                            {item.description}
                          </p>
                          {item.link ? (
                            <Link href={item.link} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-semibold group-hover:gap-3 transition-all">
                              Read More 
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </Link>
                          ) : (
                            <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-semibold group-hover:gap-3 transition-all">
                              Read More 
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="lg:col-span-1">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden sticky top-24 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Bottom CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-yellow-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg5MHY5MGgtOTB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
          <div className="mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              We're delivering the best customer experience
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Join us in our mission to create meaningful impact through innovation, collaboration, and social responsibility.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-10 py-4 text-base font-bold text-blue-600 shadow-2xl transition-all hover:scale-105 hover:shadow-3xl"
            >
              Get in Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

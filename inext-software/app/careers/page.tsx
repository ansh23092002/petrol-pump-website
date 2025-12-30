'use client';
import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../Components/Navbar";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Careers at iNext - Join Our Team",
//   description:
//     "Join iNext Software Solutions and build your career with cutting-edge technologies, innovative projects, and a collaborative team.",
//   keywords: "careers, jobs, software developer, job openings, tech careers",
// };

export default function CareersPage() {
  const [sliderYellow, setSliderYellow] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(1); // start with 2nd card highlighted

  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "5+ years",
      description:
        "Build scalable web applications using React, Node.js, and modern cloud technologies.",
      skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description:
        "Manage CI/CD pipelines, infrastructure automation, and cloud deployments.",
      skills: ["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins"],
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "On-site / Hybrid",
      type: "Full-time",
      experience: "3+ years",
      description:
        "Create beautiful, user-friendly interfaces and exceptional user experiences.",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "Design Systems"],
    },
    {
      title: "Mobile App Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description:
        "Develop cross-platform mobile applications using React Native and Flutter.",
      skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
    },
    {
      title: "Data Scientist",
      department: "AI/ML",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "3+ years",
      description:
        "Build machine learning models and data-driven solutions for clients.",
      skills: ["Python", "TensorFlow", "PyTorch", "SQL", "Data Analysis"],
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Hybrid",
      type: "Full-time",
      experience: "5+ years",
      description:
        "Define product strategy, roadmap, and work with cross-functional teams.",
      skills: [
        "Product Strategy",
        "Agile",
        "User Stories",
        "Analytics",
        "Stakeholder Management",
      ],
    },
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "Industry-leading compensation and performance bonuses",
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      description: "Comprehensive health insurance for you and your family",
    },
    {
      icon: "🏖️",
      title: "Flexible Time Off",
      description: "Generous PTO policy and work-life balance",
    },
    {
      icon: "🏡",
      title: "Remote Work",
      description: "Work from anywhere with flexible hybrid options",
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Budget for courses, conferences, and certifications",
    },
    {
      icon: "🚀",
      title: "Career Growth",
      description: "Clear career paths and promotion opportunities",
    },
    {
      icon: "💻",
      title: "Latest Tech",
      description: "Work with cutting-edge technologies and tools",
    },
    {
      icon: "🎉",
      title: "Team Events",
      description: "Regular team outings, celebrations, and hackathons",
    },
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We encourage creativity and embrace new technologies",
    },
    {
      title: "Collaborative Culture",
      description: "Work together, learn together, grow together",
    },
    {
      title: "Quality Excellence",
      description: "We deliver exceptional solutions with attention to detail",
    },
    {
      title: "Continuous Learning",
      description: "Never stop growing your skills and knowledge",
    },
  ];

  // hero gallery images (row under the main heading)
  const heroImages = [
    "https://images.pexels.com/photos/1181370/pexels-photo-1181370.jpeg", // people working
    "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg",
    "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg",
    "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg",
    "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg",
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-[#020617] to-[#0B4EA2] text-white">
        {/* HERO + IMAGE STRIP */}
        <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-[#FFD23F]">
              Our Careers
            </p>
            <h1 className="mt-3 text-center text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[46px]">
              Innovators Wanted; Join
              <br />
              the iNext Revolution
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-center text-sm text-white/80 sm:text-base">
              Join a team of curious builders shaping the future of software.
              We&apos;re always looking for people who love solving complex
              problems and shipping great products.
            </p>

          

            {/* image strip */}
            <div className="mt-10 flex gap-5 overflow-x-auto pb-3">
              {heroImages.map((src, idx) => (
                <div
                  key={idx}
                  className="relative min-w-[210px] max-w-[260px] overflow-hidden rounded-3xl bg-[#18181b] shadow-sm"
                >
                  <div className=" w-full">
                    <Image
                      src={src}
                      alt={`Life at iNext ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ADVANTAGES / BENEFITS – "Why Work With Us?" */} 
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#FFD23F]">
                  Our Advantages
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
                  Why Work With Us?
                </h2>
              </div>

              {/* arrows – visual only, like slider controls */}
              <div className="hidden items-center gap-3 sm:flex">
                <button
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#FFD23F] bg-[#0B4EA2] text-sm text-[#FFD23F] hover:bg-[#FFD23F] hover:text-[#0B4EA2]"
                  onClick={() => {
                    setSliderYellow((prev) => !prev);
                    setHighlightedIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
                  }}
                >
                  ‹
                </button>
                <button
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#FFD23F] bg-[#0B4EA2] text-sm text-[#FFD23F] hover:bg-[#FFD23F] hover:text-[#0B4EA2]"
                  onClick={() => {
                    setSliderYellow((prev) => !prev);
                    setHighlightedIndex((prev) => (prev + 1) % benefits.length);
                  }}
                >
                  ›
                </button>
              </div>
            </div>

            {/* cards – slider on mobile, grid on larger screens */}
            <div
              className="flex gap-5 overflow-x-auto pb-3 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6"
            >
              {benefits.map((benefit, index) => {
                const isHighlighted = index === highlightedIndex;
                return (
                  <div
                    key={index}
                    className={`min-w-[220px] rounded-3xl border px-5 py-6 text-sm shadow-sm ${
                      isHighlighted
                        ? "border-transparent bg-[#FFD23F] text-[#020617]"
                        : "border-[#0B4EA2] bg-[#18181b] text-white"
                    }`}
                  >
                    <h3 className="mt-3 text-base font-semibold">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* VALUES / CULTURE SECTION */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#FFD23F]">
                Our Culture
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
                How We Work Together
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                We&apos;re a team of problem solvers who value ownership,
                kindness and continuous improvement. These principles shape how
                we collaborate every day.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-[#0B4EA2] bg-[#18181b] px-5 py-6 text-sm shadow-sm text-white"
                >
                  <h3 className="text-base font-semibold">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OPEN POSITIONS LIST */}
        <section
          id="openings"
          className="bg-[#05235c] py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Open Positions
              </h2>
              <p className="mt-3 text-sm text-white/80 sm:text-base">
                Find the role that matches your skills and ambitions.
              </p>
            </div>

            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <article
                  key={index}
                  className="rounded-3xl border border-[#4696d8] bg-white px-6 py-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:px-8 md:py-7"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-semibold text-[#231b4a] md:text-xl">
                          {position.title}
                        </h3>
                        <span className="rounded-full bg-[#231b4a] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f6ebdf]">
                          {position.type}
                        </span>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-4 text-xs text-[#7d7686]">
                        <span>📍 {position.location}</span>
                        <span>🏢 {position.department}</span>
                        <span>⏱️ {position.experience}</span>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-[#5b5567]">
                        {position.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {position.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="rounded-full bg-[#f5e9dd] px-3 py-1 text-[11px] font-medium text-[#5b5567]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="md:ml-6 md:self-stretch">
                      <button className="mt-2 w-full rounded-full bg-[#231b4a] px-6 py-2.5 text-sm font-semibold text-[#f6ebdf] shadow-sm transition hover:bg-[#332a6d] md:mt-0 md:w-auto">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8  from-black to-transparent">
          <div className="mx-auto max-w-3xl rounded-3xl bg-[#18181b] px-8 py-12 text-center text-white shadow-md">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Don&apos;t See the Right Role?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
              We&apos;re always happy to hear from talented people. Share your
              profile with us and we&apos;ll reach out when there&apos;s a good
              match.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#FFD23F] px-10 py-3 text-sm font-semibold text-[#020617] shadow-sm transition hover:bg-[#ffe066]"
            >
              Send Your Resume
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
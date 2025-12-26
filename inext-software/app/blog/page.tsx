"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    title: "Building Scalable Microservices with Kubernetes",
    excerpt:
      "How our team designs and operates microservice architectures on Kubernetes for high-growth products.",
    author: "Rahul Kumar",
    date: "Dec, 2024",
    category: "DevOps",
    emoji: "🚢",
  },
  {
    title: "React Server Components: A Deep Dive",
    excerpt:
      "Understanding the React Server Components model and where it fits in modern web architecture.",
    author: "Priya Sharma",
    date: "Dec, 2024",
    category: "Frontend",
    emoji: "⚛️",
  },
  {
    title: "GraphQL vs REST: Making the Right Choice",
    excerpt:
      "Practical guidance on choosing the right API paradigm for your product roadmap.",
    author: "Amit Verma",
    date: "Dec, 2024",
    category: "Backend",
    emoji: "🔗",
  },
  {
    title: "Secure Coding Practices for Web Applications",
    excerpt:
      "Core principles our engineers follow to keep customer applications secure by design.",
    author: "Vikram Singh",
    date: "Dec, 2024",
    category: "Security",
    emoji: "🔐",
  },
];

export default function BlogPage() {
  const loadingSection = useRef<HTMLDivElement>(null);
  const loadingText = useRef<HTMLParagraphElement>(null);
  const loadingSub = useRef<HTMLParagraphElement>(null);

  /* GSAP LOADING ANIMATION */
  useEffect(() => {
    if (!loadingSection.current || !loadingText.current) return;

    const letters = loadingText.current.querySelectorAll("span");

    gsap.set(letters, {
      opacity: 0,
      x: (i) => (i % 2 === 0 ? -window.innerWidth : window.innerWidth),
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: loadingSection.current,
        start: "top 75%",
        once: true,
      },
    });

    tl.to(letters, {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.06,
    })
      .fromTo(
        loadingText.current,
        { letterSpacing: "0.8em" },
        {
          letterSpacing: "0.2em",
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .fromTo(
        loadingSub.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.2"
      );
  }, []);

  return (
    <main
      className="
        min-h-screen 
        bg-[#d7cec4] 
        text-[#171310]
        bg-[radial-gradient(circle,_rgba(0,0,0,0.06)_1px,_transparent_0)]
        bg-[length:18px_18px]
      "
    >
      {/* BLOG LAYOUT */}
      <section className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-24 pt-24 lg:flex-row lg:gap-24 lg:pt-32">
        {/* LEFT */}
        <div className="shrink-0 lg:w-[32%]">
          <div className="text-[58px] leading-none sm:text-[72px] md:text-[80px]">
            <span className="block">BL</span>
            <span className="block">OG—</span>
            <span className="block">NE</span>
            <span className="block">WS</span>
          </div>

          <p className="mt-6 max-w-xs text-sm text-[#4c4742]">
            Latest news and updates from{" "}
            <span className="font-semibold">iNext Software Solutions</span>.
          </p>
        </div>

        {/* POSTS */}
        <div className="flex-1 space-y-16">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className={`grid gap-10 lg:grid-cols-[260px_1fr] ${
                index !== 0 ? "border-t border-[#b4aa9e]/70 pt-10" : ""
              }`}
            >
              <div className="aspect-[4/5] rounded-3xl bg-black flex items-center justify-center text-5xl text-white/80">
                {post.emoji}
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#7b7369]">
                  {post.date} · {post.category}
                </p>

                <h2 className="text-2xl font-medium tracking-tight">
                  {post.title}
                </h2>

                <p className="max-w-md text-sm text-[#3f3a35]">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-6 text-xs text-[#7b7369]">
                  <span>By {post.author}</span>
                  <span className="h-px w-8 bg-[#a79d91]" />
                  <span>Read time: ~10 min</span>
                </div>

                <button className="mt-4 w-fit rounded-full bg-[#171310] px-5 py-2.5 text-xs text-[#f3ece3] hover:bg-[#2c2520]">
                  Discover ↗
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FUTURE BACKEND CONTEXT */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#b0673b]">
            Looking ahead
          </p>

          <h2 className="mt-3 text-3xl font-medium md:text-4xl">
            Future backend implementation
          </h2>

          <p className="mt-4 text-sm text-[#4f4944]">
            This blog is architected for future scalability. As content grows,
            it will evolve into a fully dynamic, backend-driven platform with
            structured publishing workflows and performance optimization.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-[#3f3a35]">
            <li>• Headless CMS integration</li>
            <li>• Secure APIs & role-based access</li>
            <li>• Author & editorial workflows</li>
            <li>• CDN-backed content delivery</li>
            <li>• Analytics & engagement tracking</li>
          </ul>
        </div>
      </section>
      <section
        ref={loadingSection}
        className="bg-black py-24 text-center text-[#f0e7db] overflow-hidden"
      >
        <p
          ref={loadingText}
          className="text-[40px] sm:text-[48px] tracking-[0.6em] font-medium"
        >
          {"LOADING".split("").map((char, i) => (
            <span key={i} className="inline-block">
              {char}
            </span>
          ))}
        </p>

        <p ref={loadingSub} className="mt-6 text-sm text-[#cdc1b0]">
          Innovation, engineering and design – built into every release.
        </p>
      </section>

    </main>
  );
}

"use client";

import Image from "next/image";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { ProjectCards } from "./ProjectCards";
import { BackgroundEffects } from "./BackgroundEffects";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screenoverflow-hidden pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/backgroundiamge.png"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      
      {/* Background Effects */}
      <BackgroundEffects />

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-20">
        {/* Welcome Badge */}
   

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-5 leading-tight animate-fade-in-up">
          Global Experts in Web, Software
          <br />
          <span className="text-white">& App Development</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 text-center max-w-4xl mx-auto mb-10 px-4 animate-fade-in-up animation-delay-200">
          Scalable. Secure. Future-Ready. Flowrush delivers high-performance
          digital solutions
          <br className="hidden sm:block" />
          for startups, enterprises, and global brands across the UK, US, and
          beyond.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 animate-fade-in-up animation-delay-400">
          <Button variant="primary" href="#consultation">
            Get a Free Consultation
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Button>
          <Button variant="secondary" href="#work">
            Explore Our Work
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Button>
        </div>

        {/* Project Cards */}
        <div className="animate-fade-in-up animation-delay-600 -mt-22">
          <ProjectCards />
        </div>
      </div>

      {/* Decorative Plus Signs */}
      <div className="absolute top-20 right-20 text-white text-2xl animate-pulse">
     <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="white"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polygon points="12 2 15 9 22 9 16.5 14 18.5 22 12 17.5 5.5 22 7.5 14 2 9 9 9" />
</svg>

      </div>
      <div className="absolute top-40 left-10 text-white text-xl animate-pulse animation-delay-300">
<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="white"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polygon points="12 2 15 9 22 9 16.5 14 18.5 22 12 17.5 5.5 22 7.5 14 2 9 9 9" />
</svg>

      </div>
      <div className="absolute bottom-40 right-40 text-white text-3xl animate-pulse animation-delay-600">
   <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="white"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polygon points="12 2 15 9 22 9 16.5 14 18.5 22 12 17.5 5.5 22 7.5 14 2 9 9 9" />
</svg>

      </div>
      <div className="absolute top-1/2 left-20 text-white text-2xl animate-pulse animation-delay-900">
   <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="white"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polygon points="12 2 15 9 22 9 16.5 14 18.5 22 12 17.5 5.5 22 7.5 14 2 9 9 9" />
</svg>

      </div>
      <div className="absolute top-1/5 left-80 text-white text-4xl animate-pulse animation-delay-900">
    <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="white"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <polygon points="12 2 15 9 22 9 16.5 14 18.5 22 12 17.5 5.5 22 7.5 14 2 9 9 9" />
</svg>

      </div>
    </section>
  );
}

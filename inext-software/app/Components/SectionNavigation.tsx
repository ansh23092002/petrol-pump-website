"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Navigate your next" },
  { id: "about", label: "About Us" },
  { id: "team", label: "Our Team" },
  { id: "contact", label: "Contact Us" },
  { id: "footer", label: "Footer" },
];

export default function SectionNavigation() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-10">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center transition-all duration-300 w-auto"
          >
            {/* Line indicator */}
            <div
              className={`h-0.5 transition-all duration-300 ${
                activeSection === section.id
                  ? "w-12 bg-white"
                  : "w-8 bg-white/40 group-hover:w-10 group-hover:bg-white/60"
              }`}
            />
            
            {/* Text label - only show when active */}
            <span
              className={`ml-3 text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                activeSection === section.id
                  ? "text-white opacity-100 translate-x-0"
                  : "text-white/0 opacity-0 -translate-x-4 pointer-events-none"
              }`}
            >
              {section.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

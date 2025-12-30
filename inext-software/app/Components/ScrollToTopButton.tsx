"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 250);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="Scroll to top"
      onClick={handleClick}
      className={`fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-opacity duration-300 focus:outline-none ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
     <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  {/* Body */}
  <path d="M12 2c4 2 6 6 6 10 0 3-2 6-6 10-4-4-6-7-6-10 0-4 2-8 6-10z" />

  {/* Window */}
  <circle cx="12" cy="9" r="1.5" />

  {/* Fins */}
  <path d="M6 14l-3 3m15-3l3 3" />

  {/* Fire */}
  <path d="M12 22c1.5-2 .5-3-.5-4 .2 1-.5 2-1.5 3 1 .5 1.5 1 2 1.5z" />
</svg>

    </button>
  );
}

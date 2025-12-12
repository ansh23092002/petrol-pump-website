'use client';
import Image from "next/image";
import { JSX, useRef, useEffect } from "react";
import gsap from "gsap";

export default function PhoneMockup(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  const images = [
    
    "/mockups/Mockups2.jpg",
    "/mockups/Mockups3.jpg",
    "/mockups/Mockups4.png",
    "/mockups/Mockups5.jpg",
    "/mockups/Mockups6.jpg",
    "/mockups/Mockups7.jpg",
    "/mockups/Mockups8.jpg",
    "/mockups/Mockups9.jpg",
    "/mockups/Mockups10.jpg"
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    const inner = containerRef.current;

    const calculateAndAnimate = () => {
      if (startedRef.current) return;
      const firstChild = inner.children[0] as HTMLElement | undefined;
      const slideWidth = firstChild
        ? Math.round(firstChild.getBoundingClientRect().width)
        : inner.parentElement
        ? inner.parentElement.clientWidth
        : 320;

      // ensure inner width matches number of slides
      inner.style.width = `${slideWidth * images.length}px`;

      // kill any existing tweens before creating new timeline
      gsap.killTweensOf(inner);
      const tl = gsap.timeline({ repeat: -1 });
      gsap.set(inner, { x: 0 });

      for (let i = 1; i < images.length; i++) {
        tl.to(inner, { x: -i * slideWidth, duration: 0.8, ease: "power2.inOut" })
          .to({}, { duration: 1 });
      }

      tl.to(inner, { x: 0, duration: 1.2, ease: "power2.inOut" }).to({}, { duration: 1 });
      startedRef.current = true;
    };

    // Wait for images to load so measurements are accurate
    const imgs = Array.from(inner.querySelectorAll('img')) as HTMLImageElement[];
    let loaded = 0;
    const tryStart = () => {
      loaded += 1;
      if (!startedRef.current && loaded >= imgs.length) calculateAndAnimate();
    };

    if (imgs.length === 0) {
      calculateAndAnimate();
    } else {
      imgs.forEach((img) => {
        if (img.complete) {
          tryStart();
        } else {
          img.addEventListener('load', tryStart, { once: true });
          img.addEventListener('error', tryStart, { once: true });
        }
      });
    }

    const handleResize = () => {
      // allow restart after resize
      startedRef.current = false;
      gsap.killTweensOf(inner);
      inner.style.transform = 'translateX(0px)';
      calculateAndAnimate();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      gsap.killTweensOf(inner);
    };
  }, [images.length]);

  return (
    <div className="relative w-60 md:w-[280px] lg:w-[300px] overflow-hidden rounded-4xl border-8 border-black">
      {/* Mobile Frame */}
      <div className="absolute inset-0 bg-black rounded-4xl p-2 shadow-2xl">
        {/* Screen Notch */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-black rounded-full z-30 "></div>
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full z-20"></div>
      </div>
      
      <div 
        ref={containerRef}
        className="flex phone-mockup relative z-10 rounded-4xl overflow-hidden"
      >
        {images.map((src, index) => (
          <div key={index} className="shrink-0 w-60 md:w-[280px] lg:w-[300px]">
            <Image
              src={src}
              alt={`Mobile App Preview ${index + 1}`}
              width={300}
              height={600}
              priority={index === 0}
              className=" object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

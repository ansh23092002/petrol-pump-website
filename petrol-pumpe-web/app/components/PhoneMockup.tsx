'use client';
import Image from "next/image";
import { JSX, use } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function PhoneMockup(): JSX.Element {
  useGSAP(() => {
    gsap.fromTo(
      ".phone-mockup",
      { y: -20, opacity: 0, duration: 3, ease: "power3.out" },
      { y: 0, opacity: 1, duration: 3, ease: "power3.out" }
    );
  }, []);
  return (
    <div className=" phone-mockup relative w-[280px] md:w-[320px] lg:w-[360px] ">
      <Image
        src="/iMockup.svg"
        alt="Mobile App Preview"
        width={400}
        height={800}
        priority
        className="drop-shadow-2xl"
      />
    </div>
  );
}

import Image from "next/image";
import { JSX } from "react";

export default function PhoneMockup(): JSX.Element {
  return (
    <div className="relative w-[280px] md:w-[320px] lg:w-[360px] ">
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

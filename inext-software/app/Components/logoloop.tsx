import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { LogoLoop } from './ui/LogoLoop';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/subcompany/inext india.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/subcompany/ratmala.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/subcompany/securities.png", alt: "Company 3", href: "https://company3.com" },
];

export function LogoLoopComponent() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center p-6 md:p-10">
        {/* <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center tracking-tight">
          Our Technology Stack
        </h2> */}
        <div className="w-full flex flex-col gap-8 items-center">
          {/* Basic horizontal loop only */}
          <LogoLoop
            logos={imageLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
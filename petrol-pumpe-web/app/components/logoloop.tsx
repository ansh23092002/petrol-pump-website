import LogoLoop from './ui/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/bharat.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/bpjio.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/HP.png", alt: "Company 3", href: "https://company3.com" },
  { src: "/logos/jio.png", alt: "Company 3", href: "https://company3.com" },
  { src: "/logos/indianOilLogo.png", alt: "Company 3", href: "https://company3.com" },
];

 export default function LogoLoopDemo() {
  return (
    <div className=" max-w-[1200px] mx-auto py-10 px-4 lg:px-10">
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={imageLogos}
        speed={100}
        direction="left"
        logoHeight={58}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
      
      
    </div>
  );
}
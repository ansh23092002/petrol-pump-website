import LogoLoop from './ui/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

// const techLogos = [
//   { node: <SiReact />, title: "React", href: "https://react.dev" },
//   { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
//   { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
//   { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
// ];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/bharat.png", alt: "Bharat Petroleum", href: "#" },
  { src: "/logos/bpjio.png", alt: "BP Jio", href: "#" },
  { src: "/logos/HP.png", alt: "Hindustan Petroleum", href: "#" },
  { src: "/logos/jio.png", alt: "Jio", href: "#" },
  { src: "/logos/indianOilLogo.png", alt: "Indian Oil", href: "#" },
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
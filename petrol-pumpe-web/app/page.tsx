'use client';
import Navbar from "./components/Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./components/Testimonials";
import CTA from "./CTA";
import Footer from "./components/Footer";
import AboutPage from "./About";
import WhyChooseUs from "./WhyChooseUs";
import DownloadApp from "./components/DownloadApp";
import AnimatedBackground from "./components/ui/AnimatedBackground";
import LogoLoopDemo from "./components/logoloop";
export default function Home() {
  return (
    <div className="min-h-screen ">
      <Navbar />
       <main className="relative">
      <AnimatedBackground />

      {/* YOUR PAGE CONTENT */}
      <section className="relative z-10">
       
      <Hero />
      <AboutPage />
      <Features />
      <WhyChooseUs />
      <LogoLoopDemo />
      <DownloadApp /> 
      <Testimonials />
      <CTA />
     
      <Footer />
      </section>
    </main>
    </div>
  );
}

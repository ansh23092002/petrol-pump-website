'use client';
import Navbar from "./components/Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./components/Testimonials";
import CTA from "./CTA";
import Footer from "./components/Footer";
import AboutPage from "./About";
import WhyChooseUs from "./WhyChooseUs";
import LogoLoopDemo from "./components/logoloop";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <Navbar />
 
    
      <Hero />
      <AboutPage />
      <Features />
      <WhyChooseUs />
      <LogoLoopDemo />
     
      <Testimonials />
      <CTA />
     
      <Footer />
   
        </div>
  );
}

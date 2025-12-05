import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

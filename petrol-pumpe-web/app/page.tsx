import Navbar from "./components/Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./components/Testimonials";
import CTA from "./CTA";
import Footer from "./components/Footer";
import AboutPage from "./About";
import WhyChooseUs from "./WhyChooseUs";
import DownloadApp from "./components/DownloadApp";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <Hero />
      <AboutPage />
      <Features />
      <WhyChooseUs />
      <DownloadApp /> 
      <Testimonials />

      <CTA />
      <Footer />
    </div>
  );
}

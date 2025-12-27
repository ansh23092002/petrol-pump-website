
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import SocialDock from "./Components/SocialDock";
import AboutSection from "./Components/About";
import { ProjectsSection, BlogSection, ContactSection } from "./Components/Sections";
import PreFooterSection from "./Components/PreFooterSection";
import TeamSection from "./Components/TeamSection";
import ContactForm from "./Components/ContactForm";
import GlobalNetworkSection from "./Components/GlobalCloudNetwork";
import Testimonial from "./Components/Testimonial";





export default function Home() {
  return (
    <main className="min-h-screen">

      {/* SectionNavigation removed as requested */}
      {/* <SocialDock /> */}
      <div id="hero">
        <HeroSection />
      </div>
      {/* <AboutSection /> */}
      <div id="about">
        <AboutSection />
      </div>
        <div id="global-cloud-network">
          <GlobalNetworkSection />
        </div>     
        <Testimonial />
        <div id="team">
          <TeamSection />
        </div>
      <div id="contact">
        <ContactForm />
      </div>
      <div id="footer">
      <PreFooterSection />
      </div>
    </main>
  );
}

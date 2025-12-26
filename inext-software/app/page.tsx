import {GlobalNetworkSection  } from "./Components/GlobalCloudNetwork";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import SocialDock from "./Components/SocialDock";
import AboutSection from "./Components/About";
import { ProjectsSection, BlogSection, ContactSection } from "./Components/Sections";
import PreFooterSection from "./Components/PreFooterSection";
import TeamSection from "./Components/TeamSection";
import ContactForm from "./Components/ContactForm";

import Testimonial from "./Components/Testimonial";
import SectionNavigation from "./Components/SectionNavigation";




export default function Home() {
  return (
    <main className="min-h-screen">

      <SectionNavigation />
      {/* <SocialDock /> */}
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      {/* <AboutSection /> */}
      
        <Testimonial />
        <div id="global-cloud-network">
        </div>
        <div id="team">
          <TeamSection />

        </div>

          <GlobalNetworkSection />
        
      <div id="contact">
        <ContactForm />
      </div>
      <div id="footer">
      <PreFooterSection />
      </div>
    </main>
  );
}

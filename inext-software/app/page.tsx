import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import SocialDock from "./Components/SocialDock";
import AboutSection from "./Components/About";
import { ProjectsSection, BlogSection, ContactSection } from "./Components/Sections";
import PreFooterSection from "./Components/PreFooterSection";
import TeamSection from "./Components/TeamSection";
import ContactForm from "./Components/ContactForm";
import MagicFooter from "./Components/footer";
import SectionNavigation from "./Components/SectionNavigation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SectionNavigation />
      {/* <SocialDock /> */}
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      {/* <AboutSection /> */}
      
    
      <div id="team">
        <TeamSection />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <PreFooterSection />
      <div id="footer">
        <MagicFooter/>
      </div>
    </main>
  );
}

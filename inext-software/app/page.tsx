import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import SocialDock from "./Components/SocialDock";
import AboutSection from "./Components/About";
import { ProjectsSection, BlogSection, ContactSection, SettingsSection } from "./Components/Sections";
import PreFooterSection from "./Components/PreFooterSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SocialDock />
      <HeroSection />
      <AboutSection />
      {/* <AboutSection /> */}
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
      <SettingsSection />
      <PreFooterSection />
    </main>
  );
}

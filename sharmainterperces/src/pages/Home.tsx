"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BentoGrid from "@/components/BentoGrid";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import RatesSection from "@/components/RatesSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();

  const handleOpenBooking = (categoryId?: string) => {
    setSelectedCategory(categoryId);
    setBookingOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar onHireClick={() => handleOpenBooking()} />
      
      <main className="pt-16">
        <HeroSection 
          onFindLabor={() => handleOpenBooking()} 
          onViewRates={() => scrollToSection("contractors")} 
        />
        <BentoGrid onCheckRates={(id) => handleOpenBooking(id)} />
        <HowItWorks />
        <RatesSection onBook={(id) => handleOpenBooking(id)} />
        <WhyUs />
      </main>

      <Footer />

      <BookingModal 
        open={bookingOpen} 
        onOpenChange={setBookingOpen} 
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

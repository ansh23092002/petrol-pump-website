"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import { motion } from "framer-motion";
import FloatingElements from "./FloatingElements";
import Hero3D from "./Hero3D";

const heroImage = "/construction_site_hero_image.png";

interface HeroSectionProps {
  onFindLabor?: () => void;
  onViewRates?: () => void;
}

export default function HeroSection({ onFindLabor, onViewRates }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-black/30" />
      
      <FloatingElements />
      <Hero3D />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight leading-tight" 
            data-testid="text-hero-headline"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Build Stronger.
            <br />
            <motion.span 
              className="text-primary inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Hire Faster.
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl" 
            data-testid="text-hero-subheadline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Sharma Enterprises connects you with verified masons, electricians, and general labor in under 60 minutes.
          </motion.p>

          <motion.div 
            className="mt-8 flex flex-col sm:flex-row gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Button 
              size="lg" 
              onClick={onFindLabor}
              className="text-base font-semibold group"
              data-testid="button-find-labor"
            >
              Find Labor Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={onViewRates}
              className="text-base font-semibold bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              data-testid="button-view-rates"
            >
              View Labor Rates
            </Button>
          </motion.div>

          <motion.div 
            className="mt-8 flex items-center gap-2 text-gray-400" 
            data-testid="text-social-proof"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <Users className="h-5 w-5" />
            <span className="text-sm">Trusted by 50+ Construction Firms in Raipur</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

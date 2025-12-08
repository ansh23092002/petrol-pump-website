"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const masonImage = "/skilled_mason_at_work.png";
const electricianImage = "/electrician_wiring_work.png";
const helperImage = "/construction_helpers_teamwork.png";
const plumberImage = "/plumber_pipe_installation.png";

interface LaborCategory {
  id: string;
  title: string;
  image: string;
  size: "large" | "tall" | "small";
  rate: string;
}

interface BentoGridProps {
  onCheckRates?: (categoryId: string) => void;
}

export default function BentoGrid({ onCheckRates }: BentoGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // todo: remove mock functionality
  const categories: LaborCategory[] = [
    { id: "masons", title: "Skilled Masons", image: masonImage, size: "large", rate: "Rs 800/day" },
    { id: "electricians", title: "Electricians", image: electricianImage, size: "tall", rate: "Rs 1000/day" },
    { id: "helpers", title: "Helpers & Coolies", image: helperImage, size: "small", rate: "Rs 500/day" },
    { id: "plumbers", title: "Plumbers", image: plumberImage, size: "small", rate: "Rs 900/day" },
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "tall":
        return "md:row-span-2";
      case "small":
      default:
        return "";
    }
  };

  return (
    <section className="py-20 bg-background" id="workers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight" data-testid="text-bento-heading">
            Our Labor Categories
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Browse our verified workforce. Every worker is background-checked and skilled.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className={`relative overflow-hidden rounded-md group ${getSizeClasses(category.size)}`}
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
              data-testid={`card-category-${category.id}`}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 25px 50px -12px rgba(250, 204, 21, 0.25)",
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="aspect-square md:aspect-auto md:h-full w-full">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="absolute inset-0  from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white uppercase tracking-wide" data-testid={`text-category-title-${category.id}`}>
                  {category.title}
                </h3>
                <p className="text-primary font-semibold mt-1" data-testid={`text-category-rate-${category.id}`}>
                  Starting {category.rate}
                </p>
                
                <div 
                  className={`mt-4 transition-all duration-300 ${
                    hoveredId === category.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ visibility: hoveredId === category.id ? "visible" : "hidden" }}
                >
                  <Button 
                    size="sm"
                    onClick={() => onCheckRates?.(category.id)}
                    data-testid={`button-check-rates-${category.id}`}
                  >
                    Check Rates
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

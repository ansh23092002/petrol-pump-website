"use client";

import { UserCheck, CalendarDays, HardHat } from "lucide-react";
import { motion } from "framer-motion";

interface Step {
  icon: typeof UserCheck;
  title: string;
  description: string;
  step: number;
}

export default function HowItWorks() {
  const steps: Step[] = [
    {
      icon: UserCheck,
      title: "Select Trade",
      description: "Choose the type of worker you need from our verified catalog",
      step: 1,
    },
    {
      icon: CalendarDays,
      title: "Schedule",
      description: "Pick a date and duration - Daily, Weekly, or Monthly",
      step: 2,
    },
    {
      icon: HardHat,
      title: "Start Building",
      description: "We deliver the team to your construction site",
      step: 3,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight" data-testid="text-how-it-works-heading">
            How It Works
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Get verified construction workers at your site in three simple steps
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div 
                key={step.step} 
                className="relative flex flex-col items-center text-center" 
                data-testid={`step-${step.step}`}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.div 
                  className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground mb-6"
                  whileHover={{ 
                    scale: 1.1, 
                    rotateY: 180,
                    transition: { duration: 0.4 }
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <step.icon className="w-10 h-10" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-heading font-bold text-sm">
                    {step.step}
                  </span>
                </motion.div>
                
                <h3 className="font-heading text-xl font-bold uppercase tracking-wide mb-2" data-testid={`text-step-title-${step.step}`}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground max-w-xs" data-testid={`text-step-description-${step.step}`}>
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="md:hidden w-0.5 h-8 bg-border mt-6" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

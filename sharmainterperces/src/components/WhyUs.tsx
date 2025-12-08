"use client";

import { ShieldCheck, Clock, Banknote } from "lucide-react";
import { motion } from "framer-motion";

interface Feature {
  icon: typeof ShieldCheck;
  title: string;
  description: string;
}

export default function WhyUs() {
  const features: Feature[] = [
    {
      icon: ShieldCheck,
      title: "100% Verified IDs",
      description: "Every worker undergoes thorough background verification and ID checks for your complete security",
    },
    {
      icon: Clock,
      title: "Replacement Guarantee",
      description: "If a worker doesn't show up, we replace them within 2 hours - guaranteed",
    },
    {
      icon: Banknote,
      title: "Transparent Pricing",
      description: "No hidden commissions or surprise charges. What you see is what you pay",
    },
  ];

  return (
    <section className="py-20 bg-[#111827]" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white" data-testid="text-why-us-heading">
            Why Top Contractors Choose
            <br />
            <motion.span 
              className="text-primary inline-block"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Sharma Enterprises
            </motion.span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title} 
              className="text-center p-8 rounded-md bg-white/5 backdrop-blur-sm border border-white/10"
              data-testid={`feature-${index + 1}`}
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(250, 204, 21, 0.15)",
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6"
                whileHover={{ 
                  rotateY: 360,
                  transition: { duration: 0.6 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <feature.icon className="w-8 h-8" />
              </motion.div>
              
              <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-white mb-3" data-testid={`text-feature-title-${index + 1}`}>
                {feature.title}
              </h3>
              <p className="text-gray-400" data-testid={`text-feature-description-${index + 1}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { HardHat, Wrench, Hammer } from "lucide-react";

export default function Hero3D() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:flex items-center justify-center pointer-events-none">
      <div className="relative w-80 h-80" style={{ perspective: "1000px" }}>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            className="absolute w-24 h-24 bg-primary/20 backdrop-blur-sm rounded-md border border-primary/30 flex items-center justify-center"
            style={{ transform: "translateZ(100px)" }}
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <HardHat className="w-12 h-12 text-primary" />
          </motion.div>

          <motion.div
            className="absolute w-20 h-20 bg-white/10 backdrop-blur-sm rounded-md border border-white/20 flex items-center justify-center"
            style={{ transform: "rotateY(120deg) translateZ(100px)" }}
            animate={{ 
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          >
            <Wrench className="w-10 h-10 text-white/80" />
          </motion.div>

          <motion.div
            className="absolute w-20 h-20 bg-white/10 backdrop-blur-sm rounded-md border border-white/20 flex items-center justify-center"
            style={{ transform: "rotateY(240deg) translateZ(100px)" }}
            animate={{ 
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          >
            <Hammer className="w-10 h-10 text-white/80" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary/20"
          style={{ transform: "rotateX(75deg)" }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute inset-8 rounded-full border border-white/10"
          style={{ transform: "rotateX(75deg)" }}
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
}

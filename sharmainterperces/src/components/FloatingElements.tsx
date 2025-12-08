"use client";

import { motion } from "framer-motion";

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 opacity-20"
        animate={{
          y: [0, -20, 0],
          rotateY: [0, 180, 360],
          rotateX: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      >
        <div className="w-full h-full bg-primary/30 rounded-md transform rotate-45" 
          style={{ transform: "rotateX(45deg) rotateZ(45deg)" }} 
        />
      </motion.div>

      <motion.div
        className="absolute top-40 left-20 w-24 h-24 opacity-15"
        animate={{
          y: [0, 30, 0],
          rotateZ: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full border-4 border-primary/50 rounded-md"
          style={{ transform: "rotateX(60deg) rotateY(45deg)" }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-1/4 w-16 h-16 opacity-20"
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full  from-primary to-primary/50 rounded-full" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-10 w-20 h-20 opacity-10"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon 
            points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="text-primary"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-1/3 w-12 h-12 opacity-25"
        animate={{
          y: [0, -25, 0],
          rotateX: [0, 180, 360],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ perspective: "500px" }}
      >
        <div className="w-full h-full bg-primary/40" 
          style={{ transform: "rotateX(45deg)", transformStyle: "preserve-3d" }}
        />
      </motion.div>
    </div>
  );
}

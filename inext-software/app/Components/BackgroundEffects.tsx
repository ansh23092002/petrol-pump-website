"use client";

export function BackgroundEffects() {
  return (
    <>
      {/* Main Gradient Orb - Central glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-blue-500/10 blur-[120px] animate-pulse-slow"></div>

      {/* Secondary glow effects */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[100px] animate-pulse-slow animation-delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[90px] animate-pulse-slow animation-delay-2000"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-radial-gradient"></div>

      {/* Animated gradient lines
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-shimmer"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-shimmer animation-delay-1000"></div> */}
    </>
  );
}

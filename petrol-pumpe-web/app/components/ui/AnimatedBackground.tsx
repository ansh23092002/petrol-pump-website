export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* MAIN ANIMATED BG */}
      <div className="absolute inset-0 w-[150%] h-[150%] animate-bgMove 
        bg-[radial-gradient(ellipse_at_20%_80%,rgba(99,102,241,0.10)_0%,transparent_50%), 
            radial-gradient(ellipse_at_80%_20%,rgba(16,185,129,0.10)_0%,transparent_50%), 
            radial-gradient(ellipse_at_50%_50%,rgba(245,158,11,0.05)_0%,transparent_50%)] 
      " />

      {/* FLOATING BLOBS */}
      <div className="floating-blob absolute w-[300px] h-[300px] rounded-full opacity-10 bg-gradient-to-br from-indigo-500 to-purple-500 top-[10%] left-[10%] animate-float" />
      <div className="floating-blob absolute w-[200px] h-[200px] rounded-full opacity-10 bg-gradient-to-br from-green-500 to-emerald-500 top-[60%] right-[10%] animate-float delay-[5s]" />
      <div className="floating-blob absolute w-[150px] h-[150px] rounded-full opacity-10 bg-gradient-to-br from-yellow-500 to-orange-500 bottom-[20%] left-[30%] animate-float delay-[10s]" />
    </div>
  );
}

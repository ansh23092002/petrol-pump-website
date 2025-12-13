import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  { id: 1, name: "Ansh  sharma ", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, name: "Sarah Johnson", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 3, name: "Daniel Lee", img: "https://randomuser.me/api/portraits/men/65.jpg" },
  { id: 4, name: "Emily Carter", img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { id: 5, name: "Michael Smith", img: "https://randomuser.me/api/portraits/men/12.jpg" },
  { id: 6, name: "Olivia Brown", img: "https://randomuser.me/api/portraits/women/21.jpg" },
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-14 bg-slate-100 overflow-hidden mb-30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Desktop Layout - Modern Centered Card like Footer */}
        <div className="relative">
          
          {/* Floating Avatars Above Card */}
          <div className="hidden md:flex justify-center items-center gap-6 mb-[-60px] relative z-10">
            {testimonials.map((user, i) => (
              <div
                key={user.id}
                className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-2"
                style={{ 
                  transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (3 + i)}deg)`,
                  marginTop: i % 2 === 0 ? '0' : '20px'
                }}
              >
                <div className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src={user.img}
                    alt={user.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Main Card - Modern Design like Footer */}
          <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 opacity-60" />
            
            {/* Content */}
            <div className="relative px-8 lg:px-16 py-20 lg:py-24 text-center">
              
              {/* Badge */}
              <div className="flex justify-center mb-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#3755AE]/10 border border-[#3755AE]/20 px-5 py-2 text-sm font-semibold text-[#3755AE]">
                  <Quote size={16} />
                  Testimonials
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Trusted by leaders
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-500 mt-2">
                  from various industries
                </span>
              </h2>

              {/* Quote */}
              <div className="mt-10 max-w-3xl mx-auto">
                <blockquote className="text-lg md:text-xl text-gray-600 leading-relaxed italic">
                  "FuelTrack has transformed how we manage our operations. The real-time insights and seamless mobile experience have saved us countless hours."
                </blockquote>
             
              </div>

              {/* CTA Button */}
              <div className="mt-12 flex justify-center">
                <a href="https://play.google.com/store/apps/developer?id=Inext+Software+Solutions&hl=en_IN" target="new_tab" className="inline-flex items-center gap-3 rounded-full bg-[#3755AE] px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:bg-[#2e4a9a] transition-all duration-200 group">
                  Download App 
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/30 transition-all">
                    →
                  </span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#3755AE]/10 border border-[#3755AE]/20 px-4 py-1.5 text-sm font-semibold text-[#3755AE] mb-6">
              <Quote size={14} />
              Testimonials
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-4">
              Trusted by leaders
              <span className="block text-gray-400 mt-1">everywhere</span>
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-8">
            {testimonials.slice(0, 6).map((t) => (
              <div key={t.id} className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <blockquote className="text-base text-gray-600 italic mb-4">
              "FuelTrack has transformed our operations completely."
            </blockquote>
            <div className="text-sm font-semibold text-gray-900">— {testimonials[0].name}</div>
            
            <button className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#3755AE] px-6 py-3 text-sm font-medium text-white">
              Read Stories →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import Image from "next/image";

export default function ConsultingPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#0B4EA2] via-[#0A3F85] to-[#020617] w-full min-h-[520px] md:min-h-[680px] flex items-center px-5 sm:px-10 lg:px-24 py-16 pb-24 overflow-hidden">
        <div className="relative z-10 mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <p className="text-sm text-white/80 mb-2 uppercase tracking-wider">Consulting</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Transform your business with
              <br />
              <span className="text-[#FFD600]">strategic consulting</span>
            </h1>

            <p className="text-base sm:text-lg text-white/90 mb-6 max-w-xl">
              We partner with leaders to build clarity, unlock growth, and create
              lasting impact through tailored strategy and hands-on execution.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#FFD600] text-black font-semibold px-7 py-3 rounded-full shadow hover:bg-yellow-300 transition">
                Get Started
              </button>
              <button className="border border-white/30 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition">
                Book a Call
              </button>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="text-white/80 text-sm">Trusted by</div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20" />
                <div className="w-10 h-10 rounded-full bg-white/20" />
                <div className="w-10 h-10 rounded-full bg-white/20" />
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end relative">
            <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-[40%] bg-gradient-to-br from-[#0b4ea2] to-[#3a86ff] overflow-hidden shadow-2xl transform -rotate-6">
              <Image
                src="https://images.unsplash.com/photo-1542744095-291d1f67b221?w=1200&q=80"
                alt="Consulting visual"
                fill
                className="object-cover"
              />
            </div>

            <div className="hidden lg:flex absolute left-18 -bottom-12 w-36 h-36 items-center justify-center bg-white/90 rounded-full border border-gray-200 shadow-lg">
              <span className="text-gray-800 font-semibold">Growth</span>
            </div>
          </div>
        </div>
      
      </section>


      {/* ABOUT/ MISSION SECTION */}
      <section className="max-w-6xl mx-auto mt-16 mb-16 px-4 sm:px-6 lg:px-8">
        <div className=" rounded-3xl shadow-xl p-6 sm:p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="flex-1 order-2 md:order-1">
              <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">About Us</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Mission</h2>
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                <span className="font-bold italic">Our mission</span> is to help professionals and entrepreneurs grow with clarity, confidence, and purpose by offering personalized coaching that brings real transformation and long-term success.
              </p>
              <div className="flex gap-3 mt-6">
                <span className="w-3 h-3 rounded-full bg-[#FFD600] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#181818] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#E0E0E0] inline-block" />
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2 flex justify-center">
              <div className="relative w-[240px] h-[280px] md:w-[280px] md:h-[320px] rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80" 
                  alt="Consulting Profile" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">
            <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition cursor-pointer">About us</span>
            <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm hover:bg-gray-50 transition cursor-pointer">Coaching</span>
            <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm hover:bg-gray-50 transition cursor-pointer">Vision</span>
            <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm hover:bg-gray-50 transition cursor-pointer">Growth</span>
          </div>
        </div>
      </section>

      {/* EMPOWERING GROWTH SECTION */}
      <section className="max-w-6xl mx-auto mt-16 mb-16 px-4 sm:px-6 lg:px-8">
        <div className="relative h-[300px] md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <Image 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80" 
            alt="Empowering Growth" 
            fill 
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40 flex items-center justify-center p-6">
            <div className="text-center max-w-3xl">
              <p className="text-sm text-white/80 mb-3 uppercase tracking-wider">Empowering Growth</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Build confidence and break through <span className="italic text-[#FFD600]">self-limiting beliefs.</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL & SOLUTIONS SECTION */}
      <section className="max-w-6xl mx-auto mt-16 mb-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Testimonials</p>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
                What clients say<br />
                <span className="text-base font-normal text-gray-600 italic">about our consulting</span>
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "The consulting team helped us clarify our vision and implement strategies that delivered real growth. Their expertise and support made all the difference in achieving our goals."
              </p>
            </div>
            <div className="flex items-center gap-4 mt-auto pt-4 border-t">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                <Image 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" 
                  alt="Client" 
                  width={56} 
                  height={56} 
                  className="object-cover w-full h-full" 
                />
              </div>
              <div>
                <p className="font-bold text-gray-900">Alex Morgan</p>
                <p className="text-sm text-gray-500">COO, GrowthWorks</p>
              </div>
            </div>
          </div>

          {/* Solutions Card */}
          <div className="bg-gradient-to-br from-[#f8f8f8] to-white rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col items-center justify-center text-center">
            <p className="text-sm text-gray-500 mb-3 uppercase tracking-wide">Services</p>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
              Inspiring creativity<br />
              <span className="text-base font-normal text-gray-600 italic">through design</span>
            </h3>
            <div className="relative w-[200px] h-[160px] rounded-2xl overflow-hidden shadow-lg mb-6 bg-gradient-to-br from-[#8B4513] to-[#654321]">
              <Image 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80" 
                alt="Consulting Service" 
                fill 
                className="object-cover opacity-90" 
              />
            </div>
            <p className="text-sm text-gray-500 mb-2">December 31, 2025</p>
            <p className="font-bold text-gray-900 mb-4">Business Strategy & Growth</p>
            <button className="bg-[#FFD600] text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition shadow">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-6xl mx-auto mt-16 mb-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find quick, clear answers to common questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our consulting services and how we can help you grow.
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12">
          <ul className="space-y-6">
            {faqs.map((faq, index) => (
              <li key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                <details className="group">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center hover:text-[#0B4EA2] transition text-base md:text-lg">
                    {faq.question}
                    <span className="ml-4 text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed pl-4 border-l-2 border-[#FFD600]">
                    {faq.answer}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

const faqs = [
  {
    question: "What consulting services do you provide?",
    answer: "We offer business strategy, digital transformation, leadership coaching, and operational improvement services tailored to your unique business needs."
  },
  {
    question: "How do you customize solutions for clients?",
    answer: "Our team works closely with you to understand your goals and challenges, then designs tailored strategies that align with your business objectives and industry best practices."
  },
  {
    question: "What is the process to get started?",
    answer: "Contact us to schedule a free consultation. We'll assess your needs, discuss your goals, and recommend the best approach for your business growth."
  },
  {
    question: "Do you work with startups and enterprises?",
    answer: "Yes, we support organizations of all sizes, from startups to large enterprises, across various industries with customized consulting solutions."
  }
];

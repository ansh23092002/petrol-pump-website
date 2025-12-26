import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve - iNext Software Solutions",
  description: "Industry-specific software solutions for healthcare, finance, e-commerce, education, logistics, and more.",
  keywords: "industry solutions, healthcare software, fintech, e-commerce, education technology",
};

export default function IndustriesPage() {
  const industries = [
    {
      name: "Healthcare",
      icon: "🏥",
      description: "HIPAA-compliant solutions for hospitals, clinics, and telemedicine platforms",
      solutions: [
        "Electronic Health Records (EHR)",
        "Telemedicine Platforms",
        "Patient Management Systems",
        "Healthcare Analytics",
        "Medical Imaging Solutions",
      ],
      color: "from-green-400 to-emerald-600",
    },
    {
      name: "Finance & Banking",
      icon: "💰",
      description: "Secure fintech solutions for banks, payment processors, and financial institutions",
      solutions: [
        "Digital Banking Platforms",
        "Payment Gateway Integration",
        "Fraud Detection Systems",
        "Investment Management Tools",
        "Regulatory Compliance Solutions",
      ],
      color: "from-blue-400 to-indigo-600",
    },
    {
      name: "E-Commerce & Retail",
      icon: "🛒",
      description: "Scalable e-commerce platforms and retail management systems",
      solutions: [
        "Online Marketplace Development",
        "Inventory Management",
        "POS Systems",
        "Customer Analytics",
        "Omnichannel Solutions",
      ],
      color: "from-purple-400 to-pink-600",
    },
    {
      name: "Education",
      icon: "🎓",
      description: "EdTech solutions for schools, universities, and online learning platforms",
      solutions: [
        "Learning Management Systems (LMS)",
        "Virtual Classrooms",
        "Student Information Systems",
        "Online Assessment Tools",
        "Educational Content Platforms",
      ],
      color: "from-orange-400 to-red-600",
    },
    {
      name: "Logistics & Transportation",
      icon: "🚚",
      description: "Fleet management and supply chain optimization solutions",
      solutions: [
        "Fleet Tracking Systems",
        "Route Optimization",
        "Warehouse Management",
        "Supply Chain Analytics",
        "Last-Mile Delivery Solutions",
      ],
      color: "from-cyan-400 to-blue-600",
    },
    {
      name: "Real Estate",
      icon: "🏢",
      description: "Property management and real estate marketplace platforms",
      solutions: [
        "Property Listing Platforms",
        "CRM for Real Estate",
        "Virtual Property Tours",
        "Lease Management Systems",
        "Real Estate Analytics",
      ],
      color: "from-teal-400 to-green-600",
    },
    {
      name: "Manufacturing",
      icon: "🏭",
      description: "Industrial IoT and smart factory solutions",
      solutions: [
        "Production Management Systems",
        "Quality Control Software",
        "IoT Sensor Integration",
        "Predictive Maintenance",
        "Supply Chain Optimization",
      ],
      color: "from-gray-400 to-gray-600",
    },
    {
      name: "Media & Entertainment",
      icon: "🎬",
      description: "Content management and streaming platforms",
      solutions: [
        "Video Streaming Platforms",
        "Content Management Systems",
        "Digital Rights Management",
        "Social Media Integration",
        "Analytics & Monetization",
      ],
      color: "from-red-400 to-rose-600",
    },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Industries We
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Transform</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Delivering specialized software solutions tailored to the unique challenges and opportunities of your industry
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="text-6xl mb-4">{industry.icon}</div>
                  
                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{industry.name}</h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 mb-6">{industry.description}</p>
                  
                  {/* Solutions List */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Our Solutions:</h4>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start text-gray-300 text-sm">
                          <span className={`mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${industry.color} flex-shrink-0`} />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Hover Effect Line */}
                  <div className={`mt-6 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${industry.color} rounded-full`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "8+", label: "Industries" },
              { value: "150+", label: "Projects" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Don't See Your Industry?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            We work across many more sectors. Let's discuss your specific industry needs.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}

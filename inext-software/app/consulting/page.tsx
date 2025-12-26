import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting Services - iNext Software Solutions",
  description: "Expert technology consulting services to guide your digital transformation journey with strategic planning and implementation.",
  keywords: "IT consulting, technology consulting, digital transformation, business consulting",
};

export default function ConsultingPage() {
  const consultingAreas = [
    {
      title: "Digital Transformation",
      description: "Navigate your digital journey with strategic roadmaps and implementation support",
      details: [
        "Technology Assessment",
        "Digital Strategy Planning",
        "Implementation Roadmap",
        "Change Management",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Technology Advisory",
      description: "Expert guidance on technology selection, architecture, and best practices",
      details: [
        "Technology Stack Selection",
        "Architecture Design",
        "Security Consulting",
        "Performance Optimization",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Business Process",
      description: "Optimize operations through automation and process re-engineering",
      details: [
        "Process Analysis",
        "Workflow Automation",
        "System Integration",
        "Efficiency Improvement",
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Data & Analytics",
      description: "Turn data into actionable insights with advanced analytics solutions",
      details: [
        "Data Strategy",
        "Analytics Implementation",
        "Business Intelligence",
        "Data Governance",
      ],
      gradient: "from-green-500 to-teal-500",
    },
  ];

  const approach = [
    {
      step: "01",
      title: "Discovery",
      description: "We start by understanding your business, challenges, and goals through detailed analysis.",
    },
    {
      step: "02",
      title: "Strategy",
      description: "Develop a comprehensive strategy aligned with your objectives and industry best practices.",
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the plan with our expert team, ensuring smooth deployment and minimal disruption.",
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuously monitor, measure, and optimize to ensure maximum value and ROI.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
 
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6">
            Strategic Technology
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Consulting
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Partner with us to navigate complexity, accelerate innovation, and achieve measurable business outcomes.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* Consulting Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Consulting Expertise
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive consulting services across all aspects of technology and business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {consultingAreas.map((area, index) => (
              <div
                key={index}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 group overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${area.gradient} opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-opacity`} />
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-3">{area.title}</h3>
                  <p className="text-gray-400 mb-6">{area.description}</p>
                  <ul className="space-y-3">
                    {area.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <span className={`mr-3 w-2 h-2 rounded-full bg-gradient-to-r ${area.gradient}`} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Approach
            </h2>
            <p className="text-gray-400 text-lg">
              A proven methodology that delivers results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-white/10 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
                {index < approach.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Your Future Together
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Our consultants are ready to help you tackle your most complex challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              Start Consulting
            </a>
            <a
              href="/services"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all backdrop-blur-sm border border-white/20"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

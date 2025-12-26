import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - iNext Software Solutions",
  description: "Explore our comprehensive software development services including web development, mobile apps, cloud solutions, AI/ML integration, and enterprise software.",
  keywords: "software services, web development, mobile apps, cloud solutions, AI services",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies like Next.js, React, and modern frameworks.",
      icon: "🌐",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Scalable Architecture"],
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      icon: "📱",
      features: ["iOS & Android", "React Native", "Flutter", "Progressive Web Apps"],
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services using AWS, Azure, and Google Cloud Platform.",
      icon: "☁️",
      features: ["Cloud Migration", "Infrastructure Setup", "DevOps Integration", "Cost Optimization"],
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence and machine learning algorithms.",
      icon: "🤖",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Chatbots"],
    },
    {
      title: "Enterprise Software",
      description: "Custom enterprise solutions including CRM, ERP, and business management systems.",
      icon: "🏢",
      features: ["Custom CRM", "ERP Systems", "Workflow Automation", "Data Analytics"],
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive and engaging digital experiences.",
      icon: "🎨",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Vision Into
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Reality</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            We deliver cutting-edge software solutions tailored to your business needs, helping you stay ahead in the digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Start Your Project
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all backdrop-blur-sm border border-white/20"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive solutions designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <span className="mr-2 text-blue-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let's discuss how we can help transform your business with innovative software solutions.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}

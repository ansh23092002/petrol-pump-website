import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products - iNext Software Solutions",
  description: "Explore our ready-to-deploy software products including SaaS platforms, business tools, and innovative solutions.",
  keywords: "software products, SaaS, business tools, ready solutions",
};

export default function ProductsPage() {
  const products = [
    {
      name: "CloudDocs Pro",
      category: "Document Management",
      description: "Enterprise-grade document management system with collaboration, version control, and secure cloud storage.",
      features: ["Real-time Collaboration", "Version History", "Advanced Search", "OCR Support", "API Integration"],
      price: "Starting at $49/month",
      image: "📄",
      tag: "Popular",
      tagColor: "bg-blue-500",
    },
    {
      name: "TaskFlow Suite",
      category: "Project Management",
      description: "All-in-one project management platform with task tracking, team collaboration, and analytics.",
      features: ["Kanban Boards", "Gantt Charts", "Time Tracking", "Team Chat", "Reports & Analytics"],
      price: "Starting at $29/month",
      image: "📊",
      tag: "Best Seller",
      tagColor: "bg-green-500",
    },
    {
      name: "RetailHub POS",
      category: "Retail Solutions",
      description: "Modern point-of-sale system for retail businesses with inventory management and sales analytics.",
      features: ["Multi-Store Support", "Inventory Sync", "Sales Reports", "Customer Loyalty", "Payment Integration"],
      price: "Starting at $79/month",
      image: "🛍️",
      tag: "Enterprise",
      tagColor: "bg-purple-500",
    },
    {
      name: "LearnSpace LMS",
      category: "Education",
      description: "Comprehensive learning management system for online courses, assessments, and student tracking.",
      features: ["Course Builder", "Video Hosting", "Quizzes & Tests", "Progress Tracking", "Certificates"],
      price: "Starting at $99/month",
      image: "🎓",
      tag: "New",
      tagColor: "bg-orange-500",
    },
    {
      name: "HealthCare Manager",
      category: "Healthcare",
      description: "Patient management system with appointment scheduling, medical records, and billing integration.",
      features: ["Patient Records", "Appointment Booking", "Billing System", "Prescription Management", "HIPAA Compliant"],
      price: "Custom Pricing",
      image: "🏥",
      tag: "Certified",
      tagColor: "bg-red-500",
    },
    {
      name: "FinanceTrack Pro",
      category: "Finance",
      description: "Financial management software with accounting, invoicing, and expense tracking capabilities.",
      features: ["Invoicing", "Expense Tracking", "Financial Reports", "Tax Management", "Multi-Currency"],
      price: "Starting at $39/month",
      image: "💳",
      tag: "Trending",
      tagColor: "bg-cyan-500",
    },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Ready-to-Deploy
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Software Products
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Battle-tested, scalable solutions that accelerate your business growth from day one
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              Explore Products
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all backdrop-blur-sm border border-white/20"
            >
              Request Demo
            </a>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Product Portfolio
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose from our range of industry-leading software products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                {/* Tag */}
                <div className={`absolute top-4 right-4 ${product.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full z-10`}>
                  {product.tag}
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Icon */}
                  <div className="text-6xl mb-4">{product.image}</div>
                  
                  {/* Category */}
                  <div className="text-blue-400 text-sm font-semibold mb-2">{product.category}</div>
                  
                  {/* Name */}
                  <h3 className="text-2xl font-bold text-white mb-3">{product.name}</h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 mb-6">{product.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <span className="mr-2 text-green-400">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Price */}
                  <div className="text-white font-bold text-lg mb-6">{product.price}</div>
                  
                  {/* CTA */}
                  <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all">
                    Learn More
                  </button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Our Products?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Quick Deployment",
                description: "Get up and running in hours, not months",
              },
              {
                icon: "🔒",
                title: "Enterprise Security",
                description: "Bank-grade security with SOC 2 compliance",
              },
              {
                icon: "🔧",
                title: "Customizable",
                description: "Adapt products to your specific needs",
              },
              {
                icon: "📈",
                title: "Scalable",
                description: "Grows with your business demands",
              },
              {
                icon: "💬",
                title: "24/7 Support",
                description: "Expert support whenever you need it",
              },
              {
                icon: "🔄",
                title: "Regular Updates",
                description: "Continuous improvements and new features",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Schedule a demo or contact our sales team to learn more about our products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Request Demo
            </a>
            <a
              href="/consulting"
              className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all backdrop-blur-sm border border-white/20"
            >
              Talk to Expert
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

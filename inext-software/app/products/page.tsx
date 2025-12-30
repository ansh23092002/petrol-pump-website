import type { Metadata } from "next";
import ProductHero from "../Components/productHero";
import { LogoLoopComponent } from "../Components/logoloop";

export const metadata: Metadata = {
  title: "Our Products - iNext Software Solutions",
  description:
    "Explore our ready-to-deploy software products including SaaS platforms, business tools, and innovative solutions.",
};

export default function ProductsPage() {
  const products = [
    {
      name: "CloudDocs Pro",
      category: "Document Management",
      description:
        "Enterprise-grade document management with collaboration, version control, and secure cloud storage.",
      features: [
        "Real-time Collaboration",
        "Version History",
        "Advanced Search",
        "OCR Support",
        "API Integration",
      ],
      price: "Starting at $49/month",
      tag: "Popular",
    },
    {
      name: "TaskFlow Suite",
      category: "Project Management",
      description:
        "All-in-one project management platform with analytics and team collaboration.",
      features: [
        "Kanban Boards",
        "Gantt Charts",
        "Time Tracking",
        "Team Chat",
        "Reports",
      ],
      price: "Starting at $29/month",
      tag: "Best Seller",
    },
    {
      name: "RetailHub POS",
      category: "Retail Solutions",
      description:
        "Modern POS system with inventory management and sales analytics.",
      features: [
        "Multi-Store Support",
        "Inventory Sync",
        "Sales Reports",
        "Customer Loyalty",
        "Payments",
      ],
      price: "Starting at $79/month",
      tag: "Enterprise",
    },
    {
      name: "LearnSpace LMS",
      category: "Education",
      description:
        "Learning management system for online courses and assessments.",
      features: [
        "Course Builder",
        "Video Hosting",
        "Quizzes",
        "Progress Tracking",
        "Certificates",
      ],
      price: "Starting at $99/month",
      tag: "New",
    },
    {
      name: "HealthCare Manager",
      category: "Healthcare",
      description:
        "Patient management system with appointments and medical records.",
      features: [
        "Patient Records",
        "Appointments",
        "Billing",
        "Prescriptions",
        "HIPAA Ready",
      ],
      price: "Custom Pricing",
      tag: "Certified",
    },
    {
      name: "FinanceTrack Pro",
      category: "Finance",
      description:
        "Accounting, invoicing, and expense tracking in one platform.",
      features: [
        "Invoicing",
        "Expense Tracking",
        "Reports",
        "Tax Tools",
        "Multi-Currency",
      ],
      price: "Starting at $39/month",
      tag: "Trending",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#0f172a]">
      {/* HERO */}
      <ProductHero />

      {/* LOGO LOOP */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto flex justify-center">
          <LogoLoopComponent />
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Our Product Portfolio
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              Carefully crafted software products designed to scale with your
              business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <div
                key={index}
                className="
                  rounded-2xl
                  border border-gray-200
                  bg-white
                  p-8
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                {/* TAG */}
                <span className="inline-block mb-6 text-xs tracking-widest uppercase text-gray-400">
                  {product.tag}
                </span>

                {/* TITLE */}
                <h3 className="text-2xl font-semibold mb-1">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-500 mb-4">
                  {product.category}
                </p>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* FEATURES */}
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <span className="mr-3 h-1.5 w-1.5 rounded-full bg-gray-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* PRICE */}
                <div className="text-lg font-semibold mb-6">
                  {product.price}
                </div>

                {/* CTA */}
                <button
                  className="
                    w-full
                    rounded-xl
                    border border-gray-300
                    py-3
                    text-sm
                    font-medium
                    transition
                    hover:border-gray-500
                  "
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-sm">
          Talk to our experts and explore how our products fit your goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-10 py-4 rounded-xl border border-gray-400 hover:border-gray-700 transition"
          >
            Request Demo
          </a>
          <a
            href="/consulting"
            className="px-10 py-4 rounded-xl border border-gray-200 hover:border-gray-400 transition"
          >
            Talk to Expert
          </a>
        </div>
      </section>
    </main>
  );
}

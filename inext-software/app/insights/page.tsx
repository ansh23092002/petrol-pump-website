import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Resources - iNext Software Solutions",
  description: "Latest tech insights, industry trends, best practices, and thought leadership from iNext Software.",
  keywords: "tech insights, industry trends, software development, technology blog",
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-28 pb-20">
        <svg
          className="absolute bottom-0 left-0 w-full h-[200px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#f8fafc"
            d="M0,224 C120,200 240,160 360,154 C480,149 600,181 720,192 C840,203 960,192 1080,170 C1200,149 1320,117 1440,106 L1440,320 L0,320 Z"
          />
        </svg>
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Insights & <span className="text-blue-600">Resources</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            Discover the latest tech insights, industry trends, and best practices
            from our team of experts.
          </p>
        </div>
      </section>

      <InsightsContent />
    </main>
  );
}

function InsightsContent() {
  const insights = [
    {
      title: "The Future of AI in Enterprise Software",
      category: "Artificial Intelligence",
      author: "Dr. Priya Sharma",
      date: "Dec 20, 2024",
      readTime: "8 min read",
      excerpt: "Explore how AI and machine learning are revolutionizing enterprise software development and business operations.",
      image: "🤖",
      tags: ["AI", "Enterprise", "Innovation"],
    },
    {
      title: "Microservices Architecture: Best Practices 2024",
      category: "Software Architecture",
      author: "Rahul Kumar",
      date: "Dec 18, 2024",
      readTime: "12 min read",
      excerpt: "A comprehensive guide to implementing microservices architecture for scalable and maintainable applications.",
      image: "🏗️",
      tags: ["Architecture", "Scalability", "DevOps"],
    },
    {
      title: "Cloud Migration Strategy Guide",
      category: "Cloud Computing",
      author: "Anita Desai",
      date: "Dec 15, 2024",
      readTime: "10 min read",
      excerpt: "Step-by-step approach to successfully migrate your infrastructure to the cloud with minimal downtime.",
      image: "☁️",
      tags: ["Cloud", "Migration", "AWS"],
    },
    {
      title: "Cybersecurity Trends Every CTO Should Know",
      category: "Security",
      author: "Vikram Singh",
      date: "Dec 12, 2024",
      readTime: "7 min read",
      excerpt: "Stay ahead of cyber threats with these emerging security trends and best practices for 2024.",
      image: "🔒",
      tags: ["Security", "Compliance", "Risk Management"],
    },
    {
      title: "Building Scalable SaaS Applications",
      category: "SaaS Development",
      author: "Neha Patel",
      date: "Dec 10, 2024",
      readTime: "15 min read",
      excerpt: "Learn the architecture patterns and technologies needed to build multi-tenant SaaS platforms.",
      image: "🚀",
      tags: ["SaaS", "Scalability", "Multi-tenancy"],
    },
    {
      title: "Mobile-First Development in 2024",
      category: "Mobile Development",
      author: "Amit Verma",
      date: "Dec 8, 2024",
      readTime: "6 min read",
      excerpt: "Why mobile-first approach is crucial and how to implement it effectively in your projects.",
      image: "📱",
      tags: ["Mobile", "UX", "React Native"],
    },
  ];

  const categories = [
    "All",
    "Artificial Intelligence",
    "Software Architecture",
    "Cloud Computing",
    "Security",
    "SaaS Development",
    "Mobile Development",
  ];

  const whitepapers = [
    {
      title: "Digital Transformation Playbook 2024",
      description: "Complete guide to digital transformation with frameworks and case studies",
      pages: "45 pages",
    },
    {
      title: "Cloud Cost Optimization Strategies",
      description: "Reduce cloud spending by up to 40% with proven optimization techniques",
      pages: "32 pages",
    },
    {
      title: "Enterprise AI Implementation Guide",
      description: "Practical guide to implementing AI solutions in enterprise environments",
      pages: "58 pages",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <article
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {/* Image/Icon */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-12 flex items-center justify-center">
                  <div className="text-7xl">{insight.image}</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="text-blue-600 text-sm font-semibold mb-2">{insight.category}</div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {insight.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4">{insight.excerpt}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {insight.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <span>{insight.author}</span>
                    </div>
                    <span>{insight.readTime}</span>
                  </div>
                  
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200">
                    <span className="text-xs text-gray-500">{insight.author}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{insight.readTime}</span>
                  </div>
                  
                  <button className="mt-4 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg">
              Load More Insights
            </button>
          </div>
        </div>
      </section>

      {/* Whitepapers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Free Whitepapers & Reports
            </h2>
            <p className="text-gray-600 text-lg">
              Download our in-depth guides and research reports
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="text-4xl mb-4">📄</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{paper.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{paper.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{paper.pages}</span>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all shadow-md">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Get the latest insights, trends, and best practices delivered to your inbox weekly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
            />
            <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}

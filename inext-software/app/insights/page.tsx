import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Resources - iNext Software Solutions",
  description: "Latest tech insights, industry trends, best practices, and thought leadership from iNext Software.",
  keywords: "tech insights, industry trends, software development, technology blog",
};

export default function InsightsPage() {
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
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Insights &
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Resources</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Stay informed with the latest technology trends, best practices, and thought leadership from our experts
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0
                    ? "bg-blue-600 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
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
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Image/Icon */}
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-12 flex items-center justify-center">
                  <div className="text-7xl">{insight.image}</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="text-blue-400 text-sm font-semibold mb-2">{insight.category}</div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {insight.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm mb-4">{insight.excerpt}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {insight.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-full"
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
                  
                  {/* Date */}
                  <div className="text-xs text-gray-600 mt-2">{insight.date}</div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105">
              Load More Insights
            </button>
          </div>
        </div>
      </section>

      {/* Whitepapers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Free Whitepapers & Reports
            </h2>
            <p className="text-gray-400 text-lg">
              Download our in-depth guides and research reports
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all"
              >
                <div className="text-4xl mb-4">📄</div>
                <h3 className="text-xl font-bold text-white mb-3">{paper.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{paper.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{paper.pages}</span>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all">
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

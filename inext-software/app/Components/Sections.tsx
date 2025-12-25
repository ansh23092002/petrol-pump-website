"use client";

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate developers and designers committed to delivering exceptional digital solutions for businesses worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="p-6 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-300/50 hover:border-blue-400 transition-all hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <span className="text-2xl text-blue-600">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Feature {item}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative min-h-screen pt-12 pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that transformed businesses through innovative technology solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-blue-400 transition-all hover:scale-105 shadow-sm">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <span className="text-4xl text-blue-600">📱</span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Project {item}</h3>
                <p className="text-gray-600 text-sm">Web Development</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogSection() {
  return (
    <section id="blog" className="relative min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Latest Blog Posts</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest articles, tutorials, and industry insights.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-blue-400 transition-all hover:translate-y-[-5px] shadow-sm">
              <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Blog Post {item}</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Dec 23, 2025</span>
                <span className="text-blue-600 hover:text-blue-500 cursor-pointer">Read More →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="relative min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you. Get in touch with our team today.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500" />
              <input type="email" placeholder="Your Email" className="px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500" />
            </div>
            <textarea placeholder="Your Message" rows={6} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500"></textarea>
            <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}


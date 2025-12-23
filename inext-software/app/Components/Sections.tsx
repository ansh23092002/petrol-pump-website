"use client";

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-b from-[#0a0a1f] via-[#0d1128] to-[#0a0a1f] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We are a team of passionate developers and designers committed to delivering exceptional digital solutions for businesses worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/20 hover:border-blue-400/50 transition-all hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <span className="text-2xl text-blue-400">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Feature {item}</h3>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative min-h-screen bg-gradient-to-b from-[#0d1128] via-[#0a0a1f] to-[#0d1128] pt-12 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Projects</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that transformed businesses through innovative technology solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-blue-500/50 transition-all hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-blue-900/30 to-purple-900/30 flex items-center justify-center">
                <span className="text-4xl text-blue-400">📱</span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2">Project {item}</h3>
                <p className="text-gray-400 text-sm">Web Development</p>
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
    <section id="blog" className="relative min-h-screen bg-gradient-to-b from-[#0a0a1f] via-[#0d1128] to-[#0a0a1f] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Latest Blog Posts</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Stay updated with our latest articles, tutorials, and industry insights.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30 hover:border-blue-400/50 transition-all hover:translate-y-[-5px]">
              <div className="w-full h-48 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Blog Post {item}</h3>
              <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Dec 23, 2025</span>
                <span className="text-blue-400 hover:text-blue-300 cursor-pointer">Read More →</span>
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
    <section id="contact" className="relative min-h-screen bg-gradient-to-b from-[#0d1128] via-[#0a0a1f] to-[#0d1128] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you. Get in touch with our team today.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500" />
              <input type="email" placeholder="Your Email" className="px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500" />
            </div>
            <textarea placeholder="Your Message" rows={6} className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"></textarea>
            <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function SettingsSection() {
  return (
    <section id="settings" className="relative min-h-screen bg-gradient-to-b from-[#0a0a1f] via-[#0d1128] to-[#0a0a1f] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Settings & Preferences</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Customize your experience and manage your account settings.
          </p>
        </div>
        <div className="max-w-2xl mx-auto space-y-6">
          {['Theme', 'Notifications', 'Privacy', 'Account'].map((setting) => (
            <div key={setting} className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">{setting}</h3>
                <p className="text-gray-500 text-sm">Manage your {setting.toLowerCase()} preferences</p>
              </div>
              <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all">Edit</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

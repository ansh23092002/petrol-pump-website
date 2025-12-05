export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">TAILORMATE</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </div>
          <div className="flex space-x-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 pb-8">
          {/* Address */}
          <div>
            <h3 className="text-xl font-bold mb-4">Address</h3>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center gap-2"><span>📍</span>#198, 2nd Floor, CMH Road,<br/>Indiranagar, Bangalore,<br/>India - 560038</li>
              <li className="flex items-center gap-2"><span>📞</span><a href="tel:+918078840888" className="hover:text-white">+91 8078840888</a></li>
              <li className="flex items-center gap-2"><span>📞</span><a href="tel:+918281311391" className="hover:text-white">+91 8281311391</a></li>
              <li className="flex items-center gap-2"><span>✉️</span><a href="mailto:tailormateapp@gmail.com" className="hover:text-white">tailormateapp@gmail.com</a></li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600"><span className="sr-only">Twitter</span>🐦</a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600"><span className="sr-only">Instagram</span>📸</a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-800"><span className="sr-only">Facebook</span>📘</a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-900"><span className="sr-only">LinkedIn</span>💼</a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-300 space-y-2">
              <li><a href="#" className="hover:text-white">Web Application</a></li>
              <li><a href="#" className="hover:text-white">Google Play Store Link</a></li>
              <li><a href="#" className="hover:text-white">Apple Store Link</a></li>
              <li><a href="#" className="hover:text-white">Contact via Whatsapp</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
            </ul>
          </div>
          {/* Popular Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Popular Links</h3>
            <ul className="text-gray-300 space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Refund Policy</a></li>
            </ul>
          </div>
          {/* Why Tailormate & Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Why Tailormate</h3>
            <p className="text-gray-300 mb-4">The TailorMate App keeps track of all your tailoring orders, customers data and measurements in a single place.</p>
            <form className="flex items-center bg-white rounded-full px-4 py-2">
              <input type="email" placeholder="Your Email" className="bg-transparent outline-none text-gray-800 flex-1" />
              <button type="submit" className="text-blue-600 text-xl ml-2">✈️</button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <span>&copy; 2024 TailorMate App. All Rights Reserved.</span>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">Terms of Agreement</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Refund Policy</a>
            <a href="#" className="hover:text-white">FAQs</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

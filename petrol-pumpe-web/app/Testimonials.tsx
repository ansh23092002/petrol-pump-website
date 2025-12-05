export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-linear-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                N
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-gray-900">Natasha Mendis</h4>
                <p className="text-sm text-gray-600">Boutique Owner, Nigeria</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Amazing app. There is no system out there like this. This is the best app for all types & sizes of tailoring shops. Very easy and intuitive."
            </p>
            <div className="flex mt-4 text-yellow-400">
              ★★★★★
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-linear-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                S
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-gray-900">Shahma</h4>
                <p className="text-sm text-gray-600">Boutique Owner, Pune, India</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Great mobile app for tailoring shops. This is a robust app that takes care of all tasks from Customer Management to Order Management and Invoicing."
            </p>
            <div className="flex mt-4 text-yellow-400">
              ★★★★★
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-linear-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                J
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-gray-900">Jagdish Surya</h4>
                <p className="text-sm text-gray-600">Tailoring Shop Owner, India</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "I've tried several apps like this before, but this one is by far the best. It's reliable, efficient, and has truly made my life easier. 5 stars!"
            </p>
            <div className="flex mt-4 text-yellow-400">
              ★★★★★
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

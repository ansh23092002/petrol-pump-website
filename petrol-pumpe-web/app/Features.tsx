import { ShieldCheck, Smartphone, Monitor, Database, HeadphonesIcon, Palette } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Why Choose TailorMate?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-8 bg-linear-to-br from-blue-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Data Privacy and Security</h3>
            <p className="text-gray-600">
              All your data are securely stored in the cloud with proper encryption and backup. Your business information is always protected.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="p-8 bg-linear-to-br from-purple-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mb-6">
              <Palette className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Intuitive User Interface</h3>
            <p className="text-gray-600">
              World-class design that provides the best user experience and ease of use for your daily operations.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="p-8 bg-linear-to-br from-green-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mb-6">
              <Smartphone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Multi Device Usage</h3>
            <p className="text-gray-600">
              Install the app on any number of devices with no limitations. Your data syncs across all devices seamlessly.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="p-8 bg-linear-to-br from-orange-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center mb-6">
              <Monitor className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Desktop Application</h3>
            <p className="text-gray-600">
              Access all features from your laptop with our web-based application. Work comfortably from any device.
            </p>
          </div>
          {/* Feature 5 */}
          <div className="p-8 bg-linear-to-br from-red-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center mb-6">
              <Database className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Frequent Data Backup</h3>
            <p className="text-gray-600">
              Your data is backed up frequently on the cloud at regular intervals so it is never lost.
            </p>
          </div>
          {/* Feature 6 */}
          <div className="p-8 bg-linear-to-br from-indigo-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center mb-6">
              <HeadphonesIcon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">24x7 Customer Support</h3>
            <p className="text-gray-600">
              Reach out to our team via Phone, WhatsApp, or email anytime. We are always ready to help you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { JSX } from "react";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../Hero";

export const metadata: Metadata = {
  title: "FAQs - FuelTrack",
  description: "Frequently asked questions about FuelTrack petrol pump management system",
};

export default function FAQs(): JSX.Element {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="min-h-screen bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h1>
        <p className="text-lg text-slate-600 mb-12">
          Find answers to common questions about FuelTrack
        </p>

        <div className="space-y-8">
          <section className="border-b border-slate-200 pb-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              1. What is FuelTrack?
            </h2>
            <p className="text-slate-700">
              FuelTrack is a comprehensive digital management system designed specifically for petrol pump operations.
              It helps supervisors and employees manage daily fuel operations, track inventory, generate reports,
              and streamline workflows efficiently.
            </p>
          </section>

          <section className="border-b border-slate-200 pb-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              2. Is FuelTrack free to use?
            </h2>
            <p className="text-slate-700">
              Yes, FuelTrack is currently free to download and use. We offer all core features at no cost to help
              petrol pump owners modernize their operations.
            </p>
          </section>

          <section className="border-b border-slate-200 pb-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              3. What devices are supported?
            </h2>
            <p className="text-slate-700">
              FuelTrack is available for Android devices. You can download it from the Google Play Store.
              We are working on iOS and web versions for future releases.
            </p>
          </section>

          <section className="border-b border-slate-200 pb-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              4. How do I get started with FuelTrack?
            </h2>
            <p className="text-slate-700 mb-2">Getting started is easy:</p>
            <ol className="list-decimal ml-6 space-y-2 text-slate-700">
              <li>Download FuelTrack from Google Play Store</li>
              <li>Create an account with your petrol pump details</li>
              <li>Add your pumps and employee information</li>
              <li>Start assigning tasks and tracking operations</li>
            </ol>
          </section>

          <section className="border-b border-slate-200 pb-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              5. Can multiple employees use FuelTrack?
            </h2>
            <p className="text-slate-700">
              Yes! FuelTrack supports multi-user access with different roles. Supervisors can assign tasks
              and view reports, while employees can update readings and complete their assigned work.
            </p>
          </section>

          <section className="border-b border-slate-200 pb-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              6. Is my data secure?
            </h2>
            <p className="text-slate-700">
              Absolutely! We use industry-standard encryption to protect your data. All information is stored
              securely in the cloud with automatic backups. Your data is accessible only to authorized users
              from your organization.
            </p>
          </section>

          <section className="border-b border-slate-200 pb-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              7. Can I access my data offline?
            </h2>
            <p className="text-slate-700">
              FuelTrack requires an internet connection for syncing data and generating reports. However,
              basic functions may work offline with data syncing automatically when you're back online.
            </p>
          </section>

          <section className="border-b border-slate-200 pb-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              8. What kind of reports can I generate?
            </h2>
            <p className="text-slate-700 mb-2">FuelTrack provides various reports including:</p>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li>Daily sales summary by pump and nozzle</li>
              <li>Employee shift reports</li>
              <li>Inventory tracking and fuel consumption</li>
              <li>Monthly and yearly performance analytics</li>
              <li>Custom reports based on your requirements</li>
            </ul>
          </section>

          <section className="border-b border-slate-200 pb-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              9. How do I manage multiple pumps?
            </h2>
            <p className="text-slate-700">
              FuelTrack is designed for multi-pump management. You can add all your pumps in the system,
              assign them to different employees, and track each pump's performance individually from a
              centralized dashboard.
            </p>
          </section>

          <section className="border-b border-slate-200 pb-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              10. Do you provide training or support?
            </h2>
            <p className="text-slate-700">
              Yes! We offer comprehensive support including in-app tutorials, documentation, and customer
              support via email and phone. Contact us at support@fueltrack.com for assistance.
            </p>
          </section>

          <section className="border-b border-slate-200 pb-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              11. Can I export my data?
            </h2>
            <p className="text-slate-700">
              Yes, you can export your data in various formats including PDF, Excel, and CSV for further
              analysis or record-keeping purposes.
            </p>
          </section>

          <section className="border-b border-slate-200 pb-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              12. What if I face technical issues?
            </h2>
            <p className="text-slate-700">
              Our support team is here to help! Contact us at support@fueltrack.com or call +91-XXXXXXXXXX
              during business hours (Monday-Friday, 9 AM - 6 PM IST). We typically respond within 24 hours.
            </p>
          </section>

          <section className="border-b border-slate-200 pb-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              13. Are there any upcoming features?
            </h2>
            <p className="text-slate-700 mb-2">We're constantly improving FuelTrack. Upcoming features include:</p>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li>Advanced analytics and AI-powered insights</li>
              <li>Integration with accounting software</li>
              <li>Customer loyalty program management</li>
              <li>Real-time notifications and alerts</li>
              <li>iOS application</li>
            </ul>
          </section>

          <section className="border-b border-slate-200 pb-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              14. How often is the app updated?
            </h2>
            <p className="text-slate-700">
              We release regular updates to improve performance, add new features, and fix bugs. Updates
              are automatically available through the Google Play Store.
            </p>
          </section>

          <section className="pb-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              15. How can I provide feedback or suggest features?
            </h2>
            <p className="text-slate-700">
              We love hearing from our users! Send your feedback, suggestions, or feature requests to
              feedback@fueltrack.com. Your input helps us make FuelTrack better for everyone.
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Still have questions?</h3>
          <p className="text-slate-700 mb-4">
            Can't find the answer you're looking for? Our support team is ready to help!
          </p>
          <div className="space-y-2 text-slate-700">
            <p><strong>Email:</strong> support@fueltrack.com</p>
            <p><strong>Phone:</strong> +91-XXXXXXXXXX</p>
            <p><strong>Hours:</strong> Monday-Friday, 9 AM - 6 PM IST</p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}

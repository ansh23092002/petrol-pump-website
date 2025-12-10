import { JSX } from "react";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../Hero";

export const metadata: Metadata = {
  title: "Refund Policy - FuelTrack",
  description: "Refund and cancellation policy for FuelTrack services",
};

export default function RefundPolicy(): JSX.Element {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="min-h-screen bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Refund Policy</h1>
        <p className="text-sm text-slate-600 mb-8">Last Updated: December 9, 2025</p>

        <div className="space-y-6 text-slate-700">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Free Service</h2>
            <p>
              FuelTrack is currently offered as a free service to all users. Since there are no charges for
              downloading or using the application, refund requests do not typically apply.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Premium Features (If Applicable)</h2>
            <p>
              If you have purchased any premium features or subscription plans:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li><strong>7-Day Money-Back Guarantee:</strong> Request a full refund within 7 days of purchase</li>
              <li><strong>Cancellation Policy:</strong> Cancel subscriptions at any time before the next billing cycle</li>
              <li><strong>Prorated Refunds:</strong> May be available on a case-by-case basis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Eligibility for Refunds</h2>
            <p>Refunds may be granted in the following circumstances:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Technical issues preventing use of the Service</li>
              <li>Duplicate charges or billing errors</li>
              <li>Service not delivered as described</li>
              <li>Unauthorized transactions on your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Non-Refundable Items</h2>
            <p>The following are not eligible for refunds:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Services already consumed or delivered</li>
              <li>Requests made after the 7-day refund period</li>
              <li>Changes in business requirements or circumstances</li>
              <li>Failure to use the Service due to user error</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. How to Request a Refund</h2>
            <p>To request a refund:</p>
            <ol className="list-decimal ml-6 mt-2 space-y-2">
              <li>Contact our support team at support@fueltrack.com</li>
              <li>Provide your account details and transaction information</li>
              <li>Explain the reason for your refund request</li>
              <li>Allow 5-7 business days for review and processing</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Refund Processing Time</h2>
            <p>
              Once approved, refunds will be processed within:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li><strong>Credit/Debit Card:</strong> 5-10 business days</li>
              <li><strong>Digital Wallets:</strong> 3-5 business days</li>
              <li><strong>Bank Transfer:</strong> 7-14 business days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Subscription Cancellations</h2>
            <p>
              For subscription-based services:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Cancel anytime from your account settings</li>
              <li>Access continues until the end of the billing period</li>
              <li>No refunds for partial months or unused time</li>
              <li>Reactivation possible at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Dispute Resolution</h2>
            <p>
              If you disagree with a refund decision, you may:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Request escalation to senior management</li>
              <li>Provide additional documentation supporting your claim</li>
              <li>Seek mediation through appropriate channels</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Changes to Refund Policy</h2>
            <p>
              We reserve the right to modify this Refund Policy at any time. Changes will be effective
              immediately upon posting.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Contact Information</h2>
            <p>
              For refund requests or questions:
              <br />
              Email: support@fueltrack.com
              <br />
              Phone: +91-XXXXXXXXXX
              <br />
              Business Hours: Monday-Friday, 9 AM - 6 PM IST
            </p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}

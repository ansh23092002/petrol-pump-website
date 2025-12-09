import { JSX } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Agreement - FuelTrack",
  description: "Terms and conditions for using FuelTrack petrol pump management system",
};

export default function TermsOfAgreement(): JSX.Element {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Agreement</h1>
        <p className="text-sm text-slate-600 mb-8">Last Updated: December 9, 2025</p>

        <div className="space-y-6 text-slate-700">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using FuelTrack ("the Service"), you agree to be bound by these Terms of Agreement.
              If you do not agree to these terms, please do not use our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Description of Service</h2>
            <p>
              FuelTrack provides a digital management system for petrol pump operations, including but not limited to:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Real-time fuel inventory tracking</li>
              <li>Automated sales reporting</li>
              <li>Multi-pump management</li>
              <li>Cloud backup and synchronization</li>
              <li>Staff management tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Provide accurate and complete information during registration</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Use the Service only for lawful purposes</li>
              <li>Not attempt to interfere with or disrupt the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Data and Privacy</h2>
            <p>
              We collect and process data in accordance with our Privacy Policy. By using the Service, you consent
              to such processing and warrant that all data provided by you is accurate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Intellectual Property</h2>
            <p>
              All content, features, and functionality of the Service are owned by FuelTrack and are protected by
              international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Limitation of Liability</h2>
            <p>
              FuelTrack shall not be liable for any indirect, incidental, special, consequential, or punitive damages
              resulting from your use of or inability to use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Service Modifications</h2>
            <p>
              We reserve the right to modify or discontinue the Service at any time without notice. We shall not be
              liable to you or any third party for any modification, suspension, or discontinuance of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Service immediately, without prior notice,
              for any reason, including breach of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard
              to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Contact Information</h2>
            <p>
              For questions about these Terms, please contact us at:
              <br />
              Email: support@fueltrack.com
              <br />
              Address: India
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

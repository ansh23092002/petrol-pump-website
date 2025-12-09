import { JSX } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - FuelTrack",
  description: "Privacy policy and data protection information for FuelTrack users",
};

export default function PrivacyPolicy(): JSX.Element {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <p className="text-sm text-slate-600 mb-8">Last Updated: December 9, 2025</p>

        <div className="space-y-6 text-slate-700">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Information We Collect</h2>
            <p className="mb-3">We collect several types of information to provide and improve our Service:</p>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-2 mt-4">Personal Information</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Name and contact information</li>
              <li>Email address and phone number</li>
              <li>Business details (petrol pump name, location)</li>
              <li>Account credentials</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-2 mt-4">Business Data</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Fuel inventory records</li>
              <li>Sales transactions</li>
              <li>Employee shift information</li>
              <li>Pump readings and reports</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-2 mt-4">Technical Information</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Device information and identifiers</li>
              <li>IP address and location data</li>
              <li>Usage data and analytics</li>
              <li>Browser type and version</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. How We Use Your Information</h2>
            <p>We use the collected information for:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Providing and maintaining the Service</li>
              <li>Processing transactions and generating reports</li>
              <li>Improving user experience and functionality</li>
              <li>Sending important updates and notifications</li>
              <li>Analyzing usage patterns to enhance the Service</li>
              <li>Detecting and preventing fraud or security issues</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Data Storage and Security</h2>
            <p>
              We implement industry-standard security measures to protect your data:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Encrypted data transmission using SSL/TLS</li>
              <li>Secure cloud storage with regular backups</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Regular security audits and updates</li>
              <li>Employee training on data protection</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Data Sharing and Disclosure</h2>
            <p className="mb-3">We do not sell your personal information. We may share data with:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our Service</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale</li>
              <li><strong>With Your Consent:</strong> Any other disclosure with your explicit permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Access and update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your information</li>
              <li>Export your data in a portable format</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with data protection authorities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to improve your experience. You can control
              cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Children's Privacy</h2>
            <p>
              Our Service is not intended for users under 18 years of age. We do not knowingly collect
              information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. International Data Transfers</h2>
            <p>
              Your information may be transferred to and maintained on servers located outside your jurisdiction.
              We ensure appropriate safeguards are in place.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Changes to Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you of significant changes via
              email or through the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Contact Us</h2>
            <p>
              For privacy-related questions or concerns, contact us at:
              <br />
              Email: privacy@fueltrack.com
              <br />
              Phone: +91-XXXXXXXXXX
              <br />
              Address: India
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

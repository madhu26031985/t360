import React from 'react';
import { Shield, Mail } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-8 sm:pt-16 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Your privacy is important to us. Learn how we protect and handle your information.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-8 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              T360 ("we," "us," or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website <a href="https://www.t360.in" className="text-blue-600 hover:text-blue-700 underline">https://www.t360.in</a> or use our mobile application and related services (collectively referred to as the "Services"). While T360 is designed as a subscription-based platform, please note that pricing and subscription plans have not yet been activated.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We may collect the following types of information to provide our free Services:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-700">
              <li><strong>Personal Information:</strong> Name, email address, Toastmasters club ID, and other contact details you voluntarily provide during registration, evaluations, or inquiries. For 360-Degree Evaluations, we process anonymized feedback to protect participants.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website or app, such as IP address, browser/device type, app version, pages/screens visited, and session duration. This helps us improve functionality.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> We use essential cookies for site/app performance (e.g., session management) and analytics cookies (e.g., Google Analytics) to understand usage trends. You can manage preferences via your browser settings or our cookie consent banner. We do not use tracking for advertising, as our Services are ad-free.</li>
            </ul>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We currently do not collect any sensitive information, such as payment or financial details.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We use your information solely to:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-700">
              <li>Provide, operate, and maintain our website, app, and Services (e.g., distributing evaluation forms and generating reports).</li>
              <li>Improve and personalize your experience (e.g., tailoring dashboard views based on your role).</li>
              <li>Communicate with you, including responding to support inquiries, sending service updates, or notifying about evaluations.</li>
              <li>Analyze aggregate, anonymized trends to enhance club management tools.</li>
              <li>Ensure compliance with legal obligations, such as fraud prevention or regulatory requests.</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">How We Share Your Information</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We do not sell, rent, or trade your personal information—especially as a free, non-commercial service. We may share it only in limited cases:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-3 text-gray-700">
              <li><strong>Service Providers:</strong> Trusted third parties who assist us under strict confidentiality (e.g., cloud hosting via AWS, analytics via Google—limited to aggregated data).</li>
              <li><strong>Legal Requirements:</strong> If required by law, subpoena, or to protect our rights, safety, or property (e.g., in response to a court order).</li>
              <li><strong>Business Transfers:</strong> In the event of a merger or acquisition, with safeguards for your data.</li>
            </ul>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We ensure all shares comply with applicable laws.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Depending on your location (e.g., GDPR in EU, CCPA in California), you may have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-3 text-gray-700">
              <li>Access, correct, update, or delete your personal data.</li>
              <li>Opt-out of marketing communications (we rarely send any, but you can unsubscribe anytime).</li>
              <li>Restrict or object to certain data processing (e.g., analytics).</li>
              <li>Withdraw consent where applicable (e.g., for non-essential cookies).</li>
            </ul>
            <p className="text-gray-700 mb-8 leading-relaxed">
              To exercise these rights, email us at <a href="mailto:support@t360.in" className="text-blue-600 hover:text-blue-700 underline">support@t360.in</a> with your request—we'll respond within 30 days. For California residents, details on sales (none occur) are available upon request.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Data Retention</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We retain your personal information only as long as necessary for the purposes described (e.g., account data while active; evaluation logs for 1 year post-term). Upon deletion request or account closure, we'll securely erase it within 30 days, except for legal backups.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We implement reasonable administrative, technical, and physical security measures to protect your information, including encryption in transit (HTTPS/TLS) and at rest, access controls, and regular audits. However, no online transmission or storage is 100% secure, so we cannot guarantee absolute protection.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">International Data Transfers</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              As a global service, your information may be transferred to and processed in countries outside your region (e.g., servers in the US or EU), where data protection laws may differ. We use Standard Contractual Clauses and other safeguards to ensure equivalent protection.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Our Services are not directed to children under 13 (or 16 in some regions). We do not knowingly collect data from children. If we learn of such collection, we'll delete it promptly. Parents/guardians can contact us for assistance.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We may update this Privacy Policy to reflect changes in our practices or laws. We'll notify you via email or in-app notice for material updates. The latest version will be posted here with an updated date—continued use after changes means acceptance.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-900">Get in Touch</h3>
              </div>
              <p className="text-gray-700 mb-3">
                For questions about this Privacy Policy, data rights, or concerns, contact us at:
              </p>
              <a
                href="mailto:support@t360.in"
                className="text-blue-600 hover:text-blue-700 font-semibold underline"
              >
                support@t360.in
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
              <p className="text-gray-600 font-medium">
                <strong>Last Updated:</strong> October 14, 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

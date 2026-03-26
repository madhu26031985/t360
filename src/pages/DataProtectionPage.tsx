import React from 'react';
import { Shield, Mail, Trash2, UserX, Clock } from 'lucide-react';

export default function DataProtectionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-8 sm:pt-16 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Data Protection
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Your data rights and how to manage your personal information with T360
          </p>
        </div>
      </section>

      {/* Data Protection Content */}
      <section className="py-8 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Your Data Rights</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              At T360, we empower you with full control over your personal data through transparency and easy tools.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center mb-4">
                  <UserX className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-900">Right to Deletion</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Request deletion of your personal data from our systems anytime.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-900">Data Security</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  We use industry-standard measures to safeguard your information.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-900">Quick Response</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  We handle deletion requests within 30 days after verification.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-orange-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-900">Easy Contact</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Email us to exercise your rights—no forms or hassle required.
                </p>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">How to Delete Your Personal Data</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Removing your data is simple. Follow these steps:
            </p>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <Trash2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Data Deletion Request</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Send an Email</h4>
                    <p className="text-gray-700 text-sm">
                      Email <a href="mailto:support@t360.in" className="text-red-600 hover:text-red-700 font-semibold underline">support@t360.in</a> with subject: "Data Deletion Request"
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Include Your Information</h4>
                    <p className="text-gray-700 text-sm">
                      Provide your name and account email for quick lookup.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">We'll Handle the Rest</h4>
                    <p className="text-gray-700 text-sm">
                      We'll verify your identity and complete deletion within 30 days.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-red-200">
                <p className="text-red-800 font-medium text-sm mb-2">
                  ⚠️ Important Note
                </p>
                <p className="text-red-700 text-sm">
                  Deleted data is permanent and irrecoverable. Back up essentials first.
                </p>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What Data We Delete</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Upon request, we remove:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>Personal details (name, email, all data under My profile)</li>
              <li>Account preferences and settings</li>
              <li>Usage analytics tied to your account</li>
              <li>Created or uploaded content</li>
              <li>Communication and support history</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Data Retention</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We retain minimal data only for legal, fraud prevention, or business needs as required by law. All identifiable info is removed or anonymized on request.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-900">Get in Touch</h3>
              </div>
              <p className="text-gray-700 mb-3">
                For data protection questions or rights exercises, email:
              </p>
              <a
                href="mailto:support@t360.in"
                className="text-blue-600 hover:text-blue-700 font-semibold underline text-lg"
              >
                support@t360.in
              </a>
              <p className="text-gray-600 text-sm mt-3">
                Responses within 24-48 hours.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
              <p className="text-gray-600 font-medium">
                <strong>Last Updated:</strong> January 15, 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
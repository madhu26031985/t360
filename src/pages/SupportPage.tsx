import React from 'react';
import { Mail, MessageCircle, Calendar, Lightbulb, CheckCircle } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700 text-white py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                You're Never Alone
                <span className="block text-yellow-300 mt-2">When Using T360</span>
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
                Whether you're setting up your first meeting or managing your club, our team is always ready to help and guide you.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-8 border border-white/20">
                <p className="text-lg font-semibold mb-2">
                  Unlimited onboarding • Member training • Real support
                </p>
                <p className="text-sm text-blue-100">
                  We usually respond on WhatsApp in under 5 minutes
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/9597491113"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-xl text-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
                <a
                  href="https://calendly.com/t360-support/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Call
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                  <div className="space-y-4">
                    <div className="bg-white/20 rounded-lg p-4 border border-white/30">
                      <div className="flex items-center space-x-3">
                        <MessageCircle className="w-6 h-6 text-yellow-300" />
                        <span className="text-white font-semibold">WhatsApp Support</span>
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 border border-white/30">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-6 h-6 text-yellow-300" />
                        <span className="text-white font-semibold">Book a Call</span>
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 border border-white/30">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-6 h-6 text-yellow-300" />
                        <span className="text-white font-semibold">Email Support</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Support */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            GET SUPPORT
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* WhatsApp Support */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-200">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                WhatsApp Support
              </h3>
              <p className="text-gray-700 mb-4">
                Fastest way to reach us.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Ask questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Get quick help</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Share screenshots</span>
                </li>
              </ul>
              <a
                href="https://wa.me/9597491113"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors w-full justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Book a Call */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-200">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Book a Call
              </h3>
              <p className="text-gray-700 mb-4">
                Need help setting up your club?
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Walkthrough of T360</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Meeting setup guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Answer your questions</span>
                </li>
              </ul>
              <a
                href="https://calendly.com/t360-support/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors w-full justify-center"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Call
              </a>
            </div>

            {/* Email Support */}
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-8 rounded-2xl border-2 border-gray-200">
              <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Email Support
              </h3>
              <p className="text-gray-700 mb-4">
                For detailed queries.
              </p>
              <div className="mb-6 pt-2">
                <a
                  href="mailto:support@t360.in"
                  className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors break-all"
                >
                  support@t360.in
                </a>
                <p className="text-sm text-gray-600 mt-4">
                  Response time: within 24 hours
                </p>
              </div>
            </div>

            {/* Need a Feature */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border-2 border-orange-200">
              <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need a Feature?
              </h3>
              <p className="text-gray-700 mb-4">
                Many T360 features were built based on requests from Toastmasters clubs.
              </p>
              <p className="text-gray-700 mb-6">
                If your club needs something specific: Send us a WhatsApp message and we'll explore building it for you.
              </p>
              <a
                href="https://wa.me/9597491113"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-colors w-full justify-center"
              >
                <Lightbulb className="w-5 h-5" />
                Suggest a Feature
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* What Support You Get */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            WHAT SUPPORT YOU GET
          </h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border-2 border-gray-200">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-800 text-left font-medium">
                Unlimited onboarding support
              </p>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border-2 border-gray-200">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-800 text-left font-medium">
                Guidance for your first 3 meetings
              </p>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border-2 border-gray-200">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-800 text-left font-medium">
                Club member training sessions
              </p>
            </div>
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl border-2 border-gray-200">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-800 text-left font-medium">
                Direct WhatsApp help anytime
              </p>
            </div>
          </div>
          <p className="text-xl font-semibold text-gray-900 mt-8">
            We make sure your club succeeds with T360.
          </p>
        </div>
      </section>


    </div>
  );
}
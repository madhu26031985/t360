import React from 'react';
import { Smartphone, Monitor, Download, CheckCircle, MessageCircle, Calendar, Globe } from 'lucide-react';

export default function BetaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-20 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center mb-4">
              <img
                src="/brand.png"
                alt="T360 Logo"
                className="w-24 h-24 sm:w-32 sm:h-32 object-contain transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Start Using T360 in Your Preferred Way
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Use T360 on your mobile phone or access it directly from your laptop.
          </p>

          {/* Platform Options */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {/* Android Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-2 border-gray-100 hover:border-blue-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">Use on Android</h3>
              <p className="text-gray-600 mb-6">
                Download the mobile app<br />from Google Play.
              </p>

              <a
                href="https://play.google.com/store/apps/details?id=com.toastmaster360.mobile&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full"
              >
                <div className="bg-black text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 01-.609-.92V2.734a1 1 0 01.609-.92z" fill="url(#a)"/>
                    <path d="M13.792 12L3.609 1.814a1.006 1.006 0 011.26-.196l11.382 6.467L13.792 12z" fill="url(#b)"/>
                    <path d="M13.792 12l2.459 2.915 11.382 6.467a1.003 1.003 0 01-1.26-.196L13.792 12z" fill="url(#c)"/>
                    <path d="M16.251 14.915L13.792 12l-2.459-2.915L3.609 1.814a.996.996 0 01.609-.92L16.251 9.085v5.83z" fill="url(#d)"/>
                    <defs>
                      <linearGradient id="a" x1="11.387" y1="2.734" x2="1.204" y2="2.734" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00A0FF"/>
                        <stop offset="1" stopColor="#00A1FF"/>
                      </linearGradient>
                      <linearGradient id="b" x1="15.051" y1="9.085" x2="4.869" y2="9.085" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFE000"/>
                        <stop offset="1" stopColor="#FFBD00"/>
                      </linearGradient>
                      <linearGradient id="c" x1="15.051" y1="14.915" x2="4.869" y2="14.915" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF3A44"/>
                        <stop offset="1" stopColor="#C31162"/>
                      </linearGradient>
                      <linearGradient id="d" x1="9.996" y1="1.814" x2="9.996" y2="22.186" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00D277"/>
                        <stop offset="1" stopColor="#00A950"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-semibold -mt-0.5">Google Play</div>
                  </div>
                </div>
              </a>
            </div>

            {/* iPhone Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-2 border-gray-100 hover:border-blue-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">Use on iPhone</h3>
              <p className="text-gray-600 mb-6">
                Download the app<br />from Apple App Store.
              </p>

              <a
                href="https://apps.apple.com/in/app/t-360/id6752499801"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full"
              >
                <div className="bg-black text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors shadow-md hover:shadow-lg">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold -mt-0.5">App Store</div>
                  </div>
                </div>
              </a>
            </div>

            {/* Web App Card */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-2 border-blue-200 hover:border-blue-400">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">Use on Laptop / Desktop</h3>
              <p className="text-gray-600 mb-6">
                Access T360 instantly<br />through your web browser.
              </p>

              <a
                href="https://www.t360.in/weblogin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full"
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-cyan-700 transition-all shadow-md hover:shadow-lg font-semibold">
                  <Globe className="w-5 h-5" />
                  <span>Open Web App</span>
                </div>
              </a>

              <p className="text-xs text-gray-600 text-center mt-3 font-medium">
                www.t360.in/weblogin
              </p>
            </div>
          </div>

          {/* Trust Line */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-xl p-4 max-w-2xl mx-auto mb-16">
            <p className="text-gray-700 font-medium flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" />
              <span>No installation required for laptop users. You can start instantly using the web version.</span>
            </p>
          </div>

          {/* Steps Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 max-w-3xl mx-auto border border-gray-100 mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
              Get Started in 3 Simple Steps
            </h2>

            <div className="space-y-8">
              <div className="flex items-start text-left">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Download the App or Open Web Version
                  </h3>
                  <p className="text-gray-600">
                    Choose Android, iPhone, or Web.
                  </p>
                </div>
              </div>

              <div className="flex items-start text-left">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Create Your Account
                  </h3>
                  <p className="text-gray-600">
                    Sign up using your email and club information.
                  </p>
                </div>
              </div>

              <div className="flex items-start text-left">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Start Managing Your Club
                  </h3>
                  <p className="text-gray-600">
                    Create meetings, assign roles, and run smoother meetings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl shadow-md p-8 max-w-2xl mx-auto border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Need help getting started?
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              Our team will help you set up your club.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/9597491113"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a
                href="https://calendly.com/t360-support/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                Book a Setup Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

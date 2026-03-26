import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Download, Play } from 'lucide-react';

export default function PricingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple Pricing
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-3">
              One affordable plan for every Toastmasters club
            </p>
            <p className="text-lg text-gray-500">
              Everything you need to run your club smoothly and professionally
            </p>
          </div>

          <div className="max-w-md mx-auto mb-20">
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border-2 border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-500 text-white text-sm font-bold px-6 py-2 rounded-bl-2xl">
                FREE BETA
              </div>

              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">T360 CLUB PLAN</h2>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-gray-900">₹1000</span>
                </div>
                <p className="text-gray-600 font-medium mb-2">per club / year</p>
                <p className="text-sm text-gray-500">Less than ₹3 per day</p>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  'Unlimited members',
                  'Unlimited meetings',
                  'Full meeting management',
                  'Role booking system',
                  'Digital voting',
                  'Speech & evaluation tracking',
                  'Club analytics & reports',
                  'ExComm tools',
                  'Guest participation'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate('/downloadnow')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-colors mb-3"
              >
                Start Using T360
              </button>
              <p className="text-center text-sm text-green-600 font-semibold">
                Free during beta phase
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-3xl p-8 sm:p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
              Why T360 Is Priced This Way
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 text-gray-700 text-lg leading-relaxed">
              <p className="text-center font-semibold text-gray-900">
                Toastmasters is a non-profit community
              </p>
              <p className="text-center">
                T360 was created to support clubs, not profit from them
              </p>
              <p className="text-center mb-6">
                The small yearly fee simply helps cover:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {[
                  'Server infrastructure',
                  'Platform maintenance',
                  'Continuous improvements',
                  'Customer support'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white rounded-xl p-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-center font-semibold text-blue-900 pt-4">
                Our goal is to keep T360 affordable for every club
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-100 rounded-3xl p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Running a Club Today
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">×</span>
                  <span>Spreadsheets for speech tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">×</span>
                  <span>WhatsApp for role booking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">×</span>
                  <span>Manual voting counting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">×</span>
                  <span>Manual meeting reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">×</span>
                  <span>No member progress tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 sm:p-10 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Running a Club with T360
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Automated meeting agendas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>One-click role booking</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Digital voting</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Automatic meeting reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Member growth dashboard</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 mb-16 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              No Hidden Pricing
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {[
                'One simple plan',
                'Unlimited members',
                'Unlimited meetings',
                'No per-user charges',
                'No premium tiers'
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-xl font-semibold text-gray-900 mt-8">
              One club = one simple yearly price
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 sm:p-12 mb-16 border-2 border-green-200">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
              Currently Free During Beta
            </h2>
            <p className="text-center text-lg text-gray-700">
              You can use all features of T360 completely free
            </p>
            <p className="text-center text-gray-600 mt-2">
              Pricing will only start once the beta phase ends
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: 'Is T360 free right now?',
                  a: 'Yes, the platform is completely free during beta.'
                },
                {
                  q: 'Will pricing increase later?',
                  a: 'Our goal is to keep pricing affordable for clubs. We plan to maintain simple, community-friendly pricing.'
                },
                {
                  q: 'Is pricing per member?',
                  a: 'No. Pricing is per club with unlimited members.'
                },
                {
                  q: 'Can a member join multiple clubs?',
                  a: 'Yes. Data is tracked separately for each club.'
                },
                {
                  q: 'What happens after beta ends?',
                  a: 'We will notify all users well in advance before introducing any pricing.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Simplify Your Club?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join Toastmasters clubs already using T360 to run better meetings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/downloadnow')}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download App
              </button>
              <button
                onClick={() => navigate('/demo')}
                className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-800 transition-colors border-2 border-white/30"
              >
                <Play className="w-5 h-5" />
                Watch Product Demo
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
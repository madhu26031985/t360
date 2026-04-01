import React from 'react';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8">
            <div className="text-center mb-6">
              <img
                src="/brand.png"
                alt="T360 logo"
                className="w-16 h-16 object-contain mx-auto mb-2"
              />
              <p className="text-sm text-gray-600">We salute Toastmasters</p>
            </div>

            <div className="space-y-4 text-[15px] leading-relaxed text-gray-700 mb-6">
              <p>
                We built T360 to simplify role booking, voting, and the overall Toastmasters club journey.
                Before T360, clubs spent too much time managing operations instead of focusing on
                communication and member growth.
              </p>
              <p>
                If T360 has helped you, your support truly means a lot. A quick review or even a small
                coffee helps us improve, reach more clubs, and continue building for you. Your contribution
                helps us keep the product free for everyone.
              </p>
              <p>Thank you for your support. ❤️</p>
            </div>

            <a
              href="https://razorpay.me/@t360payment"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-zinc-800 hover:bg-zinc-900 text-white font-semibold py-3 rounded-md transition-colors text-center"
            >
              ☕ Buy a coffee
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
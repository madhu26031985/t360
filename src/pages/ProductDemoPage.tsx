import React, { useState } from 'react';
import { Youtube, Play, Users, CircleUser as UserCircle, MessageCircle, Phone, CheckCircle, ArrowRight } from 'lucide-react';

export default function ProductDemoPage() {
  const [activeTour, setActiveTour] = useState<'excomm' | 'member' | null>(null);

  const excommTourSteps = [
    {
      step: 1,
      title: "Create Your Club",
      url: "https://app.storylane.io/share/j65ricad3yjg"
    },
    {
      step: 2,
      title: "Invite Members",
      url: "https://app.storylane.io/share/k8msf1digso7"
    },
    {
      step: 3,
      title: "Create a Meeting",
      url: "https://app.storylane.io/share/8mhrrkjjc3rs"
    },
    {
      step: 4,
      title: "Assign Roles",
      url: "https://app.storylane.io/share/n1ztraxjeakr"
    },
    {
      step: 5,
      title: "Run Voting",
      url: "https://app.storylane.io/share/ckxoijglmkkc"
    },
    {
      step: 6,
      title: "View Meeting Reports",
      url: "https://app.storylane.io/share/8mhrrkjjc3rs"
    }
  ];

  const memberTourSteps = [
    {
      step: 1,
      title: "Book a Role",
      url: "https://app.storylane.io/share/l10relqnvkfh"
    },
    {
      step: 2,
      title: "Add Speech Details",
      url: "https://app.storylane.io/share/fl0fxq0kqokl"
    },
    {
      step: 3,
      title: "View Club Information",
      url: "https://app.storylane.io/share/q35jexfhygwa"
    },
    {
      step: 4,
      title: "Track Your Journey",
      url: "https://app.storylane.io/share/djscwaaayczc"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            See How T360 Runs a Toastmasters Club
          </h1>
        </div>

        {/* Guided Learning Paths */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Choose Your Learning Path
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* ExComm Path */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-200 p-8 hover:shadow-2xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">For Club Officers (ExComm)</h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Learn how to manage meetings, members, and club operations.
              </p>

              <div className="mb-6">
                <p className="font-semibold text-gray-900 mb-3">Includes:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Create a club</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Invite members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Create meetings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Assign roles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Manage voting</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => setActiveTour(activeTour === 'excomm' ? null : 'excomm')}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                {activeTour === 'excomm' ? 'Hide Tour' : 'Start ExComm Tour'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Member Path */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-green-200 p-8 hover:shadow-2xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <UserCircle className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">For Members</h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Learn how members participate in meetings and track their progress.
              </p>

              <div className="mb-6">
                <p className="font-semibold text-gray-900 mb-3">Includes:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Book meeting roles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Add speech details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">View club information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Update profile</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => setActiveTour(activeTour === 'member' ? null : 'member')}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                {activeTour === 'member' ? 'Hide Tour' : 'Start Member Tour'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Tour - ExComm */}
        {activeTour === 'excomm' && (
          <div className="mb-16 animate-in fade-in duration-500">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-200 p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">ExComm Tour</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {excommTourSteps.map((step) => (
                  <a
                    key={step.step}
                    href={step.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all hover:scale-105 group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <h4 className="font-semibold text-gray-900 text-lg">{step.title}</h4>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:text-blue-700">
                      <Play className="w-4 h-4" />
                      <span className="text-sm">Watch Demo</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Product Tour - Member */}
        {activeTour === 'member' && (
          <div className="mb-16 animate-in fade-in duration-500">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl border-2 border-green-200 p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Member Tour</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {memberTourSteps.map((step) => (
                  <a
                    key={step.step}
                    href={step.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all hover:scale-105 group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <h4 className="font-semibold text-gray-900 text-base">{step.title}</h4>
                    </div>
                    <div className="flex items-center gap-2 text-green-600 font-medium group-hover:text-green-700">
                      <Play className="w-4 h-4" />
                      <span className="text-sm">Watch Demo</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Quick Overview Option */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl border-2 border-orange-200 p-8 shadow-xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Want the full overview?
            </h3>
            <p className="text-gray-700 mb-6 text-lg">
              Watch the complete T360 walkthrough in one quick video.
            </p>
            <a
              href="https://www.youtube.com/@T360ClubAutomation/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl"
            >
              <Youtube className="w-5 h-5" />
              Watch Full Demo
            </a>
          </div>
        </div>

        {/* Support CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200 p-8 shadow-xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Need help setting up your club?
            </h3>
            <p className="text-gray-700 mb-6 text-lg">
              Our team can guide you through your first meeting with T360.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919611107649"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a
                href="https://calendly.com/team-t360/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Book a Setup Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

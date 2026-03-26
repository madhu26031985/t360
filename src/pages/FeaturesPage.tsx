import React from 'react';
import {
  Settings,
  Calendar,
  Vote,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  FileSpreadsheet,
  MessageSquare,
  FileText,
  TrendingUp,
  Play,
  Download,
  Clock,
  Users,
  FileBarChart
} from 'lucide-react';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Two Column */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.2),transparent_50%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Run Your Toastmasters Club Without Admin Work
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Plan meetings • Run sessions • Voting • Reports<br />
                All in one platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://t360.in/downloadnow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-900 text-lg font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Download className="w-5 h-5" />
                  Try T360
                </a>
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <Play className="w-5 h-5" />
                  Watch Demo
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-6 pb-4 border-b border-white/20">
                  <h3 className="text-white text-xl font-bold tracking-wide">T360 CLUB DASHBOARD</h3>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-blue-500/40 backdrop-blur-sm rounded-lg p-3 text-center border border-blue-400/30">
                    <p className="text-white text-sm font-semibold">Book Role</p>
                  </div>
                  <div className="bg-blue-500/40 backdrop-blur-sm rounded-lg p-3 text-center border border-blue-400/30">
                    <p className="text-white text-sm font-semibold">Meeting Agenda</p>
                  </div>
                  <div className="bg-blue-500/40 backdrop-blur-sm rounded-lg p-3 text-center border border-blue-400/30">
                    <p className="text-white text-sm font-semibold">Live Voting</p>
                  </div>

                  <div className="bg-cyan-500/40 backdrop-blur-sm rounded-lg p-3 text-center border border-cyan-400/30">
                    <p className="text-white text-sm font-semibold">Toastmaster</p>
                  </div>
                  <div className="bg-cyan-500/40 backdrop-blur-sm rounded-lg p-3 text-center border border-cyan-400/30">
                    <p className="text-white text-sm font-semibold">Timer</p>
                  </div>
                  <div className="bg-cyan-500/40 backdrop-blur-sm rounded-lg p-3 text-center border border-cyan-400/30">
                    <p className="text-white text-sm font-semibold">Ah Counter</p>
                  </div>

                  <div className="bg-blue-400/40 backdrop-blur-sm rounded-lg p-3 text-center border border-blue-300/30">
                    <p className="text-white text-sm font-semibold">Speech Eval</p>
                  </div>
                  <div className="bg-blue-400/40 backdrop-blur-sm rounded-lg p-3 text-center border border-blue-300/30">
                    <p className="text-white text-sm font-semibold">Attendance</p>
                  </div>
                  <div className="bg-blue-400/40 backdrop-blur-sm rounded-lg p-3 text-center border border-blue-300/30">
                    <p className="text-white text-sm font-semibold">Feedback</p>
                  </div>

                  <div className="bg-cyan-400/40 backdrop-blur-sm rounded-lg p-3 text-center border border-cyan-300/30">
                    <p className="text-white text-sm font-semibold">Member Journey</p>
                  </div>
                  <div className="bg-cyan-400/40 backdrop-blur-sm rounded-lg p-3 text-center border border-cyan-300/30">
                    <p className="text-white text-sm font-semibold">Club Admin</p>
                  </div>
                  <div className="bg-cyan-400/40 backdrop-blur-sm rounded-lg p-3 text-center border border-cyan-300/30">
                    <p className="text-white text-sm font-semibold">Reports</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem - Horizontal Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              THE REALITY OF RUNNING A CLUB
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <FileSpreadsheet className="w-6 h-6 text-red-600" />
              </div>
              <p className="text-sm font-semibold text-gray-900 text-center">Spreadsheet tracking</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <MessageSquare className="w-6 h-6 text-orange-600" />
              </div>
              <p className="text-sm font-semibold text-gray-900 text-center">WhatsApp chaos</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <FileText className="w-6 h-6 text-yellow-600" />
              </div>
              <p className="text-sm font-semibold text-gray-900 text-center">Agenda stress</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <Vote className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-sm font-semibold text-gray-900 text-center">Manual voting</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow col-span-2 md:col-span-1">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-sm font-semibold text-gray-900 text-center">No visibility</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform - 2x2 Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              WHAT T360 HELPS YOU DO
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-10 rounded-2xl border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">PLAN MEETINGS</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  Agenda creation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  Role booking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  Meeting scheduling
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-2xl border-2 border-green-100 hover:border-green-300 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">RUN MEETINGS</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Timer + role tracking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Meeting progress
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  Live updates
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-10 rounded-2xl border-2 border-purple-100 hover:border-purple-300 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <Vote className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">DIGITAL VOTING</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  Anonymous voting
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  Guest voting
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  Instant results
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-10 rounded-2xl border-2 border-orange-100 hover:border-orange-300 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">CLUB INSIGHTS</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  Participation stats
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  Member engagement
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  Performance tracking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How T360 Works - Horizontal Flow */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              HOW T360 RUNS A MEETING
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-3">
                1
              </div>
              <p className="font-semibold text-gray-900">Create Meeting</p>
            </div>

            <ArrowRight className="w-6 h-6 text-gray-400 hidden md:block flex-shrink-0" />

            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-3">
                2
              </div>
              <p className="font-semibold text-gray-900">Book Roles</p>
            </div>

            <ArrowRight className="w-6 h-6 text-gray-400 hidden md:block flex-shrink-0" />

            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-3">
                3
              </div>
              <p className="font-semibold text-gray-900">Run Meeting</p>
            </div>

            <ArrowRight className="w-6 h-6 text-gray-400 hidden md:block flex-shrink-0" />

            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-3">
                4
              </div>
              <p className="font-semibold text-gray-900">Voting</p>
            </div>

            <ArrowRight className="w-6 h-6 text-gray-400 hidden md:block flex-shrink-0" />

            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-3">
                5
              </div>
              <p className="font-semibold text-gray-900">Reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Snapshot - Dense 3x2 Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              EVERYTHING YOUR CLUB NEEDS
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-50 to-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all text-center">
              <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Club Admin</h3>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-200 hover:shadow-lg transition-all text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Meeting Management</h3>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200 hover:shadow-lg transition-all text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Vote className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Digital Voting</h3>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200 hover:shadow-lg transition-all text-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Member Journey</h3>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border border-orange-200 hover:shadow-lg transition-all text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Club Insights</h3>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-xl border border-yellow-200 hover:shadow-lg transition-all text-center">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <FileBarChart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Smart Reports</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.2),transparent_50%)]"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            READY TO RUN YOUR CLUB<br />THE MODERN WAY?
          </h2>

          <p className="text-xl text-blue-100 mb-12">
            Stop managing meetings manually.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://t360.in/downloadnow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-900 text-xl font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-xl transform hover:-translate-y-1"
            >
              <Download className="w-6 h-6" />
              Try T360
            </a>
            <a
              href="/demo"
              className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-white text-white text-xl font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <Play className="w-6 h-6" />
              Watch Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

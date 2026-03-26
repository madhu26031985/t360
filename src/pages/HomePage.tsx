import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Calendar, Users, TrendingUp, Zap, Brain, BarChart3, Heart, Rocket, Award, Download, PlayCircle, X, FileText, ChevronLeft, ChevronRight, ClipboardList, FileCheck } from 'lucide-react';

export default function HomePage() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const reviews = [
    {
      name: "Rajesh Kumar",
      role: "Club President",
      club: "Toastmasters Club Chennai",
      review: "T360 transformed how our club runs meetings. We no longer waste time tracking roles manually."
    },
    {
      name: "Priya Sharma",
      role: "Vice President Education",
      club: "Toastmasters Club Bangalore",
      review: "We finally have structure for roles and agendas. Everything is in one place and accessible to everyone."
    },
    {
      name: "Amit Verma",
      role: "Club President",
      club: "Toastmasters Club Gurgaon",
      review: "Everything is organized now. I can see my role, speech slot, and meeting updates instantly."
    },
    {
      name: "Sneha Reddy",
      role: "Secretary",
      club: "Toastmasters Club Hyderabad",
      review: "Tracking attendance is now effortless. T360 has saved us hours every week."
    },
    {
      name: "Vikram Singh",
      role: "Vice President Membership",
      club: "Toastmasters Club Delhi",
      review: "Member engagement has significantly improved since we started using T360. Highly recommend!"
    },
    {
      name: "Kavya Nair",
      role: "Sergeant at Arms",
      club: "Toastmasters Club Mumbai",
      review: "Digital voting is a game changer. No more paper ballots or confusion during awards."
    },
    {
      name: "Arjun Patel",
      role: "Club President",
      club: "Toastmasters Club Pune",
      review: "The speech archive feature helps members track their progress and revisit past evaluations easily."
    },
    {
      name: "Divya Iyer",
      role: "Vice President Education",
      club: "Toastmasters Club Kochi",
      review: "Planning meetings has never been this smooth. T360 makes role assignment incredibly simple."
    },
    {
      name: "Rohan Mehta",
      role: "Treasurer",
      club: "Toastmasters Club Ahmedabad",
      review: "The reporting features give us clear insights into club performance and member participation."
    },
    {
      name: "Anjali Gupta",
      role: "Club President",
      club: "Toastmasters Club Jaipur",
      review: "Our club has become more professional and organized. T360 is an essential tool for any Toastmasters club."
    }
  ];

  const nextReviews = () => {
    setCurrentReviewIndex((prev) => (prev + 3 >= reviews.length ? 0 : prev + 3));
  };

  const prevReviews = () => {
    setCurrentReviewIndex((prev) => (prev - 3 < 0 ? Math.max(0, reviews.length - 3) : prev - 3));
  };

  const displayedReviews = reviews.slice(currentReviewIndex, currentReviewIndex + 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700 text-white py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Run Your Toastmasters Club
                <span className="block text-yellow-300 mt-2">Without WhatsApp Chaos</span>
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
                T360 organizes roles, meetings, evaluations, attendance, and voting — all in one platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/downloadnow"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download App
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
                >
                  <PlayCircle className="w-5 h-5 mr-2" />
                  See How It Works
                </Link>
              </div>

              <p className="text-sm text-blue-200">
                Built by Toastmasters. Designed for real club meetings.
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                  <div className="space-y-4">
                    <div className="bg-white/20 rounded-lg p-4 border border-white/30">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-6 h-6 text-yellow-300" />
                        <span className="text-white font-semibold">Meeting Agenda</span>
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 border border-white/30">
                      <div className="flex items-center space-x-3">
                        <Users className="w-6 h-6 text-yellow-300" />
                        <span className="text-white font-semibold">Role Assignment</span>
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 border border-white/30">
                      <div className="flex items-center space-x-3">
                        <BarChart3 className="w-6 h-6 text-yellow-300" />
                        <span className="text-white font-semibold">Member Dashboard</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Running a Toastmasters Club Shouldn't Feel This Hard
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-red-50 border border-red-100 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Manual Role Tracking</h3>
                  <p className="text-gray-600 text-sm">Roles scattered in WhatsApp and spreadsheets</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Agenda Confusion</h3>
                  <p className="text-gray-600 text-sm">Multiple versions of the meeting agenda</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Attendance Issues</h3>
                  <p className="text-gray-600 text-sm">Manual tracking every meeting</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">No Member Progress Visibility</h3>
                  <p className="text-gray-600 text-sm">Hard to know who is progressing</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Messy Voting Process</h3>
                  <p className="text-gray-600 text-sm">Paper slips or chat voting</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Scattered Communication</h3>
                  <p className="text-gray-600 text-sm">Important updates lost in message threads</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-900 text-2xl font-bold">
            Clubs spend more time managing WhatsApp chaos than building confident speakers.
          </p>
        </div>
      </section>

      {/* Transition Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-6">
              <span className="text-3xl">✨</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Imagine If Everything Was In One Place
            </h2>
          </div>

          <p className="text-xl text-gray-700 mb-8">
            Open one app and instantly see:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <span className="text-gray-800 text-lg">Your role for the meeting</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <span className="text-gray-800 text-lg">The agenda</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <span className="text-gray-800 text-lg">Your speech slot</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <span className="text-gray-800 text-lg">Member progress</span>
            </div>
            <div className="flex items-start space-x-3 sm:col-span-2">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <span className="text-gray-800 text-lg">Meeting updates</span>
            </div>
          </div>

          <p className="text-xl text-gray-700 mt-8 font-semibold">
            No searching. No confusion.
          </p>
        </div>
      </section>

      {/* Product Reveal Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet T360 — The Operating System<br />for Toastmasters Clubs
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <Calendar className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Meeting Management</h3>
              <p className="text-gray-600">Schedule meetings and assign roles</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <Users className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Member Management</h3>
              <p className="text-gray-600">Manage members and club structure</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 border border-teal-200">
              <Award className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Speech & Evaluation Tracking</h3>
              <p className="text-gray-600">Store speeches and evaluations</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 border border-cyan-200">
              <BarChart3 className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Member Progress Insights</h3>
              <p className="text-gray-600">Track Pathways and engagement</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
              <CheckCircle className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Voting</h3>
              <p className="text-gray-600">Run meeting awards smoothly</p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-8 border border-rose-200">
              <Clock className="w-12 h-12 text-rose-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Speech Archive</h3>
              <p className="text-gray-600">Keep speech history organized</p>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-2xl p-8 border border-violet-200">
              <FileText className="w-12 h-12 text-violet-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Robust Reporting</h3>
              <p className="text-gray-600">Generate detailed reports and analytics</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 border border-amber-200">
              <ClipboardList className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Live Agenda</h3>
              <p className="text-gray-600">Dynamic agendas that update in real-time</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 border border-emerald-200">
              <FileCheck className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Meeting Minutes</h3>
              <p className="text-gray-600">Capture and generate meeting records automatically</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gradient-to-br from-gray-50 to-slate-100 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Run Your Club in 3 Simple Steps
            </h2>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Create Your Club</h3>
                <p className="text-gray-600 text-lg">Setup takes less than 3 minutes</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Run Organized Meetings</h3>
                <p className="text-gray-600 text-lg">Assign roles and publish agendas</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Track Member Growth</h3>
                <p className="text-gray-600 text-lg">Automatically track speeches and progress</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-6">
              <span className="text-3xl">✨</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Difference T360 Makes
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-center py-4 px-6 text-xl font-bold text-gray-900">Without T360</th>
                  <th className="text-center py-4 px-6 text-xl font-bold text-gray-900">With T360</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-4 px-6 text-gray-600 text-center">WhatsApp chaos</td>
                  <td className="py-4 px-6 text-green-600 font-semibold text-center">Organized meetings</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-600 text-center">Manual attendance</td>
                  <td className="py-4 px-6 text-green-600 font-semibold text-center">One-click tracking</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-600 text-center">Lost evaluations</td>
                  <td className="py-4 px-6 text-green-600 font-semibold text-center">Speech history</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-600 text-center">No progress view</td>
                  <td className="py-4 px-6 text-green-600 font-semibold text-center">Member insights</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-600 text-center">Paper voting</td>
                  <td className="py-4 px-6 text-green-600 font-semibold text-center">Digital voting</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-600 text-center">Scattered tools</td>
                  <td className="py-4 px-6 text-green-600 font-semibold text-center">One platform</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Clubs Choose T360
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <Zap className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time Updates</h3>
              <p className="text-gray-600">Everyone sees meeting updates instantly</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <Brain className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Simple to Use</h3>
              <p className="text-gray-600">Designed for all experience levels</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <BarChart3 className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Powerful Insights</h3>
              <p className="text-gray-600">Understand member participation</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <Heart className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Stronger Engagement</h3>
              <p className="text-gray-600">Encourage active participation</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <Rocket className="w-10 h-10 text-teal-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Streamlined Operations</h3>
              <p className="text-gray-600">Less time managing logistics</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <TrendingUp className="w-10 h-10 text-cyan-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Focused</h3>
              <p className="text-gray-600">Help members progress faster</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-gradient-to-br from-gray-50 to-slate-100 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Loved by Toastmasters Clubs
            </h2>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {displayedReviews.map((review, index) => (
                <div key={currentReviewIndex + index} className="bg-white rounded-xl p-8 shadow-md">
                  <div className="flex mb-4">
                    <span className="text-yellow-500 text-2xl">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{review.review}"
                  </p>
                  <div>
                    <p className="text-gray-900 font-semibold">{review.name}</p>
                    <p className="text-gray-600 text-sm">{review.role}, {review.club}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevReviews}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:bg-blue-50"
                aria-label="Previous reviews"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReviewIndex(index * 3)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      Math.floor(currentReviewIndex / 3) === index
                        ? 'bg-blue-600 w-8'
                        : 'bg-gray-300'
                    }`}
                    aria-label={`Go to review set ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextReviews}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:bg-blue-50"
                aria-label="Next reviews"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transform Your Toastmasters Club
          </h2>

          <div className="space-y-2 mb-8">
            <p className="text-xl sm:text-2xl text-blue-100">Run meetings smoothly.</p>
            <p className="text-xl sm:text-2xl text-blue-100">Track progress.</p>
            <p className="text-xl sm:text-2xl text-blue-100">Engage members.</p>
          </div>

          <p className="text-lg text-blue-200 mb-8">All in one platform.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/downloadnow"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <Download className="w-5 h-5 mr-2" />
              Download T360
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Book Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
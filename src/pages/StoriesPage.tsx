import React from 'react';
import { Clock, Users, Target, Heart, Sparkles } from 'lucide-react';
import SignupForm from '../components/SignupForm';

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-8 sm:pt-16 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Stories from the Heart of Toastmasters
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Real experiences that inspired the creation of T360
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-8 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              The Spark of Change
            </h2>
            
            <div className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-4 sm:space-y-6">
              <p>
                It's 7 p.m. on a chilly Tuesday evening, and Sarah, the dedicated president of her local Toastmasters club, is hunched over her laptop, drowning in a sea of chaos. Emails pile up, each one a tiny cry for attention: "Who's the Toastmaster next week?" "Did I submit my Pathways progress?" "Can someone cover the timer role?" Her desk is a battlefield of sticky notes, scribbled with half-finished agendas and names for roles she's still trying to fill. A spreadsheet glares back at her, its rows and columns a labyrinth of meeting schedules and member updates. Sound familiar? For Sarah—and countless club leaders like her—these moments of administrative overload were stealing the joy from what truly mattered: inspiring her members to become confident speakers and leaders.
              </p>
              
              <p>
                We've all felt that weight. The endless juggling of tasks. The sting of misplaced speech evaluations. The struggle to keep members engaged in a world that moves faster every day. That's why we created T360—a platform born from the heart of Toastmasters, designed to transform chaos into clarity and frustration into focus.
              </p>
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">
                A Platform with Heart and Purpose
              </h3>
              
              <p>
                Imagine a world where running a Toastmasters club feels less like a chore and more like a spark of inspiration. T360 isn't just a tool—it's a game-changer, built to rekindle the magic of every meeting. Picture this: scheduling a meeting with a few effortless clicks, tracking Pathways progress with a glance, and fostering a club community that hums with connection and excitement. That's the world we're crafting.
              </p>
              
              <p className="font-medium text-gray-900 mb-4">
                Here's how T360 lights the way:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-6 sm:my-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 rounded-xl border border-blue-200">
                  <div className="flex items-center mb-3">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                    <h4 className="text-sm sm:text-base font-bold text-gray-900">Simplify the Chaos</h4>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm">
                    Wave goodbye to scattered spreadsheets and tangled email threads. Our intuitive hub centralizes meeting schedules, role assignments, and member management, so you can focus on what matters.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-6 rounded-xl border border-green-200">
                  <div className="flex items-center mb-3">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-2 sm:mr-3 flex-shrink-0" />
                    <h4 className="text-sm sm:text-base font-bold text-gray-900">Fuel Personal Growth</h4>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm">
                    Track Pathways milestones, store speeches, and dive into analytics that celebrate every step forward, keeping members motivated and on track.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-6 rounded-xl border border-purple-200">
                  <div className="flex items-center mb-3">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mr-2 sm:mr-3 flex-shrink-0" />
                    <h4 className="text-sm sm:text-base font-bold text-gray-900">Ignite Engagement</h4>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm">
                    With interactive polls, a lively club feed, and seamless communication tools, your club becomes a vibrant community where every voice feels heard.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 sm:p-6 rounded-xl border border-orange-200">
                  <div className="flex items-center mb-3">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 mr-2 sm:mr-3 flex-shrink-0" />
                    <h4 className="text-sm sm:text-base font-bold text-gray-900">Reclaim Your Time</h4>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm">
                    Automated agendas, meeting minutes, and attendance reports free up hours, giving you the space to craft inspiring, impactful meetings.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 sm:p-6 rounded-xl border border-yellow-200 my-6 sm:my-8">
                <div className="flex items-center mb-3">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 mr-2 sm:mr-3 flex-shrink-0" />
                  <h4 className="text-sm sm:text-base font-bold text-gray-900">Tailored for Toastmasters</h4>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm">
                  From speech evaluations to club elections, T360 is designed with the unique heartbeat of Toastmasters in mind, fitting your workflow like a perfectly tailored suit.
                </p>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6">
                A Vision That Shines
              </h3>
              
              <p>
                Our vision is bold yet simple: technology should lift you up, not weigh you down. We believe every Toastmasters club—no matter its size or stage—deserves tools that make leadership effortless, engagement electric, and growth unstoppable. Whether you're a club president like Sarah, juggling a dozen responsibilities; a member chasing your next speech milestone; or a district leader guiding multiple clubs, T360 is your partner in success.
              </p>
              
              <p>
                This isn't just about building software—it's about crafting a future where every meeting sparks inspiration, every member thrives, and every club shines brighter than ever. For Sarah, Tuesday evenings are no longer a dreaded marathon. With T360, she leads with confidence, her tools at her fingertips, her passion reignited.
              </p>
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 sm:mt-12 mb-4 sm:mb-6 text-center">
                Write the Next Chapter
              </h3>
              
              <p className="text-base sm:text-lg">
                The story of transforming Toastmasters starts with you. Join the waitlist for T360 today and step into a world where club management flows effortlessly, members are inspired, and growth knows no bounds. Together, let's ignite the spark of change and write the next chapter of Toastmasters success.
              </p>
              
              <div className="mt-8">
                <p className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                  Join us. The future is calling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Section */}
      <section className="py-8 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Ready to Transform Your Club Management?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Join thousands of Toastmasters waiting for our platform to launch. 
              Be among the first to experience the future of club management.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto px-2 sm:px-0">
            <SignupForm />
          </div>
        </div>
      </section>
    </div>
  );
}
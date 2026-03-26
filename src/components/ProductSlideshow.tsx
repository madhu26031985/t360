import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const productImages = [
  {
    src: 'https://bfnhfgbtlayjjxuwvszy.supabase.co/storage/v1/object/public/product//Meeting%20operations.png',
    alt: 'Meeting Operations - Manage your club\'s meetings, agendas, and related activities',
    title: 'Meeting Operations',
    description: 'Streamline meeting management, role booking, and agenda creation',
    features: ['Meeting Management', 'Role Booking', 'Agenda Creation', 'Attendance Tracking', 'Pathway Management', 'Polls Management']
  },
  {
    src: 'https://bfnhfgbtlayjjxuwvszy.supabase.co/storage/v1/object/public/product/Club%20operations.png',
    alt: 'Club Operations - Manage your club\'s profile, members, and resources',
    title: 'Club Operations', 
    description: 'Comprehensive club profile and member management tools',
    features: ['Member Management', 'Club Analytics', 'Resource Management', 'Performance Tracking', 'Resources Management', 'Agenda Management']
  },
  {
    src: 'https://bfnhfgbtlayjjxuwvszy.supabase.co/storage/v1/object/public/product/Your%20club.png',
    alt: 'Your Club - Learn about your club\'s profile and leadership team',
    title: 'Your Club',
    description: 'Discover your club profile and executive committee information',
    features: ['Club Profile', 'Leadership Team', 'Club Statistics', 'Member Directory', 'Meeting Minutes Management', 'Speech Repository']
  },
  {
    src: 'https://bfnhfgbtlayjjxuwvszy.supabase.co/storage/v1/object/public/product/Club%20meetings.png',
    alt: 'Club Meetings - Participate in and contribute to your club\'s meetings',
    title: 'Club Meetings',
    description: 'Book roles, view agendas, and access meeting minutes effortlessly',
    features: ['Role Booking', 'Meeting Agendas', 'Meeting Minutes', 'Feedback System', 'Club Feed Management', 'Interactive Polls']
  },
  {
    src: 'https://bfnhfgbtlayjjxuwvszy.supabase.co/storage/v1/object/public/product/Your%20Voice.png',
    alt: 'Your Voice - Access your personal Toastmasters journey and resources',
    title: 'Your Voice',
    description: 'Track your Pathways progress and manage your speech repository',
    features: ['Pathways Tracking', 'Speech Repository', 'Progress Analytics', 'Achievement Badges', 'Personal Dashboard', 'Growth Metrics']
  }
];

export default function ProductSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isPlaying || isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? productImages.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === productImages.length - 1 ? 0 : currentIndex + 1);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header with controls */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              See T360 in Action
            </h2>
            <p className="text-gray-600">Explore our comprehensive platform features</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={togglePlayPause}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200"
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-gray-700" />
              ) : (
                <Play className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main slideshow container */}
          <div 
            className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Image container with enhanced styling */}
            <div className="relative w-full bg-gradient-to-br from-gray-50 to-gray-100" style={{ minHeight: '360px', maxHeight: '450px' }}>
              
              {/* Content container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center max-w-4xl px-4 sm:px-8">
                  <h3 className="text-xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {productImages[currentIndex].title}
                  </h3>
                  
                  <p className="text-sm sm:text-xl text-gray-700 mb-4 sm:mb-6 font-medium">
                    {productImages[currentIndex].description}
                  </p>
                  
                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                    {productImages[currentIndex].features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-xs sm:text-sm font-medium shadow-lg border border-blue-400"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Navigation arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 opacity-0 group-hover:opacity-100"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 opacity-0 group-hover:opacity-100"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Enhanced dots indicator */}
            <div className="flex justify-center items-center py-6 bg-white border-t border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  {currentIndex + 1} of {productImages.length}
                </div>
              <div className="flex space-x-3">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`relative transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 h-3 bg-blue-600 rounded-full'
                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    {index === currentIndex && (
                      <div className="absolute inset-0 bg-blue-600 rounded-full animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>
              </div>
            </div>
          </div>

          {/* Slide thumbnails */}
          <div className="mt-6 grid grid-cols-5 gap-3 hidden lg:grid">
            {productImages.map((item, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative p-4 rounded-lg border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="text-center">
                  <p className="text-xs font-medium text-gray-900 leading-tight">
                    {item.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
          
          {/* Beta Access Box */}
          <div className="mt-8 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              🚀 Ready to Experience This?
            </h3>
            <p className="text-gray-700 mb-4">
              Get early access to T360 and transform your club management today
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/downloadnow"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Beta Access
              </a>
              <a
                href="https://calendly.com/T360-support/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 border border-gray-300"
              >
                Book Demo Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
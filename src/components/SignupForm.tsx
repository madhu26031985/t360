import React, { useState } from 'react';
import { Mail, User, Building, MapPin, Hash, CheckCircle, Phone } from 'lucide-react';
import { supabase, type WaitlistEntry } from '../lib/supabase';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    clubName: '',
    county: '',
    clubNumber: '',
    phoneNumber: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      // Prepare data for Supabase
      const waitlistData: Omit<WaitlistEntry, 'id' | 'created_at'> = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        club_name: formData.clubName.trim(),
        county: formData.county.trim(),
        club_number: formData.clubNumber.trim(),
        phone_number: formData.phoneNumber.trim()
      };

      // Insert data into Supabase
      const { error: insertError } = await supabase
        .from('waitlist_entries')
        .insert([waitlistData]);

      if (insertError) {
        if (insertError.code === '23505') {
          // Unique constraint violation (email already exists)
          throw new Error('This email is already on our waitlist. Thank you for your interest!');
        }
        throw new Error(insertError.message || 'Failed to join waitlist. Please try again.');
      }

      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          clubName: '',
          county: '',
          clubNumber: '',
          phoneNumber: ''
        });
      }, 5000);
      
    } catch (err) {
      console.error('Error submitting waitlist form:', err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    
    // Clear error when user starts typing
    if (error) {
      setError(null);
    }
  };

  // Error state
  if (error) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Oops!</h3>
          <p className="text-red-600 mb-6">{error}</p>
          <button
            onClick={() => setError(null)}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Success state
  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome to the Waitlist!</h3>
        <p className="text-gray-600 mb-4">
          Thank you for joining! We've successfully added you to our waitlist and will notify you as soon as T360 is available.
        </p>
        <div className="bg-blue-50 rounded-lg p-4 mb-4">
          <p className="text-sm text-blue-800 font-medium">
            🎉 You're now part of an exclusive group of early adopters!
          </p>
        </div>
        <p className="text-sm text-gray-500">
          Keep an eye on your inbox for updates and exclusive early access opportunities.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl border border-gray-200 mx-2 sm:mx-0">
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
          Join the Waitlist
        </h3>
        <p className="text-sm sm:text-base text-gray-600 px-2 sm:px-0">
          Be the first to know when T360 launches and get exclusive early access
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
                placeholder="Enter your email address"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="clubName" className="block text-sm font-medium text-gray-700 mb-2">
            Club Name
          </label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              id="clubName"
              name="clubName"
              value={formData.clubName}
              onChange={handleInputChange}
              required
              className="w-full pl-10 pr-4 py-3 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
              placeholder="Enter your Toastmasters club name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label htmlFor="county" className="block text-sm font-medium text-gray-700 mb-2">
              County
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                id="county"
                name="county"
                value={formData.county}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
                placeholder="Enter your county"
              />
            </div>
          </div>

          <div>
            <label htmlFor="clubNumber" className="block text-sm font-medium text-gray-700 mb-2">
              Club Number
            </label>
            <div className="relative">
              <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                id="clubNumber"
                name="clubNumber"
                value={formData.clubNumber}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
                placeholder="Enter your club number"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className="w-full pl-10 pr-4 py-3 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 sm:py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-base touch-manipulation"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Joining Waitlist...
            </div>
          ) : (
            'Join the Waitlist'
          )}
        </button>
      </form>

      <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-gray-500 px-2 sm:px-0">
        We respect your privacy. No spam, ever.
      </div>
    </div>
  );
}
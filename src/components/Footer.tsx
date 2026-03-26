import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-3">
            <Link to="/" className="inline-flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img
                src="/brand.png"
                alt="T360 Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold text-gray-900">T360</span>
            </Link>
          </div>

          <p className="text-gray-600 mb-4 text-sm max-w-md mx-auto">
            Empowering Toastmasters clubs with modern, AI-powered management tools
          </p>

          <div className="flex items-center justify-center space-x-4 mb-4">
            <Link
              to="/privacy"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              to="/data-protection"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              Data Protection
            </Link>
          </div>

          <p className="text-xs text-gray-500">
            &copy; 2026 T360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
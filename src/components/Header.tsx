import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation - Left Side */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img
                src="/brand.png"
                alt="T360 Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">T360</h1>
              </div>
            </Link>
            
            {/* Desktop Navigation - Next to Logo */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm"
              >
                Home
              </Link>
              <Link
                to="/features"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm"
              >
                Features
              </Link>
              <Link
                to="/pricing"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm"
              >
                Pricing
              </Link>
              <Link
                to="/demo"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm"
              >
                Product Demo
              </Link>
              <Link
                to="/downloadnow"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm"
              >
                Download Now
              </Link>
              <Link
                to="/support"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm"
              >
                Support
              </Link>
              <Link
                to="/weblogin"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm"
              >
                Web Login
              </Link>
            </nav>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {user && (
              <div className="hidden lg:flex items-center space-x-3">
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {user.user_metadata?.name || user.email?.split('@')[0]}
                  </span>
                </Link>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm font-medium">Sign Out</span>
                </button>
              </div>
            )}
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <nav className="px-4 py-4 space-y-3">
              <Link
                to="/"
                className="block py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/features"
                className="block py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/pricing"
                className="block py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/demo"
                className="block py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Product Demo
              </Link>
              <Link
                to="/downloadnow"
                className="block py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download Now
              </Link>
              <Link
                to="/support"
                className="block py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Support
              </Link>
              <Link
                to="/weblogin"
                className="block py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Web Login
              </Link>
              {user && (
                <>
                  <Link
                    to="/dashboard"
                    className="flex items-center space-x-2 py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User className="w-4 h-4" />
                    <span>{user.user_metadata?.name || user.email?.split('@')[0]}</span>
                  </Link>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-2 py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium w-full text-left"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
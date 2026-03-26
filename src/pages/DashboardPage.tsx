import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { CheckCircle, User, Mail, Calendar, Users, Shield, Loader2 } from 'lucide-react';

interface Club {
  id: string;
  name: string;
  club_number: string;
  charter_date: string;
  active: boolean;
}

interface ClubMembership {
  id: string;
  role: string;
  is_authenticated: boolean;
  created_at: string;
  clubs: Club;
}

export default function DashboardPage() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [clubs, setClubs] = useState<ClubMembership[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  useEffect(() => {
    const fetchUserClubs = async () => {
      if (!user) return;

      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('app_club_user_relationship')
          .select(`
            id,
            role,
            is_authenticated,
            created_at,
            clubs (
              id,
              name,
              club_number,
              charter_date,
              active
            )
          `)
          .eq('user_id', user.id)
          .eq('is_authenticated', true);

        if (error) throw error;

        setClubs(data as ClubMembership[]);
      } catch (err: any) {
        setError(err.message || 'Failed to load clubs');
      } finally {
        setLoading(false);
      }
    };

    fetchUserClubs();
  }, [user]);

  if (!user) {
    return null;
  }

  const userName = user.user_metadata?.name || user.email?.split('@')[0] || 'User';
  const joinDate = new Date(user.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-green-100 rounded-full p-3">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Welcome, {userName}!
            </h1>
            <p className="text-xl text-green-600 font-medium mb-2">
              Successfully Logged In
            </p>
            <p className="text-gray-600">
              You're now accessing your T360 account
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Full Name</p>
                  <p className="font-medium text-gray-900">{userName}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Address</p>
                  <p className="font-medium text-gray-900">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Member Since</p>
                  <p className="font-medium text-gray-900">{joinDate}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-blue-900 mb-2">Getting Started</h3>
            <p className="text-blue-800 text-sm">
              Welcome to T360! Your account is now active and you can access all premium features.
              Explore the platform to manage your club efficiently and connect with your team.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Users className="w-6 h-6 mr-2 text-blue-600" />
              Your Clubs
            </h2>

            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
              </div>
            ) : error ? (
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                <p className="text-red-800">{error}</p>
              </div>
            ) : clubs.length === 0 ? (
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
                <Users className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600 mb-2">You're not part of any clubs yet</p>
                <p className="text-sm text-gray-500">Contact your club administrator to get added to a club</p>
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {clubs.map((membership) => (
                  <div
                    key={membership.id}
                    onClick={() => navigate(`/club-members-report/${membership.clubs.id}`)}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {membership.clubs.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Club #{membership.clubs.club_number}
                        </p>
                      </div>
                      {membership.clubs.active && (
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                          Active
                        </span>
                      )}
                    </div>

                    <div className="flex items-center space-x-2 mb-3">
                      <Shield className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-gray-700 capitalize">
                        {membership.role}
                      </span>
                    </div>

                    {membership.clubs.charter_date && (
                      <div className="text-xs text-gray-500">
                        Charter: {new Date(membership.clubs.charter_date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/')}
              className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-all"
            >
              Go to Home
            </button>
            <button
              onClick={handleSignOut}
              className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-300 transition-all"
            >
              Sign Out
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Need help? Visit our <a href="/support" className="text-blue-600 hover:text-blue-700 font-medium">Support Center</a></p>
        </div>
      </div>
    </div>
  );
}

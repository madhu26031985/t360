import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { ArrowLeft, Mail, Phone, Users, Calendar, Award, UserCircle } from 'lucide-react';

interface ClubMember {
  user_id: string;
  full_name: string;
  email: string;
  phone_number: string | null;
  avatar_url: string | null;
  about: string | null;
  facebook_url: string | null;
  linkedin_url: string | null;
  instagram_url: string | null;
  twitter_url: string | null;
  youtube_url: string | null;
  club_role: string;
  is_authenticated: boolean;
  days_present: number;
  days_absent: number;
  days_not_applicable: number;
  roles_completed: number;
}

interface Club {
  id: string;
  name: string;
  member_count: number;
}

interface AboutMember {
  user_id: string;
  full_name: string;
  avatar_url: string | null;
  About: string | null;
}

type TabType = 'profile' | 'attendance' | 'user-reports' | 'club-reports' | 'about-members';

export default function ClubMembersReportPage() {
  const { clubId } = useParams();
  const navigate = useNavigate();
  const [clubs, setClubs] = useState<Club[]>([]);
  const [members, setMembers] = useState<ClubMember[]>([]);
  const [aboutMembers, setAboutMembers] = useState<AboutMember[]>([]);
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<TabType>('club-reports');
  const [attendanceData, setAttendanceData] = useState<AttendanceData[]>([]);
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [periodFilter, setPeriodFilter] = useState<number>(3);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [profileRoleFilter, setProfileRoleFilter] = useState<string>('all');
  const [profileCurrentPage, setProfileCurrentPage] = useState<number>(1);
  const usersPerPage = 10;

  useEffect(() => {
    loadClubs();
  }, []);

  useEffect(() => {
    if (clubId) {
      loadClubMembers(clubId);
    }
  }, [clubId]);

  useEffect(() => {
    if (clubId && activeTab === 'attendance') {
      loadAttendanceData(clubId);
      setCurrentPage(1);
    }
  }, [clubId, activeTab, roleFilter, periodFilter]);

  useEffect(() => {
    if (clubId && activeTab === 'about-members') {
      loadAboutMembers(clubId);
    }
  }, [clubId, activeTab]);

  async function loadClubs() {
    try {
      const { data, error } = await supabase.rpc('get_clubs_with_member_count');

      if (error) {
        console.error('Error loading clubs:', error);
        setClubs([]);
      } else {
        setClubs(data || []);
      }
    } catch (error) {
      console.error('Error loading clubs:', error);
      setClubs([]);
    } finally {
      setLoading(false);
    }
  }

  async function loadClubMembers(clubId: string) {
    setLoading(true);
    try {
      const { data: clubData } = await supabase
        .from('clubs')
        .select('id, name')
        .eq('id', clubId)
        .maybeSingle();

      if (clubData) {
        setSelectedClub({ ...clubData, member_count: 0 });
      }

      const { data, error } = await supabase.rpc('get_club_members_report', {
        p_club_id: clubId
      });

      if (error) {
        console.error('Error loading club members:', error);
        setMembers([]);
      } else {
        setMembers(data || []);
      }
    } catch (error) {
      console.error('Error loading club members:', error);
      setMembers([]);
    } finally {
      setLoading(false);
    }
  }

  async function loadAttendanceData(clubId: string) {
    setLoading(true);
    try {
      const { data, error } = await supabase.rpc('get_club_attendance', {
        p_club_id: clubId,
        p_role_filter: roleFilter === 'all' ? null : roleFilter,
        p_months_back: periodFilter
      });

      if (error) {
        console.error('Error loading attendance data:', error);
        setAttendanceData([]);
      } else {
        setAttendanceData(data || []);
      }
    } catch (error) {
      console.error('Error loading attendance data:', error);
      setAttendanceData([]);
    } finally {
      setLoading(false);
    }
  }

  async function loadAboutMembers(clubId: string) {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('app_club_user_relationship')
        .select(`
          user_id,
          app_user_profiles!inner (
            full_name,
            avatar_url,
            About
          )
        `)
        .eq('club_id', clubId)
        .eq('is_authenticated', true);

      if (error) {
        console.error('Error loading about members:', error);
        setAboutMembers([]);
      } else {
        const formattedData = (data || []).map((item: any) => ({
          user_id: item.user_id,
          full_name: item.app_user_profiles.full_name,
          avatar_url: item.app_user_profiles.avatar_url,
          About: item.app_user_profiles.About
        }));
        setAboutMembers(formattedData);
      }
    } catch (error) {
      console.error('Error loading about members:', error);
      setAboutMembers([]);
    } finally {
      setLoading(false);
    }
  }

  function getRoleBadgeColor(role: string) {
    switch (role) {
      case 'excomm':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'member':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'visiting_tm':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'guest':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  }

  function formatRole(role: string) {
    const roleMap: Record<string, string> = {
      excomm: 'Executive Committee',
      member: 'Member',
      visiting_tm: 'Visiting Toastmaster',
      guest: 'Guest'
    };
    return roleMap[role] || role;
  }

  if (!clubId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Club Members Report</h1>
            <p className="text-slate-600">Select a club to view detailed member information</p>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.map((club) => (
                <button
                  key={club.id}
                  onClick={() => navigate(`/club-members-report/${club.id}`)}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 text-left border-2 border-transparent hover:border-blue-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                      {club.member_count} members
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{club.name}</h3>
                  <p className="text-sm text-slate-600">Click to view member details</p>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  const renderTabContent = () => {
    if (loading) {
      return (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      );
    }

    switch (activeTab) {
      case 'profile':
        const filteredMembers = profileRoleFilter === 'all'
          ? members
          : members.filter(m => m.club_role === profileRoleFilter);

        const totalProfileUsers = filteredMembers.length;
        const totalProfilePages = Math.ceil(totalProfileUsers / usersPerPage);
        const profileStartIndex = (profileCurrentPage - 1) * usersPerPage;
        const profileEndIndex = profileStartIndex + usersPerPage;
        const paginatedMembers = filteredMembers.slice(profileStartIndex, profileEndIndex);

        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-4">
                <div className="flex-1 max-w-xs">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Role Filter</label>
                  <select
                    value={profileRoleFilter}
                    onChange={(e) => {
                      setProfileRoleFilter(e.target.value);
                      setProfileCurrentPage(1);
                    }}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="all">All Roles</option>
                    <option value="excomm">Executive Committee</option>
                    <option value="member">Member</option>
                    <option value="visiting_tm">Visiting Toastmaster</option>
                    <option value="guest">Guest</option>
                  </select>
                </div>
              </div>
            </div>

            {filteredMembers.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <Users className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600">No members found</p>
              </div>
            ) : (
              <>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-50 border-b border-blue-200">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900">Profile Picture</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900">Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900">Role</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900">Email Address</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900">Phone Number</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {paginatedMembers.map((member) => (
                        <tr key={member.user_id} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="relative w-12 h-12">
                              {member.avatar_url ? (
                                <img
                                  src={member.avatar_url}
                                  alt={member.full_name}
                                  className="w-12 h-12 rounded-full object-cover border-2 border-slate-200"
                                  onError={(e) => {
                                    const target = e.currentTarget as HTMLImageElement;
                                    target.style.display = 'none';
                                    const fallback = target.nextElementSibling as HTMLElement;
                                    if (fallback) fallback.style.display = 'flex';
                                  }}
                                />
                              ) : null}
                              <div
                                className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold text-lg shadow-md"
                                style={{ display: member.avatar_url ? 'none' : 'flex' }}
                              >
                                {member.full_name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="font-medium text-slate-900">{member.full_name}</div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getRoleBadgeColor(member.club_role)}`}>
                              {formatRole(member.club_role)}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <a href={`mailto:${member.email}`} className="text-blue-600 hover:text-blue-700 transition-colors">
                              {member.email}
                            </a>
                          </td>
                          <td className="px-6 py-4">
                            {member.phone_number ? (
                              <a href={`tel:${member.phone_number}`} className="text-blue-600 hover:text-blue-700 transition-colors">
                                {member.phone_number}
                              </a>
                            ) : (
                              <span className="text-slate-400">N/A</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {totalProfilePages > 1 && (
                  <div className="bg-white rounded-xl shadow-sm p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-600">
                        Showing {profileStartIndex + 1} to {Math.min(profileEndIndex, totalProfileUsers)} of {totalProfileUsers} members
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setProfileCurrentPage(Math.max(1, profileCurrentPage - 1))}
                          disabled={profileCurrentPage === 1}
                          className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          Previous
                        </button>
                        <div className="flex items-center gap-2">
                          {Array.from({ length: totalProfilePages }, (_, i) => i + 1).map((page) => (
                            <button
                              key={page}
                              onClick={() => setProfileCurrentPage(page)}
                              className={`w-10 h-10 rounded-lg transition-colors ${
                                page === profileCurrentPage
                                  ? 'bg-blue-600 text-white'
                                  : 'border border-slate-300 hover:bg-slate-50'
                              }`}
                            >
                              {page}
                            </button>
                          ))}
                        </div>
                        <button
                          onClick={() => setProfileCurrentPage(Math.min(totalProfilePages, profileCurrentPage + 1))}
                          disabled={profileCurrentPage === totalProfilePages}
                          className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        );

      case 'about-members':
        return (
          <div className="space-y-6">
            {aboutMembers.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <UserCircle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600">No member profiles available</p>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-blue-50 border-b border-blue-200">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900">Profile Picture</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900">Name</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900">About</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {aboutMembers.map((member) => (
                      <tr key={member.user_id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="relative w-12 h-12">
                            {member.avatar_url ? (
                              <img
                                src={member.avatar_url}
                                alt={member.full_name}
                                className="w-12 h-12 rounded-full object-cover border-2 border-slate-200"
                                onError={(e) => {
                                  const target = e.currentTarget as HTMLImageElement;
                                  target.style.display = 'none';
                                  const fallback = target.nextElementSibling as HTMLElement;
                                  if (fallback) fallback.style.display = 'flex';
                                }}
                              />
                            ) : null}
                            <div
                              className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold text-lg shadow-md"
                              style={{ display: member.avatar_url ? 'none' : 'flex' }}
                            >
                              {member.full_name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-medium text-slate-900">{member.full_name}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-slate-700 max-w-2xl">
                            {member.About || '-'}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );

      case 'attendance':
        const meetings = attendanceData.length > 0 ? attendanceData[0].meeting_dates : [];
        const totalUsers = attendanceData.length;
        const totalPages = Math.ceil(totalUsers / usersPerPage);
        const startIndex = (currentPage - 1) * usersPerPage;
        const endIndex = startIndex + usersPerPage;
        const paginatedUsers = attendanceData.slice(startIndex, endIndex);

        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Role Filter</label>
                  <select
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="all">All Roles</option>
                    <option value="excomm">Executive Committee</option>
                    <option value="member">Member</option>
                    <option value="visiting_tm">Visiting Toastmaster</option>
                    <option value="guest">Guest</option>
                  </select>
                </div>
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Period</label>
                  <select
                    value={periodFilter}
                    onChange={(e) => setPeriodFilter(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="1">1 Month</option>
                    <option value="3">3 Months</option>
                    <option value="6">6 Months</option>
                  </select>
                </div>
              </div>
            </div>

            {attendanceData.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <Calendar className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600">No attendance data found</p>
              </div>
            ) : (
              <>
                <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="sticky left-0 bg-blue-50 px-4 py-3 text-left text-sm font-semibold text-blue-900 border-r border-blue-200 min-w-[150px] z-10">
                          Member Name
                        </th>
                        <th className="sticky left-[150px] bg-blue-50 px-4 py-3 text-left text-sm font-semibold text-blue-900 border-r border-blue-200 min-w-[120px] z-10">
                          Role
                        </th>
                        {meetings.map((meeting) => (
                          <th key={meeting.date} className="px-4 py-3 text-center text-sm font-semibold text-blue-900 border-r border-blue-100 min-w-[100px]">
                            <div>{new Date(meeting.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
                            <div className="text-xs text-blue-600">#{meeting.number}</div>
                          </th>
                        ))}
                        <th className="px-4 py-3 text-center text-sm font-semibold text-blue-900 min-w-[120px]">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {paginatedUsers.map((user) => {
                        const attendanceMap = new Map(
                          user.attendance_data.map(a => [a.meeting_date, a.status])
                        );

                        return (
                          <tr key={user.user_id} className="hover:bg-slate-50">
                            <td className="sticky left-0 bg-white px-4 py-3 text-sm font-medium text-slate-900 border-r border-slate-200 z-10">
                              {user.user_full_name}
                            </td>
                            <td className="sticky left-[150px] bg-white px-4 py-3 text-sm border-r border-slate-200 z-10">
                              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getRoleBadgeColor(user.user_role)}`}>
                                {formatRole(user.user_role)}
                              </span>
                            </td>
                            {meetings.map((meeting) => {
                              const status = attendanceMap.get(meeting.date) || 'not_applicable';
                              return (
                                <td key={meeting.date} className="px-4 py-3 text-center border-r border-slate-100">
                                  {status === 'present' && (
                                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                      </svg>
                                    </div>
                                  )}
                                  {status === 'absent' && (
                                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100">
                                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                      </svg>
                                    </div>
                                  )}
                                  {status === 'not_applicable' && (
                                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100">
                                      <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                                    </div>
                                  )}
                                </td>
                              );
                            })}
                            <td className="px-4 py-3 text-center text-sm">
                              <div className="font-semibold text-slate-900">
                                {user.total_present}/{user.total_present + user.total_absent}
                              </div>
                              <div className="text-xs text-slate-600">
                                ({user.attendance_percentage}%)
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {totalPages > 1 && (
                  <div className="bg-white rounded-xl shadow-sm p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-600">
                        Showing {startIndex + 1} to {Math.min(endIndex, totalUsers)} of {totalUsers} members
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                          disabled={currentPage === 1}
                          className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          Previous
                        </button>
                        <div className="flex items-center gap-2">
                          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                              key={page}
                              onClick={() => setCurrentPage(page)}
                              className={`w-10 h-10 rounded-lg transition-colors ${
                                page === currentPage
                                  ? 'bg-blue-600 text-white'
                                  : 'border border-slate-300 hover:bg-slate-50'
                              }`}
                            >
                              {page}
                            </button>
                          ))}
                        </div>
                        <button
                          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                          disabled={currentPage === totalPages}
                          className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        );

      case 'user-reports':
        return (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <Award className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">User Reports</h3>
            <p className="text-slate-600">User reports content coming soon</p>
          </div>
        );

      case 'club-reports':
        return (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Club Reports</h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Access detailed reports for educational speeches, prepared speeches, toastmaster of the day, and table topics questions.
            </p>
            <button
              onClick={() => navigate(`/club-reports/${selectedClub?.id}`)}
              disabled={!selectedClub}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all inline-flex items-center"
            >
              <Award className="w-5 h-5 mr-2" />
              View Club Reports
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <button
          onClick={() => navigate('/club-members-report')}
          className="flex items-center text-slate-600 hover:text-slate-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Clubs
        </button>

        <div className="mb-6">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            {selectedClub?.name || 'Club Members'}
          </h1>
          <p className="text-slate-600">
            {members.length} member{members.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="mb-8 border-b border-slate-200">
          <div className="flex gap-1 overflow-x-auto">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap transition-colors border-b-2 ${
                activeTab === 'profile'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              Profile Dashboard
            </button>
            <button
              onClick={() => setActiveTab('about-members')}
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap transition-colors border-b-2 ${
                activeTab === 'about-members'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              About Members
            </button>
            <button
              onClick={() => setActiveTab('attendance')}
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap transition-colors border-b-2 ${
                activeTab === 'attendance'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              Attendance Dashboard
            </button>
            <button
              onClick={() => setActiveTab('user-reports')}
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap transition-colors border-b-2 ${
                activeTab === 'user-reports'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              User Reports
            </button>
            <button
              onClick={() => setActiveTab('club-reports')}
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap transition-colors border-b-2 ${
                activeTab === 'club-reports'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              Club Reports
            </button>
          </div>
        </div>

        {renderTabContent()}
      </div>
    </div>
  );
}

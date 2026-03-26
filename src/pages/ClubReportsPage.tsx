import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import {
  BookOpen,
  Mic,
  Users,
  MessageSquare,
  Loader2,
  Calendar,
  Clock,
  User,
  Award,
  ArrowLeft,
  FileText
} from 'lucide-react';

type TabType = 'educational' | 'prepared' | 'toastmaster' | 'tabletopics';

interface EducationalSpeech {
  id: string;
  speech_title: string;
  duration_minutes: number;
  is_completed: boolean;
  completed_at: string;
  created_at: string;
  booking_status: string;
  summary: string;
  speaker_name: string;
  meeting_date: string;
  meeting_number: string;
}

interface PreparedSpeech {
  id: string;
  speech_title: string;
  pathway_name: string;
  project_name: string;
  project_number: string;
  level: number;
  evaluation_status: string;
  uploaded_at: string;
  speaker_name: string;
  evaluator_name: string;
  meeting_date: string;
}

interface ToastmasterReport {
  id: string;
  theme_of_the_day: string;
  theme_summary: string;
  personal_notes: string;
  created_at: string;
  toastmaster_name: string;
  meeting_date: string;
  meeting_number: string;
}

interface TableTopicReport {
  id: string;
  question_text: string;
  participant_name: string;
  asked_by_name: string;
  question_order: number;
  booking_status: string;
  created_at: string;
  meeting_date: string;
}

export default function ClubReportsPage() {
  const { clubId } = useParams<{ clubId: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('educational');
  const [loading, setLoading] = useState(true);
  const [clubName, setClubName] = useState('');

  const [educationalSpeeches, setEducationalSpeeches] = useState<EducationalSpeech[]>([]);
  const [preparedSpeeches, setPreparedSpeeches] = useState<PreparedSpeech[]>([]);
  const [toastmasterReports, setToastmasterReports] = useState<ToastmasterReport[]>([]);
  const [tableTopicReports, setTableTopicReports] = useState<TableTopicReport[]>([]);

  useEffect(() => {
    if (!user || !clubId) return;

    const fetchClubData = async () => {
      try {
        setLoading(true);

        const { data: clubData } = await supabase
          .from('clubs')
          .select('name')
          .eq('id', clubId)
          .maybeSingle();

        if (clubData) {
          setClubName(clubData.name);
        }

        await Promise.all([
          fetchEducationalSpeeches(),
          fetchPreparedSpeeches(),
          fetchToastmasterReports(),
          fetchTableTopicReports()
        ]);
      } catch (error) {
        console.error('Error fetching club data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClubData();
  }, [user, clubId]);

  const fetchEducationalSpeeches = async () => {
    console.log('Fetching educational speeches for clubId:', clubId);

    const { data, error } = await supabase
      .from('app_meeting_educational_speaker')
      .select(`
        id,
        speech_title,
        duration_minutes,
        is_completed,
        completed_at,
        created_at,
        booking_status,
        summary,
        app_user_profiles!fk_educational_speaker_user_id (
          full_name
        ),
        app_club_meeting (
          meeting_date,
          meeting_number
        )
      `)
      .eq('club_id', clubId)
      .eq('booking_status', 'booked');

    console.log('Educational speeches query result:', { data, error, count: data?.length });

    if (error) {
      console.error('Error fetching educational speeches:', error);
      return;
    }

    if (data) {
      const formatted = data.map((item: any) => ({
        id: item.id,
        speech_title: item.speech_title,
        duration_minutes: item.duration_minutes,
        is_completed: item.is_completed,
        completed_at: item.completed_at,
        created_at: item.created_at,
        booking_status: item.booking_status,
        summary: item.summary,
        speaker_name: item.app_user_profiles?.full_name || 'Unknown',
        meeting_date: item.app_club_meeting?.meeting_date || '',
        meeting_number: item.app_club_meeting?.meeting_number || 'N/A'
      })).sort((a, b) => {
        if (!a.meeting_date) return 1;
        if (!b.meeting_date) return -1;
        return new Date(b.meeting_date).getTime() - new Date(a.meeting_date).getTime();
      });
      console.log('Setting formatted speeches:', formatted.length);
      setEducationalSpeeches(formatted);
    }
  };

  const fetchPreparedSpeeches = async () => {
    const { data, error } = await supabase
      .from('app_prepared_speech_evaluations')
      .select(`
        id,
        speech_title,
        pathway_name,
        project_name,
        project_number,
        level,
        evaluation_status,
        uploaded_at,
        app_club_user_relationship!app_prepared_speech_evaluations_speaker_id_fkey (
          app_user_data (
            name
          )
        ),
        evaluator:app_club_user_relationship!app_prepared_speech_evaluations_evaluator_id_fkey (
          app_user_data (
            name
          )
        ),
        app_club_meeting (
          meeting_date
        )
      `)
      .eq('club_id', clubId)
      .order('uploaded_at', { ascending: false });

    if (!error && data) {
      const formatted = data.map((item: any) => ({
        id: item.id,
        speech_title: item.speech_title,
        pathway_name: item.pathway_name,
        project_name: item.project_name,
        project_number: item.project_number,
        level: item.level,
        evaluation_status: item.evaluation_status,
        uploaded_at: item.uploaded_at,
        speaker_name: item.app_club_user_relationship?.app_user_data?.name || 'Unknown',
        evaluator_name: item.evaluator?.app_user_data?.name || 'Not assigned',
        meeting_date: item.app_club_meeting?.meeting_date || ''
      }));
      setPreparedSpeeches(formatted);
    }
  };

  const fetchToastmasterReports = async () => {
    const { data, error } = await supabase
      .from('app_meeting_toastmaster_notes')
      .select(`
        id,
        theme_of_the_day,
        theme_summary,
        personal_notes,
        created_at,
        app_user_profiles!app_meeting_toastmaster_notes_toastmaster_user_id_fkey (
          full_name
        ),
        app_club_meeting (
          meeting_date,
          meeting_number
        )
      `)
      .eq('club_id', clubId)
      .order('created_at', { ascending: false });

    if (!error && data) {
      const formatted = data.map((item: any) => ({
        id: item.id,
        theme_of_the_day: item.theme_of_the_day,
        theme_summary: item.theme_summary,
        personal_notes: item.personal_notes,
        created_at: item.created_at,
        toastmaster_name: item.app_user_profiles?.full_name || 'Unknown',
        meeting_date: item.app_club_meeting?.meeting_date || '',
        meeting_number: item.app_club_meeting?.meeting_number || 'N/A'
      }));
      setToastmasterReports(formatted);
    }
  };

  const fetchTableTopicReports = async () => {
    const { data, error } = await supabase
      .from('app_meeting_tabletopicscorner')
      .select(`
        id,
        question_text,
        participant_name,
        asked_by_name,
        question_order,
        booking_status,
        created_at,
        app_club_meeting (
          meeting_date
        )
      `)
      .eq('club_id', clubId)
      .order('created_at', { ascending: false });

    if (!error && data) {
      const formatted = data.map((item: any) => ({
        id: item.id,
        question_text: item.question_text,
        participant_name: item.participant_name,
        asked_by_name: item.asked_by_name,
        question_order: item.question_order,
        booking_status: item.booking_status,
        created_at: item.created_at,
        meeting_date: item.app_club_meeting?.meeting_date || ''
      }));
      setTableTopicReports(formatted);
    }
  };

  const tabs = [
    { id: 'educational' as TabType, label: 'Educational Speeches', icon: BookOpen, count: educationalSpeeches.length },
    { id: 'prepared' as TabType, label: 'Prepared Speeches', icon: Mic, count: preparedSpeeches.length },
    { id: 'toastmaster' as TabType, label: 'Toastmaster of the Day', icon: Users, count: toastmasterReports.length },
    { id: 'tabletopics' as TabType, label: 'Table Topics Questions', icon: MessageSquare, count: tableTopicReports.length }
  ];

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <button
            onClick={() => navigate(`/club-members-report/${clubId}`)}
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Club Members
          </button>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  Club Reports
                </h1>
                <p className="text-gray-600">
                  {clubName || 'Loading...'}
                </p>
              </div>
              <FileText className="w-12 h-12 text-blue-600" />
            </div>

            <div className="border-b border-gray-200">
              <nav className="flex space-x-2 overflow-x-auto pb-px" aria-label="Tabs">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                        flex items-center px-6 py-3 text-sm font-medium rounded-t-lg transition-all whitespace-nowrap
                        ${isActive
                          ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }
                      `}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {tab.label}
                      <span className={`
                        ml-2 px-2 py-0.5 rounded-full text-xs font-semibold
                        ${isActive ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}
                      `}>
                        {tab.count}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {activeTab === 'educational' && (
              <EducationalSpeechesTab speeches={educationalSpeeches} formatDate={formatDate} />
            )}
            {activeTab === 'prepared' && (
              <PreparedSpeechesTab speeches={preparedSpeeches} formatDate={formatDate} />
            )}
            {activeTab === 'toastmaster' && (
              <ToastmasterTab reports={toastmasterReports} formatDate={formatDate} />
            )}
            {activeTab === 'tabletopics' && (
              <TableTopicsTab reports={tableTopicReports} formatDate={formatDate} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function EducationalSpeechesTab({ speeches, formatDate }: { speeches: EducationalSpeech[]; formatDate: (date: string) => string }) {
  const [showSummary, setShowSummary] = useState(true);

  if (speeches.length === 0) {
    return (
      <div className="text-center py-12">
        <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No Booked Educational Speeches</h3>
        <p className="text-gray-600">Educational speeches with booking status 'booked' will appear here.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Educational Speeches Report</h2>
          <p className="text-gray-600 text-sm">Showing booked educational speeches</p>
        </div>
        <div className="flex items-center gap-4">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="summary-toggle"
              checked={showSummary}
              onChange={() => setShowSummary(true)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm font-medium text-gray-700">Show Summary</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="summary-toggle"
              checked={!showSummary}
              onChange={() => setShowSummary(false)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm font-medium text-gray-700">Hide Summary</span>
          </label>
        </div>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded-xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Meeting Date
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Meeting Number
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Speech Title
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Speaker Name
              </th>
              {showSummary && (
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Summary
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {speeches.map((speech) => (
              <tr key={speech.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatDate(speech.meeting_date)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                  {speech.meeting_number}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {speech.speech_title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {speech.speaker_name}
                </td>
                {showSummary && (
                  <td className="px-6 py-4 text-sm text-gray-700 max-w-md">
                    {speech.summary || '-'}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-sm text-gray-600">
        Total speeches: {speeches.length}
      </div>
    </div>
  );
}

function PreparedSpeechesTab({ speeches, formatDate }: { speeches: PreparedSpeech[]; formatDate: (date: string) => string }) {
  if (speeches.length === 0) {
    return (
      <div className="text-center py-12">
        <Mic className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No Prepared Speeches Yet</h3>
        <p className="text-gray-600">Prepared speech reports will appear here once they are added to meetings.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Prepared Speeches Report</h2>
      <div className="grid gap-4">
        {speeches.map((speech) => (
          <div key={speech.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{speech.speech_title}</h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-3">
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    Speaker: {speech.speaker_name}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(speech.meeting_date)}
                  </span>
                  <span className="flex items-center">
                    <Award className="w-4 h-4 mr-1" />
                    Evaluator: {speech.evaluator_name}
                  </span>
                  <span>
                    Level {speech.level}
                  </span>
                </div>
              </div>
              <span className={`
                px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap
                ${speech.evaluation_status === 'completed'
                  ? 'bg-green-100 text-green-700'
                  : speech.evaluation_status === 'pending'
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-gray-100 text-gray-700'
                }
              `}>
                {speech.evaluation_status || 'Scheduled'}
              </span>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 space-y-1 text-sm">
              <p><span className="font-medium text-gray-900">Pathway:</span> {speech.pathway_name}</p>
              <p><span className="font-medium text-gray-900">Project:</span> {speech.project_name} ({speech.project_number})</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ToastmasterTab({ reports, formatDate }: { reports: ToastmasterReport[]; formatDate: (date: string) => string }) {
  const [showThemeSummary, setShowThemeSummary] = useState(true);

  if (reports.length === 0) {
    return (
      <div className="text-center py-12">
        <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No Toastmaster Reports Yet</h3>
        <p className="text-gray-600">Toastmaster of the Day reports will appear here once they are created.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Toastmaster of the Day Report</h2>
          <p className="text-gray-600 text-sm">Showing all Toastmaster of the Day records</p>
        </div>
        <div className="flex items-center gap-4">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="theme-summary-toggle"
              checked={showThemeSummary}
              onChange={() => setShowThemeSummary(true)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm font-medium text-gray-700">Show Theme Summary</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="theme-summary-toggle"
              checked={!showThemeSummary}
              onChange={() => setShowThemeSummary(false)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm font-medium text-gray-700">Hide Theme Summary</span>
          </label>
        </div>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded-xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Meeting Date
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Meeting Number
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Toastmaster Name
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Theme of the Day
              </th>
              {showThemeSummary && (
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Theme Summary
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {reports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatDate(report.meeting_date)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                  {report.meeting_number}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {report.toastmaster_name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {report.theme_of_the_day || '-'}
                </td>
                {showThemeSummary && (
                  <td className="px-6 py-4 text-sm text-gray-700 max-w-md">
                    {report.theme_summary || '-'}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-sm text-gray-600">
        Total records: {reports.length}
      </div>
    </div>
  );
}

function TableTopicsTab({ reports, formatDate }: { reports: TableTopicReport[]; formatDate: (date: string) => string }) {
  if (reports.length === 0) {
    return (
      <div className="text-center py-12">
        <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No Table Topics Yet</h3>
        <p className="text-gray-600">Table topics questions will appear here once they are added to meetings.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Table Topics Questions Report</h2>
      <div className="grid gap-4">
        {reports.map((report) => (
          <div key={report.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mr-3">
                    Q{report.question_order}
                  </span>
                  <span className="text-sm text-gray-600">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    {formatDate(report.meeting_date)}
                  </span>
                </div>
                <p className="text-lg font-medium text-gray-900 mb-4 italic">
                  "{report.question_text}"
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    Participant: {report.participant_name || 'Not assigned'}
                  </span>
                  <span className="flex items-center">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    Asked by: {report.asked_by_name || 'Unknown'}
                  </span>
                </div>
              </div>
              {report.booking_status && (
                <span className={`
                  px-3 py-1 rounded-full text-xs font-medium
                  ${report.booking_status === 'completed'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                  }
                `}>
                  {report.booking_status}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import {
  Calendar, Users, UserCheck, TrendingUp, User, Mic, Building2, Crown, Link2, Map,
  MessageCircle, Phone, HelpCircle, DollarSign, Shield, Video, Share2,
  FileText, MessageSquare, Star, Timer, BookOpen, Award, CheckSquare,
  Vote, UserPlus, Ear, ClipboardList, Hash, BookMarked, Settings, UserCog, PlusCircle
} from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Book a Role',
    description: 'Easily book speaking roles and meeting assignments. View available slots and secure your participation in upcoming meetings.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: FileText,
    title: 'Quick Overview',
    description: 'Get a quick snapshot of your upcoming meetings, roles, and commitments all in one convenient view.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: ClipboardList,
    title: 'Meeting Agenda',
    description: 'Access detailed meeting agendas with time allocations, roles, and topics for seamless meeting flow.',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: MessageSquare,
    title: 'Toastmaster of the Day',
    description: 'View and manage the Toastmaster role with full access to meeting coordination and responsibilities.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Star,
    title: 'General Evaluator',
    description: 'Track and manage general evaluation duties including team evaluator coordination and reports.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: MessageSquare,
    title: 'Table Topic Corner',
    description: 'Manage impromptu speaking sessions with table topics questions and participant tracking.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Timer,
    title: 'Timer',
    description: 'Keep meetings on track with built-in timing tools for speeches and meeting segments.',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: Hash,
    title: 'Ah Counter',
    description: 'Track filler words and pauses during speeches to help members improve their delivery.',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: BookOpen,
    title: 'Grammarian',
    description: 'Monitor language usage, notable phrases, and grammar during meetings for constructive feedback.',
    color: 'from-blue-400 to-blue-500'
  },
  {
    icon: Award,
    title: 'Prepared Speeches',
    description: 'Deliver and track prepared speeches from your Pathways journey with timing and evaluation support.',
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: BookMarked,
    title: 'Educational Corner',
    description: 'Share educational content and learning moments with club members during meetings.',
    color: 'from-orange-400 to-orange-500'
  },
  {
    icon: Mic,
    title: 'Keynote Speaker',
    description: 'Feature guest speakers and special presentations with dedicated time slots and introductions.',
    color: 'from-yellow-600 to-yellow-700'
  },
  {
    icon: FileText,
    title: 'Speech Evaluation',
    description: 'Provide detailed evaluations for prepared speeches with structured feedback and recommendations.',
    color: 'from-red-400 to-red-500'
  },
  {
    icon: Vote,
    title: 'Live Voting',
    description: 'Conduct real-time voting for best speaker awards and club decisions during meetings.',
    color: 'from-blue-600 to-blue-700'
  },
  {
    icon: CheckSquare,
    title: 'Role Completion',
    description: 'Mark roles as complete and track member participation throughout the meeting.',
    color: 'from-cyan-600 to-cyan-700'
  },
  {
    icon: UserCheck,
    title: 'Attendance Report',
    description: 'Track member attendance with digital check-ins and generate comprehensive attendance reports.',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: MessageCircle,
    title: 'Feedback Corner',
    description: 'Collect and share feedback from members to continuously improve club meetings and experiences.',
    color: 'from-violet-500 to-violet-600'
  },
  {
    icon: CheckSquare,
    title: 'Quiz Master',
    description: 'Create and conduct interactive quizzes to test knowledge and engage members during meetings.',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Ear,
    title: 'Listener',
    description: 'Evaluate listening skills by preparing questions based on meeting content and presentations.',
    color: 'from-cyan-400 to-cyan-500'
  },
  {
    icon: UserPlus,
    title: 'Guest Introduce',
    description: 'Welcome and introduce guests to your club with information about Toastmasters and club activities.',
    color: 'from-emerald-400 to-emerald-500'
  },
  {
    icon: MessageSquare,
    title: 'Table Topics Evaluation',
    description: 'Evaluate impromptu speakers on their delivery, content, and overall performance.',
    color: 'from-orange-600 to-orange-700'
  },
  {
    icon: Star,
    title: 'Master Evaluation',
    description: 'Provide comprehensive evaluation of the entire meeting including all roles and segments.',
    color: 'from-yellow-400 to-yellow-500'
  },
  {
    icon: Users,
    title: 'Member Feedback',
    description: 'Share and receive feedback from club members to foster growth and improvement.',
    color: 'from-pink-400 to-pink-500'
  },
  {
    icon: FileText,
    title: 'Meeting Minutes',
    description: 'Generate and distribute meeting minutes with automated templates and action item tracking.',
    color: 'from-gray-600 to-gray-700'
  },
  {
    icon: User,
    title: 'My Profile',
    description: 'View and edit your personal information, profile picture, and contact details in one place.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Mic,
    title: 'My Speeches',
    description: 'Manage and organize your speech documents in a personalized repository.',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: Building2,
    title: 'My Club Relationships',
    description: 'View and manage your club memberships across multiple clubs.',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Map,
    title: 'My Journey',
    description: 'Track your roles, speeches, and achievements throughout your Toastmasters journey.',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Building2,
    title: 'Club Info',
    description: 'View your club information including meeting times, location, and club identification.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Users,
    title: 'Club Members',
    description: 'View all members with their contact information, roles, and participation history.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Crown,
    title: 'Club Leadership',
    description: 'Meet your club leadership team and access their contact details and responsibilities.',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: Link2,
    title: 'Club Resources',
    description: 'Access educational resources, documents, and materials shared by your club.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Share2,
    title: 'Share App',
    description: 'Invite members to download T360 and enhance club collaboration.',
    color: 'from-blue-400 to-blue-500'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Support 24/7',
    description: 'Get instant help on WhatsApp anytime with our dedicated support team.',
    color: 'from-green-400 to-green-500'
  },
  {
    icon: Phone,
    title: 'Talk to Us',
    description: 'Schedule a call with our team for personalized assistance.',
    color: 'from-cyan-400 to-cyan-500'
  },
  {
    icon: Video,
    title: 'Product Training Videos',
    description: 'Watch step-by-step tutorials to learn how to use T360 effectively.',
    color: 'from-red-400 to-red-500'
  },
  {
    icon: Building2,
    title: 'Club Operations',
    description: 'Manage club settings and operations including club details, meeting preferences, and configurations.',
    color: 'from-slate-600 to-slate-700'
  },
  {
    icon: Calendar,
    title: 'Meeting Operations',
    description: 'Handle meeting scheduling and coordination with complete control over meeting management and workflows.',
    color: 'from-blue-600 to-blue-700'
  },
  {
    icon: UserCog,
    title: 'Manage Club Users',
    description: 'Manage club members and their access levels. Add, remove, or modify member permissions and roles.',
    color: 'from-cyan-600 to-cyan-700'
  },
  {
    icon: Vote,
    title: 'Voting Operations',
    description: 'Manage polls and voting sessions. Create, configure, and monitor voting activities for club decisions.',
    color: 'from-emerald-600 to-emerald-700'
  },
  {
    icon: Crown,
    title: 'ExComm Corner',
    description: 'ExComm-only resources and discussions. Exclusive space for executive committee members.',
    color: 'from-violet-600 to-violet-700'
  },
  {
    icon: PlusCircle,
    title: 'Create Club',
    description: 'Set up new clubs with all essential information and configurations. Streamline the club creation process.',
    color: 'from-indigo-600 to-indigo-700'
  }
];

const featureCategories = [
  {
    name: 'Admin',
    icon: Settings,
    features: features.slice(36, 42)
  },
  {
    name: 'Meeting Roles',
    icon: Calendar,
    features: features.slice(0, 12)
  },
  {
    name: 'Evaluations & Tracking',
    icon: CheckSquare,
    features: features.slice(12, 24)
  },
  {
    name: 'Personal Journey',
    icon: User,
    features: features.slice(24, 28)
  },
  {
    name: 'Club Management',
    icon: Building2,
    features: features.slice(28, 32)
  },
  {
    name: 'Support & Training',
    icon: HelpCircle,
    features: features.slice(32, 36)
  }
];

export default function Features() {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.05),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Choose T360?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built specifically for Toastmasters, by Toastmasters
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {featureCategories.map((category, index) => {
            const TabIcon = category.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-200 scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-blue-200 hover:shadow-md'
                }`}
              >
                <TabIcon className="w-5 h-5" />
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCategories[activeTab].features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-6 bg-white rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative">
                  <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
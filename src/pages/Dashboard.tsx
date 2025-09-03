import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar,
  Briefcase,
  BookOpen,
  Users,
  FileText,
  MessageSquare,
} from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const Dashboard: React.FC = () => {
  const dashboardItems = [
    {
      to: '/events',
      color: 'blue',
      icon: <Calendar size={32} />,
      title: 'Events',
      description: 'Find and register for upcoming events.',
    },
    {
      to: '/jobs',
      color: 'green',
      icon: <Briefcase size={32} />,
      title: 'Job Opportunities',
      description: 'Discover new job openings.',
    },
    {
      to: '/resources',
      color: 'yellow',
      icon: <BookOpen size={32} />,
      title: 'Resources',
      description: 'Access our library of resources.',
    },
    {
      to: '/services/mentorship',
      color: 'purple',
      icon: <Users size={32} />,
      title: 'Mentorship',
      description: 'Connect with experienced mentors.',
    },
    {
      to: '/services/resume-building',
      color: 'red',
      icon: <FileText size={32} />,
      title: 'Resume Building',
      description: 'Get help creating a standout resume.',
    },
    {
      to: '/contact',
      color: 'indigo',
      icon: <MessageSquare size={32} />,
      title: 'Contact Us',
      description: 'Connect with our team.',
    },
  ];

  return (
    <div className="page-container bg-gray-50 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center pt-16 pb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
          Dashboard
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Welcome to your dashboard. You can access all the features of the platform.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 pb-16">
        {dashboardItems.map((item, i) => (
          <DashboardCard key={item.to} {...item} custom={i} />
        ))}
      </div>
    </div>
  );
};

interface DashboardCardProps {
  to: string;
  color: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  custom: number;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  to,
  color,
  icon,
  title,
  description,
  custom,
}) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
    green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
    yellow: 'from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700',
    purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
    red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
    indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
  };

  return (
    <motion.div variants={cardVariants} initial="hidden" animate="visible" custom={custom}>
      <Link
        to={to}
        className={`bg-gradient-to-br ${
          colorClasses[color as keyof typeof colorClasses]
        } text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center h-full`}
      >
        <div className="mb-4 p-3 bg-white/20 rounded-full">{icon}</div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="font-light opacity-90">{description}</p>
      </Link>
    </motion.div>
  );
};

export default Dashboard;

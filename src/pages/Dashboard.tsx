import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="mb-8">Welcome to your dashboard. Here you can access all the features of our platform.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link to="/events" className="p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors">
          <h2 className="text-xl font-bold">Events</h2>
          <p>Find and register for upcoming events.</p>
        </Link>
        <Link to="/jobs" className="p-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors">
          <h2 className="text-xl font-bold">Job Opportunities</h2>
          <p>Discover new job openings.</p>
        </Link>
        <Link to="/resources" className="p-4 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition-colors">
          <h2 className="text-xl font-bold">Resources</h2>
          <p>Access our library of resources.</p>
        </Link>
        <Link to="/mentorship" className="p-4 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 transition-colors">
          <h2 className="text-xl font-bold">Mentorship</h2>
          <p>Connect with mentors.</p>
        </Link>
        <Link to="/resume-building" className="p-4 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-colors">
          <h2 className="text-xl font-bold">Resume Building</h2>
          <p>Get help with your resume.</p>
        </Link>
        <Link to="/career-guidance" className="p-4 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition-colors">
          <h2 className="text-xl font-bold">Career Guidance</h2>
          <p>Receive career advice.</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

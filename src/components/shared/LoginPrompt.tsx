import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPrompt: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center p-8 rounded-lg bg-gray-50 h-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Please Log In to View This Content</h2>
      <p className="text-gray-600 mb-6">
        This page contains exclusive resources and information for our members. Log in to unlock full access.
      </p>
      <button
        onClick={() => navigate('/login')}
        className="bg-orange-500 text-white font-bold py-2 px-6 rounded-md hover:bg-orange-600 transition duration-300"
      >
        Go to Login Page
      </button>
    </div>
  );
};

export default LoginPrompt;

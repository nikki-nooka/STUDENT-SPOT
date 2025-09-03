import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import JobOpportunities from './pages/JobOpportunities';
import Resources from './pages/Resources';
import Events from './pages/Events';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

// Service Pages
import CareerGuidance from './pages/services/CareerGuidance';
import ResumeBuilding from './pages/services/ResumeBuilding';
import Mentorship from './pages/services/Mentorship';

// A wrapper for protected routes
const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or a proper loading spinner
  }

  return user ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  const location = useLocation();
  const { loading } = useAuth();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (loading) {
    return <div>Loading...</div>; // Or a proper loading spinner
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Private routes */}
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/events" element={<PrivateRoute><Events /></PrivateRoute>} />
          <Route path="/jobs" element={<PrivateRoute><JobOpportunities /></PrivateRoute>} />
          <Route path="/resources" element={<PrivateRoute><Resources /></PrivateRoute>} />
          <Route path="/services/career-guidance" element={<PrivateRoute><CareerGuidance /></PrivateRoute>} />
          <Route path="/services/resume-building" element={<PrivateRoute><ResumeBuilding /></PrivateRoute>} />
          <Route path="/services/mentorship" element={<PrivateRoute><Mentorship /></PrivateRoute>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

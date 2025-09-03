import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut } from 'lucide-react';
import Logo from '../shared/Logo';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleLogout = async () => {
    closeMenu();
    await logout();
    navigate('/login');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Job Opportunities', path: '/jobs' },
    { title: 'Resources', path: '/resources' },
    { title: 'Events', path: '/events' },
    { title: 'Contact', path: '/contact' },
  ];

  const activeClass = 'text-orange-600 font-semibold';
  const normalClass = 'text-gray-700 hover:text-orange-600 transition-colors duration-300';

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <Logo className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? activeClass : normalClass)}
              end={item.path === '/'}
            >
              {item.title}
            </NavLink>
          ))}

          {user ? (
            <>
              <Link
                to="/dashboard"
                className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:opacity-90 transition-opacity"
              >
                Dashboard
              </Link>
              <button onClick={handleLogout} className="text-gray-700 hover:text-orange-600 transition-colors duration-300" aria-label="Logout">
                <LogOut size={22} />
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-5 py-2 rounded-full text-sm font-medium shadow hover:opacity-90 transition-opacity"
            >
              Login
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-50" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white z-40 transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col justify-center items-center h-full space-y-8 px-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `text-2xl ${isActive ? activeClass : normalClass}`}
                onClick={closeMenu}
                end={item.path === '/'}
              >
                {item.title}
              </NavLink>
            ))}

            <div className="mt-8 pt-8 border-t border-gray-200 w-full flex flex-col items-center space-y-6">
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={closeMenu}
                    className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-8 py-3 rounded-full text-lg shadow-md hover:opacity-90 transition-opacity w-full max-w-xs text-center"
                  >
                    Dashboard
                  </Link>
                  <button onClick={handleLogout} className="flex items-center text-lg text-gray-700 hover:text-orange-600 transition-colors duration-300">
                    <LogOut className="mr-2" size={22} />
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-8 py-3 rounded-full text-lg shadow-md hover:opacity-90 transition-opacity w-full max-w-xs text-center"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

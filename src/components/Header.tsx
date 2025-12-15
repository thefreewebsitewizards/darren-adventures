import React, { useState } from 'react';
import { Menu, X, Mountain } from 'lucide-react';
import { getDonationUrl } from '../lib/utils';

interface HeaderProps {
  currentPage: string;
  onNavigate: (path: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'What We Do', path: '/what-we-do' },
    { name: 'Meet the Team', path: '/meet-the-team' },
    { name: 'Events', path: '/events' },
    { name: 'Get Involved', path: '/get-involved' },
  ];

  const handleNavigation = (path: string) => {
    onNavigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-background-dark shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            <Mountain className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Darren's Adventures
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  currentPage === item.path
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Donate Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => {
                const url = getDonationUrl();
                if (url) {
                  window.open(url, '_blank', 'noopener,noreferrer');
                } else {
                  handleNavigation('/get-involved#donate');
                }
              }}
              className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-all"
            >
              Donate
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    currentPage === item.path
                      ? 'text-primary bg-primary bg-opacity-10'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  const url = getDonationUrl();
                  if (url) {
                    window.open(url, '_blank', 'noopener,noreferrer');
                  } else {
                    handleNavigation('/get-involved#donate');
                  }
                }}
                className="block w-full text-left bg-primary text-white px-3 py-2 text-base font-medium rounded-md hover:bg-opacity-90 transition-all mt-2"
              >
                Donate
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

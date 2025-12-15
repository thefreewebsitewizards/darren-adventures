import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  socialLinks?: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
}

const Footer: React.FC<FooterProps> = ({ socialLinks = [] }) => {
  const defaultSocialLinks = [
    { platform: 'Facebook', url: '#', icon: 'facebook' },
    { platform: 'Twitter', url: '#', icon: 'twitter' },
    { platform: 'Instagram', url: '#', icon: 'instagram' },
  ];

  const links = socialLinks.length > 0 ? socialLinks : defaultSocialLinks;

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'What We Do', path: '/what-we-do' },
    { name: 'Meet the Team', path: '/meet-the-team' },
    { name: 'Events', path: '/events' },
    { name: 'Get Involved', path: '/get-involved' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Darren's Adventures
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Join us in exploring the great outdoors, building community connections, 
              and creating unforgettable adventures together.
            </p>
            <div className="flex space-x-4">
              {links.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                  aria-label={link.platform}
                >
                  {link.platform === 'Facebook' && <Facebook className="h-5 w-5" />}
                  {link.platform === 'Twitter' && <Twitter className="h-5 w-5" />}
                  {link.platform === 'Instagram' && <Instagram className="h-5 w-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600 dark:text-gray-400">hello@darrensadventures.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600 dark:text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600 dark:text-gray-400">Pacific Northwest, USA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © 2024 Darren's Adventures. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
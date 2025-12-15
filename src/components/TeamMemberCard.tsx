import React from 'react';
import { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Profile Image */}
      <div className="aspect-square bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
        <img
          src={member.imageUrl}
          alt={member.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
              `Professional headshot portrait of outdoor enthusiast ${member.name} hiking nature`
            )}&image_size=square`;
          }}
        />
      </div>

      {/* Member Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
          {member.name}
        </h3>
        <p className="text-primary font-medium mb-3">
          {member.role}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {member.bio}
        </p>

        {/* Social Links */}
        {member.socialLinks && member.socialLinks.length > 0 && (
          <div className="mt-4 flex space-x-3">
            {member.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                aria-label={link.platform}
              >
                {link.platform === 'LinkedIn' && (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )}
                {link.platform === 'Twitter' && (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                )}
                {link.platform === 'Instagram' && (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.5 13.448 3.5 11.987c0-1.461.698-2.908 1.626-3.704.875-.807 2.026-1.297 3.323-1.297 1.297 0 2.448.49 3.323 1.297.928.796 1.626 2.243 1.626 3.704 0 1.461-.698 2.908-1.626 3.704-.875.807-2.026 1.297-3.323 1.297z"/>
                  </svg>
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
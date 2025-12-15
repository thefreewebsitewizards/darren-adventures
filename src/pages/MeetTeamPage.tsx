import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import TeamMemberCard from '../components/TeamMemberCard';
import PodcastPlayer from '../components/PodcastPlayer';
import { TeamMember, PodcastEpisode } from '../types';

const MeetTeamPage: React.FC = () => {
  const navigate = useNavigate();

  // Mock data for team members
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Darren Mitchell',
      role: 'Founder & Lead Guide',
      bio: 'With over 15 years of outdoor guiding experience, Darren founded Darren\'s Adventures to share his passion for the Pacific Northwest\'s natural beauty. Certified wilderness first responder and Leave No Trace trainer.',
      imageUrl: '/IMG_7476.jpeg',
      socialLinks: [
        { platform: 'LinkedIn', url: '#', icon: 'linkedin' },
        { platform: 'Twitter', url: '#', icon: 'twitter' }
      ]
    },
    {
      id: '2',
      name: 'Sarah Chen',
      role: 'Environmental Educator',
      bio: 'Marine biologist turned outdoor educator with a passion for connecting people with nature. Specializes in coastal ecosystems and sustainable outdoor practices.',
      imageUrl: '/IMG_8582.jpeg',
      socialLinks: [
        { platform: 'LinkedIn', url: '#', icon: 'linkedin' },
        { platform: 'Instagram', url: '#', icon: 'instagram' }
      ]
    },
    {
      id: '3',
      name: 'Marcus Rodriguez',
      role: 'Adventure Coordinator',
      bio: 'Former park ranger with extensive knowledge of Pacific Northwest trails. Expert in trip planning, safety protocols, and creating memorable outdoor experiences.',
      imageUrl: '/IMG_8593.jpeg',
      socialLinks: [
        { platform: 'LinkedIn', url: '#', icon: 'linkedin' }
      ]
    },
    {
      id: '4',
      name: 'Emily Thompson',
      role: 'Community Manager',
      bio: 'Passionate about building inclusive outdoor communities. Creates welcoming environments for beginners and connects adventurers with shared interests.',
      imageUrl: '/about.jpeg',
      socialLinks: [
        { platform: 'LinkedIn', url: '#', icon: 'linkedin' },
        { platform: 'Twitter', url: '#', icon: 'twitter' },
        { platform: 'Instagram', url: '#', icon: 'instagram' }
      ]
    }
  ];

  // Mock data for podcast
  const teamPodcast: PodcastEpisode = {
    id: '1',
    title: 'Meet the Team: Behind Darren\'s Adventures',
    description: 'Get to know the passionate individuals who make Darren\'s Adventures possible. Learn about their backgrounds, favorite outdoor experiences, and what drives their commitment to building outdoor community.',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    publishedDate: '2024-11-10T12:00:00Z',
    duration: '52:30',
    thumbnailUrl: '/image_1.jpeg'
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-800 to-blue-900">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/IMG_7477.jpeg')`
          }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            The passionate individuals who make every adventure possible
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-16 bg-background-light dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Passionate Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Get to know the dedicated professionals who share your love for the outdoors and are committed 
              to creating safe, memorable, and transformative outdoor experiences for our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The values that unite our team and guide our work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-primary text-2xl font-bold">💚</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Passion for Nature
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Every team member shares a deep love for the outdoors and a commitment to sharing 
                that passion with others in meaningful ways.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-primary text-2xl font-bold">🤝</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Community Building
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We believe in the power of outdoor experiences to create lasting connections 
                and build supportive communities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-primary text-2xl font-bold">🌱</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Environmental Stewardship
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We're committed to protecting and preserving the natural spaces we explore, 
                ensuring they remain beautiful for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 bg-primary bg-opacity-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-primary mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              We're always looking for passionate outdoor enthusiasts who share our commitment to building 
              community through outdoor experiences. Whether you're an experienced guide, educator, or simply 
              passionate about connecting people with nature, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/get-involved')}
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2"
              >
                <span>View Opportunities</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => window.open('mailto:careers@darrensadventures.com')}
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Podcast Section */}
      <section className="py-16 bg-background-light dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get to Know Us Better
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Listen to our team podcast episode to learn more about the people behind Darren's Adventures
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <PodcastPlayer episode={teamPodcast} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetTeamPage;
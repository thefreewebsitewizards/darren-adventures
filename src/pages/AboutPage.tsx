import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Users, Compass, Leaf } from 'lucide-react';
import PodcastPlayer from '../components/PodcastPlayer';
import { PodcastEpisode } from '../types';

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  // Mock data for latest podcast
  const latestPodcast: PodcastEpisode = {
    id: '1',
    title: 'Our Journey: From Idea to Community',
    description: 'Listen to Darren share the story of how Darren\'s Adventures began, the challenges we faced, and our vision for the future of outdoor community building.',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    publishedDate: '2024-11-15T12:00:00Z',
    duration: '38:45',
    thumbnailUrl: '/about.jpeg'
  };

  const coreValues = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community',
      description: 'We believe in the power of shared experiences to build lasting connections and support networks.'
    },
    {
      icon: <Compass className="h-8 w-8" />,
      title: 'Exploration',
      description: 'We encourage curiosity and the spirit of discovery in all aspects of life and nature.'
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: 'Sustainability',
      description: 'We are committed to preserving and protecting the natural spaces we explore.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Journey Story Section */}
      <section className="py-16 bg-background-light dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our Journey
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Darren's Adventures began in 2018 when our founder, Darren Mitchell, organized a small hiking trip 
                for coworkers who had never experienced the Pacific Northwest's stunning wilderness. What started 
                as a simple weekend outing quickly evolved into something much more meaningful.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                As word spread about these transformative outdoor experiences, more people wanted to join. 
                Darren realized that the need for community-driven outdoor adventures was greater than he had imagined. 
                People weren't just looking for hiking buddies – they were seeking connection, personal growth, 
                and a way to reconnect with nature.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Today, Darren's Adventures has grown into a thriving community of outdoor enthusiasts, 
                environmental stewards, and adventure seekers. We've organized hundreds of events, 
                from beginner-friendly nature walks to challenging mountain expeditions, always with the 
                same core mission: building community through shared outdoor experiences.
              </p>
              <button
                onClick={() => navigate('/get-involved')}
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all flex items-center space-x-2"
              >
                <span>Join Our Community</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src="/IMG_7476.jpeg"
                alt="Our community on the trail"
                className="w-96 h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Understanding who we are and where we're headed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-primary bg-opacity-5 rounded-xl p-8 border border-primary border-opacity-20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                To create inclusive, accessible outdoor experiences that foster personal growth, 
                build meaningful connections, and inspire environmental stewardship. We believe that 
                everyone deserves the opportunity to experience the transformative power of nature, 
                regardless of their background or experience level.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-secondary bg-opacity-5 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Compass className="h-8 w-8 text-gray-600 dark:text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                To be the leading community-driven platform that connects people with nature and each other, 
                creating a global network of outdoor enthusiasts who support conservation efforts, 
                promote mental and physical wellness, and inspire the next generation of environmental stewards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-background-light dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-primary">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Podcast Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Listen to Our Story
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Hear directly from Darren about our journey and mission
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <PodcastPlayer episode={latestPodcast} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
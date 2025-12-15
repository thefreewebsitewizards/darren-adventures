import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mountain, Users, Heart, ArrowRight, MapPin, Calendar } from 'lucide-react';
import PodcastPlayer from '../components/PodcastPlayer';
import { PodcastEpisode } from '../types';

const WhatWeDoPage: React.FC = () => {
  const navigate = useNavigate();

  // Mock data for latest podcast
  const latestPodcast: PodcastEpisode = {
    id: '1',
    title: 'Outdoor Wellness: Nature\'s Healing Power',
    description: 'Explore the mental and physical health benefits of spending time in nature, with expert insights on forest bathing, mindful hiking, and outdoor meditation practices.',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    publishedDate: '2024-11-25T12:00:00Z',
    duration: '42:15',
    thumbnailUrl: '/about.jpeg'
  };

  const services = [
    {
      icon: <Mountain className="h-12 w-12" />,
      title: 'Guided Hikes',
      description: 'Expert-led hiking adventures for all skill levels, from gentle nature walks to challenging mountain expeditions.',
      features: [
        'Beginner-friendly trails',
        'Advanced mountain routes',
        'Wildlife spotting opportunities',
        'Photography-focused hikes'
      ],
      image: '/IMG_7476.jpeg'
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Community Workshops',
      description: 'Educational programs and skill-building workshops to help you become a confident outdoor enthusiast.',
      features: [
        'Navigation and map reading',
        'Outdoor safety and first aid',
        'Gear selection and maintenance',
        'Wilderness survival basics'
      ],
      image: '/IMG_7477.jpeg'
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: 'Conservation Projects',
      description: 'Hands-on environmental stewardship opportunities that give back to the natural spaces we love.',
      features: [
        'Trail maintenance and restoration',
        'Invasive species removal',
        'Native plant restoration',
        'Beach and river cleanups'
      ],
      image: '/IMG_8582.jpeg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-800 to-blue-900">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/IMG_8593.jpeg')`
          }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            What We Do
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Creating meaningful outdoor experiences that connect people with nature and each other
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 bg-background-light dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover the various ways we help you connect with the great outdoors
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="text-primary mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-400">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate('/events')}
                    className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all flex items-center space-x-2"
                  >
                    <span>Explore {service.title}</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Adventures?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experience the difference of community-focused outdoor programming
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Expert Guides
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Learn from experienced outdoor professionals passionate about sharing their knowledge
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Inclusive Community
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Welcoming environment for all skill levels, backgrounds, and experience levels
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Local Expertise
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Discover hidden gems and local favorites throughout the Pacific Northwest
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Flexible Scheduling
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Regular events and workshops to fit your busy lifestyle and interests
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Podcast Section */}
      <section className="py-16 bg-background-light dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Episode
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Tune in to learn more about outdoor wellness and nature's healing power
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

export default WhatWeDoPage;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Mountain, Users, Calendar } from 'lucide-react';
import EventCard from '../components/EventCard';
import PodcastPlayer from '../components/PodcastPlayer';
import { Event, PodcastEpisode } from '../types';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  // Mock data for featured events
  const featuredEvents: Event[] = [
    {
      id: '1',
      title: 'Mount Rainier Sunrise Hike',
      description: 'Experience breathtaking sunrise views from the foothills of Mount Rainier. Perfect for early risers and photography enthusiasts.',
      date: '2024-12-15T06:00:00Z',
      location: 'Mount Rainier National Park',
      imageUrl: '/IMG_7476.jpeg',
      difficulty: 'Intermediate',
      maxParticipants: 12,
      currentParticipants: 8,
      registrationOpen: true
    },
    {
      id: '2',
      title: 'Forest Bathing Workshop',
      description: 'Immerse yourself in the healing power of nature with our guided forest bathing experience. Reduce stress and reconnect with the natural world.',
      date: '2024-12-20T10:00:00Z',
      location: 'Olympic National Forest',
      imageUrl: '/IMG_8582.jpeg',
      difficulty: 'Beginner',
      maxParticipants: 15,
      currentParticipants: 12,
      registrationOpen: true
    },
    {
      id: '3',
      title: 'Coastal Cleanup Adventure',
      description: 'Join us for a meaningful day of beach cleanup along the stunning Pacific coastline. Make a difference while enjoying ocean views.',
      date: '2024-12-22T09:00:00Z',
      location: 'Olympic Peninsula Coast',
      imageUrl: '/IMG_8593.jpeg',
      difficulty: 'Beginner',
      maxParticipants: 25,
      currentParticipants: 18,
      registrationOpen: true
    }
  ];

  // Mock data for latest podcast
  const latestPodcast: PodcastEpisode = {
    id: '1',
    title: 'Finding Your Trail: A Beginner\'s Guide to Hiking',
    description: 'Join us as we discuss essential hiking tips for beginners, gear recommendations, and how to choose your first trail. Perfect for those just starting their outdoor adventure journey.',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    publishedDate: '2024-11-20T12:00:00Z',
    duration: '45:30',
    thumbnailUrl: '/IMG_8582.jpeg'
  };

  const handleEventSignUp = (eventId: string) => {
    console.log(`Signing up for event: ${eventId}`);
    // In a real app, this would handle the sign-up logic
    alert('Event sign-up functionality would be implemented here!');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-green-800 to-green-600">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/image_1.jpeg')`
          }}
        ></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Mountain className="h-16 w-16 text-primary animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Your Next
            <span className="block text-primary">Adventure</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join our community of outdoor enthusiasts exploring the Pacific Northwest's most breathtaking landscapes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/events')}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2"
            >
              <span>Explore Events</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => navigate('/get-involved')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all"
            >
              Get Involved
            </button>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16 bg-background-light dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Adventures
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Join us for these upcoming outdoor experiences designed to connect you with nature and fellow adventurers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onSignUp={handleEventSignUp}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/events')}
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all flex items-center space-x-2 mx-auto"
            >
              <span>View All Events</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Latest Podcast Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Podcast Episode
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Tune in to our latest adventure stories, tips, and community interviews
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <PodcastPlayer episode={latestPodcast} />
          </div>
        </div>
      </section>

      {/* Community Introduction Section */}
      <section className="py-16 bg-primary bg-opacity-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-primary mb-6">
                Building Community Through Adventure
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Darren's Adventures began with a simple belief: that the great outdoors has the power to bring people together, 
                foster personal growth, and create lasting memories. Our community is built on shared experiences, mutual support, 
                and a deep respect for nature.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Whether you're a seasoned explorer or taking your first steps into the wilderness, you'll find a welcoming 
                community ready to support your journey. We believe that everyone deserves access to the transformative 
                power of outdoor adventure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/about')}
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                >
                  Learn Our Story
                </button>
                <button
                  onClick={() => navigate('/meet-the-team')}
                  className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
                >
                  Meet Our Team
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 absolute -top-4 -right-4"></div>
                <div className="w-80 h-80 bg-gradient-to-br from-primary to-green-400 rounded-full opacity-30 absolute -bottom-4 -left-4"></div>
                <img
                  src="/about.jpeg"
                  alt="Community of adventurers"
                  className="w-80 h-80 object-cover rounded-full relative z-10 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
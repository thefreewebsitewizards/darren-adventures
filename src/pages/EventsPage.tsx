import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Filter, Search, Mountain, Users, Clock, ArrowRight } from 'lucide-react';
import EventCard from '../components/EventCard';
import { Event } from '../types';

const EventsPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [displayedEvents, setDisplayedEvents] = useState<Event[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  // Mock data for events
  const allEvents: Event[] = React.useMemo(() => [
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
    },
    {
      id: '4',
      title: 'Advanced Alpine Climbing',
      description: 'Challenge yourself with technical alpine climbing routes in the North Cascades. Previous climbing experience required.',
      date: '2025-01-05T07:00:00Z',
      location: 'North Cascades National Park',
      imageUrl: '/image_1.jpeg',
      difficulty: 'Advanced',
      maxParticipants: 6,
      currentParticipants: 4,
      registrationOpen: true
    },
    {
      id: '5',
      title: 'Winter Wildlife Photography',
      description: 'Capture stunning winter wildlife photos with expert guidance. Learn techniques for shooting in challenging winter conditions.',
      date: '2025-01-12T08:00:00Z',
      location: 'Nisqually Wildlife Refuge',
      imageUrl: '/IMG_7477.jpeg',
      difficulty: 'Intermediate',
      maxParticipants: 10,
      currentParticipants: 7,
      registrationOpen: true
    },
    {
      id: '6',
      title: 'Snowshoeing for Beginners',
      description: 'Learn the basics of snowshoeing on gentle terrain. Perfect introduction to winter outdoor activities.',
      date: '2025-01-18T10:00:00Z',
      location: 'Snoqualmie Pass',
      imageUrl: '/about.jpeg',
      difficulty: 'Beginner',
      maxParticipants: 20,
      currentParticipants: 15,
      registrationOpen: true
    }
  ], []);

  // Filter events based on difficulty and search term
  const filteredEvents = React.useMemo(() => allEvents.filter(event => {
    const matchesDifficulty = selectedDifficulty === 'all' || event.difficulty === selectedDifficulty;
    const matchesSearch = searchTerm === '' || 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesDifficulty && matchesSearch;
  }), [allEvents, selectedDifficulty, searchTerm]);

  const handleEventSignUp = (eventId: string) => {
    console.log(`Signing up for event: ${eventId}`);
    alert('Event sign-up functionality would be implemented here!');
  };

  const handleLoadMore = () => {
    const currentLength = displayedEvents.length;
    const nextEvents = filteredEvents.slice(currentLength, currentLength + 3);
    
    if (nextEvents.length === 0) {
      setHasMore(false);
    } else {
      setDisplayedEvents([...displayedEvents, ...nextEvents]);
    }
  };

  // Update displayed events when filters change
  useEffect(() => {
    setDisplayedEvents(filteredEvents.slice(0, 3));
    setHasMore(filteredEvents.length > 3);
  }, [selectedDifficulty, searchTerm, filteredEvents]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-800 to-blue-900">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/image_1.jpeg')`
          }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Upcoming Events
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Join our community for unforgettable outdoor adventures and experiences
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-background-light dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Difficulty Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">All Difficulties</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {filteredEvents.length} Events Found
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover your next outdoor adventure with our community
            </p>
          </div>

          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <Mountain className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No events found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search criteria or filters to find more events.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onSignUp={handleEventSignUp}
                />
              ))}
            </div>
          )}

          {/* Load More Button */}
          {hasMore && filteredEvents.length > 0 && (
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all flex items-center space-x-2 mx-auto"
              >
                <span>Load More Events</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary bg-opacity-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-primary mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              We're always planning new adventures and would love to hear about your interests. 
              Let us know what type of outdoor experience you're looking for, and we'll do our best to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/get-involved')}
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2"
              >
                <span>Suggest an Event</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => window.open('mailto:events@darrensadventures.com')}
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
              >
                Contact Events Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
import React from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  onSignUp: (eventId: string) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onSignUp }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const spotsAvailable = event.maxParticipants - event.currentParticipants;
  const isFullyBooked = spotsAvailable <= 0;

  const [imageError, setImageError] = React.useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const displayImage = imageError 
    ? '/image_1.jpeg' 
    : event.imageUrl;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Event Image */}
      <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
        <img
          src={displayImage}
          alt={event.title}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
        <div className="absolute top-4 right-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(event.difficulty)}`}>
            {event.difficulty}
          </span>
        </div>
      </div>

      {/* Event Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {event.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {event.description}
        </p>

        {/* Event Info */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Calendar className="h-4 w-4 mr-2 text-primary" />
            {formatDate(event.date)}
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            {event.location}
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Users className="h-4 w-4 mr-2 text-primary" />
            {event.currentParticipants}/{event.maxParticipants} participants
            {!isFullyBooked && (
              <span className="ml-2 text-green-600 dark:text-green-400">
                ({spotsAvailable} spots left)
              </span>
            )}
          </div>
        </div>

        {/* Sign Up Button */}
        <button
          onClick={() => onSignUp(event.id)}
          disabled={!event.registrationOpen || isFullyBooked}
          className={`w-full py-2 px-4 rounded-lg font-medium transition-all ${
            event.registrationOpen && !isFullyBooked
              ? 'bg-primary text-white hover:bg-opacity-90'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
          }`}
        >
          {!event.registrationOpen
            ? 'Registration Closed'
            : isFullyBooked
            ? 'Fully Booked'
            : 'Sign Up Now'}
        </button>
      </div>
    </div>
  );
};

export default EventCard;
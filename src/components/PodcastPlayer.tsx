import React, { useState } from 'react';
import { Play, Pause, Calendar, Clock } from 'lucide-react';
import { PodcastEpisode } from '../types';

interface PodcastPlayerProps {
  episode: PodcastEpisode;
}

const PodcastPlayer: React.FC<PodcastPlayerProps> = ({ episode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const displayImage = imageError 
    ? '/image_1.jpeg' 
    : episode.thumbnailUrl;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Thumbnail */}
        <div className="flex-shrink-0">
          <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
            <img
              src={displayImage}
              alt={episode.title}
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
          </div>
        </div>

        {/* Episode Info */}
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            {episode.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
            {episode.description}
          </p>
          <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>{formatDate(episode.publishedDate)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{episode.duration}</span>
            </div>
          </div>
        </div>

        {/* Play Button */}
        <div className="flex-shrink-0">
          <button
            onClick={togglePlay}
            className="bg-primary hover:bg-opacity-90 text-white rounded-full p-3 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {isPlaying ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6 ml-0.5" />
            )}
          </button>
        </div>
      </div>

      {/* Embedded Player */}
      <div className="mt-4">
        <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
          <iframe
            src={episode.embedUrl}
            title={episode.title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* View All Episodes Link */}
      <div className="mt-4 text-center">
        <a
          href="#"
          className="text-primary hover:text-opacity-80 text-sm font-medium transition-colors"
        >
          View All Episodes →
        </a>
      </div>
    </div>
  );
};

export default PodcastPlayer;
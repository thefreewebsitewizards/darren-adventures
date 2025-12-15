export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  maxParticipants: number;
  currentParticipants: number;
  registrationOpen: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks?: SocialLink[];
}

export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
  publishedDate: string;
  duration: string;
  thumbnailUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface NavigationState {
  currentPath: string;
  previousPath: string;
  navigationHistory: string[];
}

export interface ThemeState {
  isDarkMode: boolean;
  toggleTheme: () => void;
}
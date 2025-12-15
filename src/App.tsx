import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { NavigationProvider } from './contexts/NavigationContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import { useNavigation } from './contexts/NavigationContext';

// Page components (will be created next)
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WhatWeDoPage from './pages/WhatWeDoPage';
import MeetTeamPage from './pages/MeetTeamPage';
import EventsPage from './pages/EventsPage';
import GetInvolvedPage from './pages/GetInvolvedPage';

const AppContent: React.FC = () => {
  const routerNavigate = useNavigate();
  const location = useLocation();
  const { navigate: setNavState } = useNavigation();

  const handleNavigate = (path: string) => {
    setNavState(path);
    routerNavigate(path);
  };

  return (
    <Layout currentPage={location.pathname} onNavigate={handleNavigate}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/what-we-do" element={<WhatWeDoPage />} />
        <Route path="/meet-the-team" element={<MeetTeamPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
      </Routes>
    </Layout>
  );
};

function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <Router>
          <AppContent />
        </Router>
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default App;

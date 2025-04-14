import React, { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTimer } from './hooks/useTimer';
import { TimerDisplay } from './components/TimerDisplay';
import { Controls } from './components/Controls';
import { ModeSelector } from './components/ModeSelector';
import About from './components/About';
import Footer from './components/Footer';
import AdComponent from './components/AdComponent';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ContactUs from './pages/ContactUs';
import TechniqueDetails from './pages/TechniqueDetails';

function App() {
  const { state, toggleTimer, resetTimer, changeMode, updateSettings } = useTimer();
  const [isDark, setIsDark] = React.useState(() => {
    const darkMode = localStorage.getItem('darkMode');
    return darkMode ? JSON.parse(darkMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Flag to control whether ads are displayed
  const [showAds, setShowAds] = useState(false);

  useEffect(() => {
    // Simulate a check for ads (e.g., check if ads are loaded or approved)
    const adsAvailable = false; // Change this to `true` when ads are ready
    setShowAds(adsAvailable);
  }, []);

  // Request notification permissions when the app loads
  useEffect(() => {
    const requestNotificationPermission = async () => {
      if ('Notification' in window) {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          toast.success('Notifications enabled!', {
            icon: '🔔',
            duration: 3000,
            position: 'top-right', // Top-right corner
          });
        } else if (permission === 'denied') {
          toast.error('Please enable notifications for the best experience', {
            icon: '🔕',
            duration: 5000,
            position: 'top-right', // Top-right corner
          });
        }
      }
    };

    // Check if we've already asked for permission
    const hasAskedPermission = localStorage.getItem('hasAskedNotificationPermission');
    if (!hasAskedPermission) {
      requestNotificationPermission();
      localStorage.setItem('hasAskedNotificationPermission', 'true');
    }
  }, []);

  // Show bookmark notification on first visit
  useEffect(() => {
    const hasShownBookmarkNotification = sessionStorage.getItem('hasShownBookmarkNotification');
    if (!hasShownBookmarkNotification) {
      toast('Bookmark this website to stay on track for free!', {
        icon: '⭐',
        duration: 5000,
        position: 'top-right', // Top-right corner
      });
      sessionStorage.setItem('hasShownBookmarkNotification', 'true');
    }
  }, []);

  useEffect(() => {
    // Update theme class
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
    // Save preference
    localStorage.setItem('darkMode', JSON.stringify(isDark));
  }, [isDark]);

  useEffect(() => {
    if (state.timeLeft === 0) {
      toast(state.isBreak ? (state.isLongBreak ? 'Time for a long break!' : 'Break time!') : 'Time to focus!', {
        icon: '⏰',
        duration: 4000,
      });
    }
  }, [state.timeLeft, state.isBreak, state.isLongBreak]);

  return (
    <Router>
      <div className="min-h-100 bg-base-50 dark:bg-base-900 text-base-900 dark:text-base-100 transition-colors duration-300">
        <div className="container mx-auto px-4 py-8">
          <Header isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

          <Routes>
            <Route
              path="/"
              element={
                <div className="dark:bg-base-800 from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-6 bg-white rounded-lg ">
                  
                  <HeroSection />
                  <div className="max-w-2xl mx-auto">
                  <ModeSelector 
                    currentMode={state.mode} 
                    onModeChange={changeMode}
                    onUpdateSettings={updateSettings}
                  />
                    
                    <div className="flex flex-col items-center">
                      <TimerDisplay state={state} />
                      <Controls
                        state={state}
                        onToggle={toggleTimer}
                        onReset={resetTimer}
                      />
                    </div>
                  </div>
                </div>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/techniques/:id" element={<TechniqueDetails />} />
          </Routes>
          {/* Conditionally render AdComponent */}
          {showAds && <AdComponent />}
          <Footer />
        </div>
        
        <Toaster 
          position="bottom-right"
          toastOptions={{
            className: 'dark:bg-base-800 dark:text-white',
            style: {
              background: isDark ? '#1f2937' : '#ffffff',
              color: isDark ? '#ffffff' : '#000000',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
import React, { useEffect } from 'react';
import { Sun, Moon, Info } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTimer } from './hooks/useTimer';
import { TimerDisplay } from './components/TimerDisplay';
import { Controls } from './components/Controls';
import { ModeSelector } from './components/ModeSelector';
import About from './components/About';

function App() {
  const { state, toggleTimer, resetTimer, changeMode, updateSettings } = useTimer();
  const [isDark, setIsDark] = React.useState(() => {
    const darkMode = localStorage.getItem('darkMode');
    return darkMode ? JSON.parse(darkMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Request notification permissions when the app loads
  useEffect(() => {
    const requestNotificationPermission = async () => {
      if ('Notification' in window) {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          toast.success('Notifications enabled!', {
            icon: '🔔',
            duration: 3000,
          });
        } else if (permission === 'denied') {
          toast.error('Please enable notifications for the best experience', {
            icon: '🔕',
            duration: 5000,
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
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-3xl font-bold hover:text-blue-500 transition-colors">
                OnlyFoc
              </Link>
              <Link
                to="/about"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <Info size={20} />
                <span>About</span>
              </Link>
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={24} className="text-yellow-500" /> : <Moon size={24} className="text-gray-700" />}
            </button>
          </div>

          <Routes>
            <Route
              path="/"
              element={
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

                  {/* AdSense placeholder */}
                  <div className="ad-slot mt-8 h-[250px] bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <p className="text-gray-500 dark:text-gray-400">Advertisement</p>
                  </div>
                </div>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Toaster 
          position="bottom-right"
          toastOptions={{
            className: 'dark:bg-gray-800 dark:text-white',
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
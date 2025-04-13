import React, { useState } from 'react';
import { TimerMode, TimerSettings } from '../types';
import { Timer, Brain, Settings, Coffee, Zap } from 'lucide-react';

interface ModeSelectorProps {
  currentMode: TimerMode;
  onModeChange: (mode: TimerMode) => void;
  onUpdateSettings?: (mode: TimerMode, settings: TimerSettings) => void;
}

const modeInfo: Record<TimerMode, { 
  icon: React.ReactNode; 
  label: string; 
  description: string;
  longDescription: string;
}> = {
  'pomodoro': {
    icon: <Timer size={20} />,
    label: 'Pomodoro',
    description: '25/5 min',
    longDescription: "Boost focus and manage fatigue with the classic Pomodoro Technique, developed by Francesco Cirillo. Work in 25-minute bursts followed by short breaks to reset your mind. Used by developers, authors, and creators like Chris Winfield (Forbes contributor), who claims it helped him achieve 40 hours of work in 16. Great for building consistent output without burnout."
  },
  '52-17': {
    icon: <Brain size={20} />,
    label: '52/17',
    description: '52/17 min',
    longDescription: "Based on a study by the productivity app DeskTime, which analyzed top-performing employees. They discovered the best performers worked for 52 minutes, then took a 17-minute break. This rhythm is praised by high-efficiency teams at companies like Draugiem Group and is great for maintaining long-term productivity without mental fatigue."
  },
  'desktime': {
    icon: <Coffee size={20} />,
    label: 'DeskTime',
    description: '88/17 min',
    longDescription: "Inspired by data from the DeskTime app, used by companies like Apple and Google to study productivity trends. The top 10% of workers maintained 88 minutes of focus followed by 17-minute breaks. Ideal for those who can sustain longer deep work sessions, like writers and analysts. Elon Musk is known for working in extended, focused chunks of time similar to this."
  },
  'ultradian': {
    icon: <Zap size={20} />,
    label: 'Ultradian',
    description: '90/20 min',
    longDescription: "This method follows the science-backed Ultradian Rhythm, our body's natural 90-minute energy cycle. Endorsed by performance coach Tony Schwartz (author of *The Power of Full Engagement*) and used by elite athletes and CEOs to schedule their day around natural highs and lows. Great for creatives, strategists, and anyone seeking peak cognitive performance."
  },
  'custom': {
    icon: <Settings size={20} />,
    label: 'Custom',
    description: 'Your timing',
    longDescription: "Create a custom productivity flow tailored to your energy and goals — just like Tim Ferriss, author of *The 4-Hour Workweek*, who believes in testing and building personalized routines. Whether you prefer short sprints or long focus blocks, you're in control."
  }
};

export const ModeSelector: React.FC<ModeSelectorProps> = ({ currentMode, onModeChange, onUpdateSettings }) => {
  const [customWork, setCustomWork] = useState(45);
  const [customBreak, setCustomBreak] = useState(15);

  // Function to update settings whenever values change
  const updateCustomSettings = (work: number, breakTime: number) => {
    if (onUpdateSettings) {
      const settings = {
        workDuration: work * 60,
        breakDuration: breakTime * 60,
        longBreakDuration: breakTime * 2 * 60,
        sessionsUntilLongBreak: 4,
        soundEnabled: true,
        notificationsEnabled: true,
      };
      onUpdateSettings('custom', settings);
    }
  };

  const handleCustomSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      updateCustomSettings(customWork, customBreak);
      onModeChange('custom');
    } catch (error) {
      console.error('Error updating custom settings:', error);
    }
  };

  // Update settings when input values change
  const handleWorkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setCustomWork(value);
    updateCustomSettings(value, customBreak);
  };

  const handleBreakChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setCustomBreak(value);
    updateCustomSettings(customWork, value);
  };

  return (
    <div className="mb-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
        {(Object.keys(modeInfo) as TimerMode[]).map((mode) => (
          <button
            key={mode}
            onClick={() => onModeChange(mode)}
            className={`flex flex-col items-center p-4 rounded-lg transition-all transform hover:scale-105 border ${
              currentMode === mode
                ? 'bg-blue-500 text-white shadow-lg border-blue-600'
                : 'bg-white hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              {React.cloneElement(modeInfo[mode].icon as React.ReactElement, {
                className: currentMode === mode ? 'text-white' : 'text-gray-600 dark:text-gray-300'
              })}
              <span className="font-medium">{modeInfo[mode].label}</span>
            </div>
            <span className="text-sm opacity-80">{modeInfo[mode].description}</span>
          </button>
        ))}
      </div>

      {/* Mode description */}
      <div className="text-sm text-gray-700 dark:text-gray-300 mb-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
        {modeInfo[currentMode].longDescription}
      </div>

      {/* Custom timer form */}
      {currentMode === 'custom' && (
        <form onSubmit={handleCustomSubmit} className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="workDuration" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Work Duration (minutes)
              </label>
              <input
                type="number"
                id="workDuration"
                value={customWork}
                onChange={handleWorkChange}
                className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                min="1"
                required
              />
            </div>
            <div>
              <label htmlFor="breakDuration" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Break Duration (minutes)
              </label>
              <input
                type="number"
                id="breakDuration"
                value={customBreak}
                onChange={handleBreakChange}
                className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                min="1"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors shadow-sm hover:shadow-md"
          >
            Apply Custom Timer
          </button>
        </form>
      )}
    </div>
  );
};
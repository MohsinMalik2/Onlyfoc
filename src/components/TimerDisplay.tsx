import React from 'react';
import { TimerState } from '../types';

interface TimerDisplayProps {
  state: TimerState;
}

export const TimerDisplay: React.FC<TimerDisplayProps> = ({ state }) => {
  const minutes = Math.floor(state.timeLeft / 60);
  const seconds = state.timeLeft % 60;

  const getMaxTime = () => {
    if (state.isBreak) {
      return state.isLongBreak ? 30 * 60 : 17 * 60;
    }
    switch (state.mode) {
      case 'pomodoro': return 25 * 60;
      case '52-17': return 52 * 60;
      case 'desktime': return 88 * 60;
      case 'ultradian': return 90 * 60;
      case 'custom': {
        const settings = JSON.parse(localStorage.getItem('timerSettings') || '{}');
        return (settings.custom?.workDuration || 45 * 60);
      }
      default: return 25 * 60;
    }
  };

  const progress = (state.timeLeft / getMaxTime()) * 100;

  return (
    <div className="relative w-64 h-64 bg-white dark:bg-base-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-lg p-4">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          className="stroke-gray-200 dark:stroke-gray-700"
          fill="none"
          strokeWidth="8"
        />
        <circle
          cx="50%"
          cy="50%"
          r="45%"
          className={`${state.isBreak ? 'stroke-green-500' : 'stroke-primary-500'} transition-all`}
          fill="none"
          strokeWidth="8"
          strokeDasharray={`${progress} 100`}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-5xl font-bold mb-2 text-base-800 dark:text-base-100">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
        <div className="text-sm text-base-700 dark:text-base-300">
          {state.isBreak ? (state.isLongBreak ? 'Long Break' : 'Short Break') : 'Focus Time'}
        </div>
        <div className="text-xs mt-1 text-base-600 dark:text-base-400">
          Session {state.completedSessions + 1}
        </div>
      </div>
    </div>
  );
};
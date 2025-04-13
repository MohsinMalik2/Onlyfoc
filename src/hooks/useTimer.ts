import { useState, useEffect, useCallback } from 'react';
import { TimerMode, TimerSettings, TimerState, Session } from '../types';

const DEFAULT_SETTINGS: Record<TimerMode, TimerSettings> = {
  pomodoro: {
    workDuration: 25 * 60,
    breakDuration: 5 * 60,
    longBreakDuration: 15 * 60,
    sessionsUntilLongBreak: 4,
    soundEnabled: true,
    notificationsEnabled: true,
  },
  '52-17': {
    workDuration: 52 * 60,
    breakDuration: 17 * 60,
    longBreakDuration: 30 * 60,
    sessionsUntilLongBreak: 2,
    soundEnabled: true,
    notificationsEnabled: true,
  },
  'desktime': {
    workDuration: 88 * 60, // 88 minutes work
    breakDuration: 17 * 60, // 17 minutes break
    longBreakDuration: 30 * 60,
    sessionsUntilLongBreak: 2,
    soundEnabled: true,
    notificationsEnabled: true,
  },
  'ultradian': {
    workDuration: 90 * 60, // 90 minutes work
    breakDuration: 20 * 60, // 20 minutes break
    longBreakDuration: 30 * 60,
    sessionsUntilLongBreak: 2,
    soundEnabled: true,
    notificationsEnabled: true,
  },
  custom: {
    workDuration: 1 * 60,
    breakDuration: 15 * 60,
    longBreakDuration: 30 * 60,
    sessionsUntilLongBreak: 3,
    soundEnabled: true,
    notificationsEnabled: true,
  }
};

export const useTimer = () => {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('timerSettings');
    return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
  });

  const [state, setState] = useState<TimerState>(() => {
    const saved = localStorage.getItem('timerState');
    return saved ? JSON.parse(saved) : {
      mode: 'pomodoro',
      isRunning: false,
      timeLeft: DEFAULT_SETTINGS.pomodoro.workDuration,
      isBreak: false,
      completedSessions: 0,
      isLongBreak: false,
    };
  });

  const [sessions, setSessions] = useState<Session[]>(() => {
    const saved = localStorage.getItem('sessions');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('timerSettings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem('timerState', JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    localStorage.setItem('sessions', JSON.stringify(sessions));
  }, [sessions]);

  const playSound = useCallback(() => {
    if (settings[state.mode].soundEnabled) {
      try {
        const audio = new Audio('/notification.mp3');
        audio.play().catch(error => {
          console.error('Error playing sound:', error);
        });
      } catch (error) {
        console.error('Error creating audio:', error);
      }
    }
  }, [settings, state.mode]);

  const showNotification = useCallback(() => {
    if (settings[state.mode].notificationsEnabled) {
      if ('Notification' in window) {
        if (Notification.permission === 'granted') {
          new Notification(state.isBreak ? 'Break Time!' : 'Time to Focus!', {
            body: state.isBreak ? 'Take a well-deserved break!' : 'Time to get back to work!',
            icon: '/icon-192x192.png'
          });
        } else if (Notification.permission !== 'denied') {
          Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
              new Notification(state.isBreak ? 'Break Time!' : 'Time to Focus!', {
                body: state.isBreak ? 'Take a well-deserved break!' : 'Time to get back to work!',
                icon: '/icon-192x192.png'
              });
            }
          });
        }
      }
    }
  }, [settings, state.mode, state.isBreak]);

  useEffect(() => {
    let interval: number;

    if (state.isRunning && state.timeLeft > 0) {
      interval = window.setInterval(() => {
        setState(prev => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
      }, 1000);
    } else if (state.timeLeft === 0) {
      playSound();
      showNotification();
      
      const currentSettings = settings[state.mode] || DEFAULT_SETTINGS.pomodoro;
      let newCompletedSessions = state.completedSessions;
      let isLongBreak = state.isLongBreak;
      
      if (!state.isBreak) {
        newCompletedSessions++;
        isLongBreak = newCompletedSessions % currentSettings.sessionsUntilLongBreak === 0;
      }

      const newTimeLeft = state.isBreak 
        ? currentSettings.workDuration 
        : isLongBreak 
          ? currentSettings.longBreakDuration 
          : currentSettings.breakDuration;

      setState(prev => ({
        ...prev,
        isBreak: !prev.isBreak,
        timeLeft: newTimeLeft,
        isRunning: false,
        completedSessions: newCompletedSessions,
        isLongBreak,
      }));

      if (!state.isBreak) {
        setSessions(prev => [...prev, {
          date: new Date().toISOString().split('T')[0],
          duration: settings[state.mode].workDuration,
          mode: state.mode,
        }]);
      }
    }

    return () => clearInterval(interval);
  }, [state.isRunning, state.timeLeft, state.mode, state.isBreak, settings, playSound, showNotification]);

  const toggleTimer = () => {
    setState(prev => ({ ...prev, isRunning: !prev.isRunning }));
  };

  const resetTimer = () => {
    const currentSettings = settings[state.mode] || DEFAULT_SETTINGS.pomodoro;
    setState(prev => ({
      ...prev,
      isRunning: false,
      timeLeft: prev.isBreak ? currentSettings.breakDuration : currentSettings.workDuration,
      completedSessions: 0,
      isLongBreak: false,
    }));
  };

  const changeMode = (mode: TimerMode) => {
    const newSettings = settings[mode] || DEFAULT_SETTINGS.pomodoro;
    setState({
      mode,
      isRunning: false,
      timeLeft: newSettings.workDuration,
      isBreak: false,
      completedSessions: 0,
      isLongBreak: false,
    });
  };

  const updateSettings = (mode: TimerMode, newSettings: TimerSettings) => {
    setSettings((prev: Record<TimerMode, TimerSettings>) => ({
      ...prev,
      [mode]: newSettings,
    }));
  };

  return {
    state,
    settings,
    sessions,
    toggleTimer,
    resetTimer,
    changeMode,
    updateSettings,
  };
};
export type TimerMode = 'pomodoro' | '52-17' | 'custom' | 'desktime' | 'ultradian';

export interface TimerSettings {
  workDuration: number;
  breakDuration: number;
  longBreakDuration: number;
  sessionsUntilLongBreak: number;
  soundEnabled: boolean;
  notificationsEnabled: boolean;
}

export interface TimerState {
  mode: TimerMode;
  isRunning: boolean;
  timeLeft: number;
  isBreak: boolean;
  completedSessions: number;
  isLongBreak: boolean;
}

export interface Session {
  date: string;
  duration: number;
  mode: TimerMode;
}
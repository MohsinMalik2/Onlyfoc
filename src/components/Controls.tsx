import React from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { TimerState } from '../types';

interface ControlsProps {
  state: TimerState;
  onToggle: () => void;
  onReset: () => void;
}

export const Controls: React.FC<ControlsProps> = ({ state, onToggle, onReset }) => {
  return (
    <div className="flex gap-4 mt-8">
      <button
        onClick={onToggle}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-500 hover:bg-primary-600 text-white transition-colors"
      >
        {state.isRunning ? <Pause size={24} /> : <Play size={24} />}
      </button>
      <button
        onClick={onReset}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-base-200 hover:bg-base-300 dark:bg-base-700 dark:hover:bg-base-600 transition-colors"
      >
        <RotateCcw size={24} />
      </button>
    </div>
  );
};
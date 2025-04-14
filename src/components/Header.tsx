import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Info } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  return (
    <header className="flex justify-between items-center mb-8">
      {/* Left Side: Logo or Website Name */}
      <div>
        <Link to="/">
          <img
            src={isDark ? '/images/brand/logo-light.png' : '/images/brand/logo-dark.png'}
            alt="OnlyFoc Logo"
            className="h-[7rem]" // Adjust height as needed
          />
        </Link>
      </div>

      {/* Right Side: Navigation Links and Theme Toggle */}
      <div className="flex items-center gap-6">
        <Link
          to="/about"
          className="flex items-center gap-2 text-base-600 dark:text-base-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
        >
          <Info size={20} />
          <span>About OnlyFoc</span>
        </Link>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-base-200 dark:bg-base-700 hover:bg-base-300 dark:hover:bg-base-600 transition-colors duration-300"
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? <Sun size={24} className="text-yellow-500" /> : <Moon size={24} className="text-base-700" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
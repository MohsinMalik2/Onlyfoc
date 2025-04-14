import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="flex items-center from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 mb-20 mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          Welcome to <span className="text-primary-600 dark:text-primary-400">OnlyFoc</span>
        </h1>
        <p className="text-lg text-base-600 dark:text-base-300 my-4 max-w-2xl mx-auto">
          Boost your productivity with scientifically proven focus techniques. Manage your time effectively and achieve your goals with ease.
        </p>
        <button
          onClick={() => navigate('/about')}
          className="mt-8 px-6 py-3 bg-primary-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-primary-700 transition"
        >
          Learn More
        </button>
      </div>
      <div className="absolute inset-0 from-transparent to-gray-900 opacity-10 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
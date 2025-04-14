import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="mt-10 text-center bg-base-50 dark:bg-base-800 rounded-lg transition-colors duration-300 p-10">
      <h2 className="text-3xl font-bold text-base-900 dark:text-base-100 mb-6">
        Why These Techniques Work
      </h2>
      <p className="text-base-600 dark:text-base-300 max-w-3xl mx-auto">
        Our brains thrive on structured work and rest cycles. These techniques respect your natural rhythms, prevent burnout, and help you achieve consistent, high-quality results.
      </p>
      <p className="text-base-600 dark:text-base-300 mt-4">
        Experiment with different methods to find the one that suits your work style best.
      </p>
        {/* <p className="text-base-600 dark:text-base-300 mt-4">
            Developed by <a href='https://mohsinnawaz.one' className='text-primary-600 dark:text-primary-400' target="_blank">Mohsin Nawaz</a>
        </p> */}
      {/* Horizontal Links */}
      <div className="mt-8">
        <nav className="flex justify-center gap-6 text-sm font-medium text-base-600 dark:text-base-300">
          <Link
            to="/privacy-policy"
            className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            to="/contact-us"
            className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            Contact Us
          </Link>

        </nav>
      </div>
    </footer>
  );
};

export default Footer;
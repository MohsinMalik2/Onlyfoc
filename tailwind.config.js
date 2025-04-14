const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // You already use dark mode switching
  theme: {
    extend: {
      colors: {
        base: {
          50: '#f9f9f9',
          100: '#f0f0f1',
          200: '#dcdcdc',
          300: '#c2c2c6',
          400: '#a1a1a8',
          500: '#787885',
          600: '#575766',
          700: '#454553',
          800: '#373643', // your dark base
          900: '#2b2a33',
          light: '#ffffff',
          dark: '#373643',
        },
        primary: {
          DEFAULT: '#18cb96',
          50: '#e6fcf5',
          100: '#ccf8eb',
          200: '#99f1d6',
          300: '#66e9c2',
          400: '#33e2ad',
          500: '#18cb96', // core primary
          600: '#13a77d',
          700: '#0d7e60',
          800: '#095f48',
          900: '#053e2e',
        },
      },

      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #18cb96, #0d7e60)',
      },

      boxShadow: {
        'primary-sm': '0 1px 2px 0 rgba(24, 203, 150, 0.25)',
        'primary-md': '0 4px 6px rgba(24, 203, 150, 0.3)',
        'primary-lg': '0 10px 15px rgba(24, 203, 150, 0.35)',
        'primary-xl': '0 20px 25px rgba(24, 203, 150, 0.4)',
      },

      opacity: {
        15: '0.15',
        35: '0.35',
        85: '0.85',
      },

      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },

      transitionDuration: {
        400: '400ms',
        600: '600ms',
      },
    },
  },
  plugins: [
    // Optional: add typography if needed for content-rich areas
    // require('@tailwindcss/typography'),
  ],
};

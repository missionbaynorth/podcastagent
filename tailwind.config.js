/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-purple': {
          DEFAULT: '#2E1065',
          translucent: 'rgba(46, 16, 101, 0.7)'
        },
        'electric-blue': {
          DEFAULT: '#3B82F6',
          translucent: 'rgba(59, 130, 246, 0.6)'
        },
        'neon': {
          DEFAULT: '#00FF94',
        },
        'neon-translucent': {
          DEFAULT: 'rgba(0, 255, 148, 0.5)'
        },
        'metallic': {
          DEFAULT: '#FFD700',
          translucent: 'rgba(255, 215, 0, 0.4)'
        }
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'headline': '48px',
        'body': '18px',
      },
      backgroundImage: {
        'gradient-translucent': 'linear-gradient(to bottom right, rgba(46, 16, 101, 0.9), rgba(59, 130, 246, 0.7))',
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-purple': '#2E1065',
        'electric-blue': '#3B82F6',
        'neon': '#00FF94',
        'metallic': '#FFD700',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'headline': '48px',
        'body': '18px',
      },
    },
  },
  plugins: [],
};
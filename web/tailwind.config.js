/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['Didact Gothic', 'sans-serif'],
      sans: ['Quicksand', 'sans-serif'],
    },
    colors: {
      beige: '#eeede9',
      grey: '#f0f0f0',
      medium_grey: '#b3b3b3',
      dark_grey: '#323232',
      orange: '#FF5100',
      dark_orange: '#9c3202',
      white: '#ffffff',
      danger: '#bb2124',
      success: '#22bb33',
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['Fredericka the Great', 'cursive'],
      sans: ['Oswald', 'sans-serif'],
    },
    colors: {
      beige: '#eeede9',
      grey: '#a9a9a9',
      dark_grey: '#323232',
      white: '#ffffff',
    },
  },
  plugins: [],
};
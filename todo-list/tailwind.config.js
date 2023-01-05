/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'grey': '#EEEEEE',
      'white': '#F6F6F6',
      'blue': '#1D42C7',
      'red': '#C71D1D',
      'grey-footer': '#A0A0A0',
      
    },
    extend: {},
  },
  plugins: [],
};

/* eslint-disable no-dupe-keys */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          main: '#0c1829',
        },
        main: {
          gray: '#9ea7b0',
          light: '#62fbe0',
          dark: '#102924',
        },
      },
    },
  },
  plugins: [],
};

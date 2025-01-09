/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures all your React components are scanned
    "./public/index.html", // Scans your public HTML if needed
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: "#B07B35",
        gray: {
          lightest: '#EEEEEE',
          light: '#BDBDBD',
          DEFAULT: '#9E9E9E',
          dark: '#616161',
          darkest: '#3C3B3B',
        },
      },
    }
  },
  plugins: [],
}


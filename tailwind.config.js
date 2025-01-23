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
      fontSize: {
        sm: ['0.875rem', '1.25rem'], 
        base: ['0.95rem', '1.5rem'],
        lg: ['1.125rem', '1.75rem'], 
        xl: ['1.25rem', '1.75rem'], 
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
        red:{
          DEFAULT: '#EF4444'
        },
        yellow:{
          DEFAULT: '#FACC15'
        },
        green:{
          DEFAULT: '#10B981'
        },
      },
      borderWidth: {
       '20': '20px',
      }
    }
  },
  plugins: [],
}


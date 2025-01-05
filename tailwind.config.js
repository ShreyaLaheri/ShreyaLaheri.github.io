/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures all your React components are scanned
    "./public/index.html", // Scans your public HTML if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


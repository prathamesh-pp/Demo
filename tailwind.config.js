/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // ✅ includes all app files
    './components/**/*.{js,jsx,ts,tsx}', // ✅ includes your components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

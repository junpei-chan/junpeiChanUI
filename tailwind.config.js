/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-color": "#82BAC6",
        "accent-light-color": "#E8F7FA",
        "white-color": "#F9FBFB",
        "gray-color": "#EFEFEF",
        "text-gray-color": "#9A9A9A",
        "text-color": "#1E1E1E"
      },
    },
  },
  plugins: [],
} 
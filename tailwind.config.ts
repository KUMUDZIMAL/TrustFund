/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chorke: {
          yellow: "#FDF076", // Bright pastel yellow
          green: "#4ADE80",  // Vibrant green
          pink: "#FBCFE8",   // Light pink
          purple: "#E9D5FF", // Light purple
          cream: "#FFFBEB",  // Off-white/cream for footer
        }
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}
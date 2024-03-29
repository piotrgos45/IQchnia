/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif']
    },
    extend: {
      screens: {
        md: "768px",
      }
    },
  },
  plugins: [],
}


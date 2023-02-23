/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
          
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        openSan: ['Roboto', 'sans-serif'],
        yellowtail: ['Yellowtail', 'cursive'],
        'dmSan': "dmSan",
        'heldane': "heldane"

      },

    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    backgroundImage: {
      'green-gradient':
        'linear-gradient(143.36deg, #0E563F 3.5%, #15BE77 98.26%)',
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        openSan: ['Roboto', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        workSans: ['Work Sans', 'sans-serif'],
        yellowtail: ['Yellowtail', 'cursive'],
        dmSan: 'dmSan',
        heldane: 'heldane',
      },
      colors: {
        'white-100': '#F9F8F8',
        'green-100': '#0E563F',
        'blue-100': '#09051C',
        orange: '#FF7C32',
      },
    },
  },
  plugins: [],
}

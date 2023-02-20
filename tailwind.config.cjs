/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'hero': "url('../assets/Image.png')",
        'footer-texture': "url('/img/footer-texture.png')",
    },
  },
  plugins: [],
}

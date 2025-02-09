/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./frontend/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')],
  darkMode: 'class'
}
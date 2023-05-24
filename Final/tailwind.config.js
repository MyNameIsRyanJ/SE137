/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '1/12': '8.333333%',
        '10/12': '83.333333%'
      }
    },
  },
  plugins: [],
}
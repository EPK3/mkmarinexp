/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'white': '#FFFFFF',
      'off-white': '#F5F8FD',
      'blue': '#2854BA',
      'orange': '#FF8520',

    },
    fontFamily: {
      'Gabriela': 'Gabriela, serif',
      'Merriweather': 'Merriweather, serif',
    },
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT")
export default withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'pink': '#ed9e9e',
      'lightgrey': "#D9D9D9",
      'yellow': "#FCC608",
      'stone-300': "#C4C4C4",
      'black': "#000000",
      'grey': "#333333",
      'anothershadeofgrey': "#929292",
      'blue': "#4B9EEA",
      'blue-darker': "#4D4DFF",
     },
  },
  plugins: [],
})


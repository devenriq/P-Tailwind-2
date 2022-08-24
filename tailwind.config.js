/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./public/**/*.{html,js}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        sanFrancisco: "url('../public/img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('../public/img/sanFranciscoDesktop.jpg')",
        yosemite: "url('../public/img/yosemite.jpg')",
        LA: "url('../public/img/LA.jpg')",
        seattle: "url('../public/img/seattle.jpg')",
        new_york: "url('../public/img/new_york.jpg')",
        norway: "url('../public/img/norway.jpg')",
        sydney: "url('../public/img/sydney.jpg')",
        miami: "url('../public/img/miami.jpg')",
        switzerland: "url('../public/img/switzerland.jpg')",
        bali: "url('../public/img/bali.jpg')",
        chicago: "url('../public/img/chicago.jpg')",
        iceland: "url('../public/img/iceland.jpg')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#CC2D4A",
        secondary: "#8fA206",
        tertiary: "#61AEC9",
      }),
      textColor: (theme) => ({
        ...theme("colors"),
        primary: "#CC2D4A",
        secondary: "#8FA206",
        tertiary: "#61AEC9",
      }),
      fontFamily: {
        Montserrat: ["Monserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

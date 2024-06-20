/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      btn_dark: "#1B1B1B",
      heading: "#121212",
      ...colors,
    },
    fontFamily: {
      sans: ["Montserrat"],
    },
    extend: {},
  },
  plugins: [],
};

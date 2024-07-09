/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#EFF5FF",
        borderColor: "#D6D9E6",
        denim: "#022959",
        grey: "#9699AA",
        lightBlue: "#ABBCFF",
        lightGrey: "#D6D9E6",
        orange: "#FFAF7E",
        pink: "#F9818E",
        purple: "#483EFF",
        redError: "#EE374A",
        skyBlue: "#BEE2FD",
        veryLightGrey: "#F8F9FF",
      },

      fontFamily: {
        primary: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};

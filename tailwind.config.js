/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      primary: "#0040f",
      secondary: "#00f6ff",
      lightWhite: "rgba (255, 255, 255, 0.7)",
      lightBlue: "rgba(9, 151, 124, 0.1)",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  screens: {
    xs: "488px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
  plugins: [],
};

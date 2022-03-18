const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      darkPink: "#CF00D3",
      lightPink: "#FD89FF",
      neon: "#D8FF86",
      white: "#FFF",
      black: "#000",
    },
    screens: {
      sm: "744px",
      md: "1512px",
      lg: "2560px",
    },
    spacing: {
      0: 0,
      1: "1rem",
      2: "2rem",
      3: "3rem",
      4: "4rem",
      5: "5rem",
      6: "6rem",
      7: "7rem",
      8: "12rem",
      9: "15rem",
      10: "28rem",
      11: "32rem",
    },
    fontFamily: {
      grotesque: ["Grotesque6", ...defaultTheme.fontFamily.sans],
      david: ["David", ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};

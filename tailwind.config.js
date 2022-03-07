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
    spacing: {
      0: 0,
      16: "1rem",
      32: "2rem",
      48: "3rem",
      64: "4rem",
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

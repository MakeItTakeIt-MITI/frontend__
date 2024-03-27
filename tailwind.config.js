/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "320px",
      tablet: "600px",
      laptop: "1024px",
      desktop: "1280px",
    },
    colors: {
      white: "#fff",
      black: "#000",
      input: "#F7F7F7",
      disabled: "#e8e8e8",
      active: "#4065F6",
      error: "#E92C2C",
      // success: ""
    },
    extend: {},
  },
  plugins: [],
};

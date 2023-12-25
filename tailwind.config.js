/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "320px",
      tablet: "481px",
      laptop: "779px",
      largeMonitor: "1025px",
      tv: "1201px",
    },
    extend: {},
  },
  plugins: [],
};

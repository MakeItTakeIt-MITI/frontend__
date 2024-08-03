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
      "primary-black": "#171717",
      "secondary-black": "#262626",
      "primary-white": "#F1F1F1",
      "primary-green": "#151E1C",
    },

    extend: {},
  },
  plugins: [],
};

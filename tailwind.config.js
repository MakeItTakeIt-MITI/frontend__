/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "600px",
    },
    colors: {
      "primary-black": "#171717",
      "secondary-black": "#262626",
      "light-dark": "#343434",
      "dark-card": "#404040",
      "primary-white": "#F1F1F1",
      "secondary-white": "#F5f5f5",
      "primary-green": "#151E1C",
      "primary-teal": "#7FEEF0",
    },

    extend: {},
  },
  plugins: [],
};

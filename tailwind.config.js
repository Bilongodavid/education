/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "gray-light": "#E5E5E5",
      "black-light": "#364356",
      "black-light-50": "#636D77",
      primary: "#5667FD",
      light: "#ffff",
      pink: "#E8DBDB",
    },
  },
  plugins: [],
};

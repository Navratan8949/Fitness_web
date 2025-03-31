/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "midnight-black": "#1A1A2D",
        "deep-maroon": "#3B1C32",
        "dark-purple": "#6A1E55",
        "muted-pink": "#A64D79",
      },
      backgroundImage: {
        "midnight-maroon": "linear-gradient(to right, #1A1A2D, #3B1C32)",
        "maroon-purple": "linear-gradient(to right, #3B1C32, #6A1E55)",
        "purple-pink": "linear-gradient(to right, #6A1E55, #A64D79)",
      },
    },
  },
  plugins: [],
};

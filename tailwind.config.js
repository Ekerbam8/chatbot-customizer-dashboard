/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#3b82f6",
        },
        green: {
          500: "#22c55e",
        },
        pink: {
          500: "#ec4899",
        },
        purple: {
          500: "#8b5cf6",
        },
        orange: {
          500: "#f97316",
        },
      },
    },
  },
  plugins: [],
};

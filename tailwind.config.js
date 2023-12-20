/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        container: "#f4f4f6",
      },
    },
  },
  plugins: [],
};

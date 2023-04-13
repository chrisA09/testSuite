/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js}"],
  theme: {
    extend: {},
    colors: {
      "gr-100": "hsl(171,28,60,50%)",
      "gr-200": "hsl(171,58,28,65%)",
      "gr-300": "#1E7164",
      "gr-400": "#085352",
    },
    screens: {
      sm: "480px",
      md: "769px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: ["Roboto Slab", "serif"],
  },
  plugins: [],
};

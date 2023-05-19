/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html"],
  theme: {
    extend: {},
    colors: {
      "gr-200": "hsla(171, 58%, 28%, 0.65)",
      "gr-300": "#1E7164",
      "gr-400": "#085352",
      magnolia: "#F9F5FF",
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

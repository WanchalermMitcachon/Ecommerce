/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        overlay: "rgba(0, 0, 0, 0.7)",
        black: "#1D2026",
        gray: "#69707D",
        border: "#E4E9F2",
        orange: "#FF7E1B",
        "dark-gray": "#B6BCC8",
        "light-gray": "#F6F8FD",
        "light-orange": "#FFEEE2",
        "very-light-orange": "#FFAB6A",
      },
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },
      screens: {
        md: "768px",
        lg: "1180px",
      },
    },
  },
  plugins: [],
};

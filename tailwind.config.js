/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.jsx", "./src/**/*.jsx", "index.html", "./src/**/**/*.jsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f97316",
      },
      fontFamily: {
        Sans: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        spin: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};

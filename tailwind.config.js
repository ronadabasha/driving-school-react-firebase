/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ds-black": "#111117",
        "ds-red": "#EC2526",
        "ds-grey": "#6D7076",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      maxWidth: {
        "8xl": "1440px",
      },
    },
  },
  plugins: [],
};

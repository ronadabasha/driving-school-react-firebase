/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ds-black": "#111117",
        "ds-red": "#EC2526",
        "ds-grey": "#6D7076",
        "ds-grey-light": "#F5F5F5",
      },
      backgroundImage: {
        pageBanner: "url('/public/banner-driving.jpg')",
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

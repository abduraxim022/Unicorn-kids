/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("tailwindcss-animate"),
    function ({ addVariant }) {
      addVariant('custom-variant', '&:custom'); 
    },
  ],
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
         "marquee-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-y": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        "marquee-horizontal": "marquee-x var(--duration) infinite linear",
        "marquee-vertical": "marquee-y var(--duration) linear infinite",
        },
    },
  },
  
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      calibri: ["calibri"],
    },
    extend: {
      colors: {
        "bright-red": "#B50100",
        crimson: "#D6231F",
        mercury: "#E5E5E5",
        "silver-chlic": "#A7A7A7",
      },
      keyframes: {
        "bounce-horizontal": {
          "0%, 100%": {
            transform: "translateX(-25%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      animation: {
        "bounce-horizontal": "bounce-horizontal 1s infinite",
      },
    },
  },
  plugins: [],
};

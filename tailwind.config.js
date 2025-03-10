/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      calibri: ["calibri", "IRANSansX"],
    },
    extend: {
      colors: {
        malibu: "#6EB7F1",
        sail: "#BCE2F9",
        RobinEggBlue: "#00BBB4",
        alto: "#E0E0E0",
        prussianBlue: "#002147",
        cornflowerBlue: "#559EEE",
        "silver-chlic": "#A7A7A7",
        endeavour: "#0055B8",
        saffaron: "#F3B232",
        irishCoffee: "#672F25",
        torchRed: "#EA0029",
        superNova: "#FFCB05",
        mercury: "#e5e5e5",
        goldenrod: "#FFD66F",
        concrete: "#F3F3F3",
        gallery: "#EEEEEE",
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

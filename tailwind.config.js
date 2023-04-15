/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./css/tailwind.css"],
  theme: {
    colors: {
      "dark-blue-grey": "#666CA3",
      "yankees-blue": "#13183F",
      "roman-silver": "#83869A",
      "sasquatch-socks": "#F74780",
      "carnation-pink": "#FFA7C3",
      white: "#FFFFFF",
      frostbite: "#F02AA6",
      "outrageous-orange": "#FF6F48",
      "ultramarine-blue": "#4851FF",
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },
    screens: {
      mobile: "375px",
      // => @media (min-width: 375px) { ... }
      tablet: "768px",
      // => @media (min-width: 768px) { ... }
      dekstop: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [],
};

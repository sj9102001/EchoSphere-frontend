import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#11151C",
        primaryColor: "#212D40",
        secondaryColor: "#364156",
        accentColor: "#D66853",
        secAccentColor: "#C05D4A",
        textColor: "#f3e3d3",
        placeholderColor: "#bfb1a3",
        successColor: "#29bf12",
        errorColor: "#f21b3f",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        ".no-scrollbar": {
          "-ms-overflow-style": "none", // IE and Edge
          "scrollbar-width": "none", // Firefox
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none", // Safari and Chrome
        },
      });
    }),
  ],
};
export default config;

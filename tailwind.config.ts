import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#242038',
        primaryColor: '#725ac1',
        secondaryColor: '#8d86c9',
        accentColor: '#ffd60a',
        textColor: '#f7ece1',
        successColor: '#29bf12',
        errorColor: '#f21b3f'
      }
    },
  },
  plugins: [],
};
export default config;

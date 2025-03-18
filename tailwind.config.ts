import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1240px',
      '2xl': '1240px'
    },
    extend: {
      colors: {
        light: '#FFFFFF',
        gray_bg: '#292929',
        dark_bg: '#212121',
        blue_txt: '#00ADEF'
      },
    },
  },
  plugins: [],
} satisfies Config;

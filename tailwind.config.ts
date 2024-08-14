import { Smokum } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'green':"#27AE60",
        'gray2': "#828282",
        'gray' : "#535353",
        'black1' :"#202020",
        'black' :"#171717"
      },
    },
  },
  plugins: [],
};
export default config;

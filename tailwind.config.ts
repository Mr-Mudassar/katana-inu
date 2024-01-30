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
        Default: "#F9C306",
        CustomLight : "#D0D4EA",
        Background : "#0E0C15"
      },
    },
  },
  plugins: [],
};

export default config;

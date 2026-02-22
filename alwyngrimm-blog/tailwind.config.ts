import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        gold: {
          100: "#f5e6b3",
          200: "#e8d8a8",
          300: "#caa94f",
          400: "#f3e6c8",
          500: "#ffd000",
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { textShadow: "0 0 25px rgba(255,215,120,0.35)" },
          "50%": { textShadow: "0 0 45px rgba(255,215,120,0.7)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease forwards",
        glow: "glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

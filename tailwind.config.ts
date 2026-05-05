import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: "#00BFFF",
          "cyan-dark": "#0099CC",
          "cyan-light": "#7FDFFF",
          blue: "#0047FF",
          "blue-dark": "#0033CC",
          lime: "#AADD00",
          dark: "#0A0F1E",
          "dark-card": "#111827",
          "dark-border": "#1E293B",
        },
      },
      fontFamily: {
        arabic: ["var(--font-arabic)", "sans-serif"],
        latin: ["var(--font-latin)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, #0A0F1E 0%, #0D1B3E 50%, #0A1628 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(0,191,255,0.1) 0%, rgba(0,71,255,0.05) 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulse_slow: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "glow-cyan": "0 0 30px rgba(0,191,255,0.3)",
        "glow-blue": "0 0 30px rgba(0,71,255,0.3)",
        "card-hover": "0 20px 60px rgba(0,191,255,0.15)",
      },
    },
  },
  plugins: [],
};
export default config;

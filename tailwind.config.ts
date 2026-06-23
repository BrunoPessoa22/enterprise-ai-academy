import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        ink: {
          950: "#0a0a0f",
          900: "#0f1015",
          800: "#16171f",
          700: "#1d1f29",
          600: "#2a2c38",
        },
        brand: {
          DEFAULT: "#5b6cff",
          50: "#eef0ff",
          100: "#dfe3ff",
          200: "#c4caff",
          300: "#a0a8ff",
          400: "#7c84ff",
          500: "#5b6cff",
          600: "#4149f0",
          700: "#3539cc",
          800: "#2d31a3",
          900: "#2a2f80",
        },
        gold: {
          DEFAULT: "#d9b26a",
          400: "#e3c489",
          500: "#d9b26a",
          600: "#c4994a",
        },
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.08)",
        glow: "0 0 0 1px rgba(91,108,255,0.25), 0 8px 40px rgba(91,108,255,0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;

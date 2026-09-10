import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#050507",
        panel: "#0b0b10",
        line: "rgba(255,255,255,0.08)",
        accent: "#7c5cff",
        accent2: "#38bdf8",
        mint: "#34d399",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-grotesk)", "var(--font-inter)", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        float: "float 7s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 50%" },
          "100%": { backgroundPosition: "-200% 50%" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

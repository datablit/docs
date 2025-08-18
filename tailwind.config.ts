import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        surfacePanel: "var(--color-surface-panel)",
        darkback: "var( --color-dark-background)",
      },
      fontSize: {
        small: "0.6875rem",
        base: "0.9375rem",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      neutral: {
        200: "#F6F9FE",
        300: "#d4d4d4",
      },
      slate: {
        400: "#94a3b8",
        500: "#64748b",
        800: "#1e293b",
      },
      transparent: colors.transparent,
      white: colors.white,
      black: colors.black,
      red: {
        600: "#dc2626",
      },
      green: {
        500: "#4ade80",
      },
      blue: {
        500: "#3b82f6",
      },
      purple: {
        500: "#a855f7",
      },
    },
    blur: {
      xs: "2px",
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;

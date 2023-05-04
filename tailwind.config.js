const { colors } = require("tailwindcss/colors")
const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./ui/**/*.{ts,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        // Primary
        primary: {
          50: "#e6f0f6",
          100: "#cde1ec",
          200: "#9ac3d9",
          300: "#81b4d0",
          400: "#1c78aa",
          500: "#0369A1",
          600: "#035f91",
          700: "#025481",
          800: "#024a71",
          900: "#023551",
        },
        // Secondary
        secondary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        // Neutral
        neutral: {
          50: "#f5f5f5",
          100: "#ebebeb",
          200: "#e1e1e1",
          300: "#d7d7d7",
          400: "#cccccc",
          500: "#b3b3b3",
          600: "#999999",
          700: "#808080",
          800: "#666666",
          900: "#4d4d4d",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
}

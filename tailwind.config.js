/* eslint-disable @typescript-eslint/no-var-requires */
const { pick, omit } = require("lodash")
const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      extend: {
        backgroundImage: {
          "banner-1":
            "url('https://firebasestorage.googleapis.com/v0/b/tpm-techs.appspot.com/o/banner-1.jpeg?alt=media&token=0d2c26d9-4d3a-497b-bf55-a8e1be6bc35d')",
        },
      },
      colors: {
        // Primary color: Flat Blue
        primary: {
          DEFAULT: "#3172A9",
          50: "#ebf3f9",
          100: "#c4dbee",
          200: "#9cc2e2",
          300: "#75aad7",
          400: "#4d92cb",
          500: "#3478b2",
          600: "#285d8a",
          700: "#1d4363",
          800: "#11283b",
          900: "#060d14",
        },

        mabel: {
          DEFAULT: "#D9F3FF",
        },

        // Secondary color: Moonstone Blue
        moonstone: {
          DEFAULT: "#6DA6E1",
          50: "#eaf2fb",
          100: "#c0d8f2",
          200: "#95bfe9",
          300: "#6ba5e1",
          400: "#418bd8",
          500: "#2771be",
          600: "#1e5894",
          700: "#163f6a",
          800: "#0d263f",
          900: "#040d15",
        },

        // Secondary color: Gamboge
        gamboge: {
          DEFAULT: "#E09F1F",
          50: "#fcf5e9",
          100: "#f6e2bc",
          200: "#efcf8f",
          300: "#e9bc62",
          400: "#e3a935",
          500: "#ca8f1c",
          600: "#9d6f16",
          700: "#704f10",
          800: "#433009",
          900: "#161003",
        },
      },
      fontFamily: {
        body: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      minHeight: {
        ...defaultTheme.height,
      },
      minWidth: {
        ...defaultTheme.width,
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}

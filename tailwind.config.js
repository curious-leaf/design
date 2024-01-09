/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      current: "current",
      transparent: "transparent",
      white: "#FFFFFF",
      gray: {
        100: "#F6F8FA",
        200: "#E2E4E9",
        300: "#CDD0D5",
        400: "#868C98",
        500: "#525866",
        600: "#31353F",
        700: "#20232D",
        800: "#161922",
        900: "#0A0D14",
      },
      blue: {
        lighter: "#EBF1FF",
        light: "#C2D6FF",
        DEFAULT: "#375DFB",
        dark: "#253EA7",
        darker: "#162664",
      },
      orange: {
        lighter: "#FEF3EB",
        light: "#FFDAC2",
        DEFAULT: "#F17B2C",
        dark: "#C2540A",
        darker: "#6E330C",
      },
      yellow: {
        lighter: "#FEF7EC",
        light: "#FBDFB1",
        DEFAULT: "#F2AE40",
        dark: "#B47818",
        darker: "#693D11",
      },
      red: {
        lighter: "#FDEDF0",
        light: "#F8C9D2",
        DEFAULT: "#DF1C41",
        dark: "#AF1D38",
        darker: "#710E21",
      },
      green: {
        lighter: "#EFFAF6",
        light: "#CBF5E5",
        DEFAULT: "#38C793",
        dark: "#2D9F75",
        darker: "#176448",
      },
      purple: {
        lighter: "#EEEBFF",
        light: "#CAC2FF",
        DEFAULT: "#6E3FF3",
        dark: "#5A36BF",
        darker: "#2B1664",
      },
      pink: {
        lighter: "#FDEBFF",
        light: "#F9C2FF",
        DEFAULT: "#E255F2",
        dark: "#9C23A9",
        darker: "#620F6C",
      },
      teal: {
        lighter: "#EBFAFF",
        light: "#C2EFFF",
        DEFAULT: "#35B9E9",
        dark: "#1F87AD",
        darker: "#164564",
      },
    },

    extend: {
      screens: {
        xs: "480px",
      },
      borderColor: {
        DEFAULT: "#E2E4E8",
      },
      fontSize: {
        xxxs: ["0.625rem", "0.875rem"],
        xxs: ["0.75rem", "1rem"],
        xs: ["0.8125rem", "1.125rem"],
      },
      keyframes: {
        shimmer: {
          from: { left: "-90%" },
          to: { left: "90%" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        shimmer: "shimmer 1.25s cubic-bezier(0.5, 0.25, 0.25, 0.5) infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  /* eslint-disable global-require */
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
    require("tailwindcss-animate"),
  ],
}
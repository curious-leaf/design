import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"

const colorTheme = {
  blue: {
    lighter: "#e6ecf8",
    light: "#c8d7ef",
    DEFAULT: "#3b71bc",
    dark: "#244680",
    darker: "#20355a",
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
} as const

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  future: { hoverOnlyWhenSupported: true },

  theme: {
    colors: {
      transparent: colors.transparent,
      current: colors.current,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      primary: colorTheme.orange,
      ...colorTheme,
    },
    fontSize: {
      "3xs": ["11px", "12px"],
      "2xs": ["12px", "14px"],
      xs: ["13px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["18px", "26px"],
      xl: ["20px", "28px"],
      "2xl": ["24px", "32px"],
      "3xl": ["32px", "40px"],
      "4xl": ["40px", "48px"],
      "5xl": ["48px", "56px"],
      "6xl": ["56px", "64px"],
    },
    letterSpacing: {
      normal: "0",
      0.5: "0.005em",
      1: "0.01em",
      1.5: "0.015em",
      2: "0.02em",
      4: "0.04em",
      6: "0.06em",
    },

    extend: {
      screens: {
        xs: "480px",
      },
      borderColor: {
        DEFAULT: "#E2E4E8",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      lineHeight: {
        icon: "1.4285em",
      },
      size: {
        icon: "1.4285em",
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.gray[500]"),
            "--tw-prose-headings": theme("colors.gray[900]"),
          },
        },
      }),
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
} satisfies Config

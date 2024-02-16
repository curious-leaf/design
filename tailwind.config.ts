import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"
import plugin from "tailwindcss/plugin"

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
      gray: colors.zinc,
      primary: colorTheme.orange,
      ...colorTheme,
    },
    fontSize: {
      "3xs": ["clamp(0.688rem, 0.688rem + 0vw, 0.688rem)", "1.25"], // 11px
      "2xs": ["clamp(0.688rem, 0.663rem + 0.096vw, 0.75rem)", "1.33"], // 12px
      xs: ["clamp(0.75rem, 0.726rem + 0.096vw, 0.813rem)", "1.4"], // 13px
      sm: ["clamp(0.813rem, 0.788rem + 0.096vw, 0.875rem)", "1.5"], // 14px
      base: ["clamp(0.875rem, 0.827rem + 0.192vw, 1rem)", "1.6"], // 16px
      lg: ["clamp(1.05rem, 0.992rem + 0.231vw, 1.2rem)", "1.5"], // 19.2px
      xl: ["clamp(1.26rem, 1.191rem + 0.277vw, 1.44rem)", "1.4"], // 23.04px
      "2xl": ["clamp(1.512rem, 1.429rem + 0.332vw, 1.728rem)", "1.33"], // 27.684px
      "3xl": ["clamp(1.814rem, 1.714rem + 0.4vw, 2.074rem)", "1.25"], // 33.177px
      "4xl": ["clamp(2.177rem, 2.057rem + 0.478vw, 2.488rem)", "1.2"], // 39.813px
      "5xl": ["clamp(2.613rem, 2.47rem + 0.574vw, 2.986rem)", "1.167"], // 47.77px
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
            "--tw-prose-body": theme("colors.gray[700]"),
            "--tw-prose-headings": theme("colors.gray[900]"),
          },
        },
      }),

      gridColumns: {
        DEFAULT: "16rem",
        xxs: "10rem",
        xs: "12rem",
        sm: "14rem",
        md: "16rem",
        lg: "18rem",
        xl: "20rem",
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

  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
    require("tailwindcss-animate"),

    // Custom grid utilities
    plugin(({ addUtilities, matchUtilities, theme }) => {
      matchUtilities(
        {
          "grid-auto-fill": (value) => ({
            gridTemplateColumns: `repeat(auto-fill, minmax(${value}, 1fr))`,
          }),
          "grid-auto-fit": (value) => ({
            gridTemplateColumns: `repeat(auto-fit, minmax(${value}, 1fr))`,
          }),
        },
        { values: theme("gridColumns") },
      )
      addUtilities({
        ".scrollbar-none": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",

          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      })
    }),
  ],
} satisfies Config

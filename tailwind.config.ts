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
    DEFAULT: "#dc2626",
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
      black: "#0E1216",
      white: colors.white,
      transparent: colors.transparent,
      current: colors.current,
      gray: colors.neutral,
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
      lineHeight: {
        icon: "1.4285em",
      },
      size: {
        icon: "1.4285em",
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": colors.gray[700],
            "--tw-prose-headings": colors.gray[900],
          },
        },
      },

      boxShadow: {
        outline: `0 0 0 1px ${colors.gray["200"]}`,
      },

      backgroundImage: {
        radial: `radial-gradient(circle, ${colors.gray["200"]} 1px, transparent 1px)`,
      },

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
    plugin(({ addUtilities, matchUtilities, addBase, theme }) => {
      matchUtilities(
        {
          "grid-auto-fill": value => ({
            gridTemplateColumns: `repeat(auto-fill, minmax(${value}, 1fr))`,
          }),
          "grid-auto-fit": value => ({
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
      addBase({
        ".rounded-smooth": {
          clipPath:
            "polygon(100% 50%, 100% 56.6%, 100% 59.3%, 100% 61.4%, 99.9% 63.2%, 99.9% 64.8%, 99.9% 66.2%, 99.8% 67.5%, 99.8% 68.7%, 99.7% 69.8%, 99.6% 70.8%, 99.5% 71.8%, 99.5% 72.8%, 99.4% 73.7%, 99.3% 74.6%, 99.1% 75.4%, 99% 76.3%, 98.9% 77%, 98.8% 77.8%, 98.6% 78.5%, 98.5% 79.2%, 98.3% 79.9%, 98.1% 80.6%, 98% 81.3%, 97.8% 81.9%, 97.6% 82.5%, 97.4% 83.1%, 97.2% 83.7%, 97% 84.3%, 96.8% 84.8%, 96.5% 85.4%, 96.3% 85.9%, 96% 86.4%, 95.8% 86.9%, 95.5% 87.4%, 95.3% 87.9%, 95% 88.3%, 94.7% 88.8%, 94.4% 89.2%, 94.1% 89.7%, 93.8% 90.1%, 93.4% 90.5%, 93.1% 90.9%, 92.8% 91.3%, 92.4% 91.7%, 92% 92%, 91.7% 92.4%, 91.3% 92.8%, 90.9% 93.1%, 90.5% 93.4%, 90.1% 93.8%, 89.7% 94.1%, 89.2% 94.4%, 88.8% 94.7%, 88.3% 95%, 87.9% 95.3%, 87.4% 95.5%, 86.9% 95.8%, 86.4% 96%, 85.9% 96.3%, 85.4% 96.5%, 84.8% 96.8%, 84.3% 97%, 83.7% 97.2%, 83.1% 97.4%, 82.5% 97.6%, 81.9% 97.8%, 81.3% 98%, 80.6% 98.1%, 79.9% 98.3%, 79.2% 98.5%, 78.5% 98.6%, 77.8% 98.8%, 77% 98.9%, 76.3% 99%, 75.4% 99.1%, 74.6% 99.3%, 73.7% 99.4%, 72.8% 99.5%, 71.8% 99.5%, 70.8% 99.6%, 69.8% 99.7%, 68.7% 99.8%, 67.5% 99.8%, 66.2% 99.9%, 64.8% 99.9%, 63.2% 99.9%, 61.4% 100%, 59.3% 100%, 56.6% 100%, 50% 100%, 43.4% 100%, 40.7% 100%, 38.6% 100%, 36.8% 99.9%, 35.2% 99.9%, 33.8% 99.9%, 32.5% 99.8%, 31.3% 99.8%, 30.2% 99.7%, 29.2% 99.6%, 28.2% 99.5%, 27.2% 99.5%, 26.3% 99.4%, 25.4% 99.3%, 24.6% 99.1%, 23.7% 99%, 23% 98.9%, 22.2% 98.8%, 21.5% 98.6%, 20.8% 98.5%, 20.1% 98.3%, 19.4% 98.1%, 18.7% 98%, 18.1% 97.8%, 17.5% 97.6%, 16.9% 97.4%, 16.3% 97.2%, 15.7% 97%, 15.2% 96.8%, 14.6% 96.5%, 14.1% 96.3%, 13.6% 96%, 13.1% 95.8%, 12.6% 95.5%, 12.1% 95.3%, 11.7% 95%, 11.2% 94.7%, 10.8% 94.4%, 10.3% 94.1%, 9.9% 93.8%, 9.5% 93.4%, 9.1% 93.1%, 8.7% 92.8%, 8.3% 92.4%, 8% 92%, 7.6% 91.7%, 7.2% 91.3%, 6.9% 90.9%, 6.6% 90.5%, 6.2% 90.1%, 5.9% 89.7%, 5.6% 89.2%, 5.3% 88.8%, 5% 88.3%, 4.7% 87.9%, 4.5% 87.4%, 4.2% 86.9%, 4% 86.4%, 3.7% 85.9%, 3.5% 85.4%, 3.2% 84.8%, 3% 84.3%, 2.8% 83.7%, 2.6% 83.1%, 2.4% 82.5%, 2.2% 81.9%, 2% 81.3%, 1.9% 80.6%, 1.7% 79.9%, 1.5% 79.2%, 1.4% 78.5%, 1.2% 77.8%, 1.1% 77%, 1% 76.3%, 0.9% 75.4%, 0.7% 74.6%, 0.6% 73.7%, 0.5% 72.8%, 0.5% 71.8%, 0.4% 70.8%, 0.3% 69.8%, 0.2% 68.7%, 0.2% 67.5%, 0.1% 66.2%, 0.1% 64.8%, 0.1% 63.2%, 0% 61.4%, 0% 59.3%, 0% 56.6%, 0% 50%, 0% 43.4%, 0% 40.7%, 0% 38.6%, 0.1% 36.8%, 0.1% 35.2%, 0.1% 33.8%, 0.2% 32.5%, 0.2% 31.3%, 0.3% 30.2%, 0.4% 29.2%, 0.5% 28.2%, 0.5% 27.2%, 0.6% 26.3%, 0.7% 25.4%, 0.9% 24.6%, 1% 23.7%, 1.1% 23%, 1.2% 22.2%, 1.4% 21.5%, 1.5% 20.8%, 1.7% 20.1%, 1.9% 19.4%, 2% 18.7%, 2.2% 18.1%, 2.4% 17.5%, 2.6% 16.9%, 2.8% 16.3%, 3% 15.7%, 3.2% 15.2%, 3.5% 14.6%, 3.7% 14.1%, 4% 13.6%, 4.2% 13.1%, 4.5% 12.6%, 4.7% 12.1%, 5% 11.7%, 5.3% 11.2%, 5.6% 10.8%, 5.9% 10.3%, 6.2% 9.9%, 6.6% 9.5%, 6.9% 9.1%, 7.2% 8.7%, 7.6% 8.3%, 8% 8%, 8.3% 7.6%, 8.7% 7.2%, 9.1% 6.9%, 9.5% 6.6%, 9.9% 6.2%, 10.3% 5.9%, 10.8% 5.6%, 11.2% 5.3%, 11.7% 5%, 12.1% 4.7%, 12.6% 4.5%, 13.1% 4.2%, 13.6% 4%, 14.1% 3.7%, 14.6% 3.5%, 15.2% 3.2%, 15.7% 3%, 16.3% 2.8%, 16.9% 2.6%, 17.5% 2.4%, 18.1% 2.2%, 18.7% 2%, 19.4% 1.9%, 20.1% 1.7%, 20.8% 1.5%, 21.5% 1.4%, 22.2% 1.2%, 23% 1.1%, 23.7% 1%, 24.6% 0.9%, 25.4% 0.7%, 26.3% 0.6%, 27.2% 0.5%, 28.2% 0.5%, 29.2% 0.4%, 30.2% 0.3%, 31.3% 0.2%, 32.5% 0.2%, 33.8% 0.1%, 35.2% 0.1%, 36.8% 0.1%, 38.6% 0%, 40.7% 0%, 43.4% 0%, 50% 0%, 56.6% 0%, 59.3% 0%, 61.4% 0%, 63.2% 0.1%, 64.8% 0.1%, 66.2% 0.1%, 67.5% 0.2%, 68.7% 0.2%, 69.8% 0.3%, 70.8% 0.4%, 71.8% 0.5%, 72.8% 0.5%, 73.7% 0.6%, 74.6% 0.7%, 75.4% 0.9%, 76.3% 1%, 77% 1.1%, 77.8% 1.2%, 78.5% 1.4%, 79.2% 1.5%, 79.9% 1.7%, 80.6% 1.9%, 81.3% 2%, 81.9% 2.2%, 82.5% 2.4%, 83.1% 2.6%, 83.7% 2.8%, 84.3% 3%, 84.8% 3.2%, 85.4% 3.5%, 85.9% 3.7%, 86.4% 4%, 86.9% 4.2%, 87.4% 4.5%, 87.9% 4.7%, 88.3% 5%, 88.8% 5.3%, 89.2% 5.6%, 89.7% 5.9%, 90.1% 6.2%, 90.5% 6.6%, 90.9% 6.9%, 91.3% 7.2%, 91.7% 7.6%, 92% 8%, 92.4% 8.3%, 92.8% 8.7%, 93.1% 9.1%, 93.4% 9.5%, 93.8% 9.9%, 94.1% 10.3%, 94.4% 10.8%, 94.7% 11.2%, 95% 11.7%, 95.3% 12.1%, 95.5% 12.6%, 95.8% 13.1%, 96% 13.6%, 96.3% 14.1%, 96.5% 14.6%, 96.8% 15.2%, 97% 15.7%, 97.2% 16.3%, 97.4% 16.9%, 97.6% 17.5%, 97.8% 18.1%, 98% 18.7%, 98.1% 19.4%, 98.3% 20.1%, 98.5% 20.8%, 98.6% 21.5%, 98.8% 22.2%, 98.9% 23%, 99% 23.7%, 99.1% 24.6%, 99.3% 25.4%, 99.4% 26.3%, 99.5% 27.2%, 99.5% 28.2%, 99.6% 29.2%, 99.7% 30.2%, 99.8% 31.3%, 99.8% 32.5%, 99.9% 33.8%, 99.9% 35.2%, 99.9% 36.8%, 100% 38.6%, 100% 40.7%, 100% 43.4%)",
        },
      })
    }),
  ],
} satisfies Config

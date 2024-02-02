import { cva } from "../../shared"

export const featureCardVariants = cva({
  base: "relative flex flex-wrap items-center gap-x-2 gap-y-3 p-4 rounded-lg border border-transparent text-start",

  variants: {
    theme: {
      primary: "",
      secondary: "",
    },
    variant: {
      solid: "",
      soft: "",
      outline: "",
    },
  },

  compoundVariants: [
    // Primary
    { theme: "primary", variant: "solid", class: "bg-blue text-white" },
    { theme: "primary", variant: "soft", class: "bg-blue-lighter" },
    { theme: "primary", variant: "outline", class: "bg-white border-primary-light" },

    // Secondary
    { theme: "secondary", variant: "solid", class: "bg-gray-700 text-white" },
    { theme: "secondary", variant: "soft", class: "bg-gray-100" },
    { theme: "secondary", variant: "outline", class: "bg-white border-gray-200" },
  ],

  defaultVariants: {
    theme: "secondary",
    variant: "soft",
  },
})

export const featureCardCloserVariants = cva({
  base: "absolute top-2.5 right-2.5 p-1.5 rounded-md text-xs hover:opacity-75",
})

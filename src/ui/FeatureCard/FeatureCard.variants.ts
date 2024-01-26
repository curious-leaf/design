import { cva } from "../../shared"

export const featureCardVariants = cva({
  base: "relative flex flex-wrap items-center gap-x-2.5 gap-y-3 p-4 rounded-lg border border-transparent text-start",

  variants: {
    theme: {
      blue: "",
      orange: "",
      red: "",
      yellow: "",
      green: "",
      purple: "",
      pink: "",
      teal: "",
      gray: "",
    },
    variant: {
      solid: "",
      soft: "",
      outline: "border-gray-200",
    },
  },

  compoundVariants: [
    // Blue
    { theme: "blue", variant: "solid", class: "bg-blue text-white" },
    { theme: "blue", variant: "soft", class: "bg-blue-lighter" },

    // Orange
    { theme: "orange", variant: "solid", class: "bg-orange text-white" },
    { theme: "orange", variant: "soft", class: "bg-orange-lighter" },

    // Red
    { theme: "red", variant: "solid", class: "bg-red text-white" },
    { theme: "red", variant: "soft", class: "bg-red-lighter" },

    // Yellow
    { theme: "yellow", variant: "solid", class: "bg-yellow text-white" },
    { theme: "yellow", variant: "soft", class: "bg-yellow-lighter" },

    // Green
    { theme: "green", variant: "solid", class: "bg-green text-white" },
    { theme: "green", variant: "soft", class: "bg-green-lighter" },

    // Purple
    { theme: "purple", variant: "solid", class: "bg-purple text-white" },
    { theme: "purple", variant: "soft", class: "bg-purple-lighter" },

    // Pink
    { theme: "pink", variant: "solid", class: "bg-pink text-white" },
    { theme: "pink", variant: "soft", class: "bg-pink-lighter" },

    // Teal
    { theme: "teal", variant: "solid", class: "bg-teal text-white" },
    { theme: "teal", variant: "soft", class: "bg-teal-lighter" },

    // Gray
    { theme: "gray", variant: "solid", class: "bg-gray-700 text-white" },
    { theme: "gray", variant: "soft", class: "bg-gray-100" },
  ],

  defaultVariants: {
    theme: "gray",
    variant: "soft",
  },
})

export const featureCardCloserVariants = cva({
  base: "absolute top-2.5 right-2.5 p-1.5 rounded-md text-xs hover:opacity-75",
})

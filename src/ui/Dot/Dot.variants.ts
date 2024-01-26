import { cva } from "../../shared"

export const dotVariants = cva({
  base: "block rounded-full border border-transparent",

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
      outline: "",
    },
    size: {
      sm: "size-1.5",
      md: "size-2",
      lg: "size-2.5",
    },
  },

  compoundVariants: [
    // Blue
    { theme: "blue", variant: "solid", class: "bg-blue" },
    { theme: "blue", variant: "soft", class: "bg-blue-light" },
    { theme: "blue", variant: "outline", class: "border-blue-dark" },

    // Orange
    { theme: "orange", variant: "solid", class: "bg-orange" },
    { theme: "orange", variant: "soft", class: "bg-orange-light" },
    { theme: "orange", variant: "outline", class: "border-orange-dark" },

    // Red
    { theme: "red", variant: "solid", class: "bg-red" },
    { theme: "red", variant: "soft", class: "bg-red-light" },
    { theme: "red", variant: "outline", class: "border-red-dark" },

    // Yellow
    { theme: "yellow", variant: "solid", class: "bg-yellow" },
    { theme: "yellow", variant: "soft", class: "bg-yellow-light" },
    { theme: "yellow", variant: "outline", class: "border-yellow-dark" },

    // Green
    { theme: "green", variant: "solid", class: "bg-green" },
    { theme: "green", variant: "soft", class: "bg-green-light" },
    { theme: "green", variant: "outline", class: "border-green-dark" },

    // Purple
    { theme: "purple", variant: "solid", class: "bg-purple" },
    { theme: "purple", variant: "soft", class: "bg-purple-light" },
    { theme: "purple", variant: "outline", class: "border-purple-dark" },

    // Pink
    { theme: "pink", variant: "solid", class: "bg-pink" },
    { theme: "pink", variant: "soft", class: "bg-pink-light" },
    { theme: "pink", variant: "outline", class: "border-pink-dark" },

    // Teal
    { theme: "teal", variant: "solid", class: "bg-teal" },
    { theme: "teal", variant: "soft", class: "bg-teal-light" },
    { theme: "teal", variant: "outline", class: "border-teal-dark" },

    // Gray
    { theme: "gray", variant: "solid", class: "bg-gray-700" },
    { theme: "gray", variant: "soft", class: "bg-gray-200" },
    { theme: "gray", variant: "outline", class: "border-gray-700" },
  ],

  defaultVariants: {
    theme: "gray",
    variant: "solid",
    size: "md",
  },
})

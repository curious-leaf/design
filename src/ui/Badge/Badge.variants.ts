import { cva } from "~/shared/cva"

export const badgeVariants = cva({
  base: [
    "relative inline-flex items-center justify-center gap-[0.375em] px-[0.5em] py-[0.25em]",
    "font-medium break-normal whitespace-nowrap border border-transparent text-center !leading-none",
  ],

  variants: {
    theme: {
      blue: "",
      orange: "",
      yellow: "",
      red: "",
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
      sm: "text-2xs",
      md: "text-xs",
      lg: "text-sm",
    },
    shape: {
      rounded: "rounded-md",
      pill: "rounded-full",
    },
  },

  compoundVariants: [
    // Blue
    { theme: "blue", variant: "solid", class: "bg-blue text-white" },
    { theme: "blue", variant: "soft", class: "bg-blue-light text-blue-darker" },
    { theme: "blue", variant: "outline", class: "border-blue-dark text-blue-dark" },

    // Orange
    { theme: "orange", variant: "solid", class: "bg-orange text-white" },
    { theme: "orange", variant: "soft", class: "bg-orange-light text-orange-darker" },
    { theme: "orange", variant: "outline", class: "border-orange-dark text-orange-dark" },

    // Red
    { theme: "red", variant: "solid", class: "bg-red text-white" },
    { theme: "red", variant: "soft", class: "bg-red-light text-red-darker" },
    { theme: "red", variant: "outline", class: "border-red-dark text-red-dark" },

    // Yellow
    { theme: "yellow", variant: "solid", class: "bg-yellow text-white" },
    { theme: "yellow", variant: "soft", class: "bg-yellow-light text-yellow-darker" },
    { theme: "yellow", variant: "outline", class: "border-yellow-dark text-yellow-dark" },

    // Green
    { theme: "green", variant: "solid", class: "bg-green text-white" },
    { theme: "green", variant: "soft", class: "bg-green-light text-green-darker" },
    { theme: "green", variant: "outline", class: "border-green-dark text-green-dark" },

    // Purple
    { theme: "purple", variant: "solid", class: "bg-purple text-white" },
    { theme: "purple", variant: "soft", class: "bg-purple-light text-purple-darker" },
    { theme: "purple", variant: "outline", class: "border-purple-dark text-purple-dark" },

    // Pink
    { theme: "pink", variant: "solid", class: "bg-pink text-white" },
    { theme: "pink", variant: "soft", class: "bg-pink-light text-pink-darker" },
    { theme: "pink", variant: "outline", class: "border-pink-dark text-pink-dark" },

    // Teal
    { theme: "teal", variant: "solid", class: "bg-teal text-white" },
    { theme: "teal", variant: "soft", class: "bg-teal-light text-teal-darker" },
    { theme: "teal", variant: "outline", class: "border-teal-dark text-teal-dark" },

    // Gray
    { theme: "gray", variant: "solid", class: "bg-gray-700 text-white" },
    { theme: "gray", variant: "soft", class: "bg-gray-100 text-gray-500" },
    { theme: "gray", variant: "outline", class: "border-gray-200 text-gray-500" },
  ],

  defaultVariants: {
    theme: "gray",
    variant: "solid",
    size: "sm",
    shape: "pill",
  },
})

export const badgeAffixVariants = cva({
  base: "-my-[0.044em] -mx-[0.25em] shrink-0 !size-[1.088em]",
})

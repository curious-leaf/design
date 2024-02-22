import { cva } from "../../shared"

export const badgeVariants = cva({
  base: [
    "relative inline-flex items-center justify-center px-[0.6em] py-[0.125em]",
    "font-medium break-normal whitespace-nowrap border border-transparent text-center leading-icon",
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
      outline: "bg-white",
    },
    size: {
      sm: "gap-[0.4ch] text-3xs",
      md: "gap-[0.5ch] text-2xs",
      lg: "gap-[0.6ch] text-xs",
    },
    shape: {
      rounded: "rounded",
      pill: "rounded-full",
    },
    isAffixOnly: {
      true: "px-[0.125em]",
    },
  },

  compoundVariants: [
    // Blue
    { theme: "blue", variant: "solid", class: "bg-blue text-white" },
    { theme: "blue", variant: "soft", class: "bg-blue-lighter text-blue-darker" },
    { theme: "blue", variant: "outline", class: "border-blue-dark/25 text-blue-dark" },

    // Orange
    { theme: "orange", variant: "solid", class: "bg-orange text-white" },
    { theme: "orange", variant: "soft", class: "bg-orange-lighter text-orange-darker" },
    { theme: "orange", variant: "outline", class: "border-orange-dark/25 text-orange-dark" },

    // Red
    { theme: "red", variant: "solid", class: "bg-red text-white" },
    { theme: "red", variant: "soft", class: "bg-red-lighter text-red-darker" },
    { theme: "red", variant: "outline", class: "border-red-dark/25 text-red-dark" },

    // Yellow
    { theme: "yellow", variant: "solid", class: "bg-yellow text-white" },
    { theme: "yellow", variant: "soft", class: "bg-yellow-lighter text-yellow-darker" },
    { theme: "yellow", variant: "outline", class: "border-yellow-dark/25 text-yellow-dark" },

    // Green
    { theme: "green", variant: "solid", class: "bg-green text-white" },
    { theme: "green", variant: "soft", class: "bg-green-lighter text-green-darker" },
    { theme: "green", variant: "outline", class: "border-green-dark/25 text-green-dark" },

    // Purple
    { theme: "purple", variant: "solid", class: "bg-purple text-white" },
    { theme: "purple", variant: "soft", class: "bg-purple-lighter text-purple-darker" },
    { theme: "purple", variant: "outline", class: "border-purple-dark/25 text-purple-dark" },

    // Pink
    { theme: "pink", variant: "solid", class: "bg-pink text-white" },
    { theme: "pink", variant: "soft", class: "bg-pink-lighter text-pink-darker" },
    { theme: "pink", variant: "outline", class: "border-pink-dark/25 text-pink-dark" },

    // Teal
    { theme: "teal", variant: "solid", class: "bg-teal text-white" },
    { theme: "teal", variant: "soft", class: "bg-teal-lighter text-teal-darker" },
    { theme: "teal", variant: "outline", class: "border-teal-dark/25 text-teal-dark" },

    // Gray
    { theme: "gray", variant: "solid", class: "bg-gray-700 text-white" },
    { theme: "gray", variant: "soft", class: "bg-gray-100 text-gray-600" },
    { theme: "gray", variant: "outline", class: "border-default text-gray-600" },
  ],

  defaultVariants: {
    theme: "gray",
    variant: "solid",
    size: "md",
    shape: "rounded",
  },
})

export const badgeAffixVariants = cva({
  base: "shrink-0 size-[1.088em] first:-ml-[0.21425em] last:-mr-[0.21425em] only:m-0",
})

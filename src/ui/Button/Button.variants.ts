import { cva } from "~/shared/cva"

export const buttonVariants = cva({
  base: [
    "relative inline-flex items-center justify-center",
    "font-medium border border-transparent text-center !leading-none",

    // Disabled
    "disabled:opacity-25 disabled:pointer-events-none",

    // Focus
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  ],

  variants: {
    theme: {
      blue: "focus-visible:ring-blue-light focus-visible:border-blue",
      orange: "focus-visible:ring-orange-light focus-visible:border-orange",
      yellow: "focus-visible:ring-yellow-light focus-visible:border-yellow",
      red: "focus-visible:ring-red-light focus-visible:border-red",
      green: "focus-visible:ring-green-light focus-visible:border-green",
      purple: "focus-visible:ring-purple-light focus-visible:border-purple",
      pink: "focus-visible:ring-pink-light focus-visible:border-pink",
      teal: "focus-visible:ring-teal-light focus-visible:border-teal",
      gray: "focus-visible:ring-gray-300 focus-visible:border-gray-900",
    },
    variant: {
      solid: "",
      outline: "",
      soft: "",
      ghost: "",
    },
    size: {
      sm: "text-xs gap-2 py-1.5 px-2",
      md: "text-sm gap-3 py-2 px-3",
      lg: "text-sm gap-4 py-3 px-5",
    },
    shape: {
      rounded: "rounded-lg",
      pill: "rounded-full",
    },
  },

  compoundVariants: [
    // Blue
    {
      theme: "blue",
      variant: "solid",
      class: "bg-blue text-white hover:bg-blue-dark",
    },
    {
      theme: "blue",
      variant: "outline",
      class: "border-blue-light text-blue hover:bg-blue-lighter hover:border-blue",
    },
    {
      theme: "blue",
      variant: "soft",
      class:
        "bg-blue-lighter text-blue hover:bg-transparent hover:border-blue focus-visible:bg-transparent",
    },
    {
      theme: "blue",
      variant: "ghost",
      class: "text-blue hover:bg-blue-lighter",
    },

    // Orange
    {
      theme: "orange",
      variant: "solid",
      class: "bg-orange text-white hover:bg-orange-dark",
    },
    {
      theme: "orange",
      variant: "outline",
      class: "border-orange-light text-orange hover:bg-orange-lighter hover:border-orange",
    },
    {
      theme: "orange",
      variant: "soft",
      class:
        "bg-orange-lighter text-orange hover:bg-transparent hover:border-orange focus-visible:bg-transparent",
    },
    {
      theme: "orange",
      variant: "ghost",
      class: "text-orange hover:bg-orange-lighter",
    },

    // Yellow
    {
      theme: "yellow",
      variant: "solid",
      class: "bg-yellow text-white hover:bg-yellow-dark",
    },
    {
      theme: "yellow",
      variant: "outline",
      class: "border-yellow-light text-yellow hover:bg-yellow-lighter hover:border-yellow",
    },
    {
      theme: "yellow",
      variant: "soft",
      class:
        "bg-yellow-lighter text-yellow hover:bg-transparent hover:border-yellow focus-visible:bg-transparent",
    },
    {
      theme: "yellow",
      variant: "ghost",
      class: "text-yellow hover:bg-yellow-lighter",
    },

    // Red
    {
      theme: "red",
      variant: "solid",
      class: "bg-red text-white hover:bg-red-dark",
    },
    {
      theme: "red",
      variant: "outline",
      class: "border-red-light text-red hover:bg-red-lighter hover:border-red",
    },
    {
      theme: "red",
      variant: "soft",
      class:
        "bg-red-lighter text-red hover:bg-transparent hover:border-red focus-visible:bg-transparent",
    },
    {
      theme: "red",
      variant: "ghost",
      class: "text-red hover:bg-red-lighter",
    },

    // Green
    {
      theme: "green",
      variant: "solid",
      class: "bg-green text-white hover:bg-green-dark",
    },
    {
      theme: "green",
      variant: "outline",
      class: "border-green-light text-green hover:bg-green-lighter hover:border-green",
    },
    {
      theme: "green",
      variant: "soft",
      class:
        "bg-green-lighter text-green hover:bg-transparent hover:border-green focus-visible:bg-transparent",
    },
    {
      theme: "green",
      variant: "ghost",
      class: "text-green hover:bg-green-lighter",
    },

    // Purple
    {
      theme: "purple",
      variant: "solid",
      class: "bg-purple text-white hover:bg-purple-dark",
    },
    {
      theme: "purple",
      variant: "outline",
      class: "border-purple-light text-purple hover:bg-purple-lighter hover:border-purple",
    },
    {
      theme: "purple",
      variant: "soft",
      class:
        "bg-purple-lighter text-purple hover:bg-transparent hover:border-purple focus-visible:bg-transparent",
    },
    {
      theme: "purple",
      variant: "ghost",
      class: "text-purple hover:bg-purple-lighter",
    },

    // Pink
    {
      theme: "pink",
      variant: "solid",
      class: "bg-pink text-white hover:bg-pink-dark",
    },
    {
      theme: "pink",
      variant: "outline",
      class: "border-pink-light text-pink hover:bg-pink-lighter hover:border-pink",
    },
    {
      theme: "pink",
      variant: "soft",
      class:
        "bg-pink-lighter text-pink hover:bg-transparent hover:border-pink focus-visible:bg-transparent",
    },
    {
      theme: "pink",
      variant: "ghost",
      class: "text-pink hover:bg-pink-lighter",
    },

    // Teal
    {
      theme: "teal",
      variant: "solid",
      class: "bg-teal text-white hover:bg-teal-dark",
    },
    {
      theme: "teal",
      variant: "outline",
      class: "border-teal-light text-teal hover:bg-teal-lighter hover:border-teal",
    },
    {
      theme: "teal",
      variant: "soft",
      class:
        "bg-teal-lighter text-teal hover:bg-transparent hover:border-teal focus-visible:bg-transparent",
    },
    {
      theme: "teal",
      variant: "ghost",
      class: "text-teal hover:bg-teal-lighter",
    },

    // Gray
    {
      theme: "gray",
      variant: "solid",
      class: "bg-gray-700 text-white hover:bg-gray-900",
    },
    {
      theme: "gray",
      variant: "outline",
      class: "border-gray-300 text-gray-500 hover:bg-gray-100 hover:border-gray-300",
    },
    {
      theme: "gray",
      variant: "soft",
      class:
        "bg-gray-100 text-gray-600 hover:bg-transparent hover:border-gray-500 focus-visible:bg-transparent",
    },
    {
      theme: "gray",
      variant: "ghost",
      class: "text-gray-700 hover:bg-gray-100",
    },
  ],

  defaultVariants: {
    theme: "gray",
    variant: "solid",
    size: "lg",
    shape: "rounded",
  },
})

export const buttonAffixVariants = cva({
  base: "-my-[0.21425em] -mx-[0.5em] shrink-0",
})

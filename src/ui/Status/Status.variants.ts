import { cva } from "../../shared"

export const statusVariants = cva({
  base: [
    "relative inline-flex items-center justify-center gap-[0.375em] px-[0.5416em] py-[0.4166em] rounded-md",
    "font-medium break-normal whitespace-nowrap border border-transparent text-center !leading-none",
  ],

  variants: {
    theme: {
      blue: "bg-blue-lighter text-blue",
      orange: "bg-orange-lighter text-orange",
      yellow: "bg-yellow-lighter text-yellow",
      red: "bg-red-lighter text-red",
      green: "bg-green-lighter text-green",
      purple: "bg-purple-lighter text-purple",
      pink: "bg-pink-lighter text-pink",
      teal: "bg-teal-lighter text-teal",
      gray: "bg-gray-100 text-gray-500",
    },
    variant: {
      soft: "",
      outline: "bg-transparent border-gray-200 text-gray-500",
    },
    size: {
      sm: "text-2xs",
      md: "text-xs",
      lg: "text-sm",
    },
  },

  defaultVariants: {
    theme: "gray",
    variant: "outline",
    size: "sm",
  },
})

export const statusAffixVariants = cva({
  base: "-my-[0.044em] -mx-[0.1666em] shrink-0 !size-[1.088em]",

  variants: {
    theme: {
      blue: "text-blue",
      orange: "text-orange",
      yellow: "text-yellow",
      red: "text-red",
      green: "text-green",
      purple: "text-purple",
      pink: "text-pink",
      teal: "text-teal",
      gray: "text-gray-500",
    },
  },

  defaultVariants: {
    theme: "gray",
  },
})

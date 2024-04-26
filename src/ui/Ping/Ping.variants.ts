import { cva } from "../../shared"

export const pingVariants = cva({
  base: "relative size-3",

  variants: {
    theme: {
      blue: "text-blue",
      orange: "text-orange",
      red: "text-red",
      yellow: "text-yellow",
      green: "text-green",
      purple: "text-purple",
      pink: "text-pink",
      teal: "text-teal",
      gray: "text-gray-600",
    },
  },

  defaultVariants: {
    theme: "gray",
  },
})

export const pingDotVariants = cva({
  base: "absolute inset-[3px] rounded-full bg-current",
})

export const pingDotOutlineVariants = cva({
  base: "absolute inset-0 rounded-full bg-current opacity-30",
})

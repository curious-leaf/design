import { cva } from "../../shared"

export const statusVariants = cva({
  base: [
    "relative !size-3 m-0.5 shrink-0 inline-grid place-content-center overflow-hidden rounded-full bg-white ring-2 ring-current",
    "before:size-2 before:bg-current before:rounded-full",
    "after:absolute after:size-full after:bg-white",
  ],

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

    variant: {
      empty: "",
      rightHalf: "after:top-0 after:right-1/2",
      leftHalf: "after:top-0 after:left-1/2",
      topHalf: "after:top-1/2 after:left-0",
      bottomHalf: "after:bottom-1/2 after:left-0",
      twoThirds: "after:-top-1/2 after:right-1/2",
      full: "after:-top-full after:right-full",
    },
  },

  defaultVariants: {
    theme: "gray",
    variant: "empty",
  },
})

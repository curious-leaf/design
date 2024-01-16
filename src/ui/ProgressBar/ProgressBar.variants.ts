import { cva } from "~/shared/cva"

export const progressBarVariants = cva({
  base: "flex flex-wrap items-center gap-2 w-full",
})

export const progressBarLineVariants = cva({
  base: "h-1.5 rounded-full bg-gray-200 order-2",

  variants: {
    withLabel: {
      true: "w-full",
      false: "flex-1",
    },
  },
})

export const progressBarProgressVariants = cva({
  base: "h-full rounded-full",

  variants: {
    theme: {
      blue: "bg-blue",
      orange: "bg-orange",
      red: "bg-red",
      yellow: "bg-yellow",
      green: "bg-green",
      purple: "bg-purple",
      pink: "bg-pink",
      teal: "bg-teal",
      gray: "bg-gray-600",
    },
  },

  defaultVariants: {
    theme: "gray",
  },
})

export const progressBarLabelVariants = cva({
  base: "flex-1 truncate",
})

export const progressBarHintVariants = cva({
  base: "opacity-60",

  variants: {
    withLabel: {
      true: "order-1",
      false: "order-3",
    },
  },
})

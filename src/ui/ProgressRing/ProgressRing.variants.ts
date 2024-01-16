import { cva } from "~/shared/cva"

export const progressRingVariants = cva({
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
  },

  defaultVariants: {
    size: "md",
  },
})

export const progressRingCircleVariants = cva({
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

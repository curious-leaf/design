import { cva } from "../../shared"

export const seriesVariants = cva({
  base: "flex flex-wrap items-center",

  variants: {
    size: {
      sm: "gap-x-2 gap-y-1",
      md: "gap-x-3 gap-y-2",
      lg: "gap-x-4 gap-y-3",
    },
  },

  defaultVariants: {
    size: "md",
  },
})

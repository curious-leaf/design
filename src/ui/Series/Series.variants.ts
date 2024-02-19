import { cva } from "../../shared"

export const seriesVariants = cva({
  base: "flex",

  variants: {
    size: {
      sm: "gap-x-2 gap-y-1",
      md: "gap-x-3 gap-y-2",
      lg: "gap-x-4 gap-y-3",
    },
    direction: {
      row: "flex-row flex-wrap items-center",
      column: "flex-col",
    },
  },

  defaultVariants: {
    size: "md",
    direction: "row",
  },
})

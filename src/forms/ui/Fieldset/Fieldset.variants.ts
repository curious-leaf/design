import { cva } from "../../../shared"

export const fieldsetVariants = cva({
  base: "relative grid min-w-0 gap-x-4 gap-y-6",

  variants: {
    columns: {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
    },
    layout: {
      stacked: "",
      adaptive: "@container/set",
    },
  },

  defaultVariants: {
    columns: 1,
    layout: "adaptive",
  },
})

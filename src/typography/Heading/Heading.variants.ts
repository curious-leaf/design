import { cva } from "../../shared"

export const headingVariants = cva({
  variants: {
    size: {
      h1: "text-3xl font-semibold -tracking-2",
      h2: "text-2xl font-semibold -tracking-1",
      h3: "text-xl font-semibold",
      h4: "text-lg font-semibold",
      h5: "text-base font-medium",
      h6: "text-sm font-medium",
    },
  },

  defaultVariants: {
    size: "h3",
  },
})

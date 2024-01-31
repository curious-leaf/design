import { cva } from "../../shared"

export const headingVariants = cva({
  base: "font-medium",

  variants: {
    size: {
      h1: "text-4xl -tracking-1",
      h2: "text-3xl -tracking-1",
      h3: "text-2xl -tracking-1",
      h4: "text-xl",
      h5: "text-lg",
      h6: "text-base",
    },
  },

  defaultVariants: {
    size: "h3",
  },
})

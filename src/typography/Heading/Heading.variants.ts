import { cva } from "~/shared/cva"

export const headingVariants = cva({
  base: "font-semibold",

  variants: {
    size: {
      h1: "text-6xl -tracking-1",
      h2: "text-5xl -tracking-1",
      h3: "text-4xl -tracking-1",
      h4: "text-3xl",
      h5: "text-2xl",
      h6: "text-xl",
    },
  },

  defaultVariants: {
    size: "h3",
  },
})

import { cva } from "../../shared"

export const dotVariants = cva({
  base: "block size-[0.5em] rounded-full border border-transparent",

  variants: {
    variant: {
      solid: "bg-current",
      outline: "border-current",
    },
  },

  defaultVariants: {
    variant: "solid",
  },
})

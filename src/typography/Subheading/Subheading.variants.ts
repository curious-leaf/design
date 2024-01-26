import { cva } from "../../shared"

export const subheadingVariants = cva({
  base: "font-medium uppercase",

  variants: {
    size: {
      xs: "text-2xs tracking-2",
      sm: "text-xs tracking-4",
      md: "text-sm tracking-6",
      lg: "text-base tracking-6",
    },
  },

  defaultVariants: {
    size: "md",
  },
})

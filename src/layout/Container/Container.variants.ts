import { cva } from "../../shared"

export const containerVariants = cva({
  base: "@container/main container mx-auto w-full px-5 md:px-6 lg:px-8",

  variants: {
    size: {
      sm: "max-w-5xl",
      md: "max-w-6xl",
      lg: "max-w-7xl",
      full: "max-w-full",
    },
  },

  defaultVariants: {
    size: "md",
  },
})

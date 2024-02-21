import { cva } from "../../shared"

export const paragraphVariants = cva({
  base: "",

  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm -tracking-0.5",
      md: "text-base -tracking-1",
      lg: "text-lg -tracking-1.5",
      xl: "text-xl -tracking-1.5",
    },
    variant: {
      regular: "font-normal",
      medium: "font-medium",
    },
    wrap: {
      wrap: "",
      nowrap: "text-nowrap",
      pretty: "text-pretty",
      balance: "text-balance",
    },
  },

  defaultVariants: {
    size: "md",
    variant: "regular",
    wrap: "wrap",
  },
})

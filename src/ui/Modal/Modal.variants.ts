import { cva } from "~/shared/cva"

export const modalVariants = cva({
  base: "fixed left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-2rem)] !overflow-auto",

  variants: {
    size: {
      sm: "w-[26rem]",
      md: "w-[32rem]",
      lg: "w-[38rem]",
    },
    fixed: {
      true: "top-[10vh] max-h-[calc(90vh-2rem)]",
      false: "top-1/2 -translate-y-1/2 max-h-[calc(100vh-2rem)]",
    },
  },

  defaultVariants: {
    size: "sm",
    fixed: true,
  },
})

import { cva } from "../../shared"

export const modalVariants = cva({
  base: ["!fixed left-1/2 -translate-x-1/2 z-50 w-[calc(100vw-2rem)] overflow-y-auto"],

  variants: {
    size: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
    },
    fixed: {
      true: "top-[10vh] max-h-[calc(90vh-2rem)] [[role=dialog]~&]:top-[15vh] [[role=dialog]~&]:max-h-[calc(85vh-2rem)]",
      false: "top-1/2 -translate-y-1/2 max-h-[calc(100vh-2rem)]",
    },
  },

  defaultVariants: {
    size: "md",
    fixed: true,
  },
})

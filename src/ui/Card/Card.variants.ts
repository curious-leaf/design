import { cva } from "../../shared"

export const cardVariants = cva({
  base: "flex flex-col bg-white border rounded-md shadow overflow-clip",
})

export const cardPanelVariants = cva({
  base: "border-t first:border-t-0",

  variants: {
    size: {
      sm: "p-4 md:p-6",
      md: "p-6 md:p-8",
    },
    theme: {
      white: "bg-white",
      gray: "bg-gray-50",
    },
    sticky: {
      true: "sticky z-30 first:top-0 last:bottom-0",
    },
    scrollable: {
      true: "flex-1 overflow-y-scroll overscroll-contain",
    },
  },

  defaultVariants: {
    size: "sm",
    theme: "white",
    sticky: false,
    scrollable: false,
  },
})

export const cardSectionVariants = cva({
  base: "flex flex-col",

  variants: {
    size: {
      sm: "gap-6",
      md: "gap-8",
    },
  },

  defaultVariants: {
    size: "sm",
  },
})

export const cardFooterVariants = cva({
  base: "flex items-center justify-between flex-row-reverse gap-6 mt-auto",

  variants: {
    size: {
      sm: "md:py-4",
      md: "md:py-6",
    },
  },

  defaultVariants: {
    size: "sm",
  },
})

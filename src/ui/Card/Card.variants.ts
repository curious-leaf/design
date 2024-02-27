import { cva } from "../../shared"

export const cardVariants = cva({
  base: "relative flex flex-col bg-white border rounded-md shadow-sm overflow-clip hover:[&[href]]:z-10 hover:[&[href]]:border-gray-300",
})

export const cardPanelVariants = cva({
  base: "border-t first:border-t-0",

  variants: {
    size: {
      md: "p-4 md:p-6",
      lg: "p-6 md:p-8",
    },
    theme: {
      white: "",
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
    size: "md",
    theme: "white",
    sticky: false,
    scrollable: false,
  },
})

export const cardRowVariants = cva({
  base: "flex justify-between",

  variants: {
    size: {
      md: "md:py-4",
      lg: "md:py-6",
    },
    gap: {
      sm: "gap-3 md:gap-x-4",
      md: "gap-4 md:gap-x-6",
    },
    direction: {
      row: "flex-row flex-wrap items-center",
      column: "flex-col",
      rowReverse: "flex-row-reverse flex-wrap items-center",
      columnReverse: "flex-col-reverse",
    },
  },

  defaultVariants: {
    size: "md",
    gap: "md",
    direction: "row",
  },
})

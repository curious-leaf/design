import { cva } from "../../shared"

export const sidebarVariants = cva({
  base: "@container/sidebar sticky top-0 flex h-screen w-[17em] bg-white shrink-0 flex-col gap-y-5 overflow-y-scroll overscroll-contain ring-1 ring-gray-200 p-5",

  variants: {
    theme: {
      white: "bg-white",
      gray: "bg-gray-50",
    },
  },

  defaultVariants: {
    theme: "white",
  },
})

export const sidebarContentVariants = cva({
  base: "flex flex-col gap-y-5 flex-1 -mx-5 px-5 overflow-y-scroll overscroll-contain",
})

export const sidebarMenuVariants = cva({
  base: "flex flex-col gap-y-1",
})

export const sidebarHeadingVariants = cva({
  base: "p-1 opacity-40",
})

export const sidebarSeparatorVariants = cva({
  variants: {
    fullWidth: {
      true: "-mx-5",
    },
  },
})

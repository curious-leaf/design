import { cva } from "../../shared"

export const sidebarVariants = cva({
  base: "@container/sidebar sticky flex w-[17em] shrink-0 flex-col gap-y-5 p-5 border",

  variants: {
    theme: {
      white: "bg-white",
      gray: "bg-gray-50",
    },
    floating: {
      true: "inset-y-2 h-[calc(100vh-1rem)] m-2 rounded-md shadow-sm",
      false: "inset-y-0 h-screen -m-px",
    },
  },

  defaultVariants: {
    theme: "white",
    floating: false,
  },
})

export const sidebarContentVariants = cva({
  base: "flex flex-col gap-y-6 flex-1 -mx-5 px-5 overflow-y-scroll overscroll-contain",
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

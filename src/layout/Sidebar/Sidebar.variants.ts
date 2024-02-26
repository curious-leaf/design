import { cva } from "../../shared"

export const sidebarVariants = cva({
  base: "@container/sidebar flex shrink-0 flex-col gap-y-5 p-5 -m-px border",

  variants: {
    theme: {
      white: "bg-white",
      gray: "bg-gray-50",
    },
    size: {
      sm: "w-56",
      md: "w-64",
      lg: "w-72",
    },
    floating: {
      true: "m-2 rounded-md shadow-sm",
      false: "mr-0",
    },
    sticky: {
      true: "sticky",
      false: "relative",
    },
  },

  compoundVariants: [
    { floating: true, sticky: true, class: "inset-y-2 h-[calc(100dvh-1rem)]" },
    { floating: false, sticky: true, class: "-inset-y-px h-[calc(100dvh+2px)]" },
  ],

  defaultVariants: {
    theme: "white",
    size: "md",
    floating: false,
    sticky: true,
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

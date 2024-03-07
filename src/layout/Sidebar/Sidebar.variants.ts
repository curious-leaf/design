import { cva } from "../../shared"

export const sidebarVariants = cva({
  base: "@container/sidebar flex shrink-0 flex-col gap-y-5 p-4",

  variants: {
    size: {
      sm: "w-56",
      md: "w-64",
      lg: "w-72",
    },
    sticky: {
      true: "sticky inset-y-0 h-screen",
      false: "relative",
    },
  },

  defaultVariants: {
    size: "md",
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
  base: "p-1 pl-3 opacity-40",
})

export const sidebarSeparatorVariants = cva({
  variants: {
    fullWidth: {
      true: "-mx-5",
    },
  },
})

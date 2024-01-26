import { cva } from "../../shared"

export const sidebarVariants = cva({
  base: "sticky top-0 flex h-screen w-[17em] bg-white shrink-0 flex-col gap-y-5 overflow-y-scroll border-r p-5",

  variants: {
    theme: {
      blue: "",
      orange: "",
      red: "",
      yellow: "",
      green: "",
      purple: "",
      pink: "",
      teal: "",
      gray: "",
    },
    variant: {
      solid: "",
      soft: "",
      outline: "border-gray-200",
    },
  },

  defaultVariants: {
    theme: "gray",
    variant: "soft",
  },
})

export const sidebarContentVariants = cva({
  base: "flex flex-col gap-y-5 flex-1 -mx-5 px-5 overflow-y-scroll",
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

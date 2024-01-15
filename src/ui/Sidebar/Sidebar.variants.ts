import { cva } from "~/shared/cva"

export const sidebarVariants = cva({
  base: "sticky top-0 z-40 flex h-screen w-72 shrink-0 flex-col gap-y-5 overflow-y-scroll border-r p-5",

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

export const sidebarSeparatorVariants = cva({
  base: "-mx-5",
})

import { cva } from "../../shared"

export const headerVariants = cva({
  base: "@container/header flex flex-wrap items-center w-full min-w-0",

  variants: {
    alignment: {
      left: "justify-between text-start",
      center: "justify-center text-center",
      right: "justify-end text-end",
    },
    gap: {
      sm: "gap-y-2 gap-x-6",
      lg: "gap-y-3 gap-x-6 lg:gap-x-12",
    },
    separated: {
      true: "my-6 md:mt-8 first:mt-0 last:mb-0 only:m-0",
    },
    sticky: {
      true: "lg:sticky lg:top-16 lg:z-10",
    },
  },

  defaultVariants: {
    alignment: "left",
    gap: "lg",
    separated: false,
    sticky: false,
  },
})

export const headerTitleVariants = cva({
  base: "",
})

export const headerDescriptionVariants = cva({
  base: "w-full text-gray-500",
})

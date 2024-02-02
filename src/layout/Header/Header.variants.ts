import { cva } from "../../shared"

export const headerVariants = cva({
  base: "@container/header flex flex-wrap items-center min-w-0",

  variants: {
    alignment: {
      left: "justify-between text-left",
      center: "justify-center text-center",
      right: "justify-end text-right",
    },
    gap: {
      small: "gap-y-3 gap-x-6",
      large: "gap-y-3 gap-x-6 lg:gap-x-12",
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
    gap: "large",
    separated: false,
    sticky: false,
  },
})

export const headerTitleVariants = cva({
  base: "truncate",
})

export const headerDescriptionVariants = cva({
  base: "w-full",
})

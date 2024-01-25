import { cva } from "~/shared/cva"

export const boxVariants = cva({
  base: "bg-white border rounded-md text-sm overflow-clip !shadow-sm",

  variants: {
    padded: {
      true: "flex flex-col gap-8 p-6 md:p-8",
    },
  },

  defaultVariants: {
    padded: true,
  },
})

export const boxFooterVariants = cva({
  base: "flex flex-row-reverse items-center justify-between gap-4 border-t px-6 py-4 md:-mx-8 md:-mb-8 md:px-8 md:py-6",

  variants: {
    padded: {
      true: "-mx-6 -mb-6",
    },
  },

  defaultVariants: {
    padded: true,
  },
})

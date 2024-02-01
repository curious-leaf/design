import { cva } from "../../shared"

export const labelVariants = cva({
  base: "text-sm font-medium text-gray-700",

  variants: {
    required: {
      true: "after:ml-0.5 after:text-red after:content-['*']",
    },
  },
})

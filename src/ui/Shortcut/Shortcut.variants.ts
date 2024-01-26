import { cva } from "../../shared"

export const shortcutVariants = cva({
  base: "whitespace-nowrap rounded border border-transparent px-[0.4em] py-[0.088em] font-medium text-gray-400",

  variants: {
    variant: {
      soft: "bg-gray-100",
      outline: "border-gray-200",
    },
  },

  defaultVariants: {
    variant: "outline",
  },
})

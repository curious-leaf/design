import { cva, focusClasses } from "../../shared"

export const inputVariants = cva({
  base: [
    "peer flex gap-2.5 py-1 px-2.5 items-center justify-between w-full bg-gray-100 border border-transparent rounded text-xs text-start resize-none overflow-clip transition",
    "placeholder:text-gray-400 disabled:text-gray-400 disabled:opacity-60",
    focusClasses,
  ],

  variants: {
    isNumber: {
      true: "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
      false: "appearance-none",
    },
  },
})

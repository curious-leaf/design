import { cva } from "../../shared"

export const screenSizeVariants = cva({
  base: "fixed bottom-5 left-5 z-50 flex items-center space-x-2 rounded-full bg-black px-2.5 py-1 font-mono text-xs font-medium text-white",
})

export const screenSizeSeparatorVariants = cva({
  base: "h-4 w-px bg-current opacity-25",
})

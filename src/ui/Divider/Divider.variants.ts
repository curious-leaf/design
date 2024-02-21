import { cva } from "../../shared"

export const dividerVariants = cva({
  base: [
    "relative flex items-center justify-center w-full gap-3",
    "before:flex-1 before:border-t",
    "after:flex-1 after:border-t",
  ],
})

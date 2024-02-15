import { cva } from "../../shared"

export const popoverVariants = cva({
  base: "px-3 py-1.5",
})

export const popoverCloseVariants = cva({
  base: "absolute right-2 top-2 rounded-full p-1 opacity-50 outline-none hover:opacity-75",
})

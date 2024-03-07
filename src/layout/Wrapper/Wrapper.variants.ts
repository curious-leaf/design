import { cva } from "../../shared"

export const wrapperVariants = cva({
  base: "@container/wrapper flex min-h-screen flex-col bg-[#f7f7f7] lg:flex-row",
})

export const wrapperContentVariants = cva({
  base: "w-full m-2 bg-white border rounded-xl",
})

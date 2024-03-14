import { cva } from "../../shared"

export const wrapperVariants = cva({
  base: "@container/wrapper flex h-dvh flex-col bg-[#f7f7f7] lg:flex-row",
})

export const wrapperContentVariants = cva({
  base: "w-full mt-2 py-8 bg-white border-l border-t rounded-tl-2xl overflow-y-auto",
})

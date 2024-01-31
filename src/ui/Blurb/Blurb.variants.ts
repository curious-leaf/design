import { cva } from "../../shared"

export const blurbVariants = cva({
  base: "flex items-center gap-3 text-start min-w-0",
})

export const blurbContentVariants = cva({
  base: "flex flex-col gap-0.5 flex-1 min-w-0",
})

export const blurbTitleVariants = cva({
  base: "truncate",
})

export const blurbDescriptionVariants = cva({
  base: "text-gray-500 truncate",
})

import { cva } from "~/shared/cva"

export const blurbVariants = cva({
  base: "flex items-center gap-3 text-start",
})

export const blurbContentVariants = cva({
  base: "flex min-w-0 flex-1 flex-col gap-0.5",
})

export const blurbTitleVariants = cva({
  base: "text-sm font-medium truncate",
})

export const blurbDescriptionVariants = cva({
  base: "text-xs leading-tight opacity-60 truncate",
})

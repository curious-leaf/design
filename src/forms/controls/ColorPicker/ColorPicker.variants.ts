import { cva } from "../../../shared"

export const colorPickerVariants = cva({
  base: "group/picker relative",
})

export const colorPickerPreviewVariants = cva({
  base: "relative -ml-1 mr-1 size-5 overflow-hidden rounded border",
})

export const colorPickerClearVariants = cva({
  base: "absolute left-3 top-1/2 grid -translate-y-1/2 place-items-center opacity-0 transition-opacity hover:!opacity-100 group-hover/picker:opacity-75",

  variants: {
    light: {
      true: "text-black",
      false: "text-white",
    },
  },
})

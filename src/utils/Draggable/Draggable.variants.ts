import { cva } from "../../shared"

export const draggableVariants = cva({
  base: "text-sm text-gray-300 transition hover:text-gray-500 focus:outline-none",

  variants: {
    dragging: {
      true: "cursor-grabbing text-gray-500",
      false: "cursor-grab",
    },
  },
})

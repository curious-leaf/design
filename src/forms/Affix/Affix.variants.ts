import { cva } from "../../shared"

export const affixGroupVariants = cva({
  base: "relative flex w-full items-center",
})

export const affixVariants = cva({
  base: "absolute top-1/2 -translate-y-1/2 px-3 text-sm text-gray-500",

  variants: {
    side: {
      left: "left-px",
      right: "right-px",
    },
    events: {
      false: "pointer-events-none",
    },
  },

  defaultVariants: {
    side: "left",
    events: false,
  },
})

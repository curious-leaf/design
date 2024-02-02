import { cva } from "../../../shared"

export const affixGroupVariants = cva({
  base: "relative w-full",
})

export const affixVariants = cva({
  base: "absolute top-1/2 -translate-y-1/2 px-3 text-sm text-gray-500 box-content whitespace-nowrap [&:not([href]):not([type])]:pointer-events-none",

  variants: {
    side: {
      left: "left-px",
      right: "right-px",
    },
  },

  defaultVariants: {
    side: "left",
  },
})

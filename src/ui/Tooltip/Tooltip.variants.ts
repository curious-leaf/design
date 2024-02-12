import { cva } from "../../shared"

export const tooltipVariants = cva({
  base: "z-50 px-3 py-1.5 max-w-[12rem] overflow-hidden rounded-md border bg-white text-2xs text-gray-700 text-pretty outline-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]",

  variants: {
    align: {
      start: "text-start",
      center: "text-center",
      end: "text-end",
    },
  },

  defaultVariants: {
    align: "center",
  },
})

export const tooltipArrowVariants = cva({
  base: "-mt-px block fill-current text-white drop-shadow-sm",
})

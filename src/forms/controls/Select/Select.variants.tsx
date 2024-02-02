import { cva } from "../../../shared"

export const selectScrollVariants = cva({
  base: "absolute z-10 flex items-center justify-center w-full h-8 bg-gradient-to-b",

  variants: {
    position: {
      top: "top-0 from-gray-50 to-transparent",
      bottom: "bottom-0 from-transparent to-gray-50",
    },
  },
})

export const selectContentVariants = cva({
  base: [
    "relative z-50 min-w-[8rem] rounded bg-gray-50 border shadow-md overflow-hidden",
    "w-[--radix-select-trigger-width]",
  ],

  variants: {
    popper: {
      true: "max-h-[--radix-select-content-available-height] data-[side=top]:-translate-y-1 data-[side=bottom]:translate-y-1",
    },
  },
})

export const selectViewportVariants = cva({
  base: "p-1 scroll-py-10",

  variants: {
    popper: {
      true: "h-[var(--radix-select-trigger-height)] w-full",
    },
  },
})

export const selectItemVariants = cva({
  base: [
    "relative flex items-center gap-2 min-w-0 py-2 px-3 text-sm rounded-sm cursor-default select-none hover:bg-gray-100 focus:bg-gray-100 focus:outline-none",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    "data-[state=checked]:bg-primary data-[state=checked]:text-white",
  ],
})

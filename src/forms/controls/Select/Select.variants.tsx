import { cva } from "../../../shared"

export const selectScrollVariants = cva({
  base: "absolute z-10 flex items-center justify-center w-full h-8 bg-zinc-50",

  variants: {
    position: {
      top: "top-0",
      bottom: "bottom-0",
    },
  },
})

export const selectViewportVariants = cva({
  base: "p-1",

  variants: {
    position: {
      "item-aligned": "",
      popper:
        "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
    },
  },
})

export const selectContentVariants = cva({
  base: [
    "relative z-50 min-w-[8rem] overflow-hidden rounded border bg-zinc-50 shadow-md animate-in fade-in-80",
    "w-[--radix-select-trigger-width]",
  ],

  variants: {
    position: {
      "item-aligned": "",
      popper: "max-h-[--radix-select-content-available-height] translate-y-1",
    },
  },
})

export const selectItemVariants = cva({
  base: [
    "relative flex gap-2 min-w-0 w-full cursor-default select-none items-center rounded-sm py-2 px-3 text-sm hover:bg-zinc-100",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    // formInputFocusClasses,
  ],
})

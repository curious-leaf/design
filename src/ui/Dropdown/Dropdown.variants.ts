import { cva } from "../../shared"

export const dropdownContentVariants = cva({
  base: [
    "group flex flex-col z-50 divide-y overflow-clip max-h-[--radix-popper-available-height]",
    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    "data-[side=bottom]:slide-in-from-bottom-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-top-2",
  ],

  variants: {
    limitWidth: {
      none: "",
      min: "min-w-[--radix-popper-anchor-width]",
      max: "max-w-[--radix-popper-anchor-width]",
      both: "w-[--radix-popper-anchor-width]",
    },
  },

  defaultVariants: {
    limitWidth: "min",
  },
})

export const dropdownGroupVariants = cva({
  base: "group flex scroll-p-1 flex-col gap-0.5 p-1",
})

export const dropdownSeparatorVariants = cva({
  base: "my-3 h-px bg-gray-200",
})

export const dropdownLabelVariants = cva({
  base: "py-3 px-4",
})

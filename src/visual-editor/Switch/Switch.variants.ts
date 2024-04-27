import { cva, peerFocusClasses } from "../../shared"

export const switchVariants = cva({
  base: "flex w-full items-center rounded bg-gray-100",

  variants: {
    size: {
      md: "h-7 p-0.75 text-xs",
      lg: "h-10 p-1 text-sm font-medium",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export const switchLabelVariants = cva({
  base: [
    "relative flex h-full flex-1 cursor-pointer select-none items-center justify-center whitespace-nowrap text-gray-500 transition",
    "after:absolute after:inset-y-0.5 after:-right-px after:w-px after:bg-gray-300/75 group-last:after:opacity-0",
    "peer-checked:shadow-px peer-checked:rounded peer-checked:bg-white peer-checked:after:opacity-0",
    "peer-disabled:cursor-default peer-disabled:opacity-50",
    peerFocusClasses,
  ],

  variants: {
    theme: {
      default: "peer-checked:text-primary",
    },
    spacing: {
      md: "gap-1 px-1",
      lg: "gap-2 px-2.5 sm:px-3",
    },
  },

  defaultVariants: {
    theme: "default",
    spacing: "md",
  },
})

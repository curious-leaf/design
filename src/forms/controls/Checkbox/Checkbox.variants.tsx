import { cva, focusClasses } from "../../../shared"

export const checkboxVariants = cva({
  base: [
    "peer flex items-center justify-center size-4 shrink-0 bg-white border rounded shadow-sm text-primary-dark appearance-none transition-none",
    "disabled:bg-gray-100 disabled:text-gray-400 disabled:opacity-50",
    "data-[state=checked]:border-transparent data-[state=checked]:bg-primary data-[state=checked]:text-white data-[state=checked]:shadow-inner data-[state=checked]:shadow-black/20",
    focusClasses,
  ],

  variants: {
    error: {
      true: "ring-1 ring-offset-1 ring-red",
    },
  },
})

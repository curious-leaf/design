import { cva } from "../../shared"

export const alertRootVariants = cva({
  base: "flex items-start bg-gray-100 text-sm/relaxed",
})

export const alertVariants = cva({
  variants: {
    variant: {
      inline: "rounded-lg px-3 py-3 sm:items-center",
      expanded: "gap-1 rounded-r-lg border-l-2 p-4 pl-4",
    },
    theme: {
      default: "border-gray-200 text-gray-600",
      info: "border-blue bg-blue-lighter text-blue-darker",
      success: "border-green bg-green-lighter text-green-darker",
      error: "border-red bg-red-lighter text-red-darker",
      warning: "border-yellow bg-yellow-lighter text-yellow-darker",
    },
  },
  defaultVariants: {
    variant: "inline",
    theme: "default",
  },
})

export const alertTitleVariants = cva({
  base: "text-start font-medium",
  variants: {
    theme: {
      default: "text-gray-900",
      info: "text-blue-darker",
      success: "text-green-darker",
      error: "text-red-darker",
      warning: "text-yellow-darker",
    },
  },
  defaultVariants: {
    theme: "default",
  },
})

export const alertIconVariants = cva({
  variants: {
    theme: {
      default: "text-gray-400",
      info: "text-blue",
      success: "text-green",
      error: "text-red",
      warning: "text-yellow",
    },
  },
  defaultVariants: {
    theme: "default",
  },
})

export const alertAffixVariants = cva({
  base: "shrink-0",
})

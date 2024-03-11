import { cva } from "../../shared"

export const planVariants = cva({
  base: "gap-8 p-4 min-w-64 md:p-6",

  variants: {
    isFeatured: {
      true: "border-gray-400",
    },
  },

  defaultVariants: {
    isFeatured: false,
  },
})

export const planFeatureVariants = cva({
  base: "flex gap-3 text-sm",
})

export const planFeatureCheckVariants = cva({
  base: "shrink-0 p-1 text-white rounded-smooth",

  variants: {
    type: {
      positive: "bg-green",
      negative: "bg-gray-400",
    },
  },
})

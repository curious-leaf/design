import { defineConfig } from "cva"
import { extendTailwindMerge } from "tailwind-merge"

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": ["text-xxs", "text-xxxs"],
      "font-family": ["font-display", "font-sans"],
    },
  },
})

export const { cva, cx, compose } = defineConfig({
  hooks: {
    onComplete: className => customTwMerge(className),
  },
})

export type { VariantProps } from "cva"

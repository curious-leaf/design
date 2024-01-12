import { cva } from "~/shared/cva"

export const proseVariants = cva({
  base: [
    "text-pretty text-start prose",
    // Prose Headings
    "prose-headings:font-medium prose-h1:-tracking-1 prose-h2:-tracking-1",
  ],

  variants: {
    size: {
      sm: "prose-sm",
      md: "prose-base",
      lg: "prose-lg",
    },
  },

  defaultVariants: {
    size: "md",
  },
})

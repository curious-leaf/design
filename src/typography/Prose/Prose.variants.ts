import { cva } from "../../shared"

export const proseVariants = cva({
  base: [
    "text-pretty text-start prose",
    // Prose Headings
    "prose-headings:font-medium prose-h1:-tracking-1 prose-h2:-tracking-1",
  ],

  variants: {
    theme: {
      blue: "prose-blue",
      orange: "prose-orange",
      yellow: "prose-yellow",
      red: "prose-red",
      green: "prose-green",
      purple: "prose-purple",
      pink: "prose-pink",
      teal: "prose-teal",
      gray: "prose-gray",
    },
    size: {
      sm: "prose-sm",
      md: "prose-base",
      lg: "prose-lg",
    },
  },

  defaultVariants: {
    theme: "gray",
    size: "md",
  },
})

import { cva } from "../../shared"

export const proseVariants = cva({
  base: [
    "text-pretty text-start max-w-none prose dark:prose-invert",

    // Prose Headings
    "prose-headings:font-medium prose-h1:-tracking-1 prose-h2:-tracking-1 prose-a:text-primary hover:prose-a:text-black",
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

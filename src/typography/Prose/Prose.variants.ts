import { cva } from "../../shared"

export const proseVariants = cva({
  base: [
    "text-pretty prose dark:prose-invert",

    // Prose Headings
    "prose-headings:font-medium prose-h1:text-4xl prose-h1:-tracking-1 prose-h2:text-3xl prose-h2:-tracking-1 prose-h3:text-2xl prose-h3:-tracking-1 prose-h4:text-xl prose-h5:text-lg prose-h6:text-base",

    // Prose Links
    "prose-a:text-primary hover:prose-a:text-black",

    // Prose Misc
    "prose-strong:font-medium",
  ],

  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },

  defaultVariants: {
    size: "md",
  },
})

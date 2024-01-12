import { cva } from "~/shared/cva"

export const avatarGroupVariants = cva({
  base: "flex flex-wrap items-center gap-y-1",

  variants: {
    size: {
      xs: "-space-x-1",
      sm: "-space-x-1.5",
      md: "-space-x-2",
      lg: "-space-x-2.5",
      xl: "-space-x-3",
    },
  },

  defaultVariants: {
    size: "md",
  },
})

export const avatarGroupItemVariants = cva({
  base: "ring-[0.125em] ring-white",
})

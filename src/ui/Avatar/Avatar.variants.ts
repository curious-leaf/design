import { cva } from "../../shared"

export const avatarVariants = cva({
  base: "relative flex items-center justify-center shrink-0 w-auto",

  variants: {
    variant: {
      soft: "bg-gradient-to-b from-primary-lighter to-primary-light text-primary-dark",
      outline: "border border-gray-200",
    },
    size: {
      xs: "h-5 min-w-5 text-3xs",
      sm: "h-6 min-w-6 text-2xs",
      md: "h-8 min-w-8 text-xs",
      lg: "h-10 min-w-10 text-sm",
      xl: "h-12 min-w-12 text-base",
    },
    shape: {
      rounded: "rounded-md",
      circle: "rounded-full",
    },
  },

  defaultVariants: {
    variant: "soft",
    size: "md",
    shape: "circle",
  },
})

export const avatarStatusVariants = cva({
  base: "absolute -right-0 rounded-full size-[0.66em] ring-white ring-[0.125em]",

  variants: {
    position: {
      top: "-top-0",
      bottom: "-bottom-0",
    },
  },

  defaultVariants: {
    position: "top",
  },
})

export const avatarImageVariants = cva({
  base: "h-full object-cover object-center rounded-[inherit]",
})

export const avatarFallbackVariants = cva({
  base: "font-medium whitespace-nowrap",
})

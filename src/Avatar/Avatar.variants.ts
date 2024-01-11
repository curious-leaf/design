import { cva } from "../shared/cva"

export const avatarVariants = cva({
  base: "relative flex items-center justify-center shrink-0 bg-gradient-to-b w-auto",

  variants: {
    theme: {
      blue: "from-blue-lighter to-blue-light text-blue-darker",
      orange: "from-orange-lighter to-orange-light text-orange-darker",
      yellow: "from-yellow-lighter to-yellow-light text-yellow-darker",
      red: "from-red-lighter to-red-light text-red-darker",
      green: "from-green-lighter to-green-light text-green-darker",
      purple: "from-purple-lighter to-purple-light text-purple-darker",
      pink: "from-pink-lighter to-pink-light text-pink-darker",
      teal: "from-teal-lighter to-teal-light text-teal-darker",
      gray: "from-gray-100 to-gray-200 text-gray-600",
    },
    size: {
      xs: "h-4 min-w-4 text-xxxs",
      sm: "h-6 min-w-6 text-xxxs",
      md: "h-8 min-w-8 text-xxs",
      lg: "h-10 min-w-10 text-sm",
      xl: "h-12 min-w-12 text-base",
    },
    shape: {
      rounded: "rounded-md",
      circle: "rounded-full",
    },
  },

  defaultVariants: {
    theme: "gray",
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
  base: "size-full object-cover object-center rounded-[inherit]",
})

export const avatarFallbackVariants = cva({
  base: "font-medium whitespace-nowrap rounded-[inherit]",
})

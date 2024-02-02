import { cva } from "../../shared"

export const drawerVariants = cva({
  base: [
    "fixed -inset-y-px z-50 w-full overflow-auto duration-500 focus:outline-none",
    "data-[state=open]:animate-in data-[state=closed]:animate-out",
    "data-[state=open]:fade-in data-[state=closed]:fade-out",
  ],

  variants: {
    size: {
      xs: "max-w-xs",
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
    },
    direction: {
      left: "-left-px data-[state=open]:slide-in-from-left-full data-[state=closed]:slide-out-to-left-full",
      right:
        "-right-px data-[state=open]:slide-in-from-right-full data-[state=closed]:slide-out-to-right-full",
    },
  },

  defaultVariants: {
    size: "md",
    direction: "right",
  },
})

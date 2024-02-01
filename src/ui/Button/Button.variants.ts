import { cva } from "../../shared"

export const buttonVariants = cva({
  base: [
    "relative inline-flex items-center justify-center",
    "border border-transparent rounded font-medium leading-icon text-center",

    // Disabled
    "disabled:opacity-60 disabled:pointer-events-none",

    // hover
    "hover:z-10",

    // Focus
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus:z-10",
  ],

  variants: {
    theme: {
      primary:
        "border-primary-dark/25 text-primary-dark hover:border-primary-dark/40 focus-visible:ring-primary/50",
      secondary:
        "border-default text-gray-600 hover:border-gray-300 focus-visible:ring-gray-500/50",
      positive:
        "border-green-dark/25 text-green-dark hover:border-green-dark/40 focus-visible:ring-green/50",
      negative:
        "border-red-dark/25 text-red-dark hover:border-red-dark/40 focus-visible:ring-red/50",
      fancy:
        "text-white *:z-10 before:absolute before:-inset-px before:rounded before:border before:border-transparent before:bg-gradient-to-br before:from-purple before:to-pink before:bg-origin-border after:absolute after:-inset-px after:rounded after:bg-black/10 after:opacity-0 after:transition hover:after:opacity-100 focus-visible:ring-pink/50",
    },
    variant: {
      solid: "shadow-sm",
      outline: "shadow-sm",
      soft: "",
      ghost: "hover:border-transparent",
    },
    size: {
      sm: "text-2xs gap-[0.5ch] py-1 px-2",
      md: "text-xs gap-[0.75ch] py-1.5 px-3",
      lg: "text-sm gap-[1ch] py-2 px-4",
    },
    iconOnly: {
      true: "",
    },
    loading: {
      true: "[&>*:not(.animate-spin)]:text-transparent",
    },
  },

  compoundVariants: [
    // Primary
    { theme: "primary", variant: "solid", class: "bg-primary text-white hover:bg-primary-dark" },
    { theme: "primary", variant: "outline", class: "bg-white hover:bg-primary-lighter" },
    { theme: "primary", variant: "soft", class: "border-transparent bg-primary-lighter" },
    { theme: "primary", variant: "ghost", class: "border-transparent hover:bg-primary-lighter" },

    // Secondary
    { theme: "secondary", variant: "solid", class: "bg-gray-800 text-white hover:bg-gray-900" },
    { theme: "secondary", variant: "outline", class: "bg-white hover:bg-gray-100" },
    { theme: "secondary", variant: "soft", class: "border-transparent bg-gray-100" },
    { theme: "secondary", variant: "ghost", class: "border-transparent hover:bg-gray-100" },

    // Positive
    { theme: "positive", variant: "solid", class: "bg-green text-white hover:bg-green-dark" },
    { theme: "positive", variant: "outline", class: "bg-white hover:bg-green-lighter" },
    { theme: "positive", variant: "soft", class: "border-transparent bg-green-lighter" },
    { theme: "positive", variant: "ghost", class: "border-transparent hover:bg-green-lighter" },

    // Negative
    { theme: "negative", variant: "solid", class: "bg-red text-white hover:bg-red-dark" },
    { theme: "negative", variant: "outline", class: "bg-white hover:bg-red-lighter" },
    { theme: "negative", variant: "soft", class: "border-transparent bg-red-lighter" },
    { theme: "negative", variant: "ghost", class: "border-transparent hover:bg-red-lighter" },

    // Is icon only
    { size: "sm", iconOnly: true, class: "px-1" },
    { size: "md", iconOnly: true, class: "px-1.5" },
    { size: "lg", iconOnly: true, class: "px-2" },
  ],

  defaultVariants: {
    theme: "primary",
    variant: "solid",
    size: "md",
    iconOnly: false,
  },
})

export const buttonAffixVariants = cva({
  base: "shrink-0 first:-ml-[0.21425em] last:-mr-[0.21425em] only:m-0",
})

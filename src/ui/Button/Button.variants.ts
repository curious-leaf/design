import { cva, focusClasses } from "../../shared"

export const buttonVariants = cva({
  base: [
    "relative inline-flex items-center justify-center border border-transparent font-medium leading-icon rounded-md shadow-sm transition hover:z-10",
    "disabled:opacity-60 disabled:pointer-events-none",
    focusClasses,
  ],

  variants: {
    theme: {
      primary:
        "border-primary-dark/25 text-primary-dark hover:border-primary-dark/40 focus-visible:border-primary-dark/40 focus-visible:ring-primary-light",
      secondary:
        "border-inherit text-gray-600 hover:border-gray-300 focus-visible:border-gray-500 focus-visible:ring-gray-300",
      positive:
        "border-green-dark/25 text-green-dark hover:border-green-dark/40 focus-visible:border-green-dark/40 focus-visible:ring-green-light",
      negative:
        "border-red-dark/25 text-red-dark hover:border-red-dark/40 focus-visible:border-red-dark/40 focus-visible:ring-red-light",
      fancy:
        "border-purple-dark/25 text-purple-dark hover:border-purple-dark/40 focus-visible:border-purple-dark/40 focus-visible:ring-purple-light",
    },
    variant: {
      solid: "!border-transparent",
      outline: "",
      soft: "shadow-none",
      ghost: "shadow-none hover:border-transparent",
    },
    size: {
      sm: "text-2xs gap-[0.5ch] py-1 px-2",
      md: "text-xs gap-[0.75ch] py-1.5 px-3",
      lg: "text-sm gap-[1ch] py-2 px-4",
    },
    isAffixOnly: {
      true: "",
    },
    isPending: {
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

    // Fancy
    { theme: "fancy", variant: "solid", class: "bg-purple text-white hover:bg-purple-dark" },
    { theme: "fancy", variant: "outline", class: "bg-white hover:bg-purple-lighter" },
    { theme: "fancy", variant: "soft", class: "border-transparent bg-purple-lighter" },
    { theme: "fancy", variant: "ghost", class: "border-transparent hover:bg-purple-lighter" },

    // Is affix only
    { size: "sm", isAffixOnly: true, class: "px-1" },
    { size: "md", isAffixOnly: true, class: "px-1.5" },
    { size: "lg", isAffixOnly: true, class: "px-2" },
  ],

  defaultVariants: {
    theme: "primary",
    variant: "solid",
    size: "lg",
  },
})

export const buttonAffixVariants = cva({
  base: "shrink-0 first:-ml-[0.21425em] last:-mr-[0.21425em] only:m-0",
})

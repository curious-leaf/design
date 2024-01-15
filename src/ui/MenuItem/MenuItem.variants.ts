import { cva } from "~/shared/cva"

export const menuItemVariants = cva({
  base: "relative flex items-center gap-2.5 min-w-0 px-3 py-2 rounded-md font-medium text-sm text-start text-gray-500 enabled:hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed",

  variants: {
    theme: {
      blue: "",
      orange: "",
      yellow: "",
      red: "",
      green: "",
      purple: "",
      pink: "",
      teal: "",
      gray: "",
    },
    active: {
      true: "bg-gray-100 text-black before:content-[''] before:absolute before:right-full before:top-1/2 before:h-2/3 before:w-1 before:mr-4 before:rounded-r-md before:-translate-y-1/2",
    },
  },

  compoundVariants: [
    { theme: "blue", active: true, class: "before:bg-blue" },
    { theme: "orange", active: true, class: "before:bg-orange" },
    { theme: "yellow", active: true, class: "before:bg-yellow" },
    { theme: "red", active: true, class: "before:bg-red" },
    { theme: "green", active: true, class: "before:bg-green" },
    { theme: "purple", active: true, class: "before:bg-purple" },
    { theme: "pink", active: true, class: "before:bg-pink" },
    { theme: "teal", active: true, class: "before:bg-teal" },
    { theme: "gray", active: true, class: "before:bg-current" },
  ],

  defaultVariants: {
    theme: "blue",
    active: false,
  },
})

export const menuItemAffixVariants = cva({
  base: "shrink-0",

  variants: {
    theme: {
      blue: "",
      orange: "",
      yellow: "",
      red: "",
      green: "",
      purple: "",
      pink: "",
      teal: "",
      gray: "",
    },
    active: {
      true: "",
    },
  },

  compoundVariants: [
    { theme: "blue", active: true, class: "text-blue-dark" },
    { theme: "orange", active: true, class: "text-orange-dark" },
    { theme: "yellow", active: true, class: "text-yellow-dark" },
    { theme: "red", active: true, class: "text-red-dark" },
    { theme: "green", active: true, class: "text-green-dark" },
    { theme: "purple", active: true, class: "text-purple-dark" },
    { theme: "pink", active: true, class: "text-pink-dark" },
    { theme: "teal", active: true, class: "text-teal-dark" },
    { theme: "gray", active: true, class: "text-current" },
  ],

  defaultVariants: {
    theme: "blue",
    active: false,
  },
})

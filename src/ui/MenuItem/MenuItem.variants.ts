import { cva } from "~/shared/cva"

export const menuItemVariants = cva({
  base: [
    "group/menu-item relative flex items-center gap-2.5 min-w-0 px-3 py-2 rounded-md font-medium text-sm text-start text-gray-500 hover:bg-gray-100",

    // Pseudo
    "before:absolute before:right-full before:top-1/2 before:h-2/3 before:w-1 before:mr-4 before:rounded-r-md before:-translate-y-1/2",

    // Active
    "aria-[current=page]:bg-gray-100 aria-[current=page]:text-black aria-[current=page]:before:content-['']",

    // Disabled
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
  ],

  variants: {
    theme: {
      blue: "aria-[current=page]:before:bg-blue",
      orange: "aria-[current=page]:before:bg-orange",
      yellow: "aria-[current=page]:before:bg-yellow",
      red: "aria-[current=page]:before:bg-red",
      green: "aria-[current=page]:before:bg-green",
      purple: "aria-[current=page]:before:bg-purple",
      pink: "aria-[current=page]:before:bg-pink",
      teal: "aria-[current=page]:before:bg-teal",
      gray: "aria-[current=page]:before:bg-current",
    },
  },

  defaultVariants: {
    theme: "blue",
  },
})

export const menuItemAffixVariants = cva({
  base: "shrink-0",

  variants: {
    theme: {
      blue: "group-aria-[current=page]/menu-item:text-blue-dark",
      orange: "group-aria-[current=page]/menu-item:text-orange-dark",
      yellow: "group-aria-[current=page]/menu-item:text-yellow-dark",
      red: "group-aria-[current=page]/menu-item:text-red-dark",
      green: "group-aria-[current=page]/menu-item:text-green-dark",
      purple: "group-aria-[current=page]/menu-item:text-purple-dark",
      pink: "group-aria-[current=page]/menu-item:text-pink-dark",
      teal: "group-aria-[current=page]/menu-item:text-teal-dark",
      gray: "group-aria-[current=page]/menu-item:text-current",
    },
  },
})

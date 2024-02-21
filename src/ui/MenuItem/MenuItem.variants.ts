import { cva } from "../../shared"

export const menuItemVariants = cva({
  base: [
    "group/menu-item relative flex items-center gap-2.5 min-w-0 rounded-md font-medium text-start",

    // Interactive
    "hover:bg-gray-100 group-data-[state=open]:hover:bg-transparent group-data-[state=open]:focus:bg-gray-100 group-data-[state=open]:outline-none",

    // Disabled
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
  ],

  variants: {
    theme: {
      primary: "text-primary-dark",
      secondary: "text-gray-600",
      positive: "text-green-dark",
      negative: "text-red-dark",
      fancy: "text-purple-dark",
    },
    size: {
      sm: "px-2.5 py-1.5 text-xs",
      md: "px-3 py-2 text-sm",
    },
    linkable: {
      true: [
        // Pseudo
        "before:hidden before:absolute before:right-full before:top-1/2 before:h-2/3 before:w-1 before:mr-4 before:bg-primary before:rounded-r-md before:-translate-y-1/2",

        // Active
        "aria-[current=page]:bg-gray-100 aria-[current=page]:text-gray-800 aria-[current=page]:before:block",
      ],
    },
  },

  defaultVariants: {
    theme: "secondary",
    size: "md",
    linkable: false,
  },
})

export const menuItemAffixVariants = cva({
  base: "shrink-0 group-aria-[current=page]/menu-item:first:text-primary",
})

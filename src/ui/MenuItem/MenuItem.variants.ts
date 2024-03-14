import { cva } from "../../shared"

export const menuItemVariants = cva({
  base: [
    "group/menu-item relative flex items-center gap-2.5 min-w-0 rounded-md font-[450] text-start",

    // Interactive
    "hover:bg-black/[0.03] group-data-[state=open]:hover:bg-transparent group-data-[state=open]:focus:bg-black/[0.04] group-data-[state=open]:outline-none",

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
      md: "px-3 py-1.5 text-sm",
    },
    linkable: {
      true: [
        // Pseudo
        "before:hidden before:absolute before:right-full before:top-1/2 before:h-2/3 before:w-1 before:mr-3 before:bg-primary before:rounded-r-md before:-translate-y-1/2",

        // Active
        "aria-[current=page]:bg-white aria-[current=page]:shadow-[0px_2px_3px_-1px_rgba(0,_0,_0,_0.04),_0px_1px_0px_0px_rgba(25,_28,_33,_0.01),_0px_0px_0px_1px_rgba(25,_28,_33,_0.04)] aria-[current=page]:text-black aria-[current=page]:before:block",
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
  base: "shrink-0 [&[viewBox]]:size-[1.2857em] group-aria-[current=page]/menu-item:first:text-primary",
})

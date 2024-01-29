import { cva } from "../../shared"

export const menuItemVariants = cva({
  base: [
    "group/menu-item relative flex items-center gap-2.5 min-w-0 px-3 py-2 rounded-md font-medium text-sm text-start text-gray-600 hover:bg-gray-100",

    // Pseudo
    "before:hidden before:absolute before:right-full before:top-1/2 before:h-2/3 before:w-1 before:mr-4 before:bg-primary before:rounded-r-md before:-translate-y-1/2",

    // Active
    "aria-[current=page]:bg-gray-100 aria-[current=page]:text-gray-800 aria-[current=page]:before:block",

    // Disabled
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
  ],
})

export const menuItemAffixVariants = cva({
  base: "shrink-0 group-aria-[current=page]/menu-item:first:text-primary",
})

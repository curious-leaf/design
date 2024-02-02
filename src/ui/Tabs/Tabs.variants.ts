import { cva } from "../../shared"

export const tabsListVariants = cva({
  base: [
    "relative flex items-center gap-x-6 gap-y-3 -mb-px overflow-auto overscroll-contain scroll-smooth scrollbar-none snap-x",
    "before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-gray-200",
  ],
})

export const tabsTriggerVariants = cva({
  base: [
    "relative z-10 inline-flex items-center justify-center py-2.5 border-b-2 border-transparent text-sm text-gray-500 font-medium whitespace-nowrap snap-start hover:border-gray-300 hover:text-gray-700 focus:outline-primary",
    // Disabled
    "disabled:pointer-events-none disabled:opacity-60",
    // Active
    "data-[state=active]:border-current data-[state=active]:text-primary",
  ],
})

export const tabsContentVariants = cva({
  base: "outline-none data-[state=inactive]:hidden",
})

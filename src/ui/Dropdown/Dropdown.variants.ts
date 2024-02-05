import { cva } from "../../shared"

export const dropdownVariants = cva({
  base: [
    "group flex flex-col z-50 px-4 divide-y overflow-clip",
    "min-w-[--radix-dropdown-menu-trigger-width] max-h-[--radix-popper-available-height]",
    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    "data-[side=bottom]:slide-in-from-bottom-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-top-2",
  ],
})

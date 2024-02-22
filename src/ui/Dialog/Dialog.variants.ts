import { cva } from "../../shared"

export const dialogVariants = cva({
  base: [
    "outline-none",
    "data-[state=open]:animate-in data-[state=closed]:animate-out",
    "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
    "data-[state=open]:slide-in-from-left-1/2 data-[state=closed]:slide-out-to-left-1/2",
    "data-[state=open]:slide-in-from-bottom-4 data-[state=closed]:slide-out-to-bottom-4",
  ],
})

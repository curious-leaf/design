import { cva } from "../../shared"

export const backdropVariants = cva({
  base: [
    "fixed inset-0 z-50 backdrop-blur bg-gray-100/50 duration-300",
    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
  ],
})

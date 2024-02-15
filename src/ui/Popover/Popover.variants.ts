import { cva } from "../../shared"

export const popoverVariants = cva({
  base: "z-50 px-3 py-1.5 min-w-[8rem] overflow-hidden rounded-md bg-white text-gray-800 text-2xs outline-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]",
})

export const popoverCloseVariants = cva({
  base: "absolute right-2 top-2 rounded-full p-1 opacity-50 outline-none hover:opacity-75",
})

export const popoverArrowVariants = cva({
  base: "-mt-px block fill-current text-white drop-shadow-sm",
})

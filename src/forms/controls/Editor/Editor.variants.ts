import { cva } from "../../../shared"
import { inputFocusWithinClasses } from "../Input/Input.variants"

export const editorVariants = cva({
  base: ["relative w-full border rounded-md overflow-hidden transition", inputFocusWithinClasses],

  variants: {
    error: {
      true: "border-red",
    },
    plain: {
      true: "contents",
    },
  },

  defaultVariants: {
    error: false,
    plain: false,
  },
})

export const editorContentVariants = cva({
  base: "size-full max-w-full pb-10 break-word focus:outline-none focus:ring-0",

  variants: {
    compact: {
      true: "min-h-[10rem] md:min-h-[12rem] lg:min-h-[14rem]",
      false: "min-h-[10rem] md:min-h-[20rem] lg:min-h-[30rem]",
    },
    plain: {
      false: "py-2 px-3 border-t",
    },
  },

  defaultVariants: {
    compact: false,
    plain: false,
  },
})

export const editorMenuVariants = cva({
  base: "w-full bg-white",

  variants: {
    plain: {
      true: "py-2.5 -mt-2.5",
      false: "p-2.5",
    },
  },

  defaultVariants: {
    plain: false,
  },
})

import { cva, focusWithinClasses } from "../../../shared"

export const editorVariants = cva({
  base: ["relative w-full border rounded-md overflow-hidden transition", focusWithinClasses],

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
  base: "flex-1 max-w-none w-full pb-10 break-word focus:outline-none focus:ring-0",

  variants: {
    compact: {
      true: "min-h-[10rem] [@media(min-height:720px)]:min-h-[12rem] [@media(min-height:960px)]:min-h-[14rem]",
      false:
        "min-h-[10rem] [@media(min-height:720px)]:min-h-[20rem] [@media(min-height:960px)]:min-h-[30rem]",
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
  base: "w-full",

  variants: {
    plain: {
      false: "p-2.5",
    },
  },

  defaultVariants: {
    plain: false,
  },
})

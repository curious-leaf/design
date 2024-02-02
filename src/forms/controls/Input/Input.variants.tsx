import { cva } from "../../../shared"

export const inputFocusClasses =
  "focus-visible:border-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-300 focus-visible:z-10"

export const inputFocusWithinClasses =
  "focus-within:border-gray-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-300 focus-within:z-10"

export const inputVariants = cva({
  base: [
    "peer flex gap-2 py-2 px-3 items-center justify-between w-full bg-white border rounded shadow-sm text-sm resize-none overflow-clip transition placeholder:text-gray-400",
    "disabled:text-gray-400 disabled:bg-gray-50 disabled:opacity-70",
    inputFocusClasses,
  ],

  variants: {
    error: {
      true: "!border-red",
    },
    mono: {
      true: "font-mono whitespace-pre break-normal overflow-x-auto",
    },
    plain: {
      true: "border-0 p-0 shadow-none !ring-0 !ring-offset-0",
    },
  },
})

import { cva, focusClasses } from "../../../shared"

export const inputVariants = cva({
  base: [
    "peer flex gap-2.5 py-2 px-3 items-center justify-between w-full bg-white border rounded shadow-sm text-sm text-start resize-none overflow-clip transition placeholder:text-gray-400",
    "disabled:text-gray-400 disabled:bg-gray-50 disabled:opacity-70",
    focusClasses,
  ],

  variants: {
    error: {
      true: "!border-red",
    },
    mono: {
      true: "font-mono whitespace-pre break-normal overflow-x-auto",
    },
    plain: {
      true: "border-0 p-0 rounded-none shadow-none !ring-0 !ring-offset-0",
    },
    hoverable: {
      true: "hover:bg-gray-50 hover:border-gray-300",
    },
  },
})

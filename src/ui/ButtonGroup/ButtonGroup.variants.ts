import { cva } from "../../shared"

export const buttonGroupVariants = cva({
  base: "group flex flex-wrap -space-x-px [&>*:not(:first-child)]:rounded-s-none [&>*:not(:last-child)]:rounded-e-none",
})

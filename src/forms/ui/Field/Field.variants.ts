import { cva } from "../../../shared"

export const fieldVariants = cva({
  base: "flex flex-col flex-wrap items-start w-full justify-start gap-x-4 gap-y-2 @md/set:flex-row @md/set:flex-nowrap",
})

export const fieldLabelVariants = cva({
  base: "flex flex-wrap gap-1 @md/set:mt-2 @md/set:w-[30%] @md/set:min-w-[10rem]",
})

export const fieldContentVariants = cva({
  base: "flex min-w-0 w-full flex-col gap-y-1.5",
  // base: "flex min-w-0 flex-1 flex-col gap-y-1.5 self-stretch",
})

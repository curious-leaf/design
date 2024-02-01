import { cva } from "../../shared"

export const boxGroupVariants = cva({
  base: "flex flex-wrap gap-y-2 gap-x-3 w-full",

  variants: {
    boxed: {
      true: "@md:grid @md:grid-auto-fill-xs",
    },
  },
})

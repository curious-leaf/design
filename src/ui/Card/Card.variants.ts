import { cva } from "../../shared"

export const cardVariants = cva({
  base: "flex flex-col gap-8 p-6 overflow-auto md:p-8",
})

export const cardPanelVariants = cva({
  base: "sticky inset-x-0 z-30 flex flex-row-reverse items-center justify-between gap-4 px-6 py-4 -mx-6 bg-white md:-mx-8 md:px-8 md:py-6",

  variants: {
    position: {
      top: "-mt-6 -top-6 border-b md:-mt-8 md:-top-8",
      bottom: "-mb-6 mt-auto bg-gray-50 -bottom-6 border-t md:-mb-8 md:-bottom-8",
    },
  },
})

import { cva } from "../../shared"

export const shimmerVariants = cva({
  base: "absolute inset-y-0 z-10 w-full animate-shimmer bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none",
})

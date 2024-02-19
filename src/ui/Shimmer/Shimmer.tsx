import { cx } from "@curiousleaf/design"
import { type HTMLAttributes, forwardRef } from "react"

import { shimmerVariants } from "./Shimmer.variants"

export type ShimmerElement = HTMLDivElement
export type ShimmerProps = HTMLAttributes<ShimmerElement>

export const Shimmer = forwardRef<ShimmerElement, ShimmerProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cx(shimmerVariants({ className }))} {...props} />
})

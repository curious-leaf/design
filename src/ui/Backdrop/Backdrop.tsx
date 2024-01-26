import { forwardRef } from "react"
import type { HTMLAttributes } from "react"

import type { VariantProps } from "../../shared"
import { cx } from "../../shared"

import { backdropVariants } from "./Backdrop.variants"

export type BackdropElement = HTMLDivElement
export type BackdropProps = HTMLAttributes<BackdropElement> & VariantProps<typeof backdropVariants>

export const Backdrop = forwardRef<BackdropElement, BackdropProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cx(backdropVariants({ className }))} {...props} />
  },
)

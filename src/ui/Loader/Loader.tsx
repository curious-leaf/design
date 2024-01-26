import { LoaderIcon } from "lucide-react"
import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ElementRef } from "react"

import { cx } from "../../shared"

export const Loader = forwardRef<
  ElementRef<typeof LoaderIcon>,
  ComponentPropsWithoutRef<typeof LoaderIcon>
>((props, ref) => {
  const { className, ...rest } = props

  return <LoaderIcon ref={ref} className={cx("animate-spin", className)} {...rest} />
})

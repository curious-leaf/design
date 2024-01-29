import { IconLoader } from "@tabler/icons-react"
import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ElementRef } from "react"

import { cx } from "../../shared"

export const Loader = forwardRef<
  ElementRef<typeof IconLoader>,
  ComponentPropsWithoutRef<typeof IconLoader>
>((props, ref) => {
  const { className, ...rest } = props

  return <IconLoader ref={ref} className={cx("animate-spin", className)} {...rest} />
})

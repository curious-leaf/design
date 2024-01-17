import { forwardRef } from "react"
import type { HTMLAttributes } from "react"

import { cx, type VariantProps } from "~/shared/cva"
import { Blurb, type BlurbProps } from "~/ui/Blurb"

import { headerBlurbVariants, headerVariants } from "./Header.variants"

export type HeaderElement = HTMLDivElement

export type HeaderProps = HTMLAttributes<HeaderElement> &
  BlurbProps &
  VariantProps<typeof headerVariants>

export const Header = forwardRef<HeaderElement, HeaderProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <div ref={ref} className={cx(headerVariants({ className }))} {...rest}>
      <Blurb className={cx(headerBlurbVariants())} {...rest} />
    </div>
  )
})

Header.defaultProps = {}

Header.displayName = "Header"

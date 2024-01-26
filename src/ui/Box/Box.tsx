import { Slot } from "@radix-ui/react-slot"
import { forwardRef, isValidElement } from "react"
import type { HTMLAttributes } from "react"

import { type VariantProps, cx } from "../../shared"

import { boxVariants } from "./Box.variants"

export type BoxElement = HTMLDivElement

export type BoxProps = HTMLAttributes<BoxElement> &
  VariantProps<typeof boxVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const Box = forwardRef<BoxElement, BoxProps>((props, ref) => {
  const { className, asChild, ...rest } = props

  const useAsChild = asChild && isValidElement(rest.children)
  const Component = useAsChild ? Slot : "div"

  return <Component ref={ref} className={cx(boxVariants({ className }))} {...rest} />
})

Box.defaultProps = {
  asChild: false,
}

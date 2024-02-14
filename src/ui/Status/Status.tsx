import { Slot } from "@radix-ui/react-slot"
import { type HTMLAttributes, forwardRef } from "react"

import { cx, isReactElement, type VariantProps } from "../../shared"

import { statusVariants } from "./Status.variants"

export type StatusElement = HTMLSpanElement

export type StatusProps = Omit<HTMLAttributes<StatusElement>, "size"> &
  VariantProps<typeof statusVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const Status = forwardRef<StatusElement, StatusProps>((props, ref) => {
  const { className, asChild, theme, variant, ...rest } = props

  const useAsChild = asChild && isReactElement(rest.children)
  const Component = useAsChild ? Slot : "span"

  return (
    <Component ref={ref} className={cx(statusVariants({ theme, variant, className }))} {...rest} />
  )
})

Status.defaultProps = {
  theme: "gray",
  variant: "empty",
  asChild: false,
}

Status.displayName = "Status"

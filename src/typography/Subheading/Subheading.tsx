import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes } from "react"
import { forwardRef, isValidElement } from "react"

import { type VariantProps, cx } from "../../shared"

import { subheadingVariants } from "./Subheading.variants"

export type SubheadingElement = HTMLParagraphElement

export type SubheadingProps = Omit<HTMLAttributes<SubheadingElement>, "size"> &
  VariantProps<typeof subheadingVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const Subheading = forwardRef<SubheadingElement, SubheadingProps>((props, ref) => {
  const { className, asChild, size, ...rest } = props

  const useAsChild = asChild && isValidElement(rest.children)
  const Comp = useAsChild ? Slot : "p"

  return <Comp className={cx(subheadingVariants({ size, className }))} ref={ref} {...rest} />
})

Subheading.defaultProps = {
  size: "md",
  asChild: false,
}

Subheading.displayName = "Subheading"

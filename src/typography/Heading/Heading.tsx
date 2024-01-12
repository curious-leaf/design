import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes } from "react"
import { forwardRef } from "react"

import { type VariantProps, cx } from "~/shared/cva"

import { headingVariants } from "./Heading.variants"

export type HeadingElement = HTMLHeadingElement

export type HeadingProps = Omit<HTMLAttributes<HeadingElement>, "size"> &
  VariantProps<typeof headingVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const Heading = forwardRef<HeadingElement, HeadingProps>((props, ref) => {
  const { className, asChild, size, ...rest } = props
  const Comp = asChild ? Slot : size ?? "h2"

  return <Comp className={cx(headingVariants({ size, className }))} ref={ref} {...rest} />
})

export const H1 = forwardRef<HeadingElement, HeadingProps>((props, ref) => {
  return <Heading size="h1" ref={ref} {...props} />
})

export const H2 = forwardRef<HeadingElement, HeadingProps>((props, ref) => {
  return <Heading size="h2" ref={ref} {...props} />
})

export const H3 = forwardRef<HeadingElement, HeadingProps>((props, ref) => {
  return <Heading size="h3" ref={ref} {...props} />
})

export const H4 = forwardRef<HeadingElement, HeadingProps>((props, ref) => {
  return <Heading size="h4" ref={ref} {...props} />
})

export const H5 = forwardRef<HeadingElement, HeadingProps>((props, ref) => {
  return <Heading size="h5" ref={ref} {...props} />
})

export const H6 = forwardRef<HeadingElement, HeadingProps>((props, ref) => {
  return <Heading size="h6" ref={ref} {...props} />
})

Heading.defaultProps = {
  size: "h3",
  asChild: false,
}

Heading.displayName = "Heading"

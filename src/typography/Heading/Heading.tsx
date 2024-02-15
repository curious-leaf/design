"use client"

import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes } from "react"
import { forwardRef } from "react"

import { type VariantProps, cx, isReactElement } from "../../shared"

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

  const useAsChild = asChild && isReactElement(rest.children)
  const Comp = useAsChild ? Slot : size ?? "h2"

  return <Comp ref={ref} className={cx(headingVariants({ size, className }))} {...rest} />
})

export const H1 = forwardRef<HeadingElement, HeadingProps>((props, ref) => {
  return <Heading ref={ref} size="h1" {...props} />
})

export const H2 = forwardRef<HeadingElement, HeadingProps>((props, ref) => {
  return <Heading ref={ref} size="h2" {...props} />
})

export const H3 = forwardRef<HeadingElement, HeadingProps>((props, ref) => {
  return <Heading ref={ref} size="h3" {...props} />
})

export const H4 = forwardRef<HeadingElement, HeadingProps>((props, ref) => {
  return <Heading ref={ref} size="h4" {...props} />
})

export const H5 = forwardRef<HeadingElement, HeadingProps>((props, ref) => {
  return <Heading ref={ref} size="h5" {...props} />
})

export const H6 = forwardRef<HeadingElement, HeadingProps>((props, ref) => {
  return <Heading ref={ref} size="h6" {...props} />
})

Heading.defaultProps = {
  size: "h3",
  asChild: false,
}

Heading.displayName = "Heading"

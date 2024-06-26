"use client"

import { Slot } from "@radix-ui/react-slot"
import { type HTMLAttributes, forwardRef } from "react"

import { type VariantProps, cx, isReactElement } from "../../shared"

import { dotVariants } from "./Dot.variants"

export type DotElement = HTMLSpanElement

export type DotProps = Omit<HTMLAttributes<DotElement>, "size"> &
  VariantProps<typeof dotVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const Dot = forwardRef<DotElement, DotProps>((props, ref) => {
  const { className, asChild, variant, ...rest } = props

  const useAsChild = asChild && isReactElement(rest.children)
  const Component = useAsChild ? Slot : "span"

  return <Component ref={ref} className={cx(dotVariants({ variant, className }))} {...rest} />
})

Dot.defaultProps = {
  variant: "solid",
  asChild: false,
}

Dot.displayName = "Dot"

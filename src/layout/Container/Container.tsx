"use client"

import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes } from "react"
import { forwardRef } from "react"

import { cx, isReactElement, type VariantProps } from "../../shared"

import { containerVariants } from "./Container.variants"

export type ContainerElement = HTMLDivElement

export type ContainerProps = HTMLAttributes<ContainerElement> &
  VariantProps<typeof containerVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const Container = forwardRef<ContainerElement, ContainerProps>((props, ref) => {
  const { className, asChild, size, ...rest } = props

  const useAsChild = asChild && isReactElement(props.children)
  const Component = useAsChild ? Slot : "main"

  return <Component ref={ref} className={cx(containerVariants({ size, className }))} {...rest} />
})

Container.defaultProps = {
  size: "md",
  asChild: false,
}

Container.displayName = "Container"

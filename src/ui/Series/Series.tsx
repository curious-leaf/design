"use client"

import { Slot } from "@radix-ui/react-slot"
import type { HTMLAttributes } from "react"
import { forwardRef } from "react"

import { cx, isReactElement, type VariantProps } from "../../shared"

import { seriesVariants } from "./Series.variants"

export type SeriesElement = HTMLDivElement

export type SeriesProps = HTMLAttributes<SeriesElement> &
  VariantProps<typeof seriesVariants> & {
    /**
     * If series to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const Series = forwardRef<SeriesElement, SeriesProps>((props, ref) => {
  const { className, asChild, size, ...rest } = props
  const useAsChild = asChild && isReactElement(props.children)
  const Component = useAsChild ? Slot : "div"

  return <Component ref={ref} className={cx(seriesVariants({ size, className }))} {...rest} />
})

Series.defaultProps = {
  size: "md",
  asChild: false,
}

Series.displayName = "Series"

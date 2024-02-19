"use client"

import { forwardRef, SVGAttributes } from "react"
import { IconGripVertical } from "../../icons/IconGripVertical"
import { VariantProps, cx } from "../../shared"
import { draggableVariants } from "./Draggable.variants"

export type DraggableElement = SVGSVGElement

export type DraggableProps = SVGAttributes<DraggableElement> &
  VariantProps<typeof draggableVariants>

export const Draggable = forwardRef<DraggableElement, DraggableProps>((props, ref) => {
  const { className, dragging, ...rest } = props

  return (
    <IconGripVertical
      ref={ref}
      className={cx(draggableVariants({ dragging, className }))}
      {...rest}
    />
  )
})

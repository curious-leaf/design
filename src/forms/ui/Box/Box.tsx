"use client"

import { Slot } from "@radix-ui/react-slot"
import { forwardRef } from "react"
import type { HTMLAttributes, LabelHTMLAttributes, ReactNode } from "react"

import { type VariantProps, cx } from "../../../shared"
import { inputVariants } from "../../controls/Input/Input.variants"

import { boxGroupVariants, boxVariants } from "./Box.variants"

export type BoxElement = HTMLLabelElement

export type BoxProps = LabelHTMLAttributes<BoxElement> & {
  /**
   * The label for the box.
   */
  label?: ReactNode

  /**
   * The slot to be rendered after the label.
   */
  suffix?: ReactNode
}

const BoxBase = forwardRef<BoxElement, BoxProps>((props, ref) => {
  const { children, className, label, suffix, ...rest } = props
  const cn = cx(inputVariants({ hoverable: true }), boxVariants({ className }))

  return (
    <label ref={ref} className={cn} {...rest}>
      {children}

      {label && (
        <span className="flex-1 truncate text-sm font-medium peer-data-[state=unchecked]:opacity-60">
          {label}
        </span>
      )}

      <Slot className="ml-auto">{suffix}</Slot>
    </label>
  )
})

export const BoxGroup = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLElement> & VariantProps<typeof boxGroupVariants>
>(({ className, boxed, ...props }, ref) => {
  return <div ref={ref} className={cx(boxGroupVariants({ boxed, className }))} {...props} />
})

export const Box = Object.assign(BoxBase, {
  Group: BoxGroup,
})

"use client"

import { type HTMLAttributes, forwardRef } from "react"

import type { VariantProps } from "../../shared"

import { Subheading } from "../../typography/Subheading"
import { dividerVariants } from "./Divider.variants"

export type DividerElement = HTMLDivElement
export type DividerProps = HTMLAttributes<DividerElement> & VariantProps<typeof dividerVariants>

export const Divider = forwardRef<DividerElement, DividerProps>((props, ref) => {
  const { children, className, ...rest } = props

  return (
    <div ref={ref} className={dividerVariants({ className })} {...rest}>
      {children ?? (
        <Subheading size="xs" className="text-gray-400">
          or
        </Subheading>
      )}
    </div>
  )
})

Divider.displayName = "Divider"

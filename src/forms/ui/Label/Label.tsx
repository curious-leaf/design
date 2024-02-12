import * as LabelPrimitive from "@radix-ui/react-label"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import { forwardRef } from "react"

import type { VariantProps } from "../../../shared"
import { cx } from "../../../shared"

import { labelVariants } from "./Label.variants"

export type LabelElement = ElementRef<typeof LabelPrimitive.Root>
export type LabelProps = ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants>

export const Label = forwardRef<LabelElement, LabelProps>((props, ref) => {
  const { className, required, ...rest } = props

  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cx(labelVariants({ required, className }))}
      {...rest}
    />
  )
})

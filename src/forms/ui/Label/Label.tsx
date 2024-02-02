import * as LabelPrimitive from "@radix-ui/react-label"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import { forwardRef } from "react"

import { cx } from "../../../shared"

import { labelVariants } from "./Label.variants"

export const Label = forwardRef<
  ElementRef<typeof LabelPrimitive.Root>,
  ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>((props, ref) => {
  const { className, ...rest } = props

  return <LabelPrimitive.Root ref={ref} className={cx(labelVariants({ className }))} {...rest} />
})

"use client"

import type { FieldsetHTMLAttributes } from "react"
import { forwardRef } from "react"

import type { VariantProps } from "../../../shared"
import { cx } from "../../../shared"

import { fieldsetVariants } from "./Fieldset.variants"

export type FieldsetElement = HTMLFieldSetElement
export type FieldsetProps = FieldsetHTMLAttributes<HTMLFieldSetElement> &
  VariantProps<typeof fieldsetVariants>

export const Fieldset = forwardRef<FieldsetElement, FieldsetProps>((props, ref) => {
  const { className, layout, columns, ...rest } = props

  return (
    <fieldset
      ref={ref}
      className={cx(fieldsetVariants({ layout, columns, className }))}
      {...rest}
    />
  )
})

Fieldset.defaultProps = {
  columns: 1,
  layout: "adaptive",
}

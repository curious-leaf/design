"use client"

import { forwardRef, type InputHTMLAttributes } from "react"

import type { VariantProps } from "../../shared"
import { cx } from "../../shared"
import { useAffix } from "../../forms/ui/Affix/Affix"

import { inputVariants } from "./Input.variants"

export type InputElement = HTMLInputElement
export type InputProps = InputHTMLAttributes<InputElement> & VariantProps<typeof inputVariants>

export const Input = forwardRef<InputElement, InputProps>((props, ref) => {
  const { className, style, ...rest } = props
  const { prefixWidth, suffixWidth } = useAffix()

  return (
    <input
      ref={ref}
      className={cx(inputVariants({ className }))}
      style={{ ...style, paddingLeft: prefixWidth, paddingRight: suffixWidth }}
      {...rest}
    />
  )
})

Input.defaultProps = {
  type: "text",
}

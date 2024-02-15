"use client"

import type { ElementRef } from "react"
import { forwardRef } from "react"
import type { TextareaAutosizeProps } from "react-textarea-autosize"
import TextAreaAutosize from "react-textarea-autosize"

import type { VariantProps } from "../../../shared"
import { cx } from "../../../shared"
import { useAffix } from "../../ui/Affix/Affix"
import { inputVariants } from "../Input/Input.variants"

export type TextAreaElement = ElementRef<typeof TextAreaAutosize>
export type TextAreaProps = TextareaAutosizeProps & VariantProps<typeof inputVariants>

export const TextArea = forwardRef<TextAreaElement, TextAreaProps>((props, ref) => {
  const { className, style, error, mono, plain, ...rest } = props
  const { prefixWidth, suffixWidth } = useAffix()

  return (
    <TextAreaAutosize
      ref={ref}
      className={cx(inputVariants({ error, mono, plain, className }))}
      style={{ ...style, paddingLeft: prefixWidth, paddingRight: suffixWidth }}
      {...rest}
    />
  )
})

TextArea.defaultProps = {
  minRows: 3,
  error: false,
  mono: false,
  plain: false,
}

"use client"

import { ChangeEvent, InputHTMLAttributes, KeyboardEvent, forwardRef } from "react"
import {
    keepNumberInRange,
    parseNumericValue,
    preciseRound,
    setInputValue,
} from "@curiousleaf/utils"

import type { VariantProps } from "../../shared"
import { cx } from "../../shared"
import { useAffix } from "../../forms/ui/Affix/Affix"

import { inputVariants } from "../Input/Input.variants"

export type NumberInputElement = HTMLInputElement
export type NumberInputProps = InputHTMLAttributes<NumberInputElement> &
  VariantProps<typeof inputVariants>

export const NumberInput = forwardRef<NumberInputElement, NumberInputProps>((props, ref) => {
  const { className, style, ...rest } = props
  const { prefixWidth, suffixWidth } = useAffix()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // onChange(e)
  }

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!["ArrowUp", "ArrowDown"].includes(e.key)) {
      return
    }

    const target = e.currentTarget
    const direction = e.key === "ArrowUp" ? 1 : -1
    const min = parseNumericValue(target.getAttribute("min"))
    const max = parseNumericValue(target.getAttribute("max"))
    const step = parseNumericValue(target.getAttribute("step")) || 1
    const value = parseNumericValue(target.value) || min || 0
    const increment = step * (e.metaKey ? 100 : e.shiftKey ? 10 : e.altKey ? 1 / 10 : 1)

    const newValue = preciseRound(value + direction * Math.max(increment, 0.1), 2)

    if (newValue !== value) {
      setInputValue(target, keepNumberInRange(newValue, min, max), true)
      e.preventDefault()
    }
  }

  return (
    <input
      ref={ref}
      type="number"
      pattern="[0-9]*(.[0-9]+)?"
      role="spinbutton"
      autoComplete="off"
      autoCorrect="off"
      className={cx(inputVariants({ isNumber: true, className }))}
      style={{ ...style, paddingLeft: prefixWidth, paddingRight: suffixWidth }}
      // onChange={handleChange}
      onKeyDown={handleKeyUp}
      {...rest}
    />
  )
})

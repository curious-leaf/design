"use client"

import { forwardRef } from "react"

import { cx } from "../../../shared"
import type { ParagraphElement, ParagraphProps } from "../../../typography/Paragraph"
import { Paragraph } from "../../../typography/Paragraph"

import { hintVariants } from "./Hint.variants"

export type HintElement = ParagraphElement
export type HintProps = ParagraphProps

export const Hint = forwardRef<ParagraphElement, ParagraphProps>((props, ref) => {
  const { className, ...rest } = props

  return <Paragraph ref={ref} size="sm" className={cx(hintVariants({ className }))} {...rest} />
})

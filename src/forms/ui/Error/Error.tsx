import { forwardRef } from "react"

import { cx } from "../../../shared"
import type { ParagraphElement, ParagraphProps } from "../../../typography/Paragraph"
import { Paragraph } from "../../../typography/Paragraph"

import { errorVariants } from "./Error.variants"

export type ErrorElement = ParagraphElement
export type ErrorProps = ParagraphProps

export const Error = forwardRef<ParagraphElement, ParagraphProps>((props, ref) => {
  const { className, ...rest } = props

  return <Paragraph ref={ref} className={cx(errorVariants({ className }))} {...rest} />
})

import type { MarkdownToJSX } from "markdown-to-jsx"
import MarkdownParser from "markdown-to-jsx"
import { forwardRef } from "react"

import type { ProseElement, ProseProps } from "../Prose"
import { Prose } from "../Prose"

export type MarkdownElement = ProseElement

export type MarkdownProps = Omit<ProseProps, "children"> & {
  content: string
  options?: MarkdownToJSX.Options
}

export const Markdown = forwardRef<MarkdownElement, MarkdownProps>((props, ref) => {
  const { content, options = { wrapper: Prose, forceWrapper: true }, ...rest } = props

  return (
    <MarkdownParser ref={ref} options={options} {...rest}>
      {content}
    </MarkdownParser>
  )
})

Markdown.displayName = "Markdown"

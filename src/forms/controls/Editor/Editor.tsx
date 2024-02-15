"use client"

import { EditorContent } from "@tiptap/react"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import { forwardRef } from "react"

import type { VariantProps } from "../../../shared"
import { cx } from "../../../shared"
import { proseVariants } from "../../../typography/Prose/Prose.variants"
import type { SeriesElement, SeriesProps } from "../../../ui/Series"
import { Series } from "../../../ui/Series"

import { editorContentVariants, editorMenuVariants, editorVariants } from "./Editor.variants"

export type EditorElement = ElementRef<typeof EditorContent>
export type EditorProps = ComponentPropsWithoutRef<typeof EditorContent> &
  VariantProps<typeof editorVariants>

const EditorRoot = forwardRef<EditorElement, EditorProps>((props, ref) => {
  const { className, error, plain, ...rest } = props

  return (
    <EditorContent
      ref={ref}
      className={cx(editorVariants({ error, plain, className }))}
      {...rest}
    />
  )
})

type EditorMenuElement = SeriesElement
type EditorMenuProps = SeriesProps & VariantProps<typeof editorMenuVariants>

const EditorMenu = forwardRef<EditorMenuElement, EditorMenuProps>((props, ref) => {
  const { className, plain, ...rest } = props

  return (
    <Series
      ref={ref}
      size="sm"
      className={cx(editorMenuVariants({ plain, className }))}
      {...rest}
    />
  )
})

export const Editor = Object.assign(EditorRoot, {
  Menu: EditorMenu,
  ContentClass: ({ compact, plain }: VariantProps<typeof editorContentVariants>) =>
    cx(
      editorContentVariants({
        compact,
        plain,
        className: proseVariants({ size: compact ? "sm" : "md" }),
      }),
    ),
})

"use client"

import type { ChangeEvent, MouseEventHandler } from "react"
import { forwardRef, useRef } from "react"

import { IconTrash } from "../../../icons/IconTrash"
import { Button } from "../../../ui/Button"
import { ButtonGroup } from "../../../ui/ButtonGroup"

import { Series, type SeriesElement, type SeriesProps } from "../../../ui/Series"

export type UploaderElement = SeriesElement
export type UploaderProps = Omit<SeriesProps, "onChange"> & {
  /**
   * The label for the input
   */
  label?: string

  /**
   * The file types that the input should accept
   */
  accept?: string[]

  /**
   * Whether the uploader is in a pending state
   */
  isPending?: boolean

  /**
   * Callback for when the value changes
   */
  onChange: (file: File) => void

  /**
   * Callback for when the clear button is clicked
   */
  onClear?: () => void
}

export const Uploader = forwardRef<UploaderElement, UploaderProps>((props, ref) => {
  const { children, className, label, accept, isPending, onChange, onClear, ...rest } = props
  const uploadRef = useRef<HTMLInputElement | null>(null)

  const onClick: MouseEventHandler<HTMLButtonElement> = () => {
    uploadRef.current?.click()
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      onChange(e.target.files[0])
    }

    // Reset input value
    e.target.value = ""
  }

  return (
    <Series ref={ref} {...rest}>
      {children}

      <input
        type="file"
        ref={uploadRef}
        onChange={onInputChange}
        accept={accept?.join(",")}
        className="hidden"
      />

      <ButtonGroup className="shrink-0">
        <Button
          type="button"
          theme="secondary"
          variant="outline"
          onClick={onClick}
          isPending={isPending}
        >
          {label}
        </Button>

        {onClear && (
          <Button
            type="button"
            theme="negative"
            variant="outline"
            prefix={<IconTrash />}
            onClick={onClear}
          />
        )}
      </ButtonGroup>
    </Series>
  )
})

Uploader.defaultProps = {
  label: "Upload",
  accept: ["image/*"],
  isPending: false,
}

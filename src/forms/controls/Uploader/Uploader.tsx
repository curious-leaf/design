"use client"

import type { MouseEventHandler, ChangeEvent, HTMLAttributes } from "react"
import { forwardRef, useRef } from "react"

import { IconTrash } from "../../../icons/IconTrash"
import type { VariantProps } from "../../../shared"
import { cx } from "../../../shared"
import { Button } from "../../../ui/Button"
import { ButtonGroup } from "../../../ui/ButtonGroup"

import { uploaderVariants } from "./Uploader.variants"

export type UploaderElement = HTMLDivElement
export type UploaderProps = Omit<HTMLAttributes<UploaderElement>, "onChange"> &
  VariantProps<typeof uploaderVariants> & {
    /**
     * The label for the input
     */
    label?: string

    /**
     * The file types that the input should accept
     */
    accept?: string[]

    /**
     * Whether the uploader is in a loading state
     */
    loading?: boolean

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
  const { children, className, label, accept, loading, onChange, onClear, ...rest } = props
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
    <div ref={ref} className={cx(uploaderVariants({ className }))} {...rest}>
      {children}

      <input
        type="file"
        ref={uploadRef}
        onChange={onInputChange}
        accept={accept!.join(",")}
        className="hidden"
      />

      <ButtonGroup className="shrink-0">
        <Button
          type="button"
          theme="secondary"
          variant="outline"
          onClick={onClick}
          loading={loading}
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
    </div>
  )
})

Uploader.defaultProps = {
  label: "Upload",
  accept: ["image/*"],
  loading: false,
}

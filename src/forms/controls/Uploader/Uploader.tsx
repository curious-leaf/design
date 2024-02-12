import { IconTrash } from "@tabler/icons-react"
import type { MouseEventHandler, ChangeEvent, HTMLAttributes } from "react"
import { forwardRef, useRef } from "react"

import type { VariantProps } from "../../../shared"
import { cx } from "../../../shared"
import { Button } from "../../../ui/Button"
import { ButtonGroup } from "../../../ui/ButtonGroup"

import { uploaderVariants } from "./Uploader.variants"

export type UploaderElement = HTMLDivElement
export type UploaderProps = HTMLAttributes<UploaderElement> &
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
     * Callback for when the input changes
     */
    onUpload: (file: File) => void

    /**
     * Callback for when the delete button is clicked
     */
    onDelete?: () => void
  }

export const Uploader = forwardRef<UploaderElement, UploaderProps>((props, ref) => {
  const { children, className, label, accept, loading, onUpload, onDelete, ...rest } = props
  const uploadRef = useRef<HTMLInputElement | null>(null)

  const onClick: MouseEventHandler<HTMLButtonElement> = () => {
    uploadRef.current?.click()
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      onUpload(e.target.files[0])
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
        onChange={onChange}
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

        {onDelete && (
          <Button
            type="button"
            theme="negative"
            variant="outline"
            prefix={<IconTrash />}
            onClick={onDelete}
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

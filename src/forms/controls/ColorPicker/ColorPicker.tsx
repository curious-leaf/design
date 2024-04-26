"use client"

import { isLightColor } from "@curiousleaf/utils"
import Sketch, { type SketchProps } from "@uiw/react-color-sketch"
import type { HTMLAttributes } from "react"
import { forwardRef } from "react"

import { IconCheckerboard } from "../../../icons/IconCheckerboard"
import { IconClose } from "../../../icons/IconClose"
import type { VariantProps } from "../../../shared"
import { cx } from "../../../shared"
import { Popover } from "../../../ui/Popover"
import { inputVariants } from "../Input/Input.variants"
import {
  colorPickerClearVariants,
  colorPickerPreviewVariants,
  colorPickerVariants,
} from "./ColorPicker.variants"

export type ColorPickerElement = HTMLDivElement
export type ColorPickerProps = Omit<HTMLAttributes<ColorPickerElement>, "onChange"> &
  VariantProps<typeof colorPickerVariants> &
  SketchProps & {
    /**
     * The label for the input
     */
    label?: string

    /**
     * Callback for when the delete button is clicked
     */
    onClear?: () => void
  }

export const ColorPicker = forwardRef<ColorPickerElement, ColorPickerProps>((props, ref) => {
  const { children, className, label, color, onClear, ...rest } = props

  return (
    <div ref={ref} className={cx(colorPickerVariants({ className }))}>
      <Popover popover={<Sketch color={color} className="-mx-3 -my-1.5 !shadow-none" {...rest} />}>
        <button type="button" className={cx(inputVariants({ className: "w-auto" }))}>
          <div className={cx(colorPickerPreviewVariants())}>
            <IconCheckerboard className="size-full opacity-25" />
            {!!color && <div className="absolute inset-0" style={{ backgroundColor: color }} />}
          </div>

          <div className={cx("grow truncate", color ? "font-mono" : "opacity-50")}>
            {color || label}
          </div>
        </button>
      </Popover>

      {!!color && (
        <button
          type="button"
          className={colorPickerClearVariants({ light: isLightColor(color) })}
          onClick={onClear}
        >
          <IconClose className="pointer-events-none size-3.5" />
        </button>
      )}
    </div>
  )
})

ColorPicker.defaultProps = {
  label: "Pick color",
}

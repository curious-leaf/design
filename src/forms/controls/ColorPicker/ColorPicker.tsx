"use client"

import Sketch from "@uiw/react-color-sketch"
import { isLightColor } from "@curiousleaf/utils"
import type { HTMLAttributes } from "react"
import { forwardRef } from "react"

import type { VariantProps } from "../../../shared"
import { cx } from "../../../shared"

import {
  colorPickerClearVariants,
  colorPickerPreviewVariants,
  colorPickerVariants,
} from "./ColorPicker.variants"
import { IconClose } from "../../../icons/IconClose"
import { Popover } from "../../../ui/Popover"
import { IconCheckerboard } from "../../../icons/IconCheckerboard"
import { inputVariants } from "../Input/Input.variants"

export type ColorPickerElement = HTMLDivElement
export type ColorPickerProps = Omit<HTMLAttributes<ColorPickerElement>, "onChange"> &
  VariantProps<typeof colorPickerVariants> & {
    /**
     * The label for the input
     */
    label?: string

    /**
     * The file types that the input should accept
     */
    color?: string

    /**
     * The file types that the input should accept
     */
    presetColors?: string[]

    /**
     * Callback for when the value changes
     */
    onChange: (value: string) => void

    /**
     * Callback for when the delete button is clicked
     */
    onClear?: () => void
  }

export const ColorPicker = forwardRef<ColorPickerElement, ColorPickerProps>((props, ref) => {
  const { children, className, label, color, presetColors, onChange, onClear, ...rest } = props

  const onInputChange = ({ hex }: { hex: string }) => {
    onChange(hex.toLocaleUpperCase())
  }

  return (
    <div ref={ref} className={cx(colorPickerVariants({ className }))}>
      <Popover
        popover={
          <Sketch
            color={color}
            onChange={onInputChange}
            presetColors={presetColors}
            className="-mx-3 -my-1.5 !shadow-none"
            disableAlpha
          />
        }
        {...rest}
      >
        <button className={cx(inputVariants({ className: "w-auto" }))}>
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

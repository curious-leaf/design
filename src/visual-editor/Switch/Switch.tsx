"use client"

import { type InputHTMLAttributes, type ReactNode, forwardRef } from "react"

import type { VariantProps } from "../../shared"

import { Slot } from "@radix-ui/react-slot"
import { Badge } from "../../ui/Badge"
import { Tooltip } from "../../ui/Tooltip"
import { switchLabelVariants, switchVariants } from "./Switch.variants"

export interface SwitchOption {
  label?: ReactNode
  icon?: ReactNode
  value: string
  title?: string
  badge?: string
}

export type SwitchElement = HTMLInputElement
export type SwitchProps = Omit<InputHTMLAttributes<SwitchElement>, "size"> &
  VariantProps<typeof switchVariants> &
  VariantProps<typeof switchLabelVariants> & {
    options?: SwitchOption[]
  }

export const Switch = forwardRef<SwitchElement, SwitchProps>((props, ref) => {
  const { className, defaultValue, options, size, theme, spacing, ...rest } = props

  return (
    <div className={switchVariants({ size, className })}>
      {options?.map(({ value, label, icon, title, badge }) => (
        <label key={value} className="group contents">
          <input
            ref={ref}
            type="radio"
            value={value}
            defaultChecked={value === defaultValue}
            className="peer sr-only"
            {...rest}
          />

          <Tooltip tooltip={title}>
            <div className={switchLabelVariants({ theme, spacing })}>
              <Slot className="size-3.5">{icon}</Slot>

              {label}

              {badge && (
                <Badge theme="gray" size="sm" className="ml-1">
                  {badge}
                </Badge>
              )}
            </div>
          </Tooltip>
        </label>
      ))}
    </div>
  )
})

Switch.defaultProps = {
  size: "md",
  theme: "default",
  spacing: "md",
}

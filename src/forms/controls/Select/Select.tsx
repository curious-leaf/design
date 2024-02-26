"use client"

import * as SelectPrimitive from "@radix-ui/react-select"
import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from "react"
import { forwardRef } from "react"

import { IconCheck } from "../../../icons/IconCheck"
import { IconChevronDown } from "../../../icons/IconChevronDown"
import { IconChevronUp } from "../../../icons/IconChevronUp"
import type { VariantProps } from "../../../shared"
import { cx, isTruthy } from "../../../shared"
import { inputVariants } from "../Input/Input.variants"

import {
  selectContentVariants,
  selectItemVariants,
  selectScrollVariants,
  selectViewportVariants,
} from "./Select.variants"

export const SelectRoot = SelectPrimitive.Root
export const SelectGroup = SelectPrimitive.Group
export const SelectValue = SelectPrimitive.Value
export const SelectIcon = SelectPrimitive.Icon

export const SelectTrigger = forwardRef<
  ElementRef<typeof SelectPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & VariantProps<typeof inputVariants>
>(({ className, mono, error, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cx(inputVariants({ mono, error, hoverable: true, className }))}
    {...props}
  >
    <div className="grow truncate">{children}</div>

    <SelectPrimitive.Icon asChild>
      <IconChevronDown className="shrink-0 opacity-70" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))

export const SelectContent = forwardRef<
  ElementRef<typeof SelectPrimitive.Content>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cx(selectContentVariants({ popper: position === "popper", className }))}
      position={position}
      {...props}
    >
      <SelectPrimitive.ScrollUpButton className={cx(selectScrollVariants({ position: "top" }))}>
        <IconChevronUp className="opacity-70" />
      </SelectPrimitive.ScrollUpButton>

      <SelectPrimitive.Viewport
        className={cx(selectViewportVariants({ popper: position === "popper" }))}
      >
        <SelectPrimitive.Group>{children}</SelectPrimitive.Group>
      </SelectPrimitive.Viewport>

      <SelectPrimitive.ScrollDownButton
        className={cx(selectScrollVariants({ position: "bottom" }))}
      >
        <IconChevronDown className="opacity-70" />
      </SelectPrimitive.ScrollDownButton>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))

export const SelectLabel = forwardRef<
  ElementRef<typeof SelectPrimitive.Label>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cx("py-1.5 pl-2 pr-8 text-xs font-medium lg:text-sm", className)}
    {...props}
  />
))

export const SelectItem = forwardRef<
  ElementRef<typeof SelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item ref={ref} className={cx(selectItemVariants({ className }))} {...props}>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>

    <SelectPrimitive.ItemIndicator asChild>
      <IconCheck className="absolute right-1.5 top-1/2 -translate-y-1/2 stroke-2 text-sm opacity-70" />
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
))

export const SelectSeparator = forwardRef<
  ElementRef<typeof SelectPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cx("-mx-1 my-1 h-px bg-gray-200", className)}
    {...props}
  />
))

export type SelectElement = ElementRef<typeof SelectPrimitive.Root>
export type SelectProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Root> &
  ComponentPropsWithoutRef<typeof SelectPrimitive.Value> &
  ComponentPropsWithoutRef<typeof SelectTrigger> & {
    options?: (
      | false
      | {
          label?: ReactNode
          value: string
        }
    )[]
  }

const SelectBase = forwardRef<ElementRef<typeof SelectPrimitive.Trigger>, SelectProps>(
  (props, ref) => {
    const { options, error, placeholder, ...rest } = props

    return (
      <SelectPrimitive.Root {...rest}>
        <SelectTrigger ref={ref} error={error}>
          <SelectPrimitive.Value placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          {options?.filter(isTruthy).map(({ label, value }, index) => (
            <SelectItem key={index} value={value}>
              {label ?? value}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectPrimitive.Root>
    )
  },
)

export const Select = Object.assign(SelectBase, {
  Root: SelectRoot,
  Group: SelectGroup,
  Value: SelectValue,
  Icon: SelectIcon,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Label: SelectLabel,
  Item: SelectItem,
  Separator: SelectSeparator,
})

Select.defaultProps = {
  // options: false,
  placeholder: "Select an option...",
}

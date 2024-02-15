"use client"

import * as SelectPrimitive from "@radix-ui/react-select"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import { forwardRef } from "react"

import { IconCheck } from "../../../icons/IconCheck"
import { IconChevronDown } from "../../../icons/IconChevronDown"
import { IconChevronUp } from "../../../icons/IconChevronUp"
import type { VariantProps } from "../../../shared"
import { cx, isTruthy } from "../../../shared"
import { inputVariants } from "../Input/Input.variants"

import {
  selectContentVariants,
  selectScrollVariants,
  selectViewportVariants,
  selectItemVariants,
} from "./Select.variants"

const SelectTrigger = forwardRef<
  ElementRef<typeof SelectPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & VariantProps<typeof inputVariants>
>(({ className, mono, error, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cx(inputVariants({ mono, error, className }))}
    {...props}
  >
    <div className="flex-1 truncate">{children}</div>

    <SelectPrimitive.Icon asChild>
      <IconChevronDown className="shrink-0 opacity-70" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))

const SelectContent = forwardRef<
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

const SelectLabel = forwardRef<
  ElementRef<typeof SelectPrimitive.Label>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cx("py-1.5 pl-8 pr-2 text-xs font-medium lg:text-sm", className)}
    {...props}
  />
))

const SelectItem = forwardRef<
  ElementRef<typeof SelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item ref={ref} className={cx(selectItemVariants({ className }))} {...props}>
    <SelectPrimitive.ItemIndicator asChild>
      <IconCheck className="absolute left-1.5 !stroke-2 opacity-70" />
    </SelectPrimitive.ItemIndicator>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))

const SelectSeparator = forwardRef<
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
          label?: string
          value: string
        }
    )[]
  }

const SelectBase = forwardRef<ElementRef<typeof SelectPrimitive.Value>, SelectProps>(
  (props, ref) => {
    const { options, error, placeholder, ...rest } = props

    return (
      <SelectPrimitive.Root {...rest}>
        <SelectTrigger error={error}>
          <SelectPrimitive.Value ref={ref} />
        </SelectTrigger>

        <SelectContent>
          {placeholder && <SelectItem value="">{placeholder}</SelectItem>}

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
  Root: SelectPrimitive.Root,
  Group: SelectPrimitive.Group,
  Value: SelectPrimitive.Value,
  Icon: SelectPrimitive.Icon,
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

"use client"

import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import { forwardRef } from "react"

import type { VariantProps } from "../../shared"
import { cx } from "../../shared"
import { Card } from "../Card"

import {
  dropdownContentVariants,
  dropdownGroupVariants,
  dropdownLabelVariants,
  dropdownSeparatorVariants,
} from "./Dropdown.variants"

export type DropdownElement = ElementRef<typeof DropdownPrimitive.Root>
export type DropdownProps = ComponentPropsWithoutRef<typeof DropdownPrimitive.Root>

const DropdownContent = forwardRef<
  ElementRef<typeof DropdownPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.Content> &
    VariantProps<typeof dropdownContentVariants>
>(({ className, sideOffset = 5, collisionPadding = 15, limitWidth, ...props }, ref) => (
  <DropdownPrimitive.Portal>
    <Card asChild>
      <DropdownPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        collisionPadding={collisionPadding}
        onCloseAutoFocus={e => e.preventDefault()}
        className={cx(dropdownContentVariants({ limitWidth, className }))}
        {...props}
      />
    </Card>
  </DropdownPrimitive.Portal>
))

const DropdownGroup = forwardRef<
  ElementRef<typeof DropdownPrimitive.Group>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.Group> &
    VariantProps<typeof dropdownGroupVariants>
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.Group
    ref={ref}
    className={cx(dropdownGroupVariants({ className }))}
    {...props}
  />
))

const DropdownItem = forwardRef<
  ElementRef<typeof DropdownPrimitive.Item>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.Item>
>(({ ...props }, ref) => <DropdownPrimitive.Item ref={ref} asChild {...props} />)

export const DropdownLabel = forwardRef<
  ElementRef<typeof DropdownPrimitive.Label>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.Label> &
    VariantProps<typeof dropdownLabelVariants>
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.Label
    ref={ref}
    className={cx(dropdownLabelVariants({ className }))}
    {...props}
  />
))

export const DropdownSeparator = forwardRef<
  ElementRef<typeof DropdownPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.Separator> &
    VariantProps<typeof dropdownSeparatorVariants>
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.Separator
    ref={ref}
    className={cx(dropdownSeparatorVariants({ className }))}
    {...props}
  />
))

export const DropdownSubTrigger = forwardRef<
  ElementRef<typeof DropdownPrimitive.SubTrigger>,
  ComponentPropsWithoutRef<typeof DropdownItem>
>(({ ...props }, ref) => (
  <DropdownPrimitive.SubTrigger ref={ref} asChild>
    <DropdownItem {...props} />
  </DropdownPrimitive.SubTrigger>
))

export const DropdownSubContent = forwardRef<
  ElementRef<typeof DropdownPrimitive.SubContent>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.SubContent> &
    VariantProps<typeof dropdownContentVariants>
>(({ className, sideOffset = 5, alignOffset = -5, collisionPadding = 15, ...props }, ref) => (
  <DropdownPrimitive.Portal>
    <Card asChild>
      <DropdownPrimitive.SubContent
        ref={ref}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        collisionPadding={collisionPadding}
        className={cx(dropdownContentVariants({ className }))}
        {...props}
      />
    </Card>
  </DropdownPrimitive.Portal>
))

export const Dropdown = Object.assign(DropdownPrimitive.Root, {
  Trigger: DropdownPrimitive.Trigger,
  Portal: DropdownPrimitive.Portal,
  Sub: DropdownPrimitive.Sub,
  RadioGroup: DropdownPrimitive.RadioGroup,
  Content: DropdownContent,
  Group: DropdownGroup,
  SubTrigger: DropdownSubTrigger,
  SubContent: DropdownSubContent,
  Item: DropdownItem,
  Label: DropdownLabel,
  Separator: DropdownSeparator,
})

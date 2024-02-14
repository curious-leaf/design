import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import { forwardRef } from "react"

import type { VariantProps } from "../../shared"
import { cx } from "../../shared"
import { Card } from "../Card"

import { dropdownVariants } from "./Dropdown.variants"

export type DropdownElement = ElementRef<typeof DropdownPrimitive.Root>
export type DropdownProps = ComponentPropsWithoutRef<typeof DropdownPrimitive.Root>

const DropdownGroup = forwardRef<
  ElementRef<typeof DropdownPrimitive.Group>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.Group>
>(({ className, children, ...props }, ref) => (
  <DropdownPrimitive.Group
    ref={ref}
    className={cx("group -mx-4 flex scroll-p-1 flex-col gap-0.5 p-1", className)}
    {...props}
  >
    {children}
  </DropdownPrimitive.Group>
))

const DropdownContent = forwardRef<
  ElementRef<typeof DropdownPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.Content> & VariantProps<typeof dropdownVariants>
>(({ className, sideOffset = 5, collisionPadding = 15, ...props }, ref) => (
  <DropdownPrimitive.Portal>
    <Card asChild>
      <DropdownPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        collisionPadding={collisionPadding}
        onCloseAutoFocus={(e) => e.preventDefault()}
        className={cx(dropdownVariants({ className }))}
        {...props}
      />
    </Card>
  </DropdownPrimitive.Portal>
))

const DropdownItem = forwardRef<
  ElementRef<typeof DropdownPrimitive.Item>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.Item>
>(({ ...props }, ref) => <DropdownPrimitive.Item ref={ref} asChild {...props} />)

export const DropdownLabel = forwardRef<
  ElementRef<typeof DropdownPrimitive.Label>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.Label>
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.Label ref={ref} className={cx("py-3", className)} {...props} />
))

export const DropdownSeparator = forwardRef<
  ElementRef<typeof DropdownPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.Separator
    ref={ref}
    className={cx("-mx-4 my-3 h-px bg-gray-200", className)}
    {...props}
  />
))

export const DropdownSubTrigger = forwardRef<
  ElementRef<typeof DropdownPrimitive.SubTrigger>,
  ComponentPropsWithoutRef<typeof DropdownItem>
>(({ className, ...props }, ref) => (
  <DropdownPrimitive.SubTrigger ref={ref} asChild>
    <DropdownItem className={className} {...props} />
  </DropdownPrimitive.SubTrigger>
))

export const DropdownSubContent = forwardRef<
  ElementRef<typeof DropdownPrimitive.SubContent>,
  ComponentPropsWithoutRef<typeof DropdownPrimitive.SubContent> &
    VariantProps<typeof dropdownVariants>
>(({ className, sideOffset = 5, alignOffset = -5, collisionPadding = 15, ...props }, ref) => (
  <DropdownPrimitive.Portal>
    <Card asChild>
      <DropdownPrimitive.SubContent
        ref={ref}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        collisionPadding={collisionPadding}
        className={cx(dropdownVariants({ className }))}
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
  Group: DropdownGroup,
  SubTrigger: DropdownSubTrigger,
  SubContent: DropdownSubContent,
  Content: DropdownContent,
  Item: DropdownItem,
  Label: DropdownLabel,
  Separator: DropdownSeparator,
})

"use client"

import * as PopoverPrimitive from "@radix-ui/react-popover"
import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from "react"
import { forwardRef } from "react"

import { IconClose } from "../../icons/IconClose"
import type { VariantProps } from "../../shared"
import { cx } from "../../shared"

import { popoverArrowVariants, popoverCloseVariants, popoverVariants } from "./Popover.variants"

export type PopoverElement = ElementRef<typeof PopoverPrimitive.Trigger>
export type PopoverProps = ComponentPropsWithoutRef<typeof PopoverContent> & {
  popover: ReactNode
}

export const PopoverRoot = PopoverPrimitive.Root
export const PopoverTrigger = PopoverPrimitive.Trigger
export const PopoverPortal = PopoverPrimitive.Portal
export const PopoverAnchor = PopoverPrimitive.Anchor

export const PopoverContent = forwardRef<
  ElementRef<typeof PopoverPrimitive.Content>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & VariantProps<typeof popoverVariants>
>(({ children, className, ...props }, ref) => (
  <PopoverPrimitive.Content ref={ref} className={cx(popoverVariants({ className }))} {...props}>
    {children}
    <PopoverArrow />
  </PopoverPrimitive.Content>
))

export const PopoverArrow = forwardRef<
  ElementRef<typeof PopoverPrimitive.Arrow>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Arrow> &
    VariantProps<typeof popoverArrowVariants>
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Arrow
    ref={ref}
    className={cx(popoverArrowVariants({ className }))}
    {...props}
  />
))

export const PopoverClose = forwardRef<
  ElementRef<typeof PopoverPrimitive.Close>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Close> &
    VariantProps<typeof popoverCloseVariants>
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Close ref={ref} className={cx(popoverCloseVariants({ className }))} {...props}>
    <IconClose />
  </PopoverPrimitive.Close>
))

export const PopoverBase = forwardRef<PopoverElement, PopoverProps>((props, ref) => {
  const { children, popover, ...rest } = props

  if (!popover) {
    return children
  }

  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger ref={ref} asChild>
        {children}
      </PopoverPrimitive.Trigger>

      <PopoverPrimitive.Portal>
        <PopoverContent {...rest}>{popover}</PopoverContent>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
})

export const Popover = Object.assign(PopoverBase, {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Portal: PopoverPortal,
  Anchor: PopoverAnchor,
  Content: PopoverContent,
  Arrow: PopoverArrow,
  Close: PopoverClose,
})

Popover.defaultProps = {
  align: "center",
  side: "bottom",
  collisionPadding: 5,
  sideOffset: 4,
}

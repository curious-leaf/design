import * as PopoverPrimitive from "@radix-ui/react-popover"
import { IconX } from "@tabler/icons-react"
import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from "react"
import { forwardRef } from "react"

import type { VariantProps } from "../../shared"
import { cx } from "../../shared"
import { tooltipArrowVariants, tooltipVariants } from "../Tooltip/Tooltip.variants"

import { popoverCloseVariants } from "./Popover.variants"

export type PopoverElement = ElementRef<typeof PopoverPrimitive.Trigger>
export type PopoverProps = ComponentPropsWithoutRef<typeof PopoverContent> & {
  popover: ReactNode
}

const PopoverContent = forwardRef<
  ElementRef<typeof PopoverPrimitive.Content>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & VariantProps<typeof tooltipVariants>
>(({ children, className, align, ...props }, ref) => (
  <PopoverPrimitive.Content
    ref={ref}
    align={align}
    className={cx(tooltipVariants({ align, className }))}
    {...props}
  >
    {children}
    <PopoverArrow />
  </PopoverPrimitive.Content>
))

const PopoverArrow = forwardRef<
  ElementRef<typeof PopoverPrimitive.Arrow>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Arrow> &
    VariantProps<typeof tooltipArrowVariants>
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Arrow
    ref={ref}
    className={cx(tooltipArrowVariants({ className }))}
    {...props}
  />
))

const PopoverClose = forwardRef<
  ElementRef<typeof PopoverPrimitive.Close>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Close> &
    VariantProps<typeof popoverCloseVariants>
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Close ref={ref} className={cx(popoverCloseVariants({ className }))} {...props}>
    <IconX />
  </PopoverPrimitive.Close>
))

const PopoverBase = forwardRef<PopoverElement, PopoverProps>((props, ref) => {
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
  Root: PopoverPrimitive.Root,
  Trigger: PopoverPrimitive.Trigger,
  Portal: PopoverPrimitive.Portal,
  Anchor: PopoverPrimitive.Anchor,
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

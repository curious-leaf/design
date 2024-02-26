"use client"

import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from "react"
import { forwardRef } from "react"

import type { VariantProps } from "../../shared"
import { cx } from "../../shared"

import { tooltipArrowVariants, tooltipVariants } from "./Tooltip.variants"

export type TooltipElement = ElementRef<typeof TooltipPrimitive.Trigger>
export type TooltipProps = ComponentPropsWithoutRef<typeof TooltipPrimitive.Root> &
  ComponentPropsWithoutRef<typeof TooltipContent> & {
    tooltip: ReactNode
  }

export const TooltipProvider = TooltipPrimitive.Provider
export const TooltipRoot = TooltipPrimitive.Root
export const TooltipTrigger = TooltipPrimitive.Trigger
export const TooltipPortal = TooltipPrimitive.Portal

export const TooltipContent = forwardRef<
  ElementRef<typeof TooltipPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & VariantProps<typeof tooltipVariants>
>(({ children, className, align, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    align={align}
    className={cx(tooltipVariants({ align, className }))}
    {...props}
  >
    {children}
    <TooltipArrow />
  </TooltipPrimitive.Content>
))

export const TooltipArrow = forwardRef<
  ElementRef<typeof TooltipPrimitive.Arrow>,
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow> &
    VariantProps<typeof tooltipArrowVariants>
>(({ className, ...props }, ref) => (
  <TooltipPrimitive.Arrow
    ref={ref}
    className={cx(tooltipArrowVariants({ className }))}
    {...props}
  />
))

export const TooltipBase = forwardRef<TooltipElement, TooltipProps>((props, ref) => {
  const { children, className, delayDuration, tooltip, ...rest } = props

  if (!tooltip) {
    return children
  }

  return (
    <TooltipPrimitive.Provider disableHoverableContent>
      <TooltipPrimitive.Root delayDuration={delayDuration}>
        <TooltipPrimitive.Trigger ref={ref} className={className} asChild>
          {children}
        </TooltipPrimitive.Trigger>

        <TooltipPrimitive.Portal>
          <TooltipContent {...rest}>
            <p>{tooltip}</p>
          </TooltipContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
})

export const Tooltip = Object.assign(TooltipBase, {
  Provider: TooltipProvider,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Portal: TooltipPortal,
  Content: TooltipContent,
  Arrow: TooltipArrow,
})

Tooltip.defaultProps = {
  align: "center",
  delayDuration: 0,
  collisionPadding: 5,
  sideOffset: 4,
}

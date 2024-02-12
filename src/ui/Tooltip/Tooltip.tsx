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

const TooltipContent = forwardRef<
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

const TooltipArrow = forwardRef<
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

const TooltipBase = forwardRef<TooltipElement, TooltipProps>((props, ref) => {
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
  Provider: TooltipPrimitive.Provider,
  Root: TooltipPrimitive.Root,
  Trigger: TooltipPrimitive.Trigger,
  Portal: TooltipPrimitive.Portal,
  Content: TooltipContent,
  Arrow: TooltipArrow,
})

Tooltip.defaultProps = {
  align: "center",
  delayDuration: 0,
  collisionPadding: 5,
  sideOffset: 4,
}

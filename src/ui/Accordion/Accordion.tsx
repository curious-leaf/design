"use client"

import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ElementRef } from "react"

import { cx } from "../../shared"

import { accordionVariants } from "./Accordion.variants"

export const AccordionRoot = AccordionPrimitive.Root
export const AccordionItem = AccordionPrimitive.Item
export const AccordionTrigger = AccordionPrimitive.Trigger

export const AccordionContent = forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cx(accordionVariants({ className }), className)}
    {...props}
  />
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
})

Accordion.defaultProps = {
  collapsible: true,
  type: "single",
}

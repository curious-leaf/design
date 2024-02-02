import * as TabsPrimitive from "@radix-ui/react-tabs"
import type { ElementRef, ComponentPropsWithoutRef } from "react"
import { forwardRef } from "react"

import type { VariantProps } from "../../shared"
import { cx } from "../../shared"

import { tabsContentVariants, tabsListVariants, tabsTriggerVariants } from "./Tabs.variants"

export type TabsElement = ElementRef<typeof TabsPrimitive.Root>
export type TabsProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Root>

const TabsList = forwardRef<
  ElementRef<typeof TabsPrimitive.List>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.List> & VariantProps<typeof tabsListVariants>
>(({ className, ...props }, ref) => {
  return <TabsPrimitive.List ref={ref} className={cx(tabsListVariants({ className }))} {...props} />
})
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = forwardRef<
  ElementRef<typeof TabsPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & VariantProps<typeof tabsTriggerVariants>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger ref={ref} className={cx(tabsTriggerVariants({ className }))} {...props} />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = forwardRef<
  ElementRef<typeof TabsPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & VariantProps<typeof tabsContentVariants>
>(({ className, tabIndex = -1, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cx(tabsContentVariants({ className }))}
    tabIndex={tabIndex}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export const Tabs = Object.assign(TabsPrimitive.Root, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
})

Tabs.defaultProps = {
  orientation: "horizontal",
  activationMode: "automatic",
  asChild: false,
}

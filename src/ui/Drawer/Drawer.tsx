import * as DialogPrimitive from "@radix-ui/react-dialog"
import { IconX } from "@tabler/icons-react"
import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ElementRef } from "react"

import type { VariantProps } from "../../shared"
import { cx } from "../../shared"
import { Backdrop } from "../Backdrop"
import { Button } from "../Button"
import { Card } from "../Card"

import { drawerVariants } from "./Drawer.variants"

export type DrawerElement = ElementRef<typeof DialogPrimitive.Root>
export type DrawerProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Root>

const DrawerContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & VariantProps<typeof drawerVariants>
>(({ className, tabIndex = -1, size, direction, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Content
      ref={ref}
      tabIndex={tabIndex}
      className={cx(drawerVariants({ size, direction, className }))}
      {...props}
    />

    <DialogPrimitive.Overlay asChild>
      <Backdrop />
    </DialogPrimitive.Overlay>
  </DialogPrimitive.Portal>
))

const DrawerContentCard = forwardRef<
  ElementRef<typeof DrawerContent>,
  ComponentPropsWithoutRef<typeof DrawerContent>
>(({ ...props }, ref) => (
  <Card className="rounded-none" asChild>
    <DrawerContent ref={ref} {...props} />
  </Card>
))

const DrawerClose = forwardRef<
  ElementRef<typeof DialogPrimitive.Close>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Close ref={ref} className={cx("-my-1", className)} {...props}>
    <IconX />
  </DialogPrimitive.Close>
))

const DrawerCancel = forwardRef<
  ElementRef<typeof DialogPrimitive.Close>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ children = "Cancel", ...props }, ref) => (
  <DialogPrimitive.Close ref={ref} asChild {...props}>
    <Button theme="secondary" variant="outline" size="lg">
      {children}
    </Button>
  </DialogPrimitive.Close>
))

DrawerContent.displayName = DialogPrimitive.Content.displayName
DrawerContentCard.displayName = "DrawerContentCard"
DrawerClose.displayName = DialogPrimitive.Close.displayName
DrawerCancel.displayName = DialogPrimitive.Close.displayName

export const Drawer = Object.assign(DialogPrimitive.Root, {
  Trigger: DialogPrimitive.Trigger,
  Content: DrawerContent,
  ContentCard: DrawerContentCard,
  Panel: Card.Panel,
  Footer: Card.Footer,
  Close: DrawerClose,
  Cancel: DrawerCancel,
})

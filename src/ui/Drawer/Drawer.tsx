"use client"

import * as DrawerPrimitive from "@radix-ui/react-dialog"
import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ElementRef } from "react"

import { IconClose } from "../../icons/IconClose"
import type { VariantProps } from "../../shared"
import { cx } from "../../shared"
import { Backdrop } from "../Backdrop"
import { Button } from "../Button"
import { Card } from "../Card"

import { drawerVariants } from "./Drawer.variants"

export type DrawerElement = ElementRef<typeof DrawerPrimitive.Root>
export type DrawerProps = ComponentPropsWithoutRef<typeof DrawerPrimitive.Root>

export const DrawerRoot = DrawerPrimitive.Root
export const DrawerTrigger = DrawerPrimitive.Trigger

export const DrawerContent = forwardRef<
  ElementRef<typeof DrawerPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> & VariantProps<typeof drawerVariants>
>(({ className, size, direction, ...props }, ref) => (
  <DrawerPrimitive.Portal>
    <DrawerPrimitive.Overlay asChild>
      <Backdrop />
    </DrawerPrimitive.Overlay>

    <DrawerPrimitive.Content
      ref={ref}
      onCloseAutoFocus={e => e.preventDefault()}
      className={cx(drawerVariants({ size, direction, className }))}
      {...props}
    />
  </DrawerPrimitive.Portal>
))

export const DrawerContentCard = forwardRef<
  ElementRef<typeof DrawerContent>,
  ComponentPropsWithoutRef<typeof DrawerContent>
>(({ ...props }, ref) => (
  <Card className="rounded-none" asChild>
    <DrawerContent ref={ref} {...props} />
  </Card>
))

export const DrawerPanel = forwardRef<
  ElementRef<typeof Card.Panel>,
  ComponentPropsWithoutRef<typeof Card.Panel>
>(({ ...props }, ref) => <Card.Panel ref={ref} {...props} />)

export const DrawerFooter = forwardRef<
  ElementRef<typeof Card.Row>,
  ComponentPropsWithoutRef<typeof Card.Row>
>(({ direction = "rowReverse", ...props }, ref) => (
  <Card.Row ref={ref} direction={direction} {...props} />
))

export const DrawerClose = forwardRef<
  ElementRef<typeof DrawerPrimitive.Close>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Close>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Close ref={ref} className={cx("-my-1", className)} {...props}>
    <IconClose />
  </DrawerPrimitive.Close>
))

export const DrawerCancel = forwardRef<
  ElementRef<typeof DrawerPrimitive.Close>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Close>
>(({ children = "Cancel", ...props }, ref) => (
  <DrawerPrimitive.Close ref={ref} asChild {...props}>
    <Button theme="secondary" variant="outline" size="lg">
      {children}
    </Button>
  </DrawerPrimitive.Close>
))

export const Drawer = Object.assign(DrawerRoot, {
  Trigger: DrawerTrigger,
  Content: DrawerContent,
  ContentCard: DrawerContentCard,
  Panel: DrawerPanel,
  Footer: DrawerFooter,
  Close: DrawerClose,
  Cancel: DrawerCancel,
})

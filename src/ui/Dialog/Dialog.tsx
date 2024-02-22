"use client"

import * as DialogPrimitive from "@radix-ui/react-alert-dialog"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import { forwardRef } from "react"

import { IconClose } from "../../icons/IconClose"
import type { VariantProps } from "../../shared"
import { cx } from "../../shared"
import { Backdrop } from "../Backdrop"
import { Button } from "../Button"
import { Card } from "../Card"

import { dialogVariants } from "./Dialog.variants"

export type DialogElement = ElementRef<typeof DialogPrimitive.Root>
export type DialogProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Root>

const DialogContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & VariantProps<typeof dialogVariants>
>(({ className, size, fixed, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay asChild>
      <Backdrop />
    </DialogPrimitive.Overlay>

    <Card asChild>
      <DialogPrimitive.Content
        ref={ref}
        onCloseAutoFocus={e => e.preventDefault()}
        className={cx(dialogVariants({ size, fixed, className }))}
        {...props}
      />
    </Card>
  </DialogPrimitive.Portal>
))

const DialogPanel = forwardRef<
  ElementRef<typeof Card.Panel>,
  ComponentPropsWithoutRef<typeof Card.Panel>
>(({ ...props }, ref) => <Card.Panel ref={ref} {...props} />)

const DialogFooter = forwardRef<
  ElementRef<typeof Card.Row>,
  ComponentPropsWithoutRef<typeof Card.Row>
>(({ direction = "rowReverse", ...props }, ref) => (
  <Card.Row ref={ref} direction={direction} {...props} />
))

const DialogClose = forwardRef<
  ElementRef<typeof DialogPrimitive.Cancel>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Cancel ref={ref} className={cx("-my-1", className)} {...props}>
    <IconClose />
  </DialogPrimitive.Cancel>
))

const DialogCancel = forwardRef<
  ElementRef<typeof DialogPrimitive.Cancel>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Cancel>
>(({ children = "Cancel", ...props }, ref) => (
  <DialogPrimitive.Cancel ref={ref} asChild {...props}>
    <Button theme="secondary" variant="outline" size="lg">
      {children}
    </Button>
  </DialogPrimitive.Cancel>
))

export const Dialog = Object.assign(DialogPrimitive.Root, {
  Trigger: DialogPrimitive.Trigger,
  Content: DialogContent,
  Panel: DialogPanel,
  Footer: DialogFooter,
  Close: DialogClose,
  Cancel: DialogCancel,
})

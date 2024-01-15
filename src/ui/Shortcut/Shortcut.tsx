import { Slot } from "@radix-ui/react-slot"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import { forwardRef } from "react"

import { type VariantProps } from "~/shared/cva"
import { Subheading } from "~/typography/Subheading"

import { shortcutVariants } from "./Shortcut.variants"

export type ShortcutElement = ElementRef<typeof Subheading>

export type ShortcutProps = ComponentPropsWithoutRef<typeof Subheading> &
  VariantProps<typeof shortcutVariants>

export const Shortcut = forwardRef<ShortcutElement, ShortcutProps>((props, ref) => {
  const { className, variant, size = "sm", ...rest } = props

  return (
    <Slot className={shortcutVariants({ variant, className })} {...rest}>
      <Subheading ref={ref} size={size} {...rest} />
    </Slot>
  )
})

Shortcut.defaultProps = {
  variant: "outline",
  size: "sm",
  asChild: false,
}

Shortcut.displayName = "Shortcut"

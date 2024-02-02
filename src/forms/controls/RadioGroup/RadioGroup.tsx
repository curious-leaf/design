import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { IconCircleFilled } from "@tabler/icons-react"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import { forwardRef } from "react"

import type { VariantProps } from "../../../shared"
import { cx } from "../../../shared"

import { radioGroupItemVariants } from "./RadioGroup.variants"

export type RadioGroupElement = ElementRef<typeof RadioGroupPrimitive.Root>
export type RadioGroupProps = ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>

export const RadioGroupItem = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Item>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> &
    VariantProps<typeof radioGroupItemVariants>
>(({ children, className, error, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cx(radioGroupItemVariants({ error, className }))}
      {...props}
    >
      <RadioGroupPrimitive.Indicator asChild>
        <IconCircleFilled className="size-2 rounded-full shadow" />
      </RadioGroupPrimitive.Indicator>

      {children}
    </RadioGroupPrimitive.Item>
  )
})

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export const RadioGroup = Object.assign(RadioGroupPrimitive.Root, {
  Item: RadioGroupItem,
})

RadioGroup.defaultProps = {
  disabled: false,
}

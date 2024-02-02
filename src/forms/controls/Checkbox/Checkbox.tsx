import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { IconCheck } from "@tabler/icons-react"
import type { ComponentPropsWithoutRef, ElementRef } from "react"
import { forwardRef } from "react"

import type { VariantProps } from "../../../shared"
import { cx } from "../../../shared"

import { checkboxVariants } from "./Checkbox.variants"

export type CheckboxElement = ElementRef<typeof CheckboxPrimitive.Root>
export type CheckboxProps = ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> &
  VariantProps<typeof checkboxVariants>

export const Checkbox = forwardRef<CheckboxElement, CheckboxProps>((props, ref) => {
  const { className, error, ...rest } = props

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cx(checkboxVariants({ error, className }))}
      {...rest}
    >
      <CheckboxPrimitive.Indicator asChild>
        <IconCheck className="size-3.5 !stroke-2" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})

Checkbox.displayName = CheckboxPrimitive.Root.displayName

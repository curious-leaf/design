"use client"

import { forwardRef } from "react"

import { type VariantProps, cx } from "../../shared"
import type { ButtonProps } from "../Button/Button"
import { Button } from "../Button/Button"
import type { buttonVariants } from "../Button/Button.variants"

import { buttonGroupVariants } from "./ButtonGroup.variants"

export type ButtonGroupElement = HTMLDivElement

export type ButtonGroupProps = ButtonProps &
  VariantProps<typeof buttonGroupVariants> &
  VariantProps<typeof buttonVariants> & {
    /**
     * The buttons to display in the group.
     */
    buttons?: ButtonProps[]
  }

export const ButtonGroup = forwardRef<ButtonGroupElement, ButtonGroupProps>((props, ref) => {
  const { children, className, buttons, ...rest } = props

  return (
    <div ref={ref} className={cx(buttonGroupVariants({ className }))}>
      {buttons?.map((button, i) => <Button key={`button-${i}`} {...button} {...rest} />)}
      {children}
    </div>
  )
})

ButtonGroup.defaultProps = {
  theme: "secondary",
  variant: "outline",
}

ButtonGroup.displayName = "ButtonGroup"

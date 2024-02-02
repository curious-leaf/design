import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ElementRef } from "react"

import { type VariantProps, cx } from "../../shared"
import type { CardElement, CardProps } from "../Card"
import { Card } from "../Card"

import { modalVariants } from "./Modal.variants"

export type ModalElement = CardElement

export type ModalProps = CardProps & VariantProps<typeof modalVariants>

const ModalRoot = forwardRef<
  ElementRef<typeof Card>,
  ComponentPropsWithoutRef<typeof Card> & VariantProps<typeof modalVariants>
>((props, ref) => {
  const { className, width, fixed, ...rest } = props

  return <Card ref={ref} className={cx(modalVariants({ width, fixed, className }))} {...rest} />
})

ModalRoot.displayName = "Modal"

export const Modal = Object.assign(ModalRoot, {
  Panel: Card.Panel,
  Footer: Card.Footer,
})

Modal.defaultProps = {
  ...Card.defaultProps,
  width: "sm",
  fixed: true,
}

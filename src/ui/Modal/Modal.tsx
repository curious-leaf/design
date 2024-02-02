import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ElementRef } from "react"

import type { Header } from "../../layout/Header"
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
  const { className, size, fixed, ...rest } = props

  return <Card ref={ref} className={cx(modalVariants({ size, fixed, className }))} {...rest} />
})

const ModalHeader = forwardRef<ElementRef<typeof Header>, ComponentPropsWithoutRef<typeof Header>>(
  (props, ref) => {
    return <Card.Header ref={ref} {...props} />
  },
)

const ModalFooter = forwardRef<
  ElementRef<typeof Card.Footer>,
  ComponentPropsWithoutRef<typeof Card.Footer>
>((props, ref) => {
  return <Card.Footer ref={ref} {...props} />
})

const ModalBase = forwardRef<ModalElement, ModalProps>((props, ref) => {
  return <ModalRoot ref={ref} {...props} />
})

ModalBase.displayName = "Modal"
ModalRoot.displayName = "ModalRoot"
ModalHeader.displayName = "ModalHeader"
ModalFooter.displayName = "ModalFooter"

export const Modal = Object.assign(ModalBase, {
  Header: ModalHeader,
  Footer: ModalFooter,
  Root: ModalRoot,
})

Modal.defaultProps = {
  ...Card.defaultProps,
  size: "sm",
  fixed: true,
}

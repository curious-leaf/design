import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ElementRef } from "react"

import type { Header } from "~/layout/Header"
import { type VariantProps, cx } from "~/shared/cva"
import type { BoxElement, BoxProps } from "~/ui/Box"
import { Box } from "~/ui/Box"

import { modalVariants } from "./Modal.variants"

export type ModalElement = BoxElement

export type ModalProps = BoxProps & VariantProps<typeof modalVariants>

const ModalRoot = forwardRef<
  ElementRef<typeof Box.Root>,
  ComponentPropsWithoutRef<typeof Box.Root> & VariantProps<typeof modalVariants>
>((props, ref) => {
  const { className, size, fixed, ...rest } = props

  return <Box.Root ref={ref} className={cx(modalVariants({ size, fixed, className }))} {...rest} />
})

const ModalHeader = forwardRef<ElementRef<typeof Header>, ComponentPropsWithoutRef<typeof Header>>(
  (props, ref) => {
    return <Box.Header ref={ref} {...props} />
  },
)

const ModalFooter = forwardRef<
  ElementRef<typeof Box.Footer>,
  ComponentPropsWithoutRef<typeof Box.Footer>
>((props, ref) => {
  return <Box.Footer ref={ref} {...props} />
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
  ...Box.defaultProps,
  size: "sm",
  fixed: true,
}

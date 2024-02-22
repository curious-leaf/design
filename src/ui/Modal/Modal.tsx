"use client"

import type { HTMLAttributes } from "react"
import { forwardRef } from "react"

import type { VariantProps } from "../../shared"
import { cx, isReactElement } from "../../shared"

import { Slot } from "@radix-ui/react-slot"
import { modalVariants } from "./Modal.variants"

export type ModalElement = HTMLDivElement
export type ModalProps = HTMLAttributes<ModalElement> &
  VariantProps<typeof modalVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const Modal = forwardRef<ModalElement, ModalProps>((props, ref) => {
  const { className, asChild, size, fixed, ...rest } = props

  const useAsChild = asChild && isReactElement(rest.children)
  const Component = useAsChild ? Slot : "div"

  return <Component ref={ref} className={cx(modalVariants({ size, fixed, className }))} {...rest} />
})

Modal.defaultProps = {
  size: "md",
  fixed: true,
  asChild: false,
}

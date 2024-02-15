"use client"

import type { ReactNode } from "react"
import { cloneElement, forwardRef } from "react"

import { isReactElement } from "../../shared"

export type SlottableProps = {
  asChild?: boolean
  child?: ReactNode
  children: (child: ReactNode) => ReactNode
}

export const Slottable = forwardRef<HTMLElement, SlottableProps>((props, ref) => {
  const { asChild, child, children, ...rest } = props

  if (!asChild) {
    return children(child)
  }

  if (!isReactElement(child)) {
    return null
  }

  return cloneElement(child, { ref, ...rest }, children(child.props?.children))
})

import type { HTMLAttributes, ReactNode } from "react"
import { cloneElement, forwardRef, isValidElement } from "react"

export type SlottableProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
  asChild?: boolean
  child?: ReactNode
  children: (child: ReactNode) => ReactNode
}

export const Slottable = forwardRef<HTMLElement, SlottableProps>((props, ref) => {
  const { asChild, child, children, ...rest } = props

  if (!asChild) {
    return children(child)
  }

  if (!isValidElement(child)) {
    return null
  }

  // @ts-expect-error Ref is not assignable
  return cloneElement(child, { ref, ...rest }, children(child.props?.children))
})

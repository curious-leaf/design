import { forwardRef } from "react"
import type { HTMLAttributes } from "react"

import { cx, type VariantProps } from "../../shared"

import { containerVariants } from "./Container.variants"

export type ContainerElement = HTMLDivElement

export type ContainerProps = HTMLAttributes<ContainerElement> &
  VariantProps<typeof containerVariants>

export const Container = forwardRef<ContainerElement, ContainerProps>((props, ref) => {
  const { className, ...rest } = props

  return <div ref={ref} className={cx(containerVariants({ className }))} {...rest} />
})

Container.defaultProps = {}

Container.displayName = "Container"

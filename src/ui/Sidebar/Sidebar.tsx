import { forwardRef } from "react"
import type { HTMLAttributes } from "react"

import { cx, type VariantProps } from "~/shared/cva"

import { sidebarSeparatorVariants, sidebarVariants } from "./Sidebar.variants"

export type SidebarElement = HTMLDivElement

export type SidebarProps = HTMLAttributes<SidebarElement> & VariantProps<typeof sidebarVariants>

const SidebarBase = forwardRef<SidebarElement, SidebarProps>((props, ref) => {
  const { className, ...rest } = props

  return <div className={cx(sidebarVariants({ className }))} ref={ref} {...rest} />
})

const SidebarSeparator = forwardRef<HTMLHRElement, HTMLAttributes<HTMLHRElement>>((props, ref) => {
  const { className, ...rest } = props

  return <hr className={cx(sidebarSeparatorVariants({ className }))} ref={ref} {...rest} />
})

export const Sidebar = Object.assign(SidebarBase, {
  Separator: SidebarSeparator,
})

Sidebar.defaultProps = {}

Sidebar.displayName = "Sidebar"

"use client"

import { forwardRef } from "react"
import type { HTMLAttributes } from "react"

import { cx, type VariantProps } from "../../shared"
import type { SubheadingElement, SubheadingProps } from "../../typography/Subheading"
import { Subheading } from "../../typography/Subheading"

import {
  sidebarContentVariants,
  sidebarHeadingVariants,
  sidebarMenuVariants,
  sidebarSeparatorVariants,
  sidebarVariants,
} from "./Sidebar.variants"

export type SidebarElement = HTMLDivElement

export type SidebarProps = HTMLAttributes<SidebarElement> & VariantProps<typeof sidebarVariants>

const SidebarBase = forwardRef<SidebarElement, SidebarProps>((props, ref) => {
  const { className, theme, floating, ...rest } = props

  return <div ref={ref} className={cx(sidebarVariants({ theme, floating, className }))} {...rest} />
})

const SidebarContent = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>((props, ref) => {
  const { className, ...rest } = props

  return <nav ref={ref} className={cx(sidebarContentVariants({ className }))} {...rest} />
})

const SidebarMenu = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { className, ...rest } = props

  return <div ref={ref} className={cx(sidebarMenuVariants({ className }))} {...rest} />
})

const SidebarHeading = forwardRef<SubheadingElement, SubheadingProps>((props, ref) => {
  const { className, size = "sm", ...rest } = props

  return (
    <Subheading
      ref={ref}
      size={size}
      className={cx(sidebarHeadingVariants({ className }))}
      {...rest}
    />
  )
})

const SidebarSeparator = forwardRef<
  HTMLHRElement,
  HTMLAttributes<HTMLHRElement> & VariantProps<typeof sidebarSeparatorVariants>
>((props, ref) => {
  const { className, fullWidth, ...rest } = props

  return (
    <hr ref={ref} className={cx(sidebarSeparatorVariants({ fullWidth, className }))} {...rest} />
  )
})

export const Sidebar = Object.assign(SidebarBase, {
  Content: SidebarContent,
  Menu: SidebarMenu,
  Heading: SidebarHeading,
  Separator: SidebarSeparator,
})

Sidebar.defaultProps = {
  theme: "white",
}

Sidebar.displayName = "Sidebar"

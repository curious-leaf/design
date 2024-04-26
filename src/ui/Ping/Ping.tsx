"use client"

import { type HTMLAttributes, forwardRef } from "react"

import { type VariantProps, cx } from "../../shared"

import { pingDotOutlineVariants, pingDotVariants, pingVariants } from "./Ping.variants"

export type PingElement = HTMLDivElement

export type PingProps = Omit<HTMLAttributes<PingElement>, "size"> &
  VariantProps<typeof pingVariants>

export const Ping = forwardRef<PingElement, PingProps>((props, ref) => {
  const { className, theme, ...rest } = props

  return (
    <div ref={ref} className={cx(pingVariants({ theme, className }))} {...rest}>
      <div className={cx(pingDotOutlineVariants({ className: "animate-ping" }))} />
      <div className={cx(pingDotOutlineVariants({ className: "animate-pulse" }))} />
      <div className={cx(pingDotVariants())} />
    </div>
  )
})

Ping.defaultProps = {
  theme: "gray",
}

Ping.displayName = "Ping"

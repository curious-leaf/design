import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, ElementRef } from "react"

import { Header } from "../../layout/Header"
import { type VariantProps, cx } from "../../shared"
import type { BoxElement, BoxProps } from "../Box"
import { Box } from "../Box"

import { cardPanelVariants, cardVariants } from "./Card.variants"

export type CardElement = BoxElement
export type CardProps = BoxProps & VariantProps<typeof cardVariants>

const CardRoot = forwardRef<CardElement, CardProps>(({ className, ...props }, ref) => {
  return <Box ref={ref} className={cx(cardVariants({ className }))} {...props} />
})

const CardHeader = forwardRef<
  ElementRef<typeof Header>,
  ComponentPropsWithoutRef<typeof Header> & VariantProps<typeof cardPanelVariants>
>(({ className, ...props }, ref) => {
  return (
    <Header
      ref={ref}
      className={cx(cardPanelVariants({ position: "top", className }))}
      {...props}
    />
  )
})

const CardFooter = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div"> & VariantProps<typeof cardPanelVariants>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cx(cardPanelVariants({ position: "bottom", className }))}
      {...props}
    />
  )
})

CardRoot.displayName = "Card"
CardHeader.displayName = "CardHeader"
CardFooter.displayName = "CardFooter"

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Footer: CardFooter,
})

Card.defaultProps = {
  asChild: false,
}

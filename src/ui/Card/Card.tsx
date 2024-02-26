"use client"

import { Slot } from "@radix-ui/react-slot"
import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, HTMLAttributes } from "react"

import { type VariantProps, cx, isReactElement } from "../../shared"

import { sectionVariants } from "../../layout/Section/Section.variants"
import { cardPanelVariants, cardRowVariants, cardVariants } from "./Card.variants"

export type CardElement = HTMLDivElement
export type CardProps = HTMLAttributes<CardElement> &
  VariantProps<typeof cardVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const CardRoot = forwardRef<CardElement, CardProps>((props, ref) => {
  const { className, asChild, ...rest } = props

  const useAsChild = asChild && isReactElement(rest.children)
  const Component = useAsChild ? Slot : "div"

  return <Component ref={ref} className={cx(cardVariants({ className }))} {...rest} />
})

type CardPanelElement = HTMLDivElement
type CardPanelProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof cardPanelVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const CardPanel = forwardRef<CardPanelElement, CardPanelProps>((props, ref) => {
  const { className, asChild, size, theme, sticky, scrollable, ...rest } = props
  const useAsChild = asChild && isReactElement(rest.children)
  const Component = useAsChild ? Slot : "div"

  return (
    <Component
      ref={ref}
      className={cx(cardPanelVariants({ size, theme, sticky, scrollable, className }))}
      {...rest}
    />
  )
})

export const CardSection = forwardRef<
  CardPanelElement,
  CardPanelProps & VariantProps<typeof sectionVariants>
>((props, ref) => {
  const { className, size, ...rest } = props

  return (
    <CardPanel ref={ref} size={size} className={cx(sectionVariants({ className }))} {...rest} />
  )
})

export const CardRow = forwardRef<
  CardPanelElement,
  CardPanelProps & VariantProps<typeof cardRowVariants>
>((props, ref) => {
  const { className, size, gap, direction, theme = "gray", ...rest } = props

  return (
    <CardPanel
      ref={ref}
      theme={theme}
      size={size}
      className={cx(cardRowVariants({ size, gap, direction, className }))}
      {...rest}
    />
  )
})

CardRoot.displayName = "Card"
CardPanel.displayName = "CardPanel"
CardSection.displayName = "CardSection"
CardRow.displayName = "CardRow"

export const Card = Object.assign(CardRoot, {
  Panel: CardPanel,
  Section: CardSection,
  Row: CardRow,
})

Card.defaultProps = {
  asChild: false,
}

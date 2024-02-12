import { Slot } from "@radix-ui/react-slot"
import { forwardRef } from "react"
import type { ComponentPropsWithoutRef, HTMLAttributes } from "react"

import { type VariantProps, cx, isReactElement } from "../../shared"

import {
  cardFooterVariants,
  cardSectionVariants,
  cardPanelVariants,
  cardVariants,
} from "./Card.variants"

export type CardElement = HTMLDivElement
export type CardProps = HTMLAttributes<CardElement> &
  VariantProps<typeof cardVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

const CardRoot = forwardRef<CardElement, CardProps>((props, ref) => {
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

const CardPanel = forwardRef<CardPanelElement, CardPanelProps>((props, ref) => {
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

const CardSection = forwardRef<
  CardPanelElement,
  CardPanelProps & VariantProps<typeof cardSectionVariants>
>((props, ref) => {
  const { className, size, ...rest } = props

  return (
    <CardPanel ref={ref} size={size} className={cx(cardSectionVariants({ className }))} {...rest} />
  )
})

const CardFooter = forwardRef<
  CardPanelElement,
  CardPanelProps & VariantProps<typeof cardFooterVariants>
>((props, ref) => {
  const { className, size, theme = "gray", ...rest } = props

  return (
    <CardPanel
      ref={ref}
      theme={theme}
      size={size}
      className={cx(cardFooterVariants({ size, className }))}
      {...rest}
    />
  )
})

CardRoot.displayName = "Card"
CardPanel.displayName = "CardPanel"
CardSection.displayName = "CardSection"
CardFooter.displayName = "CardFooter"

export const Card = Object.assign(CardRoot, {
  Panel: CardPanel,
  Section: CardSection,
  Footer: CardFooter,
})

Card.defaultProps = {
  asChild: false,
}

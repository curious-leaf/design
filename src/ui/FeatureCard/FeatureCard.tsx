"use client"

import { Slot } from "@radix-ui/react-slot"
import { forwardRef } from "react"
import type { ButtonHTMLAttributes, HTMLAttributes } from "react"

import { IconClose } from "../../icons/IconClose"
import { type VariantProps, cx, isReactElement } from "../../shared"
import { Slottable } from "../../utils/Slottable"

import { featureCardCloserVariants, featureCardVariants } from "./FeatureCard.variants"

export type FeatureCardElement = HTMLDivElement

export type FeatureCardRootProps = HTMLAttributes<FeatureCardElement> &
  VariantProps<typeof featureCardVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export type FeatureCardProps = FeatureCardRootProps & {
  /**
   * If set to `true`, it'll render a closer button.
   */
  isCloseable?: boolean
}

type FeatureCardCloserProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof featureCardCloserVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

export const FeatureCardRoot = forwardRef<FeatureCardElement, FeatureCardRootProps>(
  (props, ref) => {
    const { className, asChild, theme, variant, ...rest } = props

    const useAsChild = asChild && isReactElement(rest.children)
    const Component = useAsChild ? Slot : "div"

    return (
      <Component
        className={cx(featureCardVariants({ theme, variant, className }))}
        ref={ref}
        {...rest}
      />
    )
  },
)

export const FeatureCardCloser = forwardRef<HTMLButtonElement, FeatureCardCloserProps>(
  (props, ref) => {
    const { children, className, asChild, ...rest } = props

    const useAsChild = asChild && isReactElement(children)
    const Component = useAsChild ? Slot : "button"

    return (
      <Component ref={ref} className={cx(featureCardCloserVariants({ className }))} {...rest}>
        {useAsChild ? children : <IconClose />}
      </Component>
    )
  },
)

export const FeatureCardBase = forwardRef<FeatureCardElement, FeatureCardProps>((props, ref) => {
  const { children, asChild, isCloseable, ...rest } = props

  return (
    <FeatureCardRoot ref={ref} asChild={asChild} {...rest}>
      <Slottable child={children} asChild={asChild}>
        {child => (
          <>
            {child}
            {isCloseable && <FeatureCardCloser />}
          </>
        )}
      </Slottable>
    </FeatureCardRoot>
  )
})

export const FeatureCard = Object.assign(FeatureCardBase, {
  Root: FeatureCardRoot,
  Closer: FeatureCardCloser,
})

FeatureCard.defaultProps = {
  theme: "secondary",
  variant: "soft",
  asChild: false,
  isCloseable: false,
}

FeatureCard.displayName = "FeatureCard"

import { Slot } from "@radix-ui/react-slot"
import { XIcon } from "lucide-react"
import { forwardRef, isValidElement } from "react"
import type { ButtonHTMLAttributes, HTMLAttributes } from "react"

import { useTheme } from "../../providers"
import { cx, type VariantProps } from "../../shared"
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
  closeable?: boolean
}

type FeatureCardCloserProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof featureCardCloserVariants> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean
  }

const FeatureCardRoot = forwardRef<FeatureCardElement, FeatureCardRootProps>((props, ref) => {
  const { className, asChild, theme: propTheme, variant, ...rest } = props

  const globalTheme = useTheme()
  const theme = propTheme || globalTheme

  const useAsChild = asChild && isValidElement(rest.children)
  const Component = useAsChild ? Slot : "div"

  return (
    <Component
      className={cx(featureCardVariants({ theme, variant, className }))}
      ref={ref}
      {...rest}
    />
  )
})

const FeatureCardCloser = forwardRef<HTMLButtonElement, FeatureCardCloserProps>((props, ref) => {
  const { children, className, asChild, ...rest } = props

  const useAsChild = asChild && isValidElement(children)
  const Component = useAsChild ? Slot : "button"

  return (
    <Component ref={ref} className={cx(featureCardCloserVariants({ className }))} {...rest}>
      {useAsChild ? children : <XIcon />}
    </Component>
  )
})

export const FeatureCardBase = forwardRef<FeatureCardElement, FeatureCardProps>((props, ref) => {
  const { children, asChild, closeable, ...rest } = props

  return (
    <FeatureCardRoot ref={ref} asChild={asChild} {...rest}>
      <Slottable child={children} asChild={asChild}>
        {(child) => (
          <>
            {child}
            {closeable && <FeatureCardCloser />}
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
  variant: "soft",
  asChild: false,
  closeable: false,
}

FeatureCard.displayName = "FeatureCard"

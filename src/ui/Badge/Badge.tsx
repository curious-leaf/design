"use client"

import { Slot } from "@radix-ui/react-slot"
import { forwardRef } from "react"
import type { HTMLAttributes, ReactNode } from "react"

import { type VariantProps, cx, isChildrenEmpty, isReactElement } from "../../shared"
import { Affixable } from "../../utils/Affixable"
import { Slottable } from "../../utils/Slottable"

import { badgeAffixVariants, badgeVariants } from "./Badge.variants"

export type BadgeElement = HTMLSpanElement

export type BadgeProps = Omit<HTMLAttributes<BadgeElement>, "size" | "prefix"> &
  Omit<VariantProps<typeof badgeVariants>, "isAffixOnly"> & {
    /**
     * If set to `true`, the button will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean

    /**
     * The slot to be rendered before the label.
     */
    prefix?: ReactNode

    /**
     * The slot to be rendered after the label.
     */
    suffix?: ReactNode
  }

export const Badge = forwardRef<BadgeElement, BadgeProps>((props, ref) => {
  const { children, className, asChild, prefix, suffix, theme, variant, size, shape, ...rest } =
    props

  const useAsChild = asChild && isReactElement(children)
  const Component = useAsChild ? Slot : "span"

  // Determine if the button has affix only.
  const isAffixOnly = isChildrenEmpty(children) && (!prefix || !suffix)

  return (
    <Component
      ref={ref}
      className={cx(badgeVariants({ theme, size, variant, shape, isAffixOnly, className }))}
      {...rest}
    >
      <Slottable child={children} asChild={asChild}>
        {child => (
          <>
            <Affixable variants={badgeAffixVariants}>{prefix}</Affixable>
            {!isChildrenEmpty(child) && <span className="truncate">{child}</span>}
            <Affixable variants={badgeAffixVariants}>{suffix}</Affixable>
          </>
        )}
      </Slottable>
    </Component>
  )
})

Badge.displayName = "Badge"

Badge.defaultProps = {
  theme: "blue",
  variant: "solid",
  size: "md",
  shape: "rounded",
  asChild: false,
}

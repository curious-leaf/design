"use client"

import { Slot } from "@radix-ui/react-slot"
import { forwardRef } from "react"
import type { ButtonHTMLAttributes, ReactNode } from "react"

import { IconSpinner } from "../../icons/IconSpinner"
import { type VariantProps, cx, isChildrenEmpty, isReactElement, toArrayOrWrap } from "../../shared"
import { Affixable } from "../../utils/Affixable"
import { Slottable } from "../../utils/Slottable"

import { menuItemAffixVariants, menuItemVariants } from "./MenuItem.variants"

export type MenuItemElement = HTMLButtonElement

export type MenuItemProps = Omit<ButtonHTMLAttributes<MenuItemElement>, "prefix"> &
  VariantProps<typeof menuItemVariants> & {
    /**
     * If set to `true`, the element will be rendered as a child within the component.
     * This child component must be a valid React component.
     */
    asChild?: boolean

    /**
     * The slot to be rendered before the label.
     */
    prefix?: ReactNode | ReactNode[]

    /**
     * The slot to be rendered after the label.
     */
    suffix?: ReactNode | ReactNode[]

    /**
     * If set to `true`, the element will be rendered in the active state.
     */
    isActive?: boolean

    /**
     * If set to `true`, the element will be rendered in the pending state.
     */
    isPending?: boolean
  }

export const MenuItem = forwardRef<MenuItemElement, MenuItemProps>((props, ref) => {
  const {
    children,
    className,
    asChild,
    prefix: propPrefix,
    suffix: propSuffix,
    isPending,
    isActive,
    theme,
    size,
    linkable,
    ...rest
  } = props

  const useAsChild = asChild && isReactElement(children)
  const Component = useAsChild ? Slot : "button"

  const prefix = toArrayOrWrap(propPrefix)
  const suffix = toArrayOrWrap(propSuffix)

  if (isPending) {
    suffix.push(<IconSpinner className="text-xs" />)
  }

  return (
    <Component
      ref={ref}
      aria-current={isActive ? "page" : undefined}
      className={cx(menuItemVariants({ theme, size, linkable, className }))}
      {...rest}
    >
      <Slottable child={children} asChild={asChild}>
        {child => (
          <>
            {prefix?.map((p, i) => (
              <Affixable key={i} variants={menuItemAffixVariants}>
                {p}
              </Affixable>
            ))}

            {!isChildrenEmpty(child) && <span className="flex-1 truncate">{child}</span>}

            {suffix?.map((s, i) => (
              <Affixable key={i} variants={menuItemAffixVariants}>
                {s}
              </Affixable>
            ))}
          </>
        )}
      </Slottable>
    </Component>
  )
})

MenuItem.defaultProps = {
  disabled: false,
  isActive: false,
  isPending: false,
  theme: "secondary",
  size: "md",
}

MenuItem.displayName = "MenuItem"

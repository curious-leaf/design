import { Slot } from "@radix-ui/react-slot"
import { IconChevronRight } from "@tabler/icons-react"
import { forwardRef, isValidElement } from "react"
import type { ButtonHTMLAttributes, ReactNode } from "react"

import { cx, isChildrenEmpty, toArrayOrWrap, type VariantProps } from "../../shared"
import { Slottable } from "../../utils/Slottable"
import { Loader } from "../Loader"

import { menuItemVariants, menuItemAffixVariants } from "./MenuItem.variants"

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
    active?: boolean

    /**
     * If set to `true`, the element will be rendered in the loading state.
     */
    loading?: boolean
  }

export const MenuItem = forwardRef<MenuItemElement, MenuItemProps>((props, ref) => {
  const {
    children,
    className,
    asChild,
    prefix: propPrefix,
    suffix: propSuffix,
    loading,
    active,
    theme,
    size,
    ...rest
  } = props

  const useAsChild = asChild && isValidElement(children)
  const Component = useAsChild ? Slot : "button"

  const prefix = toArrayOrWrap(propPrefix)
  const suffix = toArrayOrWrap(propSuffix)

  if (loading) {
    suffix.push(<Loader className="text-xs" />)
  }

  if (active && !suffix.length) {
    suffix.push(<IconChevronRight className="text-xs" />)
  }

  return (
    <Component
      ref={ref}
      aria-current={active ? "page" : undefined}
      className={cx(menuItemVariants({ theme, size, className }))}
      {...rest}
    >
      <Slottable child={children} asChild={asChild}>
        {(child) => (
          <>
            {!!prefix.length &&
              prefix.map((p, i) => (
                <Slot key={i} className={cx(menuItemAffixVariants())}>
                  {p}
                </Slot>
              ))}

            {!isChildrenEmpty(child) && <span className="flex-1 truncate">{child}</span>}

            {!!suffix.length &&
              suffix.map((s, i) => (
                <Slot key={i} className={cx(menuItemAffixVariants())}>
                  {s}
                </Slot>
              ))}
          </>
        )}
      </Slottable>
    </Component>
  )
})

MenuItem.defaultProps = {
  disabled: false,
  active: false,
  loading: false,
  theme: "secondary",
  size: "md",
}

MenuItem.displayName = "MenuItem"

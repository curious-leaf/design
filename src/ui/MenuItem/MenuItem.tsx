import { Slot } from "@radix-ui/react-slot"
import { ChevronRightIcon } from "lucide-react"
import { forwardRef, isValidElement } from "react"
import type { ReactElement, ButtonHTMLAttributes } from "react"

import { useTheme } from "../../providers"
import { cx, isChildrenEmpty, type VariantProps } from "../../shared"
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
    prefix?: ReactElement<HTMLElement>

    /**
     * The slot to be rendered after the label.
     */
    suffix?: ReactElement<HTMLElement>

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
    prefix,
    suffix: propSuffix,
    loading,
    theme: propTheme,
    active,
    ...rest
  } = props

  const globalTheme = useTheme()
  const theme = propTheme || globalTheme

  const useAsChild = asChild && isValidElement(children)
  const Component = useAsChild ? Slot : "button"

  const suffix = loading ? (
    <Loader className="text-xs" />
  ) : active ? (
    <ChevronRightIcon className="text-xs" />
  ) : (
    propSuffix
  )

  const renderAffix = ({ children, theme }: Pick<MenuItemProps, "children" | "theme">) => {
    const AffixComponent = isValidElement(children) ? Slot : "span"

    return (
      <AffixComponent className={cx(menuItemAffixVariants({ theme }))}>{children}</AffixComponent>
    )
  }

  return (
    <Component
      ref={ref}
      aria-current={active ? "page" : undefined}
      className={cx(menuItemVariants({ theme, className }))}
      {...rest}
    >
      <Slottable child={children} asChild={asChild}>
        {(child) => (
          <>
            {prefix && renderAffix({ children: prefix, theme })}
            {!isChildrenEmpty(child) && <span className="flex-1 truncate">{child}</span>}
            {suffix && renderAffix({ children: suffix })}
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
}

MenuItem.displayName = "MenuItem"
